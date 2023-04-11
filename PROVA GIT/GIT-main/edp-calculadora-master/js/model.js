import { calculate } from './utils.js';

export default class Calculadora {
    constructor() {
        this.value1 = undefined;
        this.value2 = undefined;
        this.operator = undefined;
    }

    set(val) {
        if (this.operator === undefined) {
            if (this.value1 === undefined)
                this.value1 = val.toString();
            else
                this.value1 += val.toString();
            return this.value1;
        } else {
            if (this.value2 === undefined)
                this.value2 = val.toString();
            else
                this.value2 += val.toString();
            return this.value2;
        }
    }

    set_point() {
        if(this.operator === undefined) {
            if(this.value1 === undefined)
                this.value1 = '0.';
            else if(this.value1.toString().indexOf('.') === -1)
                this.value1 += '.';

            return this.value1;
        }
        else {
            if(this.value2 === undefined)
                this.value2 = '0.';
            else if(this.value2.toString().indexOf('.') === -1)
                this.value2 += '.';

            return this.value2;
        }
    }

    operate() {
        // Si només hi ha valor1, retorna'l
        if(this.value2 === undefined && this.operator === undefined && this.value1 !== undefined) {
            this.value2 = undefined;
            this.operator = undefined;
            return this.value1;
        }

        // Si no s'ha definit l'operador, retorna el segon valor
        if(this.value2 !== undefined && this.operator === undefined && this.value1 !== undefined) {
            this.value1 = this.value2;
            this.value2 = undefined;
            this.operator = undefined;
            return this.value2;
        }

        // Si hi ha algun valor per definir, retorna error
        if(this.value1 === undefined || this.value2 === undefined || this.operator === undefined) {
            this.value1 = undefined;
            this.value2 = undefined;
            this.operator = undefined;
            return 'Error';
        }

        let a = parseFloat(this.value1);
        let b = parseFloat(this.value2);

        const result = calculate(a, b, this.operator);

        this.value1 = result;
        this.value2 = undefined;
        this.operator = undefined;
        return result;
    }

    clear() {
        this.value1 = undefined;
        this.value2 = undefined;
        this.operator = undefined;
    }
}

