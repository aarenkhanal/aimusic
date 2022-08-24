function draw(){
    image(video , 0 ,0 ,600, 500);
    fill("#DDA0DD");
    stroke("e86100")
    circle(leftWristX,leftWristY,20);
    inNumberLestWridtY = Number(leftWristY);
    remove_decimals = floor(InNumberWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHtml ="Volume =" + volume;
    song.setVoleume(volume);
}
