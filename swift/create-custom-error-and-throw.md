オリジナルのエラーを作る
```
enum APIError: Error{
  case network
  case server(Int)
  case unknown(String)
}
```

エラーを投げる
```
throw APIError.network
```

エラーを持つメソッドを定義する
```
func methodA() throws -> Void{
  throw APIError.network
}
```

Swift 4.0 エラー処理入門 - Qiita https://qiita.com/koishi/items/67cf4d0f51c4d79f1d22
