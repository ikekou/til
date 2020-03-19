Nuxt.jsやってみるメモ

## インストール

インストール - NuxtJS https://ja.nuxtjs.org/guide/installation

nuxt/create-nuxt-app: Create Nuxt.js App in seconds. https://github.com/nuxt/create-nuxt-app

## ディレクトリ構造

ディレクトリ構造 - NuxtJS https://ja.nuxtjs.org/guide/directory-structure

assets ディレクトリには Stylus や SASS、 Image、 Font のようなコンパイルされていないファイルを入れます。

components ディレクトリには Vue.js のコンポーネントファイルを入れます。これらのコンポーネントでは asyncData や fetch を使うことはできません。

layouts ディレクトリはアプリケーションのレイアウトを含みます。レイアウトはページの外観を変更するために使用されます（例えばサイドバーなど）。

static ディレクトリは直接サーバのルートに配置され（/static/robots.txt は http://localhost:3000/robots.txt でアクセス可能です）、変更されない可能性の高いファイルが含まれています（例えば、favicon など）。

## プロジェクト吐き出した後にディレクトリを移動すると良いらしい（ごちゃつかない）

Nuxt.jsをインストールしVue.jsアプリケーション開発環境を構築する入門編 https://www.ritolab.com/entry/192

