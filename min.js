// find the Cheapest Phone
function getCheapestPhone(phoness){
    let min = phoness[0];
    for(const phone of phoness){
        if(phone.Price < min.Price){
            min = phone;
        }
    }
    return min;
}

function getExpensivePhone(phones){
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.Price > expensive.Price){
            expensive = phone;
        }
    }
    return expensive;
}

const phones = [
    { name: 'Samsung', Price: 20000, Camera: '12mp', Color: 'black'},
    { name: 'Xiaomi', Price: 18000, Camera: '12mp', Color: 'black'},
    { name: 'Honor', Price: 27000, Camera: '12mp', Color: 'black'},
    { name: 'Iphone', Price: 150000, Camera: '12mp', Color: 'black'},
    { name: 'Huawei', Price: 100000, Camera: '12mp', Color: 'black'},
    { name: 'OnePlus', Price: 80000, Camera: '12mp', Color: 'black'},
]


console.log("Cheapest phone is; ",getCheapestPhone(phones));
console.log("Expensive phone is: ",getExpensivePhone(phones));



// function minPrice(array){
//     let minVal = array[0];
//     for(const num of array){
//         if(num < minVal){
//             minVal = num;
//         }
//     }
//     return minVal;
// }


// const price = [20000, 16000, 50000,100000, 12000, 30000,35000];
// console.log(minPrice(price));