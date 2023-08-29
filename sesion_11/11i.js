function addNum(myArr, num) {
    myArrNew = [];

    myArr.forEach(x => {
        x += num;
        myArrNew.push(x);
    });

    return myArrNew;
}

console.log(addNum([-2, -1, 0, 99], 2));