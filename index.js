const userImg = document.querySelectorAll(".img-choice");
const pcChoiceImg = document.querySelector(".display-pc");
const userChoiceImg = document.querySelector(".display-user");
const btnStartGame = document.querySelector(".btn-start-game");
const containerStartGame = document.querySelector(".container");
const pcScore = document.querySelector(".pcScore");
const userScore = document.querySelector(".userScore");
const displaySentence = document.querySelector(".sentence")

const checkWinner = (userChoice, pcChoice) => {
    let winner = '';
    //winning user
    if (userChoice === 'rock' && pcChoice === 'scissors' ||
        userChoice === 'paper' && pcChoice === 'rock' ||
        userChoice === 'scissors' && pcChoice === 'paper') 
    {
        return winner = 'userWin'
    } else if (userChoice === 'rock' && pcChoice === 'paper' ||
        userChoice === 'paper' && pcChoice === 'scissors' ||
        userChoice === 'scissors' && pcChoice === 'rock')   // winning pc
    {
        return winner = 'pcWin'
    } else { //tie
        return winner = 'tie'
    }
}

btnStartGame.addEventListener(('click'), (e) => {
    containerStartGame.style.display = 'flex';
    btnStartGame.style.display = 'none';
    game();
});


const game = () => {
    let gameOn = true
    let userScoring = 0;
    let pcScoring = 0;

    while(gameOn) {

        const pcChoice = () => {
            const pcArray = ['paper', 'rock', 'scissors'];
            return pcArray[Math.floor(Math.random() * pcArray.length)]
        }
        
        userImg.forEach((choice) => {
            choice.addEventListener(('click'), (e) => {
        
                const userChoice = e.target.attributes.value.value;
                const pcPlay = pcChoice();
                pcChoiceImg.src = `images/${pcPlay}.png`;
                userChoiceImg.src = `images/${userChoice}.png`;
                
                const winnerRound = checkWinner(userChoice, pcPlay)
        
                displaySentence.textContent = winnerRound;
        
                if (winnerRound === 'tie') {
                    displaySentence.textContent = 'It is tie';
                } else if (winnerRound === 'pcWin') {
                    pcScoring++
                    displaySentence.textContent = 'PC won!';
                    pcScore.textContent = `PC: ${pcScoring}`
                } else {
                    userScoring++
                    displaySentence.textContent = 'You won!';
                    userScore.textContent = `User: ${userScoring}`
                }
        
                console.log(checkWinner(userChoice, pcPlay))
            })
        })

        gameOn = false
    }
}