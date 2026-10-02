var secretNumber;
secretNumber=Math.floor(Math.random()*10+1);
var guess=Number(prompt("Guess a Number between 1 and 10"));
if(secretNumber===guess){
    alert("Congrats!");
}else{
    alert("Sorry!")
}
console.log(secretNumber);
