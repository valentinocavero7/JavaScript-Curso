function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === word) {
            return i
        }
    }
    return -1;
}

console.log(findIndex(['red', 'ayellow', 'fa', 'yellow'], 'yellow'));