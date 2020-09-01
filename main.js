song = "";
song2 = "";

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
}

function draw()
{
    image(video, 0, 0, 300, 250);
}