
const minMaxSum = [1, 2, 3, 4, 5];
miniMaxSum(minMaxSum);

function miniMaxSum(arr) {
    // Verificar se o array tem pelo menos 4 elementos
    if (arr.length < 4) {
        console.log("O array deve ter pelo menos 4 elementos.");
        return;
    }

    // Copiando o array para não modificar o original
    var sortedArr = [...arr];
    
    // Ordenar o array para facilitar a soma dos menores e maiores valores
    sortedArr.sort((a, b) => a - b);

    var minSum = 0;
    var maxSum = 0;

    // Somar os quatro menores números
    for (let i = 0; i < 4; i++) {
        minSum += sortedArr[i];
    }

    // Somar os quatro maiores números
    for (let i = sortedArr.length - 1; i >= sortedArr.length - 4; i--) {
        maxSum += sortedArr[i];
    }

    console.log(minSum, maxSum);
}
