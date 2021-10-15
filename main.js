//Teste de referenciamento

console.log("Eureká!")

//Declaração de variaveis principais

const slide = document.querySelectorAll('.slide'), // const slide recebe do documento toda a seleção dos itens de( dentro de ('') ) classe slider
      dot = document.querySelectorAll('.dot'); // const dot recebe do documento toda a seleção dos itens de( dentro de ('') ) classe dot

let cont = 1;// let cont recebe 1

slidefun(cont);//Chamada da função slidefun()

let timer = setInterval(autoslide, 8000);// let timer recebe o intervalo de 8000 execute autoslide

//Declaração de Funções

function autoslide() {//Função slide automatico

    cont += 1;//cont recebe ele mesmo + 1
    slidefun(cont);//Chamada da func slidefun sobre cont

}


function adicSlide(n) {//Função adicionar slide

    cont += n;//cont recebe ele mesmo + n
    slidefun(cont);//Chamada da func slidefun sobre cont
    resetTimer()//Chamada da func resetTimer

}


function slideAtual(n) {//Função slide atual

    cont = n;//cont recebe n
    slidefun(cont);//Chamada da func slidefun sobre cont
    resetTimer();//Chamada da func resetTimer()

}


function resetTimer() {//Função resetar timer do slide

    clearInterval(timer);//Limpe o intervalo de (no caso "limpe o conteudo de") timer
    timer = setInterval(autoslide, 8000);//timer recebe o intervalo em que a cada 8000 faça autosilde

}


function slidefun(n) {//Função troca de atributos do slide

    let i;// let i não recebe nada

    //apartir de i que recebe 0, se enquanto quantidade de slide for maior que i, faça i++, e faça

    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";//A posição i em slide vai receber o atributo style com a regra display = "none"
    }

    //apartir de i que recebe 0, se quantidade de dot for maior que i, faça i++, e faça 

    for(i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');//A posição i em dot terá o atributo active removido
    }

    //Se n for maior que a quantide de slide faça

    if(n > slide.length){
        cont = 1;//Const cont recebe 1
    }

    //Se n menor que 1 faça

    if(n < 1) {
        cont = slide.length;//cont recebe a quantidade de slide
    }

    slide[cont - 1].style.display = "block";//A posição resultante do calc (cont - 1) dentro de slide recebe o atributo style com a regra display = "block"
    dot[cont - 1].classList.add('active');//A posição resultante do calc (cont - 1) dentro de dot terá a classe active adicionada 

}

