var guy1 = {
    name: 'pavlo',
    age: 19,
    test: 'initial value'
};
var guy2 = {
    name: 'vasya',
    age: 20
};
var newVal = {
    name: 'petya',
    age: 13
};
var testArr = [guy1, guy2];
var updateObjectInArray = function (array, key, newKeyValue) {
    var tmpArr = [];
    array.forEach(function (el) {
        if (el[key]) {
            console.log(el[key]);
            el[key] = newKeyValue;
            console.log(el[key]);
            tmpArr.push(el);
        }
        else {
            tmpArr.push(el);
        }
    });
    console.log(tmpArr);
    return tmpArr;
};
updateObjectInArray(testArr, 'test', 'updated value');
