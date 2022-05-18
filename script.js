console.log("Iniciando Sistema...");

function calcular() {
    console.log("Testando....");

    let A = document.getElementById("inputMedidaA").value;
    let B = document.getElementById("inputMedidaB").value;
    let C = document.getElementById("inputMedidaC").value;

    let areaQuadrado = A * A;
    let areaTriangulo = (A * B) / 2 ;
    let areaTrapezio = (C * (A + B) / 2);

    

    resultadoQuadrado.innerHTML = areaQuadrado.toFixed(4);
    resultadoTriangulo.innerHTML = areaTriangulo.toFixed(4);
    resultadoTrapezio.innerHTML = areaTrapezio;

console.log(areaTrapezio);
}