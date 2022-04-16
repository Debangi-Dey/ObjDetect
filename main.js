img = ""

function preloaad() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
}

function draw() {
    image(img, 0, 0, 500, 500)
    text("dog", 45, 45)
    fill("red")
    noFill()
    stroke("brown")
    rect(30, 60, 450, 350)

}