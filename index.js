// Code your solutions in this file
function writeCards(friendNames, eventName) {
    let finishedCards = []
    for (let i = 0; i < friendNames.length; i++) {
        finishedCards.push(`Thank you, ${friendNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return finishedCards
}

function countDown(countdown) {
    while(countdown > 0) {
        console.log(countdown)
        countdown -= 1
    }
    console.log(countdown)
}