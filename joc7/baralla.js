import Carta from './carta.js';

/**
 * Classe que crea una baralla i em els pals i els numeros.
 */
export default class Baralla {
  /**
   * Classe que crea una baralla i em els pals i els numeros.
   */
  constructor() {
    this.cartas = [];
  }

  /**
   * Funció per crear una baralla i ignorar els numeros 8 i 9.
   */
  crearbaralla() {
    for (const palo of Carta.pals) {
      for (const numero of Carta.numeros) {
        this.cartas.push(new Carta(numero, palo));
      }
    }
  }
}


