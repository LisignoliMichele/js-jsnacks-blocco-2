// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

var biciclette = [
   {
   marca: "bianchi",
   peso: 4000,
   colore: ["bianco", "azzurro"]
   },
   {
   marca: "grazziella",
   peso: 7000,
   colore: ["rosso", "nero"]
   },
   {
   marca: "schott",
   peso: 3000,
   colore: ["blu", "giallo"]
   },
];

var biciclettaLeggera = biciclette[0];

for (i = 0; i < biciclette.length; i++){
   if (biciclette[i].peso < biciclettaLeggera.peso){
      biciclettaLeggera = biciclette[i]
   }
}

console.log(biciclettaLeggera.marca)