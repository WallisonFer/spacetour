

const botaoSubmit = document.getElementById('btnEnviarId')

botaoSubmit.addEventListener("click", ()=>{
    const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='number'],input[type='date'], textarea")

    for (let x = 0; x < campos.length ; x++){
        if (campos[x].value == ""){
            alert("O CAMPO " + campos[x].placeholder + " não foi preenchido!")
        }
    }

    document.querySelector('.cadastro').submit()
})