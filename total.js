function getShoppingTotal (products){
    let total = 0;
    for(const product of products){
        total+=product.price;
    }
    return total;
}


function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total +=thisProductCost;
    }
    return total;
}


const products = [
    { name: 'shampoo', price: 300, quantity: 2},
    { name: 'chiruni', price: 100, quantity: 1},
    { name: 'shirt', price:700, quantity: 3},
    { name: 'pant', price: 1200, quantity: 2},
]

console.log(getShoppingTotal(products));
console.log(cartTotal(products));