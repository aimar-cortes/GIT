import Calculadora from "./model.js";

const calculadora = new Calculadora();

function display(val){
    document.getElementById('display_val').value = val;
}

export function set(val){
    display(calculadora.set(val));
}

export function set_op(op) {
    calculadora.operator = op;
}

export function set_point() {
    display(calculadora.set_point(calculadora));
}

export function equal() {
    display(calculadora.operate());
}

export function clr() {
    calculadora.clear()
    display('');
}
