import {afegirCarta, guanyar, puntuacioTotal, shaPassat} from './main.js';
import {perdut} from './main.js';

/**
 * Classe que hi ha totes les funcions del joc.
 */
export default class Game {
  /**
     *
     * @param {Baralla} baralla
     * @param  {Jugadors}player
     * @param {Jugadors}computer
     * @param {number}contador
     */
  constructor(baralla, player, computer, contador) {
    this.baralla= baralla;
    this.jugador = player;
    this.banca = computer;
    this.contador = contador;
  }

  /**
     * Funcio que s'activa llavors de plantarsei fa jugar a la màquina.
     */
  canvi_torn() {
    if (this.banca.punts >= this.jugador.punts) {
      this.banca_guanya();
    } else {
      const LlargadaArrayBanca = this.baralla.cartas.length;
      const aleatori = Math.floor(Math.random() * (LlargadaArrayBanca));
      const carta = this.baralla.cartas[aleatori];
      const valor = this.baralla.cartas[aleatori].punts;
      this.baralla.cartas.splice(aleatori, 1);
      this.banca.ma.push(carta);
      const pal = this.banca.ma[this.contador].pal;
      const numero = this.banca.ma[this.contador].numero;
      const ImageBanca = `./assets/images/${pal}/${pal}_${numero}.jpg`;
      afegirCarta(ImageBanca, 'cartes_maquina');
      this.contador++;
      this.banca.punts = this.banca.punts + valor;
      this.puntuacio_banca = this.banca.punts;
      if (this.puntuacio_banca < this.puntuacio_total) {
        this.canvi_torn();
      } else if (this.puntuacio_banca > 7.5) {
        this.jugador_guanya();
      } else {
        this.guanyador_final(this.puntuacio_total, this.puntuacio_banca);
      }
    }
  }

  /**
   * Funció encarregada de barrejar la baralla.
   */
  barrejar() {
    for (let i = this.baralla.cartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const Barrejada = this.baralla.cartas;
      [Barrejada[i], Barrejada[j]] = [Barrejada[j], Barrejada[i]];
    }
  }

  /**
   *Funció encarregada de donar les cartes al jugador.
   */
  donarcarta() {
    const LlargadaArray = this.baralla.cartas.length;
    const aleatori = Math.floor(Math.random()*(LlargadaArray));
    const llargada = this.baralla.cartas[aleatori];
    const valor = this.baralla.cartas[aleatori].punts;
    console.log(this.baralla);
    console.log(this.jugador.ma);
    this.baralla.cartas.splice(aleatori, 1);
    this.jugador.ma.push(llargada);
    this.jugador.punts = this.jugador.punts + valor;
    this.puntuacio_total = this.jugador.punts;
    const pals = this.jugador.ma[this.contador].pal;
    const numero = this.jugador.ma[this.contador].numero;
    const image = `./assets/images/${pals}/${pals}_${numero}.jpg`;
    afegirCarta(image, 'cartes_jugador');
    puntuacioTotal(this.puntuacio_total);
    this.revisar_puntuacio(this.puntuacio_total);
    this.contador++;
  }

  /**
   * Funció encarregada de revisar la puntuació
   * del jugador que no es passi de 7.5.
   * @param {Jugadors}punts
   */
  revisar_puntuacio(punts) {
    if (punts > 7.5) {
      this.perdre();
    }
  }

  /**
   * Funció encarregada de revisar la puntuacio
   * de la màquina i el jugador i decidir qui guanya.
   * @param {Jugadors} jugador
   * @param {Jugadors} banca
   */
  guanyador_final(jugador, banca) {
    if (jugador > banca) {
      this.jugador_guanya();
    } else if (jugador === banca) {
      this.banca_guanya();
    } else {
      this.banca_guanya();
    }
  }

  /**
   * Funció que s'encarrega d'anar al
   * fitxer main.js i escriure per pantalla que la banca guanya.
   */
  banca_guanya() {
    perdut();
  }

  /**
   *Funció que s'encarrega d'anar al
   * fitxer main.js i escriure per pantalla que el jugador guanya.
   */
  jugador_guanya() {
    guanyar();
  }

  /**
   * Funció que s'encarrega d'anar al
   * fitxer main.js i escriure per pantalla que el jugador s'ha passat.
   */
  perdre() {
    shaPassat();
  }

  /**
   * Funció que s'encarrega de donar la primera carta a la banca
   * i activar les altres funcions.
   */
  primera_carta_banca() {
    const LlargadaArrayBancaPrimera = this.baralla.cartas.length;
    const aleatori = Math.floor(Math.random()*(LlargadaArrayBancaPrimera));
    const carta = this.baralla.cartas[aleatori];
    const valor = this.baralla.cartas[aleatori].punts;
    this.baralla.cartas.splice(aleatori, 1);
    this.banca.ma.push(carta);
    this.banca.punts = this.banca.punts + valor;
    const pals = this.banca.ma[this.contador].pal;
    const numero = this.banca.ma[this.contador].numero;
    const ImageBancaPrimer = `./assets/images/${pals}/${pals}_${numero}.jpg`;
    afegirCarta(ImageBancaPrimer, 'cartes_maquina');
  }
}
