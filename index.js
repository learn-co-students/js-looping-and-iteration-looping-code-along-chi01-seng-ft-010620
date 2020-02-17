// Code your solutions in this file


// function writeCards(array, greeting) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`Thank you, ${array[i]}, for the wonderful ${greeting} gift!`)
//   }
//   return array;
// };

function writeCards( array, greeting) {
  let cardsMessage = [];
  for ( let i = 0; i < array.length; i++ ) {
    cardsMessage.push( `Thank you, ${array[i]}, for the wonderful ${greeting} gift!` )
  }
  return cardsMessage;
};


function countDown(startingNumber) {
    while (startingNumber > 0) {
      console.log(startingNumber);
      startingNumber--;
    }
    console.log(startingNumber);
};
