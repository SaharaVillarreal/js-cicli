// Traccia 03 · Il listino dei biglietti
// La consegna è nel README, alla voce "03 · Il listino dei biglietti".

/*
  STEPS
  1 - Chiedere quanto costa un biglietto del pullman (prompt).
  2 - Dopo fare un ciclo che multiplica il numero da 1 a 10.
  3 - Affinché il ciclo funzioni, è necessario che venga svolta la seguente funzione.
  4 - Dopo questo ciclo si mostrara nella consola Quantità 1: 2€, Quantità 2: 4€, ecc.
*/

// # Fase di preparazione
const moneta = new Intl.NumberFormat('it-IT',{
  style: 'currency',
  currency: 'EUR'
});
const biglietto = parseInt(prompt('Quanto costa un biglietto del bus?'));

for(let n = 1; n <= 10; n++){
  const operazione = biglietto * n;
  console.log(moneta.format(operazione));
}