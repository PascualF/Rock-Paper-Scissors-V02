const userImg = document.querySelectorAll(".img-choice");
const pcChoiceImg = document.querySelector(".display-pc");
const userChoiceImg = document.querySelector(".display-user");

const pcChoice = () => {
    const pcArray = ['paper', 'rock', 'scissors'];
    return pcArray[Math.floor(Math.random() * pcArray.length)]
}

userImg.forEach((choice) => {
    choice.addEventListener(('click'), (e) => {
        const userChoice = e.target.attributes.value.value
        const pcPlay = pcChoice()
        pcChoiceImg.src = `images/${pcPlay}.png`;
        userChoiceImg.src = `images/${userChoice}.png`;
        console.log(checkWinner(userChoice, pcPlay))
    })
})

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
        userChoice === 'scissors' && pcChoice === 'rock')   // winning user
    {
        return winner = 'pcWin'
    } else { //tie
        return winner = 'tie'
    }
}



const game = () => {
    let gameOn = true;
    let scoreUser = 0;
    let scorePc = 0;

    while (gameOn) {

        gameOn = false;
    }
}
