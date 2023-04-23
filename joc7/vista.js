/**
 * Classe que s'encarrega de posar tots els missatges al jugador.
 */
export default class vista {
  /**
   * @param {Game}partida
   */
  constructor(partida) {
    this.partida = partida;
    this.exemple(this.partida);
    document.getElementById('prova').disabled = true;
    document.getElementById('plantarse').disabled = true;
  }

  /**
   * Funció que s'encarrega de cridar a les altres funcions
   * quan els botons són activats.
   * @param {Game}partida
   */
  exemple(partida) {
    document.getElementById('comencar').addEventListener('click', ()=> {
      partida.primera_carta_banca();
      partida.donarcarta();
      document.getElementById('comencar').style.display = 'none';
      document.getElementById('prova').disabled = false;
      document.getElementById('plantarse').disabled = false;
    });
    document.getElementById('prova').addEventListener('click', ()=> {
      partida.donarcarta();
    });
    document.getElementById('plantarse').addEventListener('click', ()=>{
      partida.canvi_torn();
    });
    document.getElementById('tornar_a_jugar').addEventListener('click', ()=>{
      location.reload();
    });
  }
}

/**
 * Funció que s'encarrega de posar per pantalla
 * que el jugador ha guanyat.
 */
export function guanyarJugador() {
  document.getElementById('resultat').innerHTML = 'Has guanyat';
  document.getElementById('prova').disabled = true;
  document.getElementById('plantarse').disabled = true;
  document.getElementById('resultat').disabled = true;
}

/**
 * Funció que s'encarrega de posar per pantalla
 * que el jugador ha perdut
 */
export function jugadorPerdut() {
  document.getElementById('resultat').innerHTML = 'Has perdut';
  document.getElementById('prova').disabled = true;
  document.getElementById('plantarse').disabled = true;
  document.getElementById('resultat').style.color = 'red';
}

/**
 * Funció que s'encarrega de posar per pantalla
 * que el jugador es passa.
 */
export function jugadorEsPassa() {
  document.getElementById('resultat').innerHTML = 'Thas passat';
  document.getElementById('prova').disabled = true;
  document.getElementById('plantarse').disabled = true;
}

/**
 * Funció per posar per pantalla les cartes
 * dels dos jugadors (màquina i jugador).
 * @param {String}ruta
 * @param {String}jugador
 */
export function afegirCartesJoc(ruta, jugador) {
  const imatge = document.createElement('img');
  imatge.src = ruta;
  const div = document.getElementById(jugador);
  div.appendChild(imatge);
}

/**
 * Funció per posar per pantalla els punts que té actualment el jugador.
 * @param {String}punts
 */
export function puntuacioJugador(punts) {
  document.getElementById('puntuacio_jugador').innerHTML = punts;
}
