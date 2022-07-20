let contenedor = document.getElementById("#card");

let arepas = [
    {id: 1, nombre: "Arepa Burguer", precio: 690},
    {id: 2, nombre: "Arepa Catira", precio: 560},
    {id: 3, nombre: "Arepa Rumbera", precio: 530},
    {id: 4, nombre: "Arepa Pelua", precio: 420},
    {id: 5, nombre: "Arepa Domino", precio: 420},
];

for (const productos of arepas){
    let div = document.createElement("div");
    div.innerHTML = `<p>${arepas.nombre} </p>
                    <b>$${arepas.precio}</b>
                    `; 
    contenedor.append(div);
}
