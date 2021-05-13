type obj = {
    name: string,
    age: number,
    [key:string]:any
}

let guy1: obj = {
    name: 'pavlo',
    age: 19,
    test: 'initial value'
}

let guy2: obj = {
    name: 'vasya',
    age: 20
}

let newVal: obj = {
    name: 'petya',
    age: 13
}



let testArr:obj[] = [guy1, guy2]


let updateObjectInArray = <ObjectShape>(array: ObjectShape[], key:string, newKeyValue: string): ObjectShape[] => {
    
    let tmpArr: ObjectShape[] = []
    array.forEach((el) => {
        if (el[key]) {
            console.log(el[key]);
            
            el[key] = newKeyValue
            console.log(el[key]);
            
            tmpArr.push(el)
        } else {
            tmpArr.push(el)
        }
        
    })
    console.log(tmpArr);
    
    return tmpArr
    
}

updateObjectInArray(testArr, 'test', 'updated value')