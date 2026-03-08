// les variables dont a besoin
var sp, btn_strart, btn_stop, t, ms, s, mn, h;

//fonction pour initialiser les variabless

window.onload = function(){
    sp=document.getElementsByTagName('span');
    btn_strart=document.getElementById('start')
    btn_stop= document.getElementById('stop')
    t;
    ms=0,s=0,mn=0,h=0;
}

//compteur

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1
        s+=1
    }
    if(s==60){
        s=0;
        mn+=1
    }
    if(mn==60){
        mn=0
        h+=1
    }
    //insertion ds valeurs dans les spans
    //[0] permet de selectionner le premier span
    //[1]
    sp[0].innerHTML = h+ "h";
    sp[1].innerHTML = mn+ "mn";

    sp[2].innerHTML = s+ "s";

    sp[3].innerHTML = ms+ "ms";
    
}

// fonction des bouttons

//button starts

function start(){
    t=setInterval(update_chrono,100) // elle permet d'executer Upgrade toute les 100ms

    btn_strart.disable = true;
}

//button stop

function stop(){
    clearInterval(t)//supprime l'interval t que nous avons créer
    btn_strart.disable = false
}
//button reintialiser

function reset(){
    clearInterval(t)
    btn_strart.disable = false
    ms =0, s=0,mn=0, h=0; // reintialise
    
    sp[0].innerHTML = h+ "h";
    sp[1].innerHTML = mn+ "mn";
    sp[2].innerHTML = s+ "s";
    sp[3].innerHTML = ms+ "ms";
}