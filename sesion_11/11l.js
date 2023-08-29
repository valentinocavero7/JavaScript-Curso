function minMax(nums) {
    const Object = {
        minimo: 0,
        maximo: 0
    };
        function comparar(a, b) {
            return a - b;
        }
    nums.sort(comparar);
    console.log(nums);
    Object.minimo = nums[0];
    Object.maximo = nums[nums.length - 1];
    console.log(Object);
}

minMax([1, -3, 5]); // cumple
minMax([-2, 3, -5, 7, 10]) // cumple

// el spread operator agarra un arreglo y lo descompone en sus elementos individuales
function minMax2(nums) {
    const Object = {
        minimo: 0,
        maximo: 0
    };
    if (nums.length > 0) {
        Object.minimo = Math.min(...nums);
        Object.maximo = Math.max(...nums);
    } else {
        Object.minimo = null;
        Object.maximo = null;
    }
    console.log(Object);
}

minMax2([]);
minMax2([1, -3, 5]); // cumple-2
minMax2([-2, 3, -5, 7, 10]) // cumple-2