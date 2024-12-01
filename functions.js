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
