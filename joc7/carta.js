/**
 * Classe on hi han les especificacions de la carta.
 */
export default class Carta {
  static pals = ['oros', 'copas', 'espadas', 'bastos'];
  static numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

  /**
   * @param {number}numero
   * @param {String}pal
   */
  constructor(numero, pal) {
    this.numero= numero;
    this.pal = pal;
    this.punts = this.numero >= 10 ? 0.5 : this.numero;
  }
}
