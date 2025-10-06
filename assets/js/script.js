/* 
   Calcolo del prezzo del biglietto del treno:
    - Chiedere i km da percorrere
    - Chiedere l'età del passeggero
    - Calcolare il prezzo base (0.21 € al km)
    - Applicare eventuali sconti:
        - 20% per i minorenni (<18)
        - 40% per gli over 65 (>=65)
    - Mostrare il prezzo finale con due decimali
*/


/* Chiedo i chilometri da percorrere all'utente */
let km = Number(prompt('Quanti chilometri vuoi percorrere?'));

/* Chiedo l'età del passeggero */
let eta = Number(prompt('Quanti anni ha il passeggero?'));

/* Prezzo base al km */
const prezzoKm = 0.21;

/* Calcolo il prezzo base */
let prezzoBase = km * prezzoKm;

/* Inizializzio la variabile  dello sconto */
let sconto = 0;

/* Verifico l'età per applicare lo sconto */
if (eta < 18) {
    sconto = 0.20; // 20% di sconto
} else if (eta >= 65) {
    sconto = 0.40; // 40% di sconto
}

/* Calcolo il prezzo finale applicando lo sconto */
let prezzoFinale = prezzoBase * (1 - sconto);

/* Arrotondo a due decimali */
let prezzoArrotondato = Math.round((prezzoFinale + Number.EPSILON) * 100) / 100;

/* Mostro il prezzo finale all'utente */
alert(`Il prezzo del biglietto è: €${prezzoArrotondato.toFixed(2)}`);
