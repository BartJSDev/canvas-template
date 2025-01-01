function make2DArray(rows, cols) {
    var arr = []
    for (var i = 0; i < rows; i++) {
        arr.push([])
        for (var j = 0; j < cols; j++) {
            arr[i][j] = 1
        }
    }

    return arr
}

function dist(x1 , y1 , x2 , y2){

    let dx = x2 - x1 
    let dy = y2 - y1

    return Math.sqrt(dx * dx + dy * dy)
    
}
