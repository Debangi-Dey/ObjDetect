img = ""
status1 = ""
Objects = []

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    objD = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "status : detecting object"
}

function modelLoaded() {
    console.log("model Loaded")
    status1 = true
    objD.detect(img, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        Objects = results
    }
}

function draw() {
    image(img, 0, 0, 600, 500)
    if (status1 != "") {
        for (i = 0; i < Objects.length; i++) {
            document.getElementById("status").innerHTML = "status : object detected"
            fill("red")
            perc = floor(Objects[i].confidence * 100)
            text(Objects[i].label + " " + perc + "%", Objects[i].x-30, Objects[i].y)
            noFill()
            stroke("pink")
            rect(Objects[i].x-30, Objects[i].y, Objects[i].width, Objects[i].height)
        }
    }
    /*
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
    */
}