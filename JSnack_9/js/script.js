// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// ciclo FOR
var sum = 0;

for (var i = 1; i <= 5; i++){
  var number = parseInt(prompt("Please anter a number"));
  if ( !isNaN(number) ){
    sum +=number;
  }
}
alert("the ammount of all your numbers is: " + sum)


// ciclo WHILE

var sum = 0;
var i = 1;
var number;
while ( i <= 5 ){

  do{
    number = parseInt(prompt("Please anter the " + i + "* number"));
  }while( isNaN(number));

  sum +=number;
  i++
}
alert("the ammount of all your numbers is: " + sum);
