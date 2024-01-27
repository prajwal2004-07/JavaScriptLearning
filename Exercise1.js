//Exercise 1:- Guessing Game 

console.log("Guess Number Game from (1-100) ")
let unknownNum = Math.floor(Math.random() * 100) + 1;// Random Number 
let guessNum ;//
let  chances=0;
do {
    guessNum = prompt("Guess The Number");
    unknownNum = Number.parseInt(unknownNum);
    
    if (guessNum === unknownNum){
        console.log("You Guess the Right Number\n You guess ( 100 out of  " + chances + " times )\n"+ "U Won the Game");
    }else if (guessNum > unknownNum){ 
        console.log("You Guess the Big Number")
    }else{
        console.log("You Guess the Small Number ");
    }
    chances++;

}while (guessNum != unknownNum);