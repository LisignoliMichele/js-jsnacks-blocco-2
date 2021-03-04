// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var userNumber = parseInt(prompt("Please enter a number"));
if (userNumber % 2 == 0){
  alert("The number is even. your number:" + userNumber);
}else {
  alert("Your number was odd. this is right " + userNumber + 1);
}
