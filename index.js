var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

let mousedown = false;
let prevmouseX = undefined
let prevmouseY = undefined

$("body").on("mousemove", (e) => {

    if (mousedown) {

        let mouseX = e.clientX * devicePixelRatio
        let mouseY = e.clientY * devicePixelRatio

        let d = dist(mouseX, mouseY, prevmouseX, prevmouseY)
        let strokeWidth = d / 10

        c.strokeStyle = "white"
        c.lineWidth = strokeWidth
        c.moveTo(prevmouseX, prevmouseY)
        c.lineTo(mouseX, mouseY)
        c.stroke()


        prevmouseX = e.clientX * devicePixelRatio
        prevmouseY = e.clientY * devicePixelRatio

    }
})

$("body").on("mousedown", (e) => {

    mousedown = true
    prevmouseX = e.clientX * devicePixelRatio
    prevmouseY = e.clientY * devicePixelRatio
})

$("body").on("mouseup", (e) => {

    mousedown = false
})