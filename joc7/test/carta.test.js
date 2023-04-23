/* eslint-disable */
import Game from "../game.js";
import Carta from '../carta.js';
import Baralla from "../baralla.js";
import Jugadors from "../jugadors.js";

describe('carta', ()=>{
    test("Unit test del constructor", () => {
        const carta = new Carta(Carta.numeros[0], Carta.pals[0])
        expect(carta.pal).toBe("oros");
        expect(carta.numero).toBe(1);
        expect(carta.punts).toBe(1);

        const carta2 = new Carta(Carta.numeros[8], Carta.pals[0])
        expect(carta2.pal).toBe("oros");
        expect(carta2.numero).toBe(11);
        expect(carta2.punts).toBe(0.5);
    });
});

describe('Baralla', ()=>{
    test("Test llargada de la baralla",()=>{
        const probabaralla = new Baralla();
        probabaralla.crearbaralla();
        expect(probabaralla.cartas.length).toBe(40);
    });
});
describe(Jugadors,()=>{
    test("Test creacio de cartes jugador",()=>{
        const probajugador = new Jugadors([], 0, 100);
        expect(probajugador.ma.length).toBe(0);
        expect(probajugador.punts).toBe(0);
        expect(probajugador.diners).toBe(100);
    });
});
describe(Game,()=>{
    test("Test per comprovar que la partida es crea correctament",()=>{
        const probabaralla = new Baralla();
        const probajugador = new Jugadors([], 0, 100);
        const probamaquina = new Jugadors([], 0,1000);
        const probapartida = new Game(probabaralla,probajugador,probamaquina,0);
        expect(probabaralla.cartas.length).toBe(0);
        expect(probajugador.punts).toBe(0);
        expect(probajugador.ma).toBe(0);
        expect(probajugador.diners).toBe(100);
    })
})


