function removeEgg(foods) {
    const removed = [];
    foods.forEach(x => {
        if(!(x === 'egg')) {
            removed.push(x);
        }
    });
    return removed;
}
var test = ['egg','apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(test));
console.log(test);
//cumple con la condición de problema 11-u