/* VALIDAÇÃO DO FORMULÁRIO */

const botaoSubmit = document.getElementById('btnEnviarId')
const validacaoEmail = document.getElementById('emailUserId')

  
/* Máscara CPF */

function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}
        
function fMascEx() {
    obj.value=masc(obj.value)
}

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}



/* Evento para validação se foi digitado algum caracter */
botaoSubmit.addEventListener("click", ()=>{
    const camposObrigatorios = document.querySelectorAll("input[name='nmUser'],input[name='generoUser'],input[name='dtNascimentoUser'], textarea")

    for (let x = 0; x < camposObrigatorios.length ; x++){
        if (camposObrigatorios[x].value == ""){
            alert("O CAMPO " + camposObrigatorios[x].placeholder + " não foi preenchido!")
            return false
        }
        
    }

    /* Evento para validação do e-mail */
    if (validacaoEmail.value == "" || validacaoEmail.value.indexOf('@')==-1 || validacaoEmail.value.indexOf('.com' || '.com.br')==-1){
        alert( "Por favor, informe um E-MAIL válido!" );
               return false
    }
    /* Validação CPF */
    var ValidaCPF = document.getElementById("cpfUserId").value 
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/	 
    if(cpfValido.test(ValidaCPF) == false){
        alert("CPF Inválido, insira um CPF válido")
        return false
    }
    
    
    /* Enviar formulário */

    document.querySelector('.cadastro').submit()
    
    
})




 