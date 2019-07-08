# manage node.js version

新しいマシンになったので、node.jsを入れる必要がある

複数バージョンを同居／切り替えさせたいシーンはママあるので、バージョンを切り替えできるツールも入れる

2019.03現在、今は何を使うのがいいのかな、と改めて調べて、入れてみる

検索上位を見る

[\[Mac, Homebrew\] Node\.jsのバージョン管理ツール、nodebrew導入手順 \- Qiita](https://qiita.com/mii-chan/items/f3291ae8bbbf788c8aa3)

nodebrewを勧めてる
でも2017の記事

[MacにNode\.jsをインストール \- Qiita](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)

nodebrewを勧めてる
2018の記事

[【mac】node\.jsのバージョン管理（切り替え）について調べたことメモ \- とりあえずphpとか](http://kimagureneet.hatenablog.com/entry/2018/03/09/133446)

nodebrew
denv

複数バージョンのnode.jsをインストールして切り替え可能。nodebrewと違って、ディレクトリ以下の.node-versionを見て勝手にどのバージョンか判定してくれるので手動での切り替えが不要。これもバージョン管理するとよいのかも。

[【node\.js】macにnodebrewでnode\.jsのバージョン管理を行う爆速あんちょこ \- tweeeetyのぶろぐ的めも](http://tweeeety.hateblo.jp/entry/2018/06/06/220419)

nodebrew勧めてる

--

絶対これと言う感じではなさそうなので

- tj/n
- nodeenv
- nodebrew

に絞って、githubのスター数と最終更新日をみてみる

tj/n  
10808  
2ヶ月前  

nodeenv 
1008 
11時間前 

nodebrew 
849 
3ヶ月前 

nでいい気がする

--

[tj/n: Node version management](https://github.com/tj/n)

インストール  
brewが入っている前提

とりあえずnodeがいる

```bash
$ brew install node
```

nをglobalに入れる

```bash
$ npm i -g n
```

リストを見る

```bash
$ n list
```

最新バージョンを入れてみる

```bash
$ n latest
```

安定バージョンを入れてみる

```bash
$ n lts
```
