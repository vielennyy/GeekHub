function matrix (R, C, r0, c0){

    let top = r0 - 1
    let bottom = r0 + 1
    let left = c0 - 1
    let right = c0 + 1

    let i = r0
    let j = c0

    let path = []

    function isInside(row, col) {
        return row >= 0 && row < R && col >= 0 && col < C
    }

    while (path.length < R*C) {
        while(j < right) {
            if(isInside(i, j)) path.push([i, j]);
            j++;
        }
        right++;
        
        while(i < bottom) {
            if(isInside(i, j)) path.push([i, j]);
            i++;
        }
        bottom++;
        
        while(j > left) {
            if(isInside(i, j)) path.push([i, j]);
            j--;
        }
        left--;
        
        while(i > top) {
            if(isInside(i, j)) path.push([i, j]);
            i--;
        }
        top--;
    }
    return path
}
// console.log(matrix(5,6,1,4))