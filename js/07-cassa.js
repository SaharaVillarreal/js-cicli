// Traccia 07 · La cassa del supermercato
// La consegna è nel README, alla voce "07 · La cassa del supermercato".

/*
  STEPS
  1 - Chiedere il prezzo del prodotto finche la persona non inserisca 0.
  2 - 
  3 -
  4 -
*/
const moneta = new Intl.NumberFormat('it-IT',{
  style: 'currency',
  currency: 'EUR'
})
let prodotti = 0;
let totale = 0;

while (true) {
  let input = prompt("Inserisci il prezzo del prodotto in euro (0 per terminare):");

  if (input === null || input.trim() === "" || isNaN(Number(input))) {
    console.log("Prezzo non valido");
    continue;
  }
  let prezzo = Number(input);
  if (prezzo === 0) {
    break;
  }
  if (prezzo < 0) {
    console.log("Prezzo non valido");
    continue;
  }
  prodotti++;
  totale += prezzo;
}

alert(`Prodotti: ${prodotti} · Totale: ${moneta.format(totale)}`);