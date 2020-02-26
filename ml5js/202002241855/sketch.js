// // Your code will go here
// // open up your console - if everything loaded properly you should see 0.3.0
console.log('ml5 version:', ml5.version);

// function setup(){
//     createCanvas(400, 400);
// }

// function draw(){
//     background(200);
    
// }

let classifier;

let img;

function preload(){
    classifier = ml5.imageClassfier('MobileNet');
    img = loadImage('images/bird.png');
}

function setup(){
    createCanvas(400,400);
    classifier.classify(img, gotReslut);
    image(img,0,0);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        createDiv(`Label: ${results[0].label}`);
        createDiv(`Confidence ${nf(results[0].confidence,0,2)}`);
    }
}