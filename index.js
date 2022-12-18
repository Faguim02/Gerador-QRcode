var Qr = document.querySelector('#QR')

Gerar=()=>{
    var valor = document.querySelector('#valor')
    if(valor.value == '') return valor.value = 'https://portifolio-faguim-02.netlify.app/'
    Qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${valor.value}`
}