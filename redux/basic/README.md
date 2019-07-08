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
