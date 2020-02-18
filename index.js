// Code your solutions in this file
function writeCards(array, string) 
 { let array1 = []
    for (let i = 0; i < array.length; i++) {
        array1.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return array1
}



function countDown(num) {
   while (num >= 0) {
   console.log(num--)
    }
}