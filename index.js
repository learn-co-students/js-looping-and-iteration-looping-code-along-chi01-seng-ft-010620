function writeCards(namesArray, event) {
    let cards = []
    for (let i = 0; i < namesArray.length; i ++) {
       cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}

