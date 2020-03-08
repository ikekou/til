/*

FaceApi - ml5 - A friendly machine learning library for the web. https://learn.ml5js.org/docs/#/reference/face-api
reference

p5.js Web Editor | FaceApi_Image_Landmarks https://editor.p5js.org/ml5/sketches/FaceApi_Image_Landmarks

*/

let FaceApi;
let img;
let detections;

const detection_options={
    whtLandscape:true,
    withDescriptors:false,
}

function preload(){
    const t = loadStrings('list.txt');
    console.log(t);
    
    // img = loadImage('frida.jpg')
    img = loadImage('okawa.png')
}

function setup(){
    createCanvas(400,400);
    img.resize(width,height);

    faceapi = ml5.faceApi(detection_options, modelReady);
    textAlign(RIGHT);
}

function modelReady(){
    faceapi.detectSingle(img,gotResult);
}

function gotResult(err,result){
    if(err){
        console.log(err);
        return;
    }

    detections = result;

    background(255);

    image(img,0,0,width,height);
    if(detections){
        drawBox(detections);
        drawLandmarks(detections);
    }
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