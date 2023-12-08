let form_cadastro = document.querySelector('#form_cadastro')
let linhas = ''

let email = document.querySelector('#contato_email')
let telefone = document.querySelector('#contato_telefone')

let email_array = []
let telefone_array = []

form_cadastro.addEventListener('submit', function (refresh_off) {
    refresh_off.preventDefault()


    adiciona_contato()
    atualiza_lista_contato()
})

function adiciona_contato() {
    if (email_array.includes(email.value)) {
        alert('Esse Email ja esta registrado')
    } else if (telefone_array.includes(telefone.value)) {
        alert('Esse Telefone ja esta incluso')
    }else{
        email_array.push(email.value)
        telefone_array.push(telefone.value)
        let linha_contato = `<tr>`
        linha_contato += `<td>${email.value}</td>`
        linha_contato += `<td>${telefone.value}</td>`
        linha_contato += `</tr>`

        linhas += linha_contato

        email.value = ''
        telefone.value = ''
    }

}

function atualiza_lista_contato() {
    let corpo_contato = document.querySelector('tbody')
    corpo_contato.innerHTML = linhas
}