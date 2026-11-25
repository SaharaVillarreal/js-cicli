// Traccia 06 · Il lucchetto
// La consegna è nel README, alla voce "06 · Il lucchetto".

/*
  STEPS
  1 - Abbiamo valore (lucchetto) che ha una combinazione di (482).
  2 - Chiediamo la combinazione del lucchetto (prompt). finche non la indovina.
  3 - Per ogni volta che l'utente si sbaglia inserire nella console(Combinazione sbagliata)
  ma continuare a chiedere la combinazione finche la persona non inserisca la combinazione giusta
  4 -Quando sia giusta mostrare un alert(Lucchetto aperto!);
*/

// # Fase di preparazione
const lucchetto = "482";
let combinazione = "";

while (combinazione !== lucchetto) {
  combinazione = prompt("Inserisci la combinazione del lucchetto:");

  if (combinazione !== lucchetto) {
    console.log("Combinazione sbagliata, riprova");
  }
}
alert("Lucchetto aperto!");