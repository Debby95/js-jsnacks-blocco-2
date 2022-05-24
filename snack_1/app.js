//inseriamo un numero
const numero = prompt("Inserisci un numero");


if (numero % 2 === 0) {
    console.log(numero);
} else if (numero % 3 === 0) {
    numero = numero + 1;
    console.log(numero);
}