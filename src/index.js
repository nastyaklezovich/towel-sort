// You should implement your task here.

module.exports = function towelSort(matrix) {
    arr = [];
    arr1 = [];
    arr2 = [];

    if (matrix === undefined) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if ((i + 1) % 2 === 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    arr1.push(matrix[i][j]);
                }
                arr1 = arr1.sort((a, b) => a - b).reverse();
                for (let z = 0; z < arr1.length; z++) {
                    arr.push(arr1[z]);
                }
                arr1 = [];
            } else {
                for (let j = 0; j < matrix[i].length; j++) {
                    arr2.push(matrix[i][j]);
                }
                arr2 = arr2.sort((a, b) => a - b);
                for (let z = 0; z < arr2.length; z++) {
                    arr.push(arr2[z]);
                }
                arr2 = [];
            }
        }
        return arr;
    }
};
