import contactForm from '../../api/contactForm'

const actions = {
    async postMessage(context,payload) {
        const Response = await contactForm.post('/messages.json',payload);
        Response.status == 200 ? alert('Mesajınız Başarılı Bir Şekilde Gönderildi') : alert('Mesajınız Gönderilemedi , Lütfen Daha Sonra Tekrar Deneyin')
    }
}

export default {
    actions
}