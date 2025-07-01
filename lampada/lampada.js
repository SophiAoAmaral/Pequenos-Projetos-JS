let turnOn= document.getElementById('turnOn')
let turnOff = document.getElementById('turnOff')
let lamp = document.querySelector('#lamp')
let broken= document.getElementById('quebrar')
let concert = document.getElementById('consertar')

broken.addEventListener('click', quebrar)
turnOn.addEventListener('click', ligar)
turnOff.addEventListener('click', desligar)
lamp.addEventListener('mouseover', ligar)
lamp.addEventListener('mouseleave', desligar)
lamp.addEventListener('dblclick', quebrar)
concert.addEventListener('click', voltar)


function isLampBroken(){
    // Verifica se o nome 'quebrada' está no caminho da imagem; retorna true se a lâmpada estiver quebrada
    return lamp.src.indexOf('quebrada')> -1 // indexOf retorna a posição da palavra na string ou -1 se não encontrar

}

function ligar(){
// ! esta negando entao se lampbroken for true ele n executa
    if(!isLampBroken()){
    lamp.src = './imgs/ligada.jpg'
    }
}

function desligar(){
    if(!isLampBroken()){
    lamp.src = './imgs/desligada.jpg'
    }
}
function quebrar(){
    lamp.src = './imgs/quebrada.jpg'
}
function voltar(){
    if(isLampBroken()){
     lamp.src = './imgs/desligada.jpg'}

}

