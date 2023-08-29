function addArrays(array1, array2) {
    arrayFinal = [];
    for (let x = 0; x < array1.length; x++) {
        arrayFinal[x] = array1[x] + array2[x];
    }
    return arrayFinal;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));