/*

FaceApi - ml5 - A friendly machine learning library for the web. https://learn.ml5js.org/docs/#/reference/face-api
reference

https://editor.p5js.org/ml5/sketches/FaceApi_Image_Landmarks

*/

let faceapi;
let detections = [];

let video;

let faceBrain;

let osc;
let freqMax;

let trained = false;
let collecting = false;

function setup(){
    createCanvas(360, 270);

    video = createCapture(VIDEO);
    video.size(width,height);

    const faceOptions = {
        withLandmarks:true, 
        withDescriptors:true,
    };

    faceapi = ml5.faceApi(video, faceOptions, faceReady);

    const options = {
        inputs: 68*2,
        outputs:1,
        learningRate:0.02,
        debug:true,
    }
    faceBrain=ml5.neuralNetwork(options);

    select('#collectData').mousePressed(collectData);
    select('#train').mousePressed(trainModel);

    osc = new p5.Oscillator();
    osc.setType('sine');
}

function faceReady(){
    faceapi.detect(gotFaces);
}

function gotFaces(error, result){
    console.log('#gotFaces');
    if(error){
        console.log(error);
        return;
    }

    detections = result;
    faceapi.detect(gotFaces);
}

function collectData(){
    console.log('#collectData');
    osc.start();
    osc.amp(5);
    collecting=true;
}

function trainModel(){
    console.log('#trainModel');
    collecting=false;
    osc.amp(0);

    faceBrain.normalize();
    faceBrain.train({epichs:50},finishedTraining);
}

function finishedTraining(){
    console.log('#finishedTraining');
    osc.amp(0.5);
    predict();
}

function predict(){
    console.log('#predict');
    let inputs=getInputs();
    faceBrain.predict(inputs,gotFrequency);
}

function gotFrequency(error, outputs){
    console.log('#gotFrequency');
    if(error){
        console.error(error);
        return;
    }
    frequency = outputs[0].value;
    osc.freq(frequency);
    select('#prediction').html(frequency.toFixed(2));
    predict();
}

function draw(){
    background(0);

    // console.log('detections',detections.length);
    if(detections.length>0){
        let points = detections[0].landmarks.positions;
        // console.log('points',points);
        for(let i=0; i<points.length; i++){
            stroke(161,95,25);
            strokeWeight(4);
            point(points[i]._x,points[i]._y);
        }
    }
}``