img = ""
status1= ""
function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(500, 430)
    canvas.center()
    objD=ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML="status : detecting object"
}

function modelLoaded(){
    console.log("model Loaded")
status1=true
objD.detect(img, gotResults)
}

function gotResults(error, results){
if (error) {
    console.error(error)
}
else {
    console.log(results)
}
}

function draw() {
    image(img, 0, 0, 500, 500)
    text("dog", 45, 45)
    fill("red")
    noFill()
    stroke("brown")
    rect(30, 60, 250, 350)
    text("cat", 220, 45)
    fill("red")
    noFill()
    stroke("brown")
    rect(200, 60, 250, 350)
}