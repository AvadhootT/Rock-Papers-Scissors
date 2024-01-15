let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
console.log(choices);

const msg = document.querySelector("#msg")

const comscorenumber = document.querySelector("#User-Score")
const userscorenumber = document.querySelector("#Computer-Score")


const genCompChoice = ()=>{
    //Rock, Paper, Scissors 
    const options = ["Rock","Paper","Scissors"];
    const randomidx = Math.floor(Math.random()*3);
    
    return options[randomidx];
}

const drawgame = ()=>{
    console.log("Game was draw");
    msg.innerText = "GAME DRAW, PLAY AGAIN"
    msg.style.backgroundColor = "#352F44";
}

const showWinner = (userwin, userScore, compScore, compchoice,userChoice)=>{
    if(userwin === true){
        console.log("USER IS WINNER");
        msg.innerText = `YOU WIN, ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        comscorenumber.innerText = userScore;
    }
    else if(userwin === false){
        console.log("COMPUTER IS WINNER")
        msg.innerText = `COMPUTER WON, ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        userscorenumber.innerText = compScore;
    }
    else{
        drawgame();
    }

}

const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice)
    //To generate computer choice
    const compchoice = genCompChoice();
    console.log("Computer Choice = ", compchoice);

    let userwin = true;

    if(userChoice === "Rock" && compchoice === "Paper"){
        compScore++;
        userwin = false;
    }
    else if(userChoice === "Rock" && compchoice === "Scissors"){
        userScore++;
        userwin = true;
    }
    else if(userChoice === "Paper" && compchoice === "Rock"){
        userScore++;
        userwin = true;
    }
    else if(userChoice === "Paper" && compchoice === "Scissors"){
        compScore++;
        userwin = false;
    }
    else if(userChoice === "Scissors" && compchoice === "Rock"){
        compScore++;
        userwin = false;
    }
    else if(userChoice === "Scissors" && compchoice === "Paper"){
        userScore++;
        userwin = true;
    }
    else if(userChoice === compchoice){
        //draw game
        // drawgame();
        userwin = "NULL";
    }

    showWinner(userwin, userScore, compScore, compchoice, userChoice);
    
}

choices.forEach((choice)=>{
    console.log(choice);
    const userChoice = choice.getAttribute("id") 
    choice.addEventListener("click",()=>{
    playGame(userChoice)


    })
})