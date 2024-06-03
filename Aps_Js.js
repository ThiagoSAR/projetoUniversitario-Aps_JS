// Turma: 963R
// Aluno: Thiago Silva de Araujo Rodrigues
// Matrícula: 2024100458

// Função que verifica se um número é primo
function isPrime(num) {
    // Números menores que 2 não são primos
    if (num < 2) {
        return false; 
    }
    // Verifica se o número é divisível por algum número de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Se for divisível, não é primo
        }
    }
    return true; // Se não for divisível por nenhum número, é primo
}

// Função que encontra e exibe os 10 maiores números primos menores ou iguais a um número fornecido
function findLargestPrimes() {
    // Solicita um número do usuário
    let numero = parseInt(prompt("Digite um número"));

    // Verifica se a entrada é um número válido
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        return;
    }

    // Verifica se o número fornecido é primo
    if (!isPrime(numero)) {
        console.log(`${numero} não é um número primo.`);
    }

    let qtdePrimos = 10; // Define a quantidade de números primos a encontrar
    let cont = 0; // Contador de números primos encontrados

    // Itera a partir do número fornecido até 2 para encontrar os primos
    for (let i = numero; i >= 2; i--) {
        // Verifica se o número atual é primo
        if (isPrime(i)) {
            console.log(`O número [${i}] é primo!`); // Exibe o número primo encontrado
            cont++; // Incrementa o contador de números primos encontrados
            // Se já encontrou a quantidade desejada de números primos, interrompe o loop
            if (cont === qtdePrimos) {
                break;
            }
        }
    }
}

// Chama a função para encontrar os maiores primos
findLargestPrimes();
