alert ("Recuerde tener sus vacunas al día")

const candidatos = [    
{
   raza: 'Chihuahueño',
   provincia: 'Córdoba',
   ciudad: 'Córdoba',
   sexo: 'Macho',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Pedro',

},
{
    raza:'Boxer',
    provincia: 'Córdoba',
    ciudad: 'Cordoba',
    sexo: 'Macho', 
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Capitan',
      
 },
 {
    raza: 'Bulldog',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    sexo: 'Macho',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Polo',

 },
 {
    raza: 'Schnauzer',
    provincia: 'Córdoba',
    ciudad: 'Saldán',
    sexo: 'Hembra',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Magnolia',



 },
 {
    raza: 'Samoyedo',
    provincia: 'Córdoba',
    ciudad: 'Cosquín',
    sexo: 'Macho',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Sultan',

 },
 {
   
    raza: 'San Bernardo',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    sexo: 'Hembra',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Princesa',

 },
 
 {
    raza: 'Pug',
    provincia: 'Córdoba',
    ciudad: 'Nono',
    sexo: 'hembra',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Porota',
 },   
 
 {
    raza: 'Pator Alemán',
    provincia: 'Córdoba',
    ciudad: 'Las Tapias',
    sexo: 'Hembra',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Hera',
 },
 {
    raza: 'Pug',
    provincia: 'Córdoba',
    ciudad: 'Saldán',
    sexo: 'Macho',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Sony',
 },
 {
    raza: 'Pinscher Miniatura',
    provincia: 'Córdoba',
    ciudad: 'Córdoba',
    sexo: 'Hembra',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Marta',
 },
 {
    raza: 'Gran Danés',
    provincia: 'Córdoba',
    ciudad: 'Laboulaye',
    sexo: 'Macho',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Griseldo',
 },
 
 {
   raza: 'Maltés',
   provincia: 'Córdoba',
   ciudad: 'Cosquín',
   sexo: 'Hembra',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Daisy',
 },
 {
   raza: 'Samoyedo',
    provincia: 'Córdoba',
    ciudad: 'La Carlota',
    sexo: 'Macho',
    imagen: 'https://dummyimage.com/300x200/000/fff',
    nombre: 'Pluto',
 },
 {
   raza: 'Fox Terrier',
   provincia: 'Córdoba',
   ciudad: 'Alta Gracia',
   sexo: 'Hembra',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Carlota',
 },
 {
   raza: 'Pinscher Alemán',
   provincia: 'Córdoba',
   ciudad: 'La Calera',
   sexo: 'Macho',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Athos',
 },
 {
   raza: 'Pitbull',
   provincia: 'Córdoba',
   ciudad: 'Cosquín',
   sexo: 'Hembra',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Danesa',
    
 },
 {
   raza: 'Pointer',
   provincia: 'Córdoba',
   ciudad: 'Yocsina',
   sexo: 'Hembra',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Margarita',
 },
 {
   raza: 'Caniche',
   provincia: 'Córdoba',
   ciudad: 'Villa general Belgrano',
   sexo: 'Macho',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Sultan',
 },
 {
   raza: 'Cocker Spaniel',
   provincia: 'Córdoba',
   ciudad: 'Villa Dolores',
   sexo: 'Hembra',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Ceci',
 },
 {
   raza: 'Chihuahueño',
   provincia: 'Córdoba',
   ciudad: 'Tala Cañada',
   sexo: 'Hembra',
   imagen: 'https://dummyimage.com/300x200/000/fff',
   nombre: 'Angela',
 },
]
 //hacemos contacto con html mediante el metodo de javascrpt getElementById
const candidato = document.getElementById("resultado");

//Declaramos un arrow funtion
const catalogo = () => {
 //backtiks o template o string literal, son las comillas invertidas poner altgr y la tecla de cerrar corchete, entas comillas podemos introducir de manera dinamica codigo HTML5 en js  
   for( let candidato of candidatos){
        producto.innerHTML += `
        <div class="card" style= "width:18rem">
        <img src= ${candidato.imagen} alt="imagen-random">
        <div class="car-body">
            <h5 class="card-title">Raza: ${candidato.raza}</h5>
            <h5 class = "card-title">Provincia: ${candidato.provincia}</h5>
            <h5 class = "card-title">Ciudad: ${candidato.ciudad}</5>
            <h5 class="card-title">Sexo ${candidato.sexo}></p> 
        </div>
    </div>
       `
   }
}
console.log(candidato)
