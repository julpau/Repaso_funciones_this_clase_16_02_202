
//Funciones declaracion
function saludar1(p1){
    return `(Saludar 1) - Hola ${p1} ¿cómo estás?`;
}
console.log(saludar1('Hersain'));

//Funciones expresión
let saludar2 = function(p2){
    return `(Saludar 2) - Hola ${p2}, ¿cómo estás?`;   
}
console.log(saludar2('Lozada'));

// Funciones anónimas 
let Saludar3 = function(p3="Julpau"){return `(Saludar 3) - Hola ${p3}, ¿cómo estás?`;}
console.log(Saludar3());

// Funciones Callbacks 
const fB = function () {return `(Saludar 4) - Hola, ¿Cómo estás?`;}

const fA = function (Callbacks,p4) {
    parar:
    do{
        const i = ~~(Math.trunc(Math.random()*5));
        if (i==3){
            return Callbacks(p4);
        }else{
            continue parar;
        }
    }while (true)
}
console.log(fA(fB,'Hersain Lozada'));

//Funciones autoejecutables
const saludar4 = (function(p5){
    return `(Saludar 5) - Hola ${p5}, ¿Cómo estás?`
})('Hersain LH');
console.log(saludar4);

//Funciones Clausuras
const incremen = (function () {
    let num=0;
    return function(){
        num++;
        return num;
    }
})();

const incremen1 = (function (){
    let num = 5;
    let Nombre = [];
    return function(Callbacks){
        let Guardar = function(p6){
            num++;
            Nombre.push(p6);
            return `(Saludar 6) - Hola ${p6} ${num}, ¿cómo estás?`;
        };
        let Ver = function(){
            return Nombre;
        };
        return eval(Callbacks);
        
    }
})();

console.log(incremen1(`Guardar("Hersain");`));
console.log(incremen1(`Guardar("Hersain Lozada");`));
console.log(incremen1(`Guardar("Hersain Lozada Hermosa");`));
console.log(incremen1(`Guardar("HLH");`));
console.log(incremen1(`Guardar("Julpau");`));
console.log(incremen1(`Ver();`));

//Funciones flecha - declaracion
let saludar1F = (p7) => `(Saludar 1 - Flecha) - Hola ${p7}, ¿Cómo estás?`;
console.log(saludar1F('Hersain'));

let SaludarBasico = () => `Hola mundo`;
let SaludarUser1 = (p8) => `Hola ${p8}, ¿cómo estás?`;
let SaludarUser2 = p9 => `Hola ${p9}, ¿cómo estás?`;
let SaludarMaquina = (p10,p11) => `Hola ${p10}, ¿cómo estás? Te saluda ${p11}`;
let sumar = (num1,num2) => `${num1} + ${num2} = ${num1+num2}`;

console.log(SaludarBasico());
console.log(SaludarUser1('Hersain'));
console.log(SaludarUser2('Hersain Lozada'));
console.log(SaludarMaquina("Hersain Lozada Hermosa", "El PC"));
console.log(sumar(1,2));

//Clases => This
let lista = [
    function(){
        this.resultado = 5+3;
        return `Muestro el resultado `;
    },
];
// lista["name"] = "Miguel Angel castro";
console.log(lista[0]());
console.log(lista["resultado"]);

//Objetos y métodos
class Humano{
    constructor(nom,ape){
        this.nombre = nom;
        this.apellido = ape;
    }
    informacio(){
        return `Informacion completa ${this.nombre} ${this.apellido}`;
    }
    static ver(nom,ape){
        return `Informacion completa ${nom} ${ape}`;
    }
}
console.log(Humano.ver('Hersain', 'Lozada'));

//Otra manera
class Humano1{
    constructor(nom1,ape1){
        this.nombre1 = nom1;
        this.apellido1 = ape1;
    }
    infor1(nom1,ape1){
        return `Informacion full ${this.nombre1} ${nom1} ${this.apellido1} ${ape1}`;
    }
}
let obj = new Humano1('Hersain', 'Lozada');
console.log(obj.infor1('Julpau', 'HLH'));

//Otra manera más
class Animal{
    constructor(esp){
        this.especie = esp;
    }
    canino(){
        return `Dientes caninos de la especie ${this.especie}`;
    }
}

let objAni = new Animal('Tiger');
console.log(objAni.canino());

class Humano2 extends Animal{
    constructor(nom2,ape2,esp2){
        super(esp2);
        this.nombre2 = nom2;
        this.apellido2 = ape2; 
    }
    informacio(nom2,ape2){
        return `Informacion completa ${this.nombre2} ${nom2} ${this.apellido2} ${ape2} ${this.canino()}`;
    }
    verdientes(){
        return this.canino();
    }
}

let objHum = new Humano2('Hersain', 'Lozada', 'Human Being');
console.log(objHum.verdientes());