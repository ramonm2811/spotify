let btnCrear = document.getElementById("btnCrear");
let btnOrdenar = document.getElementById("btnOrdenar");
let guardarDatos = [];
//----------------------------------------------------------------
//--------------------------Listeners-----------------------------
//----------------------------------------------------------------
btnCrear.addEventListener("click", crearCartas);
btnOrdenar.addEventListener("click", ordenarCartas);

//----------------------------------------------------------------
//--------------------Función crear cartas------------------------
//----------------------------------------------------------------
function crearCartas() {
  //Limpiando el HTML donde van las cartas
  document.getElementById("row1").innerHTML = "";
  //variables
  let cantidadDeCartas = document.getElementById("cantidadDeCartas").value;
  let simbolos = ["heart", "crown", "gem", "spa"];
  let simboloAColocar;
  let simboloAleatorio;
  let numeroAleatorio;
  //ciclo
  for (let contador = 1; contador <= cantidadDeCartas; contador++) {
    //Simbolo y Numero aleatorio
    simboloAleatorio = Math.floor(Math.random() * simbolos.length);
    simboloAColocar = simbolos[simboloAleatorio];
    numeroAleatorio = Math.floor(Math.random() * 14);
    //Verificando que 0 no existe, 1=A, 11=J, 12=Q, 13=K
    if (numeroAleatorio == 0) {
      numeroAleatorio = Math.floor(Math.random() * 14);
    } else if (numeroAleatorio == 1) {
      numeroAleatorio = "A";
    } else if (numeroAleatorio == 11) {
      numeroAleatorio = "J";
    } else if (numeroAleatorio == 12) {
      numeroAleatorio = "Q";
    } else if (numeroAleatorio == 13) {
      numeroAleatorio = "K";
    }

    //Guardo el número aleatorio y simbolo en Objeto
    guardarDatos.push({
      numero: numeroAleatorio,
      simbolo: simboloAColocar,
    });
    console.log(guardarDatos);

    //Agregar cartas a HTML
    document.getElementById("row1").innerHTML += `
    <div class="carta">
    <div class="contenidoCarta">
        <div id="contenedorIconUp" class="rellenoCartas">
            <i class="fas fa-${simboloAColocar}"></i>
        </div>
        <div id="contenedorNumber" class="rellenoCartas">
            <p>${numeroAleatorio}</p>
        </div>
        <div id="contenedorIconDown" class="rellenoCartas">
            <i class="fas fa-${simboloAColocar}"></i>
        </div>
    </div>
</div>`;
  }
}

//----------------------------------------------------------------
//--------------------Función ordenar cartas------------------------
//----------------------------------------------------------------
function ordenarCartas() {
  //Transformar de A=1, J=11, Q=12,K=13
  guardarDatos.forEach(function (item) {
    if (item.numero == "A") {
      item.numero = 1;
    } else if (item.numero == "J") {
      item.numero = 11;
    } else if (item.numero == "Q") {
      item.numero = 12;
    } else if (item.numero == "K") {
      item.numero = 13;
    }
  });
  //Ordenar con el Bubble Sort
  let wall = guardarDatos.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (guardarDatos[index].numero > guardarDatos[index + 1].numero) {
        let aux = guardarDatos[index];
        guardarDatos[index] = guardarDatos[index + 1];
        guardarDatos[index + 1] = aux;
        imprimirCartasOrdenadas(guardarDatos);
        //console.log(guardarDatos);
      }
      //Recorrer el array, evaluar sus numeros, y usar variable aux para agregar a innerHTML

      index++;
    }
    wall--; //decrease the wall for optimization
  }
  console.log(guardarDatos);
}

//----------------------------------------------------------------
//--------------------Función imprimir cartas ordenadas-----------
//----------------------------------------------------------------
function imprimirCartasOrdenadas(arr) {
  let numeroAux = 0;
  let div1 = document.createElement("div");
  let row2 = document.getElementById("row2");
  //Transformamos de 1=A, 11=J, 12=Q, 13=K
  arr.forEach(function (item) {
    if (item.numero == 1) {
      numeroAux = "A";
    } else if (item.numero == 11) {
      numeroAux = "J";
    } else if (item.numero == 12) {
      numeroAux = "Q";
    } else if (item.numero == 13) {
      numeroAux = "K";
    } else {
      numeroAux = item.numero;
    }

    let div2 = document.createElement("div");
    div2.classList.add("carta");
    let div3 = document.createElement("div");
    div3.classList.add("contenidoCarta");
    let div4 = document.createElement("div");
    div4.classList.add("rellenoCartas");
    //div4.setAttribute("id", "contenedorIconUp");
    div4.id = "contenedorIconUp";
    let div5 = document.createElement("div");
    div5.classList.add("rellenoCartas");
    //div5.setAttribute("id", "contenedorNumber");
    div5.id = "contenedorNumber";
    let div6 = document.createElement("div");
    div6.classList.add("rellenoCartas");
    //div6.setAttribute("id", "contenedorIconDown");
    div6.id = "contenedorIconDown";

    let iUp = document.createElement("i");
    iUp.classList.add("fas", `fa-${item.simbolo}`);
    let iDown = document.createElement("i");
    iDown.classList.add("fas", `fa-${item.simbolo}`);
    let p = document.createElement("p");
    p.innerHTML = numeroAux;

    div6.appendChild(iDown);
    div5.appendChild(p);
    div4.appendChild(iUp);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div3.appendChild(div6);
    div2.appendChild(div3);
    div1.appendChild(div2);
    row2.appendChild(div1);
  });
}
