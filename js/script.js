

const botaoSubmit = document.getElementById('btnEnviarId')
const validacaoEmail = document.getElementById('emailUserId')

/* Evento para validação se foi digitado algum caracter */
botaoSubmit.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'],input[type='number'],input[type='date'], textarea")

    for (let x = 0; x < campos.length ; x++){
        if (campos[x].value == ""){
            alert("O CAMPO " + campos[x].placeholder + " não foi preenchido!")
        }
        
    }
    if (validacaoEmail.value == "" || validacaoEmail.value.indexOf('@')==-1 && validacaoEmail.value.indexOf('.')==-1){
        alert( "Por favor, informe um E-MAIL válido!" );
               return false
    }   

    document.querySelector('.cadastro').submit()
    return true
    
})

/* Evento para validação do e-mail */


 