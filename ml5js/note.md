## 20200313

ml5 examples index https://ml5js.github.io/ml5-examples/public/

exampleを眺めてみる

--

yining1023/doodleNet: A doodle classifier(CNN), trained on all 345 categories from Quickdraw dataset. https://github.com/yining1023/doodleNet

google drawからのやつ

--

KMeans

k平均法 - Wikipedia https://ja.wikipedia.org/wiki/K%E5%B9%B3%E5%9D%87%E6%B3%95

--

pix2pix

--

YOLO

https://www.renom.jp/ja/notebooks/tutorial/image_processing/yolo/notebook.html https://www.renom.jp/ja/notebooks/tutorial/image_processing/yolo/notebook.html

【物体検出手法の歴史 : YOLOの紹介】 - Qiita https://qiita.com/mdo4nt6n/items/68dcda71e90321574a2b

YOLO with image https://ml5js.github.io/ml5-examples/p5js/YOLO/YOLO_single_image/
一枚の画像に対して推定

p5.js Web Editor | YOLO_webcam https://editor.p5js.org/ml5/sketches/YOLO_webcam
ラベルの座標指定がおかしい気がする？画面上にラベルも矩形も出てない

--

UNET

U-Net：セグメンテーションに特化したネットワーク - IMACEL Academy -人工知能・画像解析の技術応用に向けて-| エルピクセル株式会社 https://lp-tech.net/articles/hzfn7

ピクセル領域分割

UNET example with p5.js https://ml5js.github.io/ml5-examples/p5js/UNET/UNET_webcam/

セグメンテーションによるマスク

--

TeachableMachine

Webcam Image Classification using a pre-trained customized model and p5.js https://ml5js.github.io/ml5-examples/p5js/TeachableMachine/ImageModel_TM/

カメラの画像から昼と夜を検出

Webcam Image Classification using a pre-trained customized model and p5.js https://ml5js.github.io/ml5-examples/p5js/TeachableMachine/SoundModel_TM/

拍手を検出

--

StyleTransfer

Style Transfer Image Example using p5.js https://ml5js.github.io/ml5-examples/p5js/StyleTransfer/StyleTransfer_Image/

画像のスタイル変換

元画像+スタイル画像=結果

Style Transfer Mirror Example using p5.js https://ml5js.github.io/ml5-examples/p5js/StyleTransfer/StyleTransfer_Video/

ビデオカメラから入力した画像のスタイル変換

--

SoundClassification

Sound classification using SpeechCommands18w and p5.js https://ml5js.github.io/ml5-examples/p5js/SoundClassification/SoundClassification_speechcommand/

マイク入力したサウンドからいくつかのキーワードを検出

--

SketchRNN

RNN = Recursive Neural Network： 再帰的構造を持つニューラルネットワークのこと。

再帰型ニューラルネットワーク: RNN入門 - Qiita https://qiita.com/kiminaka/items/87afd4a433dc655d8cfd

SketchRNN https://ml5js.github.io/ml5-examples/p5js/SketchRNN/SketchRNN_basic/

自動で何かをスケッチする

11_1：ml5.js SketchRNN ml5.js JavaScript – HIM.CO ヒム・カンパニー https://himco.jp/2019/02/05/11_1%EF%BC%9Asketchrnn/

SketchRNNは、Googleの「Quick Draw!」プロジェクトから集められた手描きのイラストを学習させたRNNモデル

「RNN」はRecurrent Neural Networkの略で、日本語では「再帰型ニューラルネットワーク」と訳されます。RNNはごく簡単に言うと、時間の経過を経て得られたデータ(時系列データ)から、未来のデータの予測に使用される手法です。たとえば、最近10年間の月別降水量のデータを使った来年の月別降水量の予測に利用できます。

絵を「描く」プロセスの模倣 – A Neural Representation of Sketch Drawings http://createwith.ai/paper/20170415/581?utm_content=buffer0eaa0&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer

A Neural Representation of Sketch Drawingsのまとめ - Qiita https://qiita.com/sakuramochi/items/b643c22bea2b80db6024

--

Sentiment

p5.js Web Editor | Sentiment_Interactive https://editor.p5js.org/ml5/sketches/Sentiment_Interactive

感情解析

--

PoseNet

人の動作を検出！Edge TPUとPosenetで姿勢を推論してみる https://misoji-engineer.com/archives/edge-tpu-posenet.html

無料  
商用利用可能  
ラズパイで動かせる

--

Pix2Pix

p5.js Web Editor | Pix2Pix_callback https://editor.p5js.org/ml5/sketches/Pix2Pix_callback

Image-to-Image Translation with Conditional Adversarial Networks https://phillipi.github.io/pix2pix/

--

PitchDetection

Pitch Detection https://ml5js.github.io/ml5-examples/p5js/PitchDetection/PitchDetection/

シンプルなピッチ検出

--

ObjectDetector

COCOSSD

tfjs-models/coco-ssd at master · tensorflow/tfjs-models https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd

初心者がJavaScript11行で爆速でドヤる方法〜画像オブジェクト認識編〜 - Qiita https://qiita.com/yukihirai0505/items/d5f22db8cd727a94d1ed

オープンソースのオブジェクト認識モデル

人間(person)や自転車(bicycle),車(car)などなど
90種類のオブジェクト認識を実行することができます。
=> https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts

【JS】画像のリアルタイム物体検出 数行で実装 デモ有 TensorFlow.js coco-ssd | 404 Motivation Not Found https://tech-blog.s-yoshiki.com/2018/12/869/

↑試した例

CNNを用いた物体検出アルゴリズムの性能比較 - Qiita https://qiita.com/tokkuman/items/3fabd04a1a524843bea5

↑方式の比較

> 物体検出 (Object Detection) は画像認識タスクの中の一つで、一般的に画像認識のタスクは以下のように大きく3つに分類されます。
> 
> Classification : 各画像ごとにラベルの分類
> Object Detection : 画像内で検出された各物体領域ごとにラベルの分類
> Segmentation : 画像内の各pixelごとにラベルの分類 (Semantic or Instance)

> 自分が調べた限りでは DSSD が最も高い精度となりましたが、速度とのバランスを考えると YOLOv2 が最高のパフォーマンスを示しているみたいです。
> ただアルゴリズムの性質を考えると、多オブジェクト検出に関してはSSD系を用いた方が良い結果を示しそうです。

--

KNNClassification

PoseNet with KNN Classification on Webcam Images. Built with p5.js https://ml5js.github.io/ml5-examples/p5js/KNNClassification/KNNClassification_PoseNet/

ポーズを学習させて判定する
