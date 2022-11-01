const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const pid = document.getElementById("pid");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//  console.log(h1);
// console.log(input.value);

// console.log({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// });

// h1.innerHTML = "Eres un <br> idiota"; // nos permite modificar elementos del html mediante js
// h1.innerText = "Eres un <br> idiota"; // nos permite modificar elementos del html mediante js

// console.log(h1.getAttribute("class")); // traer un atributo que necesitemos
// h1.setAttribute("class", "rojo"); //asignar o cambiar un atributo
// console.log(h1.getAttribute("class"));

// h1.classList.add("rojo"); // agregar una clase
// h1.classList.remove("verde"); // remover una clase
// h1.classList.toogle("verde"); // dependiendo si tiene clase o no, se la quitamos o ponemos.
// h1.classList.contains("verde"); // nos trae true or false si tiene la clase o no.

// input.value = 9876;
// console.log(input.value);

//  console.log(document.createElement("img"));
//  console.log(document.createElement("span"));

// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://historia-biografia.com/wp-content/uploads/2018/01/Sin-t%C3%ADtulo-38.jpg"
// );
// console.log(img);

// pid.innerHTML = "";

// pid.append(img);

btn.addEventListener("click", btnOnClick);
function btnOnClick() {
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = `Resultado: ${sumaInputs}`;
}

// form.addEventListener("submit", sumarInputValues);

// function sumarInputValues(event) {
//   event.preventDefault();
//   const sumaInputs = Number(input1.value) + Number(input2.value);
//   pResult.innerText = `Resultado: ${sumaInputs}`;
// }
