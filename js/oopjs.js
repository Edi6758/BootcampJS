class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor){
        if(valor > this.saldo) {
            return "Operação negada"
        }
        this.saldo = this._saldo - valor

        return this._saldo
    }

    depositar(valor) {
        this.saldo = this._saldo + valor
    }
}

class ContaCorrente {
    construtor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo)
        this.tipo = 'corrente'
        this.cartaoCredito = this.cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca {
    construtor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        this.tipo = 'poupanca'

    }
}

class ContaUniversitaria {
    construtor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        this.tipo = 'universitaria'

    }

    sacar(valor) {
        if(valor > 500) {
            return "operação inválida"
        }

        this._saldo = this._saldo - valor
    }
}