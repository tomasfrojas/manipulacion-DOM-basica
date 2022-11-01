//Variables y operaciones

const persona = {
  nombre: "Tomas",
  apellido: "Rojas",
  usuarioPlatzi: "tompirojas",
  edad: 32,
  correo: "tomas@gmail.com",
  mayorEdad: "si",
  dinero: 10000,
  deudas: 500,
  nombreCompleto: function () {
    return `El nombre completo es ${this.nombre} ${this.apellido}`;
  },
  dineroAhorrado: function () {
    return this.dinero - this.deudas;
  },
  nickname: "Tompi",
};

// console.log(persona.nombreCompleto());
// console.log(persona.dineroAhorrado());
// console.log(
//   `Mi nombre es ${persona.nombre} pero prefiero que me digas ${persona.nickname}.`
// );

// function saludo(name, lastname, username) {
//   const completeName = `${name} ${lastname}`;

//   console.log(
//     "Mi nombre es " +
//       completeName +
//       ", pero prefiero que me digas " +
//       username +
//       "."
//   );
// }
// saludo("tomas", "rojas", "tompi");

function saludo(completeName, userName) {
  return `Mi nombre es ${completeName}, pero prefiero que me digas ${userName}`;
}
// console.log(saludo("Tomas Rojas", "tompirojas"));

const tipoDeSuscripcion = (suscripcion) => {
  let resultado;
  if (suscripcion == "Free") {
    resultado = `Solo puedes tomar los cursos gratis`;
  } else if (suscripcion == "Basic") {
    resultado = `Puedes tomar casi todos los cursos de Platzi durante un mes`;
  } else if (suscripcion == "Expert") {
    resultado = `Puedes tomar casi todos los cursos de Platzi durante un ano`;
  } else if (suscripcion == "ExpertPlus") {
    resultado = `Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un ano`;
  } else {
    resultado = `No tienes ninguna suscripcion`;
  }
  return resultado;
};

// console.log(tipoDeSuscripcion("ExpertPlus"));

const planes = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un ano",
  expertplus:
    "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un ano",
};

//EJERCICIO PARA TENER EN CUENTAAA!!

// console.log(planes.basic);
// console.log(planes["basic"]);

// const ejemploSuscripcion = "free";
// console.log(planes[ejemploSuscripcion]);

const conseguirTipoSuscripcion = (suscripcion) => {
  if (planes[suscripcion]) {
    console.log(
      `Si adquieres el tipo de suscripcion ${suscripcion} quiere decir que ${planes[suscripcion]}`
    );
    return;
  }
  console.warn("Este tipo de suscripcion no existe!");
};
conseguirTipoSuscripcion("expertplus");
conseguirTipoSuscripcion("yahsgrst");

//EL EJERCICIO VA HASTA ACA!!

// planes.forEach((plan) => {
//   console.log(plan.tipoPlan);
//      console.log(plan.descripcion);
// });

let tipoPlan = ["Free", "Basic", "Expert", "ExpertPlus"];
let infoPlan = [
  "solo puedes tomar los cursos gratis",
  "puedes tomar casi todos los cursos de Platzi durante un mes",
  "puedes tomar casi todos los cursos de Platzi durante un año",
  "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];

let prueba = (input) => {
  for (const tipo in tipoPlan) {
    if (input == tipoPlan[tipo]) {
      return `Si tomas el plan ${tipoPlan[tipo]} debes saber que ${infoPlan[tipo]}`;
    }
  }
};
// console.log(prueba("Basic"));

// const prueba1 = [1, 2, 3, 4];
// const prueba2 = ["tomas", "felipe", "rojas", "trujillo"];
// for (const i in prueba1) {
//   console.log(prueba1[i]);
//   console.log(prueba2[i]);
// }

for (let i = 0; i < 5; i++) {
  //   console.log("El valor de i es: " + i);
}
let i = 0;
while (i < 5) {
  //   console.log("El valor de i es: " + i);
  i++;
}

for (let j = 10; j >= 2; j--) {
  //   console.log("El valor de i es: " + j);
}

let j = 10;
while (j >= 2) {
  //   console.log("El valor de i es: " + j);
  j--;
}

const imprimirElementoPorElemento = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
// imprimirElementoPorElemento([9, 8, 7, 6, 5, 4]);

const imprimirElementoPorElementoObjeto = (obj) => {
  const arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
// imprimirElementoPorElementoObjeto(persona);

// Object.values(persona); // esta propiedad nos convierte los objetos en arrays y nos devuelve los valores del objeto.
//Object.keys// nos devuelve los keys del objeto.
// Object.entries // nos devuelve el key-value de los objetos.
