//FORMULARIO setCustomValidity Breinner Aprendiendo-->

function comenzar(){
     
    var nombre=document.getElementById("nombre");

    var apellido=document.getElementById("apellido")

    nombre.addEventListener("input",validar,false);
    apellido.addEventListener("input",validar,false);

    validar();

   }

function validar(){

    if( nombre.value=="" || apellido.value==""){



        nombre.setCustomValidity("introduce nombre o apellido");
        nombre.style.background="red";
        apellido.style.background="red";

    }
    else{
        
        
        
        nombre.setCustomValidity("");
        nombre.style.background="white";
        apellido.style.background="white";

    }

}

window.addEventListener("load",comenzar,false);