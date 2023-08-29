function countPositive(nums) {
    let contador = 0;
    for (let x = 0; x < nums.length; x++) {
        if(nums[x] > 0) contador++;
    }
    return contador;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// otra forma 
function countPositive2(nums) {
    let contador = 0;
    nums.forEach(x => {if(x > 0) contador++});
    return contador;
}

console.log(countPositive2([1, -3, 5]));
console.log(countPositive2([-2, 3, -5, 7, 10]));