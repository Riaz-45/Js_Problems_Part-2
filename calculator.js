function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        return add(a, b);
    }
    if(operation === 'subtract'){
        return add(a, b);
    }
    if(operation === 'multiply'){
        return add(a, b);
    }
    if(operation === 'divide'){
        return add(a, b);
    }
}

console.log(calculator(5,4,'add'));