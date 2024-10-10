
const colores = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];


function colorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}


function crearFigura(tipo) {
    const figura = document.createElement("div");
    figura.classList.add(tipo);

    if (tipo === "square") {

        const tamaño = Math.random() * 50 + 40 + "px";
        figura.style.width = tamaño;
        figura.style.height = tamaño;
        figura.style.backgroundColor = colorAleatorio();
    } else if (tipo === "triangle") {

        figura.style.borderBottomColor = colorAleatorio();
    }


    figura.style.left = Math.random() * window.innerWidth + "px";
    figura.style.top = Math.random() * window.innerHeight + "px";


    document.getElementById("container").appendChild(figura);
}


function generarFiguras() {
    for (let i = 0; i < 20; i++) { 
        const tipo = Math.random() > 0.5 ? "square" : "triangle"; 
        crearFigura(tipo);
    }
}


function cambiarColores() {
    const cuadrados = document.querySelectorAll(".square");
    const triangulos = document.querySelectorAll(".triangle");
    setInterval(() => {
        cuadrados.forEach(cuadrado => {
            cuadrado.style.backgroundColor = colorAleatorio();
        });
        triangulos.forEach(triangulo => {
            triangulo.style.borderBottomColor = colorAleatorio();
        });
    }, 100);
}


function iniciarComposicion() {
    generarFiguras();  
    cambiarColores();   
}


window.onload = iniciarComposicion;
