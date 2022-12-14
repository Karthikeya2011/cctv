video ="";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
} 

function setup () {
    canvas = createCanvas(380,380);
    canvas.center;
    video =  createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw() {
    image(video,0,0,480,380);
    if(status != "");
    {
        objectDetector.detect(video.gotResults);
        document.getElementById("status").innerHTML = "status : objects detected";
        document.getElementById("number_of_objects").innerHTML = "number of objects detected are : "+ Objects.length;

        fill("#FF0000");
        percent = floor(Objects[i].confidence * 100);
        text(object[i].label + "" + percent + "%", object[1].x + 15, Objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(object[1].x, Objects[i].y ,object[1].width , Objects[i].height)
    }

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML = "status : detecting Object";

}

function modelLoded() {
    console.log("modelLoaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}