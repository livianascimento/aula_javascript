// Parte 1
/*
var nome = "Livia Nascimento";
var n1 = 29;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert("Meu primeiro JS! Bem-vinda " + nome);

// trata como se fosse string
//alert("Soma: " + num1 + num2); 

// faz a soma - entende que é um número
//alert(num1 + num2);

console.log(nome);
console.log(num1);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(n1 * n2);
*/

// Parte 2

// Listas
/*
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - ")); // muda o separador de , para -

console.log(lista[0]);
console.log(lista.toString()[0]); // imprime a primeira letra do primeiro elemento da lista

lista.push("uva"); // acrescenta 1 elemento na lista
console.log(lista);

lista.pop(); // retira o último elemento da lista
console.log(lista);

console.log(lista.length);

console.log(lista.reverse()); // coloca os elementos na ordem contrária

// Dicionário - parecido com objeto
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome + " - " + fruta.cor);
//alert(fruta.cor);

var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert("A fruta na posição 2 é : " + frutas[1].nome);
*/

// Parte 3

/*
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("Maior de idade");
}
else {
    alert("Menor de idade");
}
*/

/*
var count = 0;
while (count <= 3) {
    console.log(count);
    count++; // ou count = count + 1;
};
*/

/*
for (count=0; count <= 3; count++) {
    alert(count);
}
*/

/*
var d = new Date();
console.log(d);
console.log(d.getDate()); // traz o dia da semana (1-31)
console.log(d.getMonth() + 1);
console.log("Ano " + d.getFullYear());
console.log("Hora " + d.getHours());
console.log("Minutos " + d.getMinutes());

// traz o dia da semana (0-6) de domingo a sábado
console.log(d.getDay()); // 2 (terça-feira)
*/

//========================================================

// Parte 4

/*
function soma(n1, n2) {
    return n1 + n2;
}

console.log("Soma: ");
console.log(soma(5,10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão!", "Japão", "Brasil"));
*/

/*
var validar = 0; // global

function validaIdade(idade) {
    var validar; // local

    // para usar a variável global:
    // pode chamar a variável dentro da função ou não
    //validar; 

    if (idade >= 18) {
        validar = true;
    }
    else {
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade)); // imprime a variável validar local

console.log(validar); // imprime a váriável validar global
*/

// Parte 5

function clicou() {
    //alert("Obrigado por clicar!");

    var elemento = document.getElementById("agradecimento");
    console.log(elemento);

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar() {
    window.open("https://www.google.com/"); // abre em outra aba

    //window.location.href = "https://www.google.com/"; // abre na mesma aba
}

function trocar(elemento) {
    //alert("Trocar texto");

    //document.getElementById("mousemove1").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove1").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function msgPagina() {
    alert("Página Carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}