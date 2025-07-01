 const img = document.querySelector('#img');
 const buttons = document.getElementById('buttons');
 let colorIndex = 0;
 let intervalID = null;


let trafficLight= (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
  
}

const nextIndex = () =>{
    colorIndex = colorIndex < 2? ++colorIndex : 0;
}

let changeColor = () =>{
    const colores = ['red', 'yellow', 'green']
    const color = colores[colorIndex];
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () =>{
    clearInterval( intervalID);
}

const turnOn = {
    'red': () => img.src = './imgs/vermelho.png',
    'yellow': () => img.src = './imgs/amarelo.png',
    'green': () => img.src = './imgs/verde.png',
    'automatic': () => intervalID =setInterval(changeColor, 1000)
}

 buttons.addEventListener('click', trafficLight)