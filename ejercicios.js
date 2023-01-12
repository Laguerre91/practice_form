var formulario = document.getElementById("formulario");
var caja = document.querySelector(".box_2");
caja.style.display = "none"

formulario.addEventListener('submit', ()=>{
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = parseInt(document.getElementById("edad").value);
    console.log(nombre, apellidos, edad);

    if(nombre == null || nombre.length == 0){
        alert("el nombre no es valido");
        return false
    };

    if(apellidos == null || apellidos.length == 0){
        alert("el apellido no es valido");
        return false
    };

    if(edad == null || edad <= 0 || isNaN(edad)){
        alert("la edad no es correcta");
        return false
    }

    caja.style.display = "block"

    var p_nombre = document.querySelector(".p_nombre span");
    var p_apellidos = document.querySelector(".p_apellidos span");
    var p_edad = document.querySelector(".p_edad span");

    p_nombre.innerHTML = nombre
    p_apellidos.innerHTML = apellidos
    p_edad.innerHTML = edad

});


