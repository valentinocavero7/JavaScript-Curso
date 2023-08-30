function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === word) {
            return i
        }
    }
    return -1;
}

function unique(arr) {
    const array = [];
    for (let i=0;i<arr.length;++i){
        let word = arr[i];
        if(findIndex(array, word) === -1) {
            array.push(word)
        }
    }
    return array;   
}

console.log(unique(['green', 'red', 'blue', 'red']));