//LIMITA O TAMANHO DO PALCO DO JOGO
var altura = 0
var largura = 0
var vida = 1
var tempo = 10
var criaMosquitoTempo=1500

//escolha nivel
var nivel = window.location.search//search retorna a só a string a direita do ->?<-
nivel = nivel.replace('?','')//substitui os caracteres desejados

if(nivel === 'normal'){
//1500
var criaMosquitoTempo=1500
}else if(nivel === 'dificil'){
//1000
var criaMosquitoTempo=1000
}else if(nivel === 'hard'){
//750
var criaMosquitoTempo=750
}
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}

ajustaTamanhoPalcoJogo()

//cronometro, tempo que deve se manter vivo/ Limpar a função interVal -> clearInterval
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        document.location.href='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML= tempo
    }
},1000)

//dinamismo e imagem randomica, assim evitando o estouro da página

function posicaoRandomica(){
    //remover mosquito anterir caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()//remove o elemento selecionado
        
        if(vida > 3){
             window.location.href="fim_de_jogo.html"
        }else{
        //Tratar vidas
        document.getElementById('v'+vida).src="img/coracao_vazio.png"
        vida++
        }
       
    }
    var posicaoX = Math.floor(Math.random()*largura)-90
    var posicaoY = Math.floor(Math.random()*altura)-90

    posicaoX = posicaoX < 0 ? 0 :posicaoX
    posicaoY = posicaoY < 0 ? 0:posicaoY


    console.log(posicaoX,posicaoY)

    //criar o elemento html, criar elementos html de forma programatica e dinamica
    var mosquito = document.createElement('img')
    //posição mosca coordenadas dinamicas X e Y
    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio()+' '+ladoAleatorio()
    mosquito.style.left = posicaoX+ 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

//MUDANDO TAMANHO MOSQUITO
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//LADO ALEATORIO MOSQUITO
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}