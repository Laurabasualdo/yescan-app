const resultado = document.querySelector ('#resultado');

const formulario = document.querySelector ('#formulario');

const filtrar = () =>{
    resultado.innerHTML= '';
    const texto = formulario. value.toLowerCase();

    for (let candidato of candidatos){

        let nombre = producto.nombre.toLowerCase();

        if( nombre.indexOf(texto)!== -1 ){
            resultado.innerHTML += `
            <div class="card" style="width:18rem;">
              <img src= ${candidato.imagen} alt="imagen-random">
              <div class="car-body">
              <h5 class="card-title">Raza: ${candidato.raza}</h5>
              <h5 class = "card-title">Provincia: ${candidato.provincia}</h5>
              <h5 class = "card-title">Ciudad: ${candidato.ciudad}</5>
              <h5 class="card-title">Sexo ${candidato.sexo}></p> 
              </div>
            </div>
            `
        }
    }
    if (resultado.innerHTML ===''){
        resultado.innerHTML = '<li>CANdidato/a no encontrado</li>';
    }
}

formulario. addEventListener('keyup', filtrar);

filtrar();


