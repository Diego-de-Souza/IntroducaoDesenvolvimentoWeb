let corfundo = document.getElementById("corpo_p");
let corBlocoDados= document.getElementById("corpo_left");
let corBlocoSobre=document.getElementById("sobre_usuario");
let corBlocoExperiencia=document.getElementById("experiencia_usuario");
let corBlocoEducacao=document.getElementById("educacao_usuario");
let corBlocoRodape = document.getElementById("rodape_contato");
let corLetras = document.getElementsByTagName("h1")[0];
let corP = document.querySelectorAll("p");
let corLetras3 = document.querySelectorAll("h3");
let corLink = document.querySelectorAll("a");
let botaoON = true;

function mudaCor(){

    if(botaoON==true){
        corfundo.style.backgroundColor="#252525";    
        corBlocoDados.style.backgroundColor="#757575";
        corBlocoSobre.style.backgroundColor="#757575";
        corBlocoExperiencia.style.backgroundColor="#757575";
        corLetras.style.color="#fff";
        for(let x=0; x<7;x++){
            let corLetras2 = document.getElementsByTagName("h2")[x];
            corLetras2.style.color="#fff";
        }
        for(let x1=0;x1< (corP.length);x1++){
            corP[x1].style.color="#b1b1b1";
        }
        for(let x2=0;x2 < corLetras3.length;x2++){
            corLetras3[x2].style.color="#fff";
        }
        for(let x3=0;x3 < corLink.length;x3++){
            corLink[x3].style.color="rgba(214, 21, 21, 0.612)";
            corLink[x3].style.textShadow="0px 0px 1px black"
        }
        corBlocoEducacao.style.backgroundColor="#757575";
        corBlocoRodape.style.backgroundColor="#363636";
        botaoON=false;
    }else {
        corfundo.style.backgroundColor="#9775aa";    
        corBlocoDados.style.backgroundColor="#582a72";
        corBlocoSobre.style.backgroundColor="#582a72";
        corBlocoExperiencia.style.backgroundColor="#582a72";
        corLetras.style.color="#000";
        for(let x=0; x<7;x++){
            let corLetras2 = document.getElementsByTagName("h2")[x];
            corLetras2.style.color="#000";
        }
        for(let x1=0;x1< (corP.length);x1++){
            corP[x1].style.color="#000";
        }
        for(let x2=0;x2 < corLetras3.length;x2++){
            corLetras3[x2].style.color="#000";
        }
        for(let x3=0;x3 < corLink.length;x3++){
            corLink[x3].style.color="#000";
        }
        corBlocoEducacao.style.backgroundColor="#582a72";
        corBlocoRodape.style.backgroundColor="#260339";
        botaoON=true;
    }
}