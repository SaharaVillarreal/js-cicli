/*
STEPS
1. Chiedi all'utente a quale piano desidera andare.
2. Verifica se il numero inserito è valido (non testo, non negativo, non vuoto).
3. Se non è valido, visualizza un avviso ed esci.
4. Se è valido, conta dal piano 0 al piano scelto, visualizzando ogni piano nella console, e infine avvisa l'utente che è arrivato a destinazione.
*/

// # Fase di preparazione
const messaggioErrore = 'Piano non valido';
let pianoAttuale = 0;

// # Fase di raccolta dati
const inputUtente = prompt('A che piano vuoi andare?');
const pianoScelto = Number(inputUtente);

// # Fase di elaborazione & Output
if (inputUtente === null || inputUtente.trim() === '' || isNaN(pianoScelto) || pianoScelto < 0 || pianoScelto > 5) {
  alert(messaggioErrore);
} else {
  for (pianoAttuale = 0; pianoAttuale <= pianoScelto; pianoAttuale++) {
    console.log(`Piano ${pianoAttuale}`);
  }
  alert(`Sei arrivato al piano ${pianoScelto}`);
}