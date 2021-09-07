function setup(){
    canvas = createCanvas(550, 550)
    canvas.position(560, 160)
    video = createCapture(VIDEO)
    video.size(550, 500)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
    }
    function modelLoaded(){
        console.log("Posenet is ready to tell you how to you use poses")
    }
    function draw(){
        background("black")

        document.getElementById("result_in_pixels").innerHTML = "The length of the sqaure =" + difference + "px"
    fill("blue")
    stroke("blue")
    text( "Prasad", noseX, noseY)
    textSize(difference)
    }
    function preload(){
    
    }
    function gotPoses(results){
    if(results.length > 0 ){
    console.log(results)

    noseY = results[0].pose.nose.y
noseX = results[0].pose.nose.x
rightWristX = results[0].pose.rightWrist.x
leftWristX = results[0].pose.leftWrist.x
difference = floor(leftWristX - rightWristX);
console.log("RightWristx = " + rightWristX + "LeftWristx = " + leftWristX + "nose x = " + noseX + "nose y = " + noseY + "difference = " + difference)

}
}
noseY = 0;
noseX = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
    