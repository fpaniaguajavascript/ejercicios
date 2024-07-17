//Función sin argumentos ni retorno
function saludar() {
    console.log("Hola");
}
saludar();

//Función con argumentos y retorno
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
const resultado = sumar(3, 7);
console.log(resultado);
sumar(8, 2);//Funciona pero no recogemos el resultado
console.log(sumar(3));

//Función con argumentos con valor por defecto (opcionales)
function elevar(base = 2, exponente = 2) {
    return base ** exponente;
}
console.log(elevar(4, 3));//4**3=64
console.log(elevar(undefined, 3));//2**3=8
console.log(elevar());//2**2=4
console.log(elevar(3))//3**2=9

//Asignación de funciones a variables
let miFuncion = function () {
    console.log("Hola soy un función asignada a una variable");
}
miFuncion();

//Uso de la partícula this (construcción de clases a través de funciones)
function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = () => {
        console.log("Hola, soy " + this.nombre);
    }
}

const alumno1 = new Alumno("Almudena", 18);
alumno1.saluda();

//Variable arguments --> Array con todos los argumentos que llegan
function hazAlgo(a1, a2, a3) {
    console.log(arguments.length);
    console.log(arguments[0]);
}

hazAlgo("Uno", 2);

//Parámetro rest

function sumar(...sumando) {
    //Versión ochentera
    /*
    let total = 0;
    sumando.forEach(numero => {
        total += numero;
    });
    return total;
    */
    //Versión 'moderna'
    return sumando.reduce((ivan, victor) => ivan + victor);
}
console.log(sumar(1));//1
console.log(sumar(3, 4));//7
console.log(sumar(3, 8, 10, 3, 4));//28
console.log(sumar(3, 8, "diez", 3, 4));//11diez34

