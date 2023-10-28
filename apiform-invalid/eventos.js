//FORMULARIO apiform-eventoinvalid apiformvalidityState Breinner Aprendiendo  -->

var edad;
   function comenzar(){
   
    edad=document.getElementById("edad");

    edad.addEventListener("change",cambia_rango,false);

    document.datos_usuario.addEventListener("invalid",validar,true);

     document.getElementById("enviar").addEventListener("click",enviar,false);

    document.datos_usuario.addEventListener("input",validartiemporeal,false);


   }

   function cambia_rango(){

    var salida=document.getElementById("rango");

    var calculo=edad.value-30;
    if(calculo<30 ){
        calculo=0;
        edad.value=30;
    }

    salida.innerHTML=calculo+" a "+edad.value;


   }

   function validar(e){

     var elemento=e.target;
     elemento.style.background="red"

   }


   function enviar(){
    var cuadro_usuario=document.getElementById("usuario");
    var correcto =document.datos_usuario.checkValidity();

    if(correcto==true){

        document.datos_usuario.submit;

    }else if((cuadro_usuario.validity.valueMissing==true) || (cuadro_usuario.validity.patternMismatch==true)){ //apiformvalidityState

        alert("el usuario no puede estar vacio y recuerda que tiene que tener 5 caracteres (letras y numeros)");

    }
   }

function validartiemporeal(e){

    var elemento=e.target;

    if(elemento.validity.valid==true){

        elemento.style.background="white";


    }else{

        elemento.style.background="red";

    }


}

window.addEventListener("load",comenzar,false);