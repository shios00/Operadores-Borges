
const lista = document.getElementById("lista")
const cuerpo = document.querySelector("#cuerpo")
const nombreIngresar = document.querySelector("#nombreingresado")
const acordeIngresar = document.querySelector("#acordesingresados")

function agregarCancionRhcp() {
    let input2 = document.querySelector("#nombreingresado").value
    let input3 = document.querySelector("#acordesingresados").value
    cancionesRHCP.push(new Cancion(input2, input3))
    localStorage.setItem("nuevascanciones", cancionesRHCP)

}
//Operador Avanzado Ternario
function buscarCancionRhcp() {
    let input1 = document.querySelector("#nombrecancion").value
    const resultado = cancionesRHCP.find(Cancion => Cancion.nombre === input1)
    resultado ? li.innerText = resultado.acordes : li.innerText = "No se encuentra en la lista";
}

function mostrarNombresRHCP() {
    const cuerpo = document.querySelector("#cuerpo")
    cuerpo.innerHTML = ""
    cancionesRHCP.forEach(Cancion => {
        cuerpo.innerHTML += ` <tr>    
                        <td>${Cancion.nombre}</td>
                      </tr>`
    })

}

