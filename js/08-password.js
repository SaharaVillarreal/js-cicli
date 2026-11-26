// Traccia 08 · La password in 3 tentativi
// La consegna è nel README, alla voce "08 · La password in 3 tentativi".
// possiamo usare for, while, do while.
/*
  STEPS
  1 - La password è (segreta26).
  2 - L'utente ha tre tentativi. solo tre volte per chiedere la password
  3 - Ogni tentativo stampa un console.log (Password errata. Tentativi rimasti: 2)
  4 - Se indovina dentro i tre tantativi mostrare un alert(benvenuto)
  5 - Se non riesce mostrare un alert(Bloccato).
*/

// # Fase di preparazione
const password = 'segreta26';
let tentativo;
let indovinato = false;

for (let t = 2; t >= 0; t--) {
  tentativo = prompt("Inserire la password:");
  
  if (tentativo === password) {
    indovinato = true;
    alert("Benvenuto");
    break; // Esce subito dal ciclo
  } else {
    console.log(`Password errata. Tentativi rimasti: ${t}`);
  }
}
if (!indovinato) {
  alert("Bloccato");
  console.log(indovinato)
}

// while(tentativo !== password)
//   alert('Benvenuto')