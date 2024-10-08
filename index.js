//Modelo de uso do seu personagem com diferentes informações

let character = ["humano", "elfo", "arcano", "templario"];
let power = ["lideranca", "inteligencia", "criatividade", "resiliencia"];
let element = ["fogo", "água", "ar", "eletricidade"];
let age = ["entre 20 e 30", "entre 31 e 40", "entre 41 e 50", "mais de 51"];

// Variável de vetores com escolhas realizadas.
const chooseName = "Poseidionês";
const chooseCharacter = character[0]; 
const choosePower = power[3];
const chooseElement = element[1]; 
const chooseAge = age[1];

console.log("Seu personagem é " + chooseCharacter + ", tem o poder de, " + choosePower); 
console.log("o seu elemento é " + chooseElement + " e sua idade é " + chooseAge);

// Informações com características do heroi
class Hero {
    constructor(nome, tipo, idade, classe, poder) {
        this.nome = nome; 
        this.tipo = tipo;
        this.idade = idade;
        this.classe = classe;
        this.poder = poder;
    }

    // Modelo de código para atacar com base na classe do personagem 
    atacar() {
        let ataque;
        
        // Base de ataques da classe
        if (this.classe === "humano") {
            ataque = "espada";
        } else if (this.classe === "elfo") {
            ataque = "arco e flecha";
        } else if (this.classe === "arcano") {
            ataque = "magia";
        } else if (this.classe === "templario") {
            ataque = "lança";
        } else {
            ataque = "ataque desconhecido";
        }

        // Exibição geral
        console.log(`O ${this.nome}, um ${this.classe}, atacou usando ${ataque} com o poder ${choosePower} e ${chooseElement}`);
    }
}

let heroi = new Hero(chooseName, chooseElement, chooseAge, chooseCharacter, choosePower);

// Função para executar uma batalha
function battle(persona) {
    if (persona.classe === "humano") {
        console.log("Classe de liderança e honra");
    } else if (persona.classe === "arcano") {
        console.log("Classe de sabedoria e magia");
    }

    
    if (persona.tipo === "fogo") {
        console.log("Poder de Mercúrio");
    } else if (persona.tipo === "água") {
        console.log("Domínio das marés");
    }

    persona.atacar();
}

battle(heroi);
