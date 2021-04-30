//Objetos
class producto{
    constructor(nombre, precio, imagen, genero){
        this.nombre = nombre;
        this.precio = precio; 
        this.imagen = imagen;
        this.genero = genero;  
    }
}

const productoUno = new producto(`Spider-Man: Far From Home`, 2000, `https://i.pinimg.com/originals/eb/f1/47/ebf147371216617098a1fa94e2a121e6.jpg`, `aventura`);
const productoDos = new producto(`Nobody`, 1600, `https://www.joblo.com/assets/images/joblo/posters/2021/01/nobody-NBD_Teaser1Sheet5_rgb.jpg`, `accion` );
const productoTres = new producto(`John Wick: Parabellum`, 4500, 'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/05/cartel-final-final-JOHN-WICK-3.jpg?resize=800%2C1153&ssl=1', `accion`);

const productos = [productoUno, productoDos, productoTres];

//Productos Home

    let mostrarCards = (array) =>{
        let mostrarCards = document.getElementById(`contenedorCards`);
        mostrarCards.innerHTML = ``;
        array.forEach((producto) => {
            mostrarCards.innerHTML +=
            `<div class="card-movie col-lg-2 col-md-6 mb-4 pb-5">
                    <img class="cardImg" src=${producto.imagen} alt=""></>
            </div>`;
            })
        }

    mostrarCards(productos);