noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/Wzp4CJf1/Moustache-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
    }
function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-5;
        console.log("nose X = "+noseX);
        console.log("nose Y = "+noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
  //  fill("red");
  //  stroke("red");
  //  circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY,40, 40);

}
function take_snapshot(){
    save("myfliterimage.png");
    
}