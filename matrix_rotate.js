function swap(a, x, y){
    let tmp = a[x];
    a[x] = a[y];
    a[y] = tmp;
}
function reverse(array){
    for(let i = 0; i < array_length(array) / 2; i = i + 1){
     swap(array, i, array_length(array) - i - 1);
    }
}
function rotate_matrix(matrix){
    for(let i = 0; i < array_length(matrix); i = i + 1){
        for(let j = 0; j < i; j = j + 1){
            let tmp = matrix[i][j] ;
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    for(let i = 0; i < array_length(matrix); i = i + 1){
        reverse(matrix[i]);
    }
}
let m = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
rotate_matrix(m);
m;