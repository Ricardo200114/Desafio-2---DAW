let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
const date = document.getElementById("date");
date.textContent = today;

const presupuesto = document.getElementById("presupuesto");
const totalIngresos = document.getElementById("totalIngresos");
const totalEgresos = document.getElementById("totalEgresos");
const porcentajeTotalGastos = document.getElementById("porcentajeTotalGastos");
presupuesto.textContent = 0;
totalIngresos.textContent = 0;
totalEgresos.textContent = 0;
porcentajeTotalGastos.textContent = 0;
const ingresoEgreso = document.getElementById("ingresoEgreso");
const buttonAgregar = document.getElementById("buttonAgregar");
const descripcion = document.getElementById("descripcion");
const monto = document.getElementById("monto");
const contenedor = document.getElementById("contenedor");
const simbolo = document.getElementById("simbolo");
const simboloEgreso = document.getElementById("simboloEgreso");
const buttonIngreso = document.getElementById("buttonIngreso");
const buttonEgreso = document.getElementById("buttonEgreso");
if (totalEgresos.textContent === "0") simboloEgreso.classList.add("d-none");
let contadorTarjetasIngreso = 0;
let contadorTarjetasEgreso = 0;
let buttonIngresoActivated = true;
let buttonEgresoActivated = false;
buttonAgregar.addEventListener("click", () => {
  if (
    descripcion.value != "" &&
    monto.value > 0 &&
    isNaN(monto.value) === false &&
    ingresoEgreso.value === "ingreso"
  ) {
    contadorTarjetasIngreso++;
    const contenedorTarjetaInfoIngreso = document.createElement("div");
    contenedorTarjetaInfoIngreso.id =
      "contenedorTarjetaInfoIngreso" + contadorTarjetasIngreso;
    if (buttonIngresoActivated === true)
      contenedorTarjetaInfoIngreso.classList.add(
        "w-100",
        "mt-1",
        "salarios",
        "d-block"
      );
    else
      contenedorTarjetaInfoIngreso.classList.add(
        "w-100",
        "mt-1",
        "salarios",
        "d-none"
      );
    contenedor.appendChild(contenedorTarjetaInfoIngreso);
    const tarjetInfo = document.createElement("h6");
    tarjetInfo.classList.add("font-weight-bold");
    tarjetInfo.textContent = descripcion.value;
    contenedorTarjetaInfoIngreso.appendChild(tarjetInfo);
    const span = document.createElement("span");
    span.classList.add("distancia");
    span.textContent = "+ " + parseFloat(monto.value).toFixed(2);
    tarjetInfo.appendChild(span);
    totalIngresos.textContent =
      parseFloat(totalIngresos.textContent) + parseFloat(monto.value);
    presupuesto.textContent =
      parseFloat(presupuesto.textContent) + parseFloat(monto.value);
    totalIngresos.textContent = parseFloat(totalIngresos.textContent).toFixed(
      2
    );
    presupuesto.textContent = parseFloat(presupuesto.textContent).toFixed(2);
    if (presupuesto.textContent > 0 || presupuesto.textContent === 0)
      simbolo.textContent = "+";
    else simbolo.textContent = "";
    descripcion.value = "";
    monto.value = "";
    porcentajeTotalGastos.textContent =
      (totalEgresos.textContent * 100) / totalIngresos.textContent;
    porcentajeTotalGastos.textContent = parseFloat(
      porcentajeTotalGastos.textContent
    ).toFixed(2);
    if (totalEgresos.textContent === "0") simboloEgreso.classList.add("d-none");
    else simboloEgreso.classList.add("d-inline");
  } else if (
    descripcion.value != "" &&
    monto.value > 0 &&
    isNaN(monto.value) === false &&
    ingresoEgreso.value === "egreso"
  ) {
    contadorTarjetasEgreso++;
    const contenedorTarjetaInfoEgreso = document.createElement("div");
    contenedorTarjetaInfoEgreso.id =
      "contenedorTarjetaInfoEgreso" + contadorTarjetasEgreso;
    if (buttonEgresoActivated === true)
      contenedorTarjetaInfoEgreso.classList.add(
        "w-100",
        "mt-1",
        "salarios",
        "d-block"
      );
    else
      contenedorTarjetaInfoEgreso.classList.add(
        "w-100",
        "mt-1",
        "salarios",
        "d-none"
      );
    contenedorTarjetaInfoEgreso.classList.add("w-100", "mt-1", "salarios");
    contenedor.appendChild(contenedorTarjetaInfoEgreso);
    const tarjetInfo = document.createElement("h6");
    tarjetInfo.classList.add("font-weight-bold");
    tarjetInfo.textContent = descripcion.value;
    contenedorTarjetaInfoEgreso.appendChild(tarjetInfo);
    const span = document.createElement("span");
    span.classList.add("distancia");
    span.textContent = "- " + parseFloat(monto.value).toFixed(2);
    tarjetInfo.appendChild(span);
    totalEgresos.textContent =
      parseFloat(totalEgresos.textContent) + parseFloat(monto.value);
    presupuesto.textContent =
      parseFloat(presupuesto.textContent) - parseFloat(monto.value);
    totalEgresos.textContent = parseFloat(totalEgresos.textContent).toFixed(2);
    presupuesto.textContent = parseFloat(presupuesto.textContent).toFixed(2);
    if (presupuesto.textContent < 0 || presupuesto.textContent === 0)
      simbolo.textContent = "";
    else simbolo.textContent = "+";
    descripcion.value = "";
    monto.value = "";
    porcentajeTotalGastos.textContent =
      (totalEgresos.textContent * 100) / totalIngresos.textContent;
    porcentajeTotalGastos.textContent = parseFloat(
      porcentajeTotalGastos.textContent
    ).toFixed(2);
    if (totalEgresos.textContent === "0") simboloEgreso.classList.add("d-none");
    else simboloEgreso.classList.add("d-inline");
  } else alert("Datos ingresados invalidos");
});
buttonIngreso.addEventListener("click", () => {
  buttonIngresoActivated = true;
  buttonEgresoActivated = false;
  if (contadorTarjetasIngreso > 0 && contadorTarjetasEgreso > 0) {
    for (let i = 1; i <= contadorTarjetasIngreso; i++) {
      const contenedorTarjetaInfoIngreso = document.getElementById(
        "contenedorTarjetaInfoIngreso" + i
      );
      contenedorTarjetaInfoIngreso.classList.replace("d-none", "d-block");
    }
    for (let i = 1; i <= contadorTarjetasEgreso; i++) {
      const contenedorTarjetaInfoEgreso = document.getElementById(
        "contenedorTarjetaInfoEgreso" + i
      );
      contenedorTarjetaInfoEgreso.classList.replace("d-block", "d-none");
    }
  }
  buttonIngreso.classList.replace("btn-light", "btn-dark");
  buttonEgreso.classList.replace("btn-dark", "btn-light");
});
buttonEgreso.addEventListener("click", () => {
  buttonIngresoActivated = false;
  buttonEgresoActivated = true;
  if (contadorTarjetasIngreso > 0 && contadorTarjetasEgreso > 0) {
    for (let i = 1; i <= contadorTarjetasEgreso; i++) {
      const contenedorTarjetaInfoEgreso = document.getElementById(
        "contenedorTarjetaInfoEgreso" + i
      );
      contenedorTarjetaInfoEgreso.classList.replace("d-none", "d-block");
    }
    for (let i = 1; i <= contadorTarjetasIngreso; i++) {
      const contenedorTarjetaInfoIngreso = document.getElementById(
        "contenedorTarjetaInfoIngreso" + i
      );
      contenedorTarjetaInfoIngreso.classList.replace("d-block", "d-none");
    }
  }
  buttonEgreso.classList.replace("btn-light", "btn-dark");
  buttonIngreso.classList.replace("btn-dark", "btn-light");
});
