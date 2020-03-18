/*

FaceApi - ml5 - A friendly machine learning library for the web. https://learn.ml5js.org/docs/#/reference/face-api
reference

p5.js Web Editor | FaceApi_Image_Landmarks https://editor.p5js.org/ml5/sketches/FaceApi_Image_Landmarks

【25個掲載】顔認証AIや物体検出に使える画像データセットまとめ | Lionbridge AI https://lionbridge.ai/ja/datasets/20-best-image-datasets-for-computer-vision/
LFW Face Database : Main http://vis-www.cs.umass.edu/lfw/

*/

let FaceApi;
let img;
let detections;
let list;
let cnt=0;

const detection_options={
    whtLandscape:true,
    withDescriptors:false,
}

function preload(){
    list = loadStrings('list.txt');
}

function setup(){
    createCanvas(800,800);

    hoge()
}

function hoge(){
    // img = loadImage('lfw/Aaron_Eckhart/Aaron_Eckhart_0001.jpg',fuga);
    img = loadImage(list[cnt],fuga);
    cnt++;
}

function fuga(){
    img.resize(width,height);

    faceapi = ml5.faceApi(detection_options, modelReady);
    textAlign(RIGHT);
}

function modelReady(){
    faceapi.detectSingle(img,gotResult);
}

function gotResult(err,result){
    if(err){
        // console.log(err);
        hoge();
        return;
    }

    detections = result;

    background(255);

    image(img,0,0,width,height);
    if(detections){
        drawBox(detections);
        drawLandmarks(detections);
    }

    setTimeout(()=>{
        hoge();
    },0);
}

function drawBox(detections){
    const alignedRect = detections.alignedRect;
    const {_x,_y,_width,_height} = alignedRect._box;
    noFill();
    stroke(161,95,251);
    strokeWeight(2);
    rect(_x,_y,_width,_height);
}

function drawLandmarks(){
    noFill();
    stroke(161,95,251);
    strokeWeight(2);

    push();

    for(let i in detections.parts){
        beginShape();
        detections.parts[i].forEach(item=>{
            vertex(item._x,item._y);
        })
        endShape(CLOSE);
    }

    pop();

}