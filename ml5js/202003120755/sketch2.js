/*

FaceApi - ml5 - A friendly machine learning library for the web. https://learn.ml5js.org/docs/#/reference/face-api
reference

p5.js Web Editor | FaceApi_Video_Landmarks https://editor.p5js.org/ml5/sketches/FaceApi_Video_Landmarks

*/

let faceapi;
let video;
let detections;

const detection_options={
    withLandmarks:true,
    withDescriptors:false,
};

function setup(){
    createCanvas(360,270);

    video=createCapture(VIDEO);
    video.size(width,height);
    video.hide();

    faceapi=ml5.faceApi(video,detection_options,modelReady);

    textAlign(RIGHT);
}

function modelReady(){
    detect();
}

function detect(){
    faceapi.detect(gotResult);
}

function gotResult(err,result){
    if(err){
        console.log(err);
        return;
    }

    detections=result;

    // integer RGBA notation
    background('rgba(0,255,0, 0.1)');

    //image(video,0,0,width,height);
    if(detections){
        if(detections.length>0){
            // drawBox(detections);
            drawLandmarks(detections);
        }
    }

    detect();
}

function drawBox(){
    for(let i=0; i<detections.length; i++){
        const alignedRect=detections[i].alignedRect;
        const x=alignedRect._box._x;
        const y=alignedRect._box._y;
        const boxWidth=alignedRect._box._width;
        const boxHeight=alignedRect._box._height;

        noFill();
        stroke(161,95,251);
        strokeWeight(2);
        rect(x,y,boxWidth,boxHeight);
    }
}

function drawLandmarks(detections){
    noFill();
    stroke(161,95,251);
    strokeWeight(2);

    for(let i=0; i<detections.length; i++){
        for(let j in detections[i].parts){
            const aa=['mouth','leftEye','rightEye'].includes(j);
            drawPart(detections[i].parts[j],aa);
        }
    }
}

function drawPart(feature,closed){
    beginShape();
    for(let i=0;i<feature.length; i++){
        const x=feature[i]._x;
        const y=feature[i]._y;
        vertex(x,y);
    }

    if(closed===true){
        endShape(CLOSE);
    }else{
        endShape();
    }
}