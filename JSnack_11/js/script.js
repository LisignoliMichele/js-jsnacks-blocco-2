// Generatore di “nomi cognomi” casuali:
// prendendo una listadi nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.
var names = ["Michele", "Erica", "Jacopo", "Valentina", "Alfredo", "Lorena"];
var surNames = ["Acquistapace", "Lisignoli", "Capelli", "Ratti", "Balgera", "Rossi"];

var invitedList = [];
for (var i = 1; i <= 3; i++){
  var randomName = names[Math.floor(Math.random() * names.length)];
  var randomsurName = surNames[Math.floor(Math.random() * surNames.length)];
  invitedList.push(randomName + " " + randomsurName)
}
console.log(invitedList)
