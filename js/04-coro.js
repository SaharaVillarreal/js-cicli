// Traccia 04 · Il coro dello stadio
// La consegna è nel README, alla voce "04 · Il coro dello stadio".

/*
  STEPS
  1 - Chiedere una parola per il coro (prompt).
  2 - Dopo chiedere un numero (prompt).
  3 - La parola si deve ripetere un numero di volte che ha inserito l'usuario. (for)
  4 - Se non si inserire (null se non si inserice niente).
  5 - Mostrare un alert dopo il ciclo che mostre la parole tutte le fonte che le ha ripetuto 
  es. 5 volte -> parola 'Raaa!!' alert('Raaa!!' 'Raaa!!' 'Raaa!!' 'Raaa!!' 'Raaa!!');
*/

// # Fase di preparazione

const parola = prompt('Inserisci una parola per il coro:');
const numero = parseInt(prompt('Inserisci un numero:'));

if(parola !== null && parola.trim() === ''){
  console.log(null);
}else{
  let coro = '';
  for(let i = 1; i <= numero; i++){
  console.log(i + ' · ' + parola);
  coro += parola + ' ';
}
alert(coro);
}