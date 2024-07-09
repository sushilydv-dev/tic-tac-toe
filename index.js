let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let  msg = document.querySelector("#msg")

let gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

let drawgame = () => {
    console.log("draw game");
    msg.innerText ="Draw"
     msg.style.backgroundColor ="black"
}

let playGame = (userchoice) => {
    console.log("user choice", userchoice);
    let compchoice = gencompchoice();
    console.log("comp choice", compchoice);
    
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        }

        if (userwin) {
            userScore++;
            console.log("you won");
            msg.innerText = "You won"
            msg.style.backgroundColor ="green"
        } else {
            compScore++;
            console.log("you lose!");
            msg.innerText = "You Lost"
             msg.style.backgroundColor ="green"
        }
       
    }

    console.log("User Score:", userScore);
    console.log("Computer Score:", compScore);
} 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
}); 
