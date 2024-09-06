let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});    

const drawGame = () =>
{
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>
{
    //Generate computer choice -> modular
    const compChoice = generateCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //comp choice: scissors/paper
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper")
        {
            //comp choice: rock/scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else
        {
            //comp choice: paper/rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

