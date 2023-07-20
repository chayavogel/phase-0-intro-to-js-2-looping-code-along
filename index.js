function writeCards(name, event) {
    let messagesArray = [];
    for (let i = 0; i < name.length; i++) {
        messagesArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    console.log(messagesArray);
    return messagesArray;
}

function countDown(integer) {
    let i = integer;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  return i;
}
