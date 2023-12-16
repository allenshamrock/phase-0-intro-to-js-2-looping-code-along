// Code your solutions in this file
function writeCards(names, event) {
  const messagess = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

    messages.push(message);
  }
  return messagess;
}
function countDown(n) {
  while (n >= 0) {
    console.log(n--);
  }
}
