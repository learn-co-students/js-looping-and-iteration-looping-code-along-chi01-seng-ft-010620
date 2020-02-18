// Code your solutions in this file

let gifterName = ["Ada", "Brendan", "Ali"]


function writeCards(arr, event){
    let myArr = [];
    for (let i = 0; i < arr.length; i++){
      myArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return myArr;
  }
    writeCards(gifterName, "birthday");


    function countDown(i){
        while (i >= 0){
            console.log(i);
            i--
        }
    };