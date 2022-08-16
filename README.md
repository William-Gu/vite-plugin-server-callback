# vite-plugin-server-callback
It is a plugin to get exact listened port on vite.

## Install
```bash
npm install vite-plugin-server-callback -D

yarn add vite-plugin-server-callback -D
```

## Usage
```typescript
import { defineConfig } from 'vite';
import serverPlugin from 'vite-plugin-server-callback'

export default defineConfig({
  ...,
  plugins:[
    serverPlugin({
      onReady: (port: number) => {
        console.log("onReady", port)
      }
    })
  ]
})
```

### onError
emit error on http server
```typescript
import { defineConfig } from 'vite';
import serverPlugin from 'vite-plugin-server-callback'

export default defineConfig({
  ...,
  plugins:[
    serverPlugin({
      onError: (err: Error) => {
        console.error("err", err)
      }
    })
  ]
})
```

### onClose
```
//
```

