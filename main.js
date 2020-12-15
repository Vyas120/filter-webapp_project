noseX = 0;
noseY = 0;

function preload(){
    the_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(375, 375);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    posenet = ml5.poseNet(video,model_loaded)
    posenet.on('pose', getpose)
}

function model_loaded(){
    console.log("it's working!!")
}

function getpose(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-25;
        console.log("noseX:"+ results[0].pose.nose.x);
        console.log("noseY:"+ results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0,0,375,375);
    image(the_nose, noseX, noseY,110,100);
}

function take_snapshot(){
    save("posenetisgreat!.png")
}