var familymembers = ["father","mother","sister"];
var images = ["IMG_9770.jpg","IMG_20200101_115643.jpg","IMG_20210416_161657.jpg"];
var i = 0;
function nextslide() {
    document.getElementById("mother").src = images[i];
    document.getElementById("familymembers").innerHTML = familymembers[i];
    if(i==3){
        i=0;
    }
    i++;
}
