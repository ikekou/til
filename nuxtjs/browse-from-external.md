普段はlocalhost:3000で良いがスマホとか別マシンで確認したい時がある

nuxt.config.js
```javascript
export default {
  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  }
  // その他の設定
}
```

ホストとポート番号を変更するには？ - NuxtJS https://ja.nuxtjs.org/faq/host-port/
