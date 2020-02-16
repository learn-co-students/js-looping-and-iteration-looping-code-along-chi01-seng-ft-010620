// Code your solutions in this file
function writeCards(array, event){
    let result = []
    for(let i=0; i < array.length; i++){
        result.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }

    return result;
}


function countDown(num){
    while (num > -1) {
        console.log(num--);
    }
}