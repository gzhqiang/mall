# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### proxy config
```
devServer: {
  proxy: {
    '/api/v2': {
      target: 'http://123.207.32.32:8000'
    }
  }
}
http://localhost:8080/api/v2/home/multidata => http://123.207.32.32:8000/api/v2/home/multidata
```

