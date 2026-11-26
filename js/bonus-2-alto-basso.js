// Bonus 2 · Troppo alto, troppo basso
// La consegna è nel README, alla voce "Bonus 2 · Troppo alto, troppo basso".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
// 1. Genera un numero intero casuale tra 1 e 100
const numeroSegreto = Math.floor(Math.random() * 100) + 1;

// Riga per la verifica (rimuovila o commentala quando hai finito di testare)
console.log("Numero segreto:", numeroSegreto);

let tentativi = 0;
let indovinato = false;

while (!indovinato) {
  const input = prompt("Indovina il numero da 1 a 100:");
  tentativi++;

  const numeroUtente = Number(input);
  if (input === null || input.trim() === "" || isNaN(numeroUtente)) {
    console.log("Scrivi un numero da 1 a 100");
    continue;
  }

  if (numeroUtente > numeroSegreto) {
    console.log("Troppo alto");
  } else if (numeroUtente < numeroSegreto) {
    console.log("Troppo basso");
  } else {
    indovinato = true;
    alert(`Indovinato in ${tentativi} tentativi!`);
  }
}

