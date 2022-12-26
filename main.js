rightWristX = 0 ; 
leftWristX = 0 ;
difference = 0; 



function setup() { video = createCapture(VIDEO);
     video.size(550, 500);
      canvas = createCanvas(550, 550);
      canvas.position(560,150);
     poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);
     
     }

function modelLoaded () {
    console.log("model is loaded") ; 
}

function gotPoses (gotResults) {
    if  (gotResults.length > 0) 
    console.log (gotResults);

    left_wristX = gotResults[0].pose.leftWrist.x ;
    right_wristX = gotResults[0].pose.rightWrist.x;
    difference = floor (left_wristX - right_wristX);
    
}

function draw () {
background ('#FFC7EF') ;
fill ('#FFE787' ) ; 

textSize(30);
text ('Appy' , 100 , 350 ) ; 
}