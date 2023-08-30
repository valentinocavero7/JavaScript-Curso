function searchString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "search"){
            return i; 
        }   
    }
    return -1;
}


console.log(searchString(['hello','search', 'a', 'ha']));
