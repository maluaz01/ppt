var micontador=parseInt(0), t800contador=parseInt(0);
var minumero=0, t800numero=0;
var mipuntaje=0 , t800puntaje=0;

function pipati(){
setTimeout(function(){
  const piedra=document.getElementById("piedra");
    piedra.style.display='inline';
}, 1000);
setTimeout(function(){
  const papel=document.getElementById("papel");
    papel.style.display='inline';
}, 1500);
setTimeout(function(){
  const tijera=document.getElementById("tijera");
    tijera.style.display='inline';
}, 2000);
}


function comoTe(){

  var nombre=prompt('¿Cómo te llamás?');
  if(nombre=="" || nombre==null || nombre == false){
    window.location="stonepaper.html";
  }
  const tunombre=document.getElementById("tunombre");
    tunombre.innerHTML=nombre;
}

function misDibujos(palabra){

  if(palabra=="piedra"){

  let randa =0;
  const piedrita=document.getElementById('propia');
  piedrita.src='../imagenes/piedraizq.jpg';
  piedrita.style.display='inline';
  const ppt=document.getElementById('ppt');
  ppt.style.display='none';
  const reseti=document.getElementById('reseti');
  reseti.style.display='inline';

  var uno=1;
  randa=randoma();
  if(uno==randa){
    alert('nada');
  }
  if((uno<randa) && (randa!=3)){ //piedra para mí y papel para t800
    alert ('para él');
    const t8=document.getElementById('t800contador');
    t8.innerHTML=parseInt(t8.innerHTML) + parseInt(1);
    if(t8.innerHTML==3){
      perdiste();
    }
  }

  if((uno<randa) && (randa==3)){ //piedra para mí y tijera para t800
    alert ('para mí');
    const mipun=document.getElementById('micontador');
    mipun.innerHTML=parseInt(mipun.innerHTML) + parseInt(1);
    if(mipun.innerHTML==3){
      ganaste();
    }
    }
}
if(palabra=="papel"){

    let rando =0;
    const papelito=document.getElementById('propia');
    papelito.src='../imagenes/papelizq.jpg';
    papelito.style.display='inline';
    const ppt=document.getElementById('ppt');
    ppt.style.display='none';
    const reseti=document.getElementById('reseti');
    reseti.style.display='inline';

    randoma();
    var dos=2;

    rando=randoma();
    if(dos==rando){
      alert('nada');

    }
    if((dos<rando) && (rando==3)){ //piedra para mí y papel para t800
      alert ('para él');
      const t8=document.getElementById('t800contador');
      t8.innerHTML=parseInt(t8.innerHTML) + parseInt(1);
      if(t8.innerHTML==3){
        perdiste();
      }
    }
    if((dos>rando) && (dos!=3)){ //piedra para mí y tijera para t800
    alert ('para mí');
    const mipun=document.getElementById('micontador');
    mipun.innerHTML=parseInt(mipun.innerHTML) + parseInt(1);
    if(mipun.innerHTML==3){
      ganaste();
    }
    }
}
if(palabra=="tijera"){
    let randu=0;

    const tijerita=document.getElementById('propia');
    tijerita.src='../imagenes/tijeraizq.jpg';
    tijerita.style.display='inline';
    const ppt=document.getElementById('ppt');
    ppt.style.display='none';
    const reseti=document.getElementById('reseti');
    reseti.style.display='inline';

    var tres=3;
    randu=randoma();
    if(tres==randu){

    }
    if((tres>randu) && (randu==1)){ //piedra para mí y papel para t800
      alert ('para él');
      const t8=document.getElementById('t800contador');
      t8.innerHTML=parseInt(t8.innerHTML) + parseInt(1);
      if(t8.innerHTML==3){
        perdiste();
      }
    }
    if((tres>randu) && (randu!=1)){ //tijera para mí y papel para t800
      alert ('para mí');
      const mipun=document.getElementById('micontador');
      mipun.innerHTML=parseInt(mipun.innerHTML) + parseInt(1);
      if(mipun.innerHTML==3){
        ganaste();
      }
    }
}
}
function randoma(){
   t800numero=Math.floor(Math.random() * 3) + 1;
  if (t800numero==1){
    const t800=document.getElementById('t800');
    t800.style.display='inline';
    t800.src='../imagenes/piedrader.jpg'

    return t800numero;
  }
  if (t800numero==2){
    const t800=document.getElementById('t800');
    t800.style.display='inline';
    t800.src='../imagenes/papelder.jpg'

    return t800numero;
}
if (t800numero==3){
  const t800=document.getElementById('t800');
  t800.style.display='inline';
  t800.src='../imagenes/tijerader.jpg'

  return t800numero;
}

}
function ganaste(){
  setTimeout(function(){
    const t800=document.getElementById('t800');
    t800.style.display='inline';
    t800.src='../imagenes/regresare.gif';
    const fuiste=document.getElementById('propia');
    fuiste.src="../imagenes/ganaste.jpg";
    fuiste.style.display='inline';
    const tonbo1=document.getElementById('reseti');
    tonbo1.style.display='none';
    const tonbo2=document.getElementById('reiniciar');
    tonbo2.style.display='inline';
}, 10);
}

function perdiste(){
    setTimeout(function(){
      const t800=document.getElementById('t800');
      t800.style.display='inline';
      t800.src='../imagenes/hasta.gif';
      const fuiste=document.getElementById('propia');
      fuiste.src="../imagenes/perdiste.jpg";
      fuiste.style.display='inline';
      const tonbo1=document.getElementById('reseti');
      tonbo1.style.display='none';
      const tonbo2=document.getElementById('reiniciar');
      tonbo2.style.display='inline';

  }, 10);
  }

function denuevo(){
  var reseti=document.getElementById('reseti');
  reseti.style.display='none';

  pipati();
  const ppt=document.getElementById('ppt');
  ppt.style.display='inline';

}
function reiniciar(){
  window.location="eljuego.html";
}
