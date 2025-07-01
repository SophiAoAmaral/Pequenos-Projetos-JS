
let calcular =  document.querySelector('#calcular')



calcular.addEventListener('click', imc)

function imc() {
    let nome = document.querySelector('#nome').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let res = document.querySelector('#resultado')

    if (nome !== '' && peso !== '' && altura !== '') {
       let valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso'

        } else if (valorImc < 25) {
            classificacao = 'esta com o peso ideal. Parabens!!'
        } else if (valorImc <30){
            classificacao = 'levemente acima do peso'
        }else if(valorImc< 35){
            classificacao = 'voce esta com obesidade GRAU I'

        }else if(valorImc <40){
            classificacao = 'com obesidade GRAU II'
        }else{
            classificacao = 'obesidade morbida CUIDADO!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e voce esta ${classificacao}`

    } else {
        res.textContent = 'Preencha todos os campos'
    }
}