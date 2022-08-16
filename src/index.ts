import type { ViteDevServer, ServerOptions } from 'vite'

type props = ServerOptions & {
  onReady?: (port: number)=> void,
  onClose?: ()=>void,
  onError?: (err: Error) => void
}

function PluginServer(props: props){
  const { onReady, onClose, onError, ...serverOptions } = props;
  return {
    name: 'configure-server',
    configureServer(server: ViteDevServer) {  
      for (const key in serverOptions) {
        if (Object.prototype.hasOwnProperty.call(serverOptions, key)) {
          server.config.server[key] = serverOptions[key];
        }      
      }

      server.httpServer?.once('listening', () => {
        onReady?.(server.config.server.port!);
      });
      if (onError) {
        server.httpServer?.once('error', onError);
      }
      if (onClose) {
        server.httpServer?.once('close', onClose);
      }
    },
  }
}


export default PluginServer
