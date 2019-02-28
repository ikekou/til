# create new repository with history from existing repository

```bash
$ mkdir hoge-copy
$ cd hoge-copy
$ git clone --mirror https://test.com:group/hoge.git .git
$ git remote set-url origin https://test.com:group/hoge-copy.git
$ cd .git
$ git push --mirror https://test.com:group/hoge-copy.git
$ cd ../..　rm -rf hoge-copy
$ git clone https://test.com:group/hoge-copy.git
```
