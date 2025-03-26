class Loja{
    constructor(){
        this.assinantes = []
    }
    assinar(user){
        this.assinantes.push(user)
    }
    cancelarAssinatura(){
        //remov user from assinantes
    }
    noticarAssinantes(novaMSG){
        this.assinantes.forEach(assinantes => assinantes.update(novaMSG))
    }
}

class pessoa{
    constructor(nome){
        this.nome = nome
    }
    update(novaMSG){
        console.log(`${this.nome}, Nova mensagem: ${novaMSG}`)
    }
}

const loja = new Loja()
const Pessoa = new pessoa('Ramon')

loja.assinar(Pessoa)
loja.noticarAssinantes('LANÇOU!')