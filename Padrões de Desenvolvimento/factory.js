class Notificacao{
    enviarNotif(mensagem){
        console.log(mensagem)

    }
}

class NotificacaoSMS{
    eenviarNotif(mensagem){
        console.log(`mensagem via SMS ${mensagem}`)
    }
}

class NotificacaoEmail{
    enviarNotif(mensagem){
        console.log(`mensagem via EMAIL ${mensagem}`)
    }
}
class FactoryNotificacao{
    static createNotificacao(tipo){
        switch(tipo){
            case 'SMS':
                return new NotificacaoSMS()
            case 'EMAIL':
                return new NotificacaoEmail()
            default:
                throw new Error("Inválido")
        }
    }
}
const notif = new NotificacaoEmail()
notif.enviarNotif('Teste')

const notif2 = FactoryNotificacao.createNotificacao('EMAIL').enviarNotif('teste2')