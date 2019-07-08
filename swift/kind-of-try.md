呼び出してエラーをキャッチする
```Swift
func methodB(){
  do {
    try methodA()
  } catch {
  } 
}
```

呼び出してエラーをキャッチした際にエラーの種類によって分岐する
```Swift
func methodB() {
  do {
    try methodA()
  } catch APIError.network{
  } catch APIError.server(let hoge){
  } catch {
  }
}
```

キャッチしない（呼び出し元にエラーを返したい
```Swift
func methodB(){
  do{
    methodA()
  }
}
```

エラーを無視してメソッドを実行する  
戻りはOptional型、エラーが発生したらnil
エラーを黙殺してしまうことになるので一般的ではない
```Swift
try? methodA()
```

エラーが起こりえないとわかっている場合  
エラーが起きたらクラッシュする
```Swift
try! methodA()
```

Swift 4.0 エラー処理入門 - Qiita https://qiita.com/koishi/items/67cf4d0f51c4d79f1d22
