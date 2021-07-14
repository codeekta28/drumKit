console.log("This is index.js file");
let clap = new Audio('sounds/sounds_clap.wav');
let hihat = new Audio('sounds/sounds_hihat.wav');
let kick = new Audio('sounds/sounds_kick.wav');
let openhat = new Audio('sounds/sounds_openhat.wav');
let boom = new Audio('sounds/sounds_boom.wav');
let ride = new Audio('sounds/sounds_ride.wav');
let snare = new Audio('sounds/sounds_snare.wav');
let tom = new Audio('sounds/sounds_tom.wav');
let tink = new Audio('sounds/sounds_tink.wav');

document.addEventListener("keydown",(e)=>{
    if(e.keyCode===65){
        clap.play();
        console.log("A pressed");
    }else if(e.keyCode===83){
        hihat.play();
        console.log("s pressed");   
    }else if(e.keyCode===68){
        kick.play();
        console.log("d pressed");  
    }else if(e.keyCode===70){
        openhat.play();
        console.log("f pressed"); 
    }else if(e.keyCode===71){
        boom.play();
        console.log("g pressed"); 
    }else if(e.keyCode===72){
        ride.play();
        console.log("h pressed"); 
    }else if(e.keyCode===74){
        snare.play();
        console.log("j pressed"); 
    }else if(e.keyCode===75){
        tom.play();
        console.log("k pressed"); 
    }else if(e.keyCode===76){
        tink.play();
        console.log("l pressed"); 
    }
})