const arrayCandles = [3,5,15,3];

birthdayCakeCandles(arrayCandles);

function birthdayCakeCandles(candles) {

    // verifica o maior numero usando Math.max
    const maxCandles = Math.max(...candles);
  
    //busca o numero de vezes que o maior valor sai em um array
   const numbers = candles.filter((num) => num === maxCandles);
   const countBirthday = numbers.length;

   console.log(countBirthday); 
}