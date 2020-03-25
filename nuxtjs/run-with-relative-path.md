# 

nuxt.config.js

```javascript

// ...

build: {
  extend(config, {isDev, isClient}) {
    if (!isDev) {
      config.output.publicPath = '_nuxt/'
    }
  },
},

// ...

```

```javascript

// ...

router: {
  extendRoutes (routes, resolve) {
    routes.push({
      name: 'custom',
      path: '*',
      component: resolve(__dirname, 'src/pages/index.vue')
    })
  }
}

// ...

```

# references

nuxtでgenerateしたファイルをローカルで実行する。 - Qiita https://qiita.com/benridane/items/1ba70f32c1220a206423
