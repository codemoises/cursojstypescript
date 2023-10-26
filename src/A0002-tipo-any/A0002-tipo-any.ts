// Utilize any apenas em ultimo caso
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('asdf'));
console.log(showMessage([1, 2, 3]));
console.log(showMessage(1));
