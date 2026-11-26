// Bonus 1 · L'ascensore con while
// La consegna è nel README, alla voce "Bonus 1 · L'ascensore con while".

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
  while(pianoAttuale <= pianoScelto){
    console.log(`Piano ${pianoAttuale}`);
    pianoAttuale++
  }
  alert(`Sei arrivato al piano ${pianoScelto}`);
}
