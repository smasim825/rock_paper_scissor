let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const genComputerChoice = ()=>{
   const options=["rock","paper","scissors"];
   const randomIdx=Math.floor(Math.random()*3);
   return options[randomIdx];
};
const playgame = (userChoice)=>{
   const computerChoice=genComputerChoice();
   if(userChoice===computerChoice){
    drawGame();
    return;
   }
   let userWin=true;
    if(userChoice==="rock"){
       userWin = computerChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
       userWin = computerChoice==="scissors"?false:true;
    }
    else{
        userWin = computerChoice==="rock"?false:true;
    }
   showWinner(userWin , userChoice, computerChoice);
};
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playgame(userChoice);
   })
});
const drawGame = ()=>{
  msg.innerText="Game is DRAW. Play again";
  msg.style.backgroundColor = "gray";
};
const showWinner=(userWin ,userChoice, computerChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText=`You WIN. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText=`You LOSE. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}