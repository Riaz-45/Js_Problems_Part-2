function maxNum(array){
    let bigNum = array[0];
    for(const num of array){
        if(num > bigNum){
            bigNum = num;
        }
    }
    return bigNum;
}


const heights = [650, 66, 68, 72, 78, 60];
console.log(maxNum(heights));

