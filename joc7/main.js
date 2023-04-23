import Game from './game.js';
import Vista, {
  afegirCartesJoc,
  guanyarJugador,
  jugadorEsPassa,
  jugadorPerdut,
  puntuacioJugador,
} from './vista.js';
import Jugadors from './jugadors.js';
import Baralla from './baralla.js';

const jugador = new Jugadors([], 0, 100);
const maquina = new Jugadors([], 0, 1000);
const baralla = new Baralla();
baralla.crearbaralla();
const partida = new Game(baralla, jugador, maquina, 0);
new Vista(partida);
window.onload = function() {
  partida.barrejar();
  console.log(partida);
};

/**
 * Continuació de la funció de game.js, per dir que el jugador ha guanyat.
 */
export function guanyar() {
  console.log('guanyat');
  guanyarJugador();
}

/**
 * Continuació de la funció de game.js, per dir que la banca ha guanyat.
 */
export function perdut() {
  jugadorPerdut();
}

/**
 * Continuació de la funció de game.js, per dir que el jugador s'ha passat.
 */
export function shaPassat() {
  jugadorEsPassa();
}

/**
 * Funció per afegir la carta per pantalla.
 * @param {string}ruta
 * @param {string}jugador
 */
export function afegirCarta(ruta, jugador) {
  afegirCartesJoc(ruta, jugador);
}

/**
 * Funció per posar per pantalla el missatge de resultat.
 * @param {String}punts
 */
export function puntuacioTotal(punts) {
  puntuacioJugador(punts);
}
