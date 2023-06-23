//variaveis globais

var altura = 0
var largura = 0



// recuperando altura e largura da janela
function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


//variaveis do mosquito

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura)-90
    var posicaoY = Math.floor(Math.random() * altura)-90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX,posicaoY)
    
    
    //criar elemento html
    
    var mosquito = document.createElement('img')
    mosquito.src= 'imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    
    document.body.appendChild(mosquito)
    tamanhoAleatorio()    
}


function tamanhoAleatorio(){
    var classe =Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return'mosquito1'
        case 1:
            return'mosquito2'
        case 2:
            return'mosquito3'
    }
}


