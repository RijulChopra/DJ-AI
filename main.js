song = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
    song = loadSound("believer.mp3");
    song2 = loadSound("best_song.mp3");
}

function setup()
{
    canvas = createCanvas(300, 250);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 250);

    fill('#ffaaee');
    stroke('#ffaaee');

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song.play();
        song.setVolume(10);
        document.getElementById('song_name').innerHTML = "Song Name : Believer";
        song2.stop();
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Loaded!!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Score Right Wrist = " + scoreRightWrist);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("Score Left Wrist = " + scoreLeftWrist);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('Left Wrist X = ' + leftWristX + ' Left Wrist Y = ' + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('Right Wrist X = ' + rightWristX + ' Right Wrist Y = ' + rightWristY);
    }
}