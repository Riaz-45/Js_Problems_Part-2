function multiply(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('please provide a number.');
    }
    const mult = a * b;
    return mult;
}

console.log(multiply(5));

function getPrice(product){
    if(typeof product !== 'object'){
        return 'please provide an object'
    }
    const price = product.price;
    return price;
}

// const price = getPrice({ name: 'ice-cream', price: 40, color: 'chocolate'});
const price =getPrice(6);
console.log(price);


function getSecond(numbers){
    // console.log(typeof numbers);
    if(Array.isArray(numbers) === false){
        return 'please provide an array';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond(77);
console.log(second);
