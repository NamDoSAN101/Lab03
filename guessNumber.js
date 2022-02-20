let num = 0
let min = 1
let max = 100 
let ans = 0
function getRandomInt() {
     num = Math.floor(Math.random() * 100) + 1;
  return num ;
    }
function guessNum(){
    while( ans !== num ) {
        let ans1 =  prompt("Guess the number between " + min + " and " + max +" inclusive or input other numbers to see the secret number."); 
         ans = parseInt(ans1) 
         if (ans>=min || ans<=max) {
            if(ans<num ) {
                min = ans + 1;
                ans = 0;
            }
            else if(ans < min || ans > max) {
                alert("U LOSE !.\nThe secret number is " + num ) 
            }
            if(ans>num) {
                max = ans - 1
                ans = 0     
            }
            else if(ans === num) {
                alert("Matched! You win.\nThe secret number is " + num )
            }
        }else{
            alert("Matched! You win.\nThe secret number is " + num ) 
        }    
    }
}

getRandomInt();
guessNum();
console.log(num);

// 'Matched! You win. The secret number is '