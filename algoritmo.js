const selectOpcionReserva = document.querySelector("select");
const ulOpcionesSeleccionadas = document.querySelector("ul");
const spanTituloOpcion = document.querySelector("#opciones-reserva span");
const divOpcionesReserva = document.querySelector("#opciones-reserva")

const OPC_1_CANT_DIAS = 1;
const OPC_2_CANT_DIAS = 3;
const OPC_3_CANT_DIAS = 7;

const OPC_1_DIA_INGRESO = "Lunes";
const OPC_2_DIA_INGRESO = "Miercoles";
const OPC_3_DIA_INGRESO = "Sabado";

const OPC_1_SERV_EXTRA = "Desayuno";
const OPC_2_SERV_EXTRA = "Desayuno y almuerzo";
const OPC_3_SERV_EXTRA = "Desayuno, almuerzo y cena";

/* const OPC_1 = "opc camas";
const OPC_2 = "opc dias";
const OPC_3 = "opc ingreso";
const OPC_4 = "opc extras"; */
const OPC_1 = 1;
const OPC_2 = 2;
const OPC_3 = 3;
const OPC_4 = 4;

let opcActual = OPC_1;



/**
 * Controla la generacion de una reserva
 */
function enviarOpcion(){
    actualizarOpcSeleccionadas();
    actualizaOpcReserva();
}


/**
 * Actualiza la seccion de opciones de reserva a la correspondiente
 */
function actualizaOpcReserva() {
    switch (opcActual) {
        case OPC_1:
            actualizaAOpcionInfo2();
            break;
        case OPC_2:
            actualizaAOpcionInfo3();
            break;
        case OPC_3:
            actualizaAOpcionInfo4();
            break;
        case OPC_4:
            actualizaOpcionesATerminado();
    }
    opcActual++;
}


/**
 * Actualiza la seccion de opciones de reserva a un estado de finalizado
 */
function actualizaOpcionesATerminado(){
    divOpcionesReserva.innerHTML = `
        <h2>Reserva finalizada</h2>
    `;
}


/**
 * Actualiza la seccion de opciones de reserva a la opcion numero 4
 */
function actualizaAOpcionInfo4(){
    spanTituloOpcion.innerHTML = "Seleccione servicio extra:";
    selectOpcionReserva.innerHTML = `
        <option value="${OPC_1_SERV_EXTRA}">${OPC_1_SERV_EXTRA}</option>
        <option value="${OPC_2_SERV_EXTRA}">${OPC_2_SERV_EXTRA}</option>
        <option value="${OPC_3_SERV_EXTRA}">${OPC_3_SERV_EXTRA}</option>
    `;
}


/**
 * Actualiza la seccion de opciones de reserva a la opcion numero 3
 */
function actualizaAOpcionInfo3() {
    spanTituloOpcion.innerHTML = "Seleccione día de ingreso:";
    selectOpcionReserva.innerHTML = `
        <option value="${OPC_1_DIA_INGRESO}">${OPC_1_DIA_INGRESO}</option>
        <option value="${OPC_2_DIA_INGRESO}">${OPC_2_DIA_INGRESO}</option>
        <option value="${OPC_3_DIA_INGRESO}">${OPC_3_DIA_INGRESO}</option>
    `;
}

/**
 * Actualiza la seccion de opciones de reserva a la opcion numero 2
 */
function actualizaAOpcionInfo2() {
    spanTituloOpcion.innerHTML = "Seleccione cantidad de días";
    selectOpcionReserva.innerHTML = `
                <option value="${OPC_1_CANT_DIAS} día">${OPC_1_CANT_DIAS} día</option>
                <option value="${OPC_2_CANT_DIAS} días">${OPC_2_CANT_DIAS} días</option>
                <option value="${OPC_3_CANT_DIAS} días">${OPC_3_CANT_DIAS} días</option>
            `;
}

/**
 * Actualiza la lista de opciones seleccionadas en la pagina
 */
function actualizarOpcSeleccionadas() {
    ulOpcionesSeleccionadas.innerHTML += `
        <li>${selectOpcionReserva.value}</li>
    `;
}
