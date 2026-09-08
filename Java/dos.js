let X =2;
let y = 3;
/*function mostrarmensaje(){
    let resultado = X + y;
    console.warn(resultado);
    alert("Limon: " + resultado);
}*/
function mostrarmensaje(){
    let text = Number(document.getElementById("texto").value);
    let shampoo = Number(document.getElementById("numero1").value);
    let galleta = Number(document.getElementById("numero2").value);
    alert(text + shampoo + galleta);
}
