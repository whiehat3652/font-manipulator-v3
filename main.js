difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function modelLoaded() {
    console.log('poseNet is initialized!');
}

function draw() {
    background('ADD8E6');
        fill('#00FF00');
        textSize(difference);
        text('Avi', 10, 540);
    
}
