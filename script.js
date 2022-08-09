let h1 = document.querySelector("h1");
let input1 = document.querySelector("#calculo1");
let input2 = document.querySelector("#calculo2");
let btn = document.querySelector("#btn-calcular");
let pResult = document.querySelector("#result");


btn.addEventListener('click', concatenar);

function concatenar() {
    let sumaInputs =  input1.value + input2.value;
    pResult.innerText = "El resultado es: " + sumaInputs;
}