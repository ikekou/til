Redux入門【ダイジェスト版】10分で理解するReduxの基礎 - Qiita https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7

Actionはオブジェクト  
慣れたもののイメージでいうとイベント型インスタンスに近い気がする

ActionCreatorはファクトリメソッド  
その名の通りActionを作る

ActionはStoreにdispatchされる  
この辺りの参照の持ち方は？  
実際にコードを書いてみよう

StoreはStateを保持してる  
入出力手段を提供する

Stateはオブジェクト？  
メソッドは持ってない、のかな  
ネストしたツリー状の構造にして良い

Reducerは  
actionとStateを受け取る  
新しいStoreを作る

reducerのメソッドは副作用がないのがルール  
受け取ったStateを元に新しいStateを作り、さらに必要な部分を上書きして返すイメージかな

Reducerは肥大するので、親子構造を作る

reducerはstoreにstateを返す

アプリケーション内でstoreは1つ

stateは単独のオブジェクト

stateを直接変更することはできない

Redux入門 1日目 Reduxとは(公式ドキュメント和訳) - Qiita https://qiita.com/kitagawamac/items/b001839150ab04a6a427

storeは一つのオブジェクト  
保存しやすい  
→それは思う  
デバッグしやすい  
→それもそう  

状態は読み取り専用  
外から直接変更はできない  
ビューがモデルの状態を直接変更しないのはまあ普通そうする  
reduxに限ったことではない  
アクションはオブジェクト  
→履歴やタイムマシンやスタックができるってことだよね  

→reducerの分割がポイントかな
→しかし下手したらいろんなreducerが巨大なstateをしっちゃかめっちゃかに変更できちゃうわけで  
→おいこれどこから触られてるんだよ、ということにもなりかねない気がする  
→引数に渡す範囲を限定したらいいのか？

Redux入門 2日目 Reduxの基本・Actions(公式ドキュメント和訳) - Qiita https://qiita.com/kitagawamac/items/8f8d047e5cbd87399ccb

アクションはオブジェクト
→イベントタイプとデータを持ってる、という見た目からすると、昔懐かしいActionScriptのEventクラスのイメージに近い気がする  

アクションタイプは文字列だが定義を別モジュールにしてもいい、肥大化してきたら  
→この辺りは感覚値に近い

アクションだからこれからすることを伝えるイメージに見える
→イベントは「完了」とかもあったけど、その辺りが違う感じ  
  
Redux入門 3日目 Reduxの基本・Reducers(公式ドキュメント和訳) - Qiita https://qiita.com/kitagawamac/items/7fdce94912d6d9c801f8

シンプルにいうと、アクションを受け取って、stateを変更する（というか新しく作るんだけど）

stateにはUIの内容を入れないようにするのが推奨されている  
→ではどこに持つ思想なのか？この辺りが今自分が知りたいことな気がする

reducerの中ではAPIを呼んではいけない、副作用になる

毎回値が変わるものを扱ってはいけない、Dateやrandomなど
→いわゆる参照透過性の話だよね、用語が合っているかちょっと自信ないけど、意味はわかる
→そういう情報も外から渡されるべきってことだよね

子供のreducerはstateのうち一部のみ受け取っている、そゆことか

Redux入門 4日目 Reduxの基本・Stores(公式ドキュメント和訳) - Qiita https://qiita.com/kitagawamac/items/377787c24efac64f2495

storeの役割

storeへのアクセサの提供

更新手段の提供

リスナーを登録する方法の提供

storeは一つ

reducer compositionがなんとか
→これなんだろ

Redux入門 5日目 Reduxの基本・Data Flow(公式ドキュメント和訳) - Qiita https://qiita.com/kitagawamac/items/ae3ce31521ad24dd699f

特になし

Redux入門 6日目 ReduxとReactの連携(公式ドキュメント和訳) - Qiita https://qiita.com/kitagawamac/items/d769c85f446994349b52

React使う機会は今の所なさそうだが理解の助けになると思うので読む

Reduxのstateツリーに合わせてViewの階層を設計していきます。  
→そうなの？

