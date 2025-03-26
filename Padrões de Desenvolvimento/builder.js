class Hamburger{
    constructor(pao, carne, queijo, salada, molho){
        this.pao = pao
        this.carne = carne
        this.queijo = queijo
        this.salada = salada
        this.molho = molho
    }
    getDescricao(){
        return `Hamburguer: ${this.pao}, ${this.carne}, ${this.queijo}, ${this.salada? 'com salada' : 'sem salada'}, ${this.molho}`
    }
}

const burguer = new Hamburger('trigo', 'frango', 'prato', false, 'maionese lisa')

class HamburguerBilder{
    constructor(){
        this.pao = 'brioche'
        this.carne = 'costela'
        this.queijo = 'suiço'
        this.salada = true
        this.molho = 'maionese verde'    
    }
    setPao (pao) {
        this.pao = pao
        return this
    }
    setQueijo (queijo) {
        this.queijo = queijo
        return this
    }
    setSalada (salada) {
        this.salada = !this.salada
        return this
    }
    setMolho (molho) {
        this.molho = molho
        return this
    }
    setCarne (carne) {
        this.carne = carne
        return this
    }
}

const burguer2 = new HamburguerBilder()
burguer2.setPao('integral')
burguer2.setMolho('barbecue')
console.log(burguer2)