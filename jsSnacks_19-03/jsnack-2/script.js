// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




// array di oggetti squadre
var squadre = [
{
   nome: "juventus",
   punti: "",
   falli: ""
},
{
   nome: "milan",
   punti: "",
   falli: "" 
},
{
   nome: "roma",
   punti: "",
   falli: ""
},
{
   nome: "atalanta",
   punti: "",
   falli: ""
}
];

// generatore numrei random
function numeroRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min
 }

// aggiungo numero random per punti ad ogni oggetto
for (i = 0; i < squadre.length; i++) {
   numero = numeroRandom(1, 100);
   squadre[i].punti = numero;
   console.log(squadre[i].punti)
}
// aggiungo numero random per falli ad ogni oggetto
for (i = 0; i < squadre.length; i++) {
   numero = numeroRandom(1, 100);
   squadre[i].falli = numero;
}
// creo un array con i punteggi finali
var punteggi = [];
for (i = 0; i < squadre.length; i++) {
   punteggi.push({
      nome: squadre[i].nome,
      falli: squadre[i].falli
   });
}
console.log(punteggi);