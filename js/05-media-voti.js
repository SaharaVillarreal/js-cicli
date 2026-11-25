// Traccia 05 · La media dei voti
// La consegna è nel README, alla voce "05 · La media dei voti".

/*
  STEPS
  1 - Chiedere quanti voti ha preso l'utente (prompt).
  2 - Dipende della quantita di voti che ha presso chiedere un voto per volta
  es. quantita di voti -> 5, quindi dobbiamo chiedere 5 volte il voto che ha avuto. (prompt).
  3 - Dopo fare un'operazione per ottenere la media aritmetica (x), sommare tutti i dati e dopo dividere per la quantita di dati (4+5+5+7+1/5)
  4 -
*/

// # Fase di preparazione

const voti = Number(prompt('Quanti voti hai preso?'));
let somma = 0;
if(voti <= 0 || isNaN(voti) || voti === null){
  alert("Nussun voto da calcolare")
}else{
  for( let v = 1; v <= voti; v++){
  const voto = Number(prompt(`Punteggio di ${v} voto:`));
  console.log(voto);
  somma += voto;
}
  const media = somma / voti;
  console.log(media.toFixed(1));
}