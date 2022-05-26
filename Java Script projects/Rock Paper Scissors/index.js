let playerRock = document.getElementById('player-rock')
let playerPaper = document.getElementById('player-paper')
let playerScissor = document.getElementById('player-scissor')
let computerRock = document.getElementById('computer-rock')
let computerPaper = document.getElementById('computer-paper') 
let computerScissor = document.getElementById('computer-scissor')
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')
console.log(playerScore.value)

playerRock.style.display = 'block'
computerRock.style.display = 'block'

const selectOption = (index) => {
    let random = Math.trunc(Math.random()*3)
    computerRock.style.display = 'none'
    computerPaper.style.display = 'none'
    computerScissor.style.display = 'none'
    playerRock.style.display = 'none'
    playerPaper.style.display = 'none'
    playerScissor.style.display = 'none'

    if(index === 0){
        playerRock.style.display = 'block'
    }
    else if (index === 1){
        playerPaper.style.display = 'block'
    }
    else{
        playerScissor.style.display = 'block'
    }

    if(random === 0){
        computerRock.style.display = 'block'
    }  
    else if(random === 1){
        computerPaper.style.display = 'block'
    } 
    else{
        computerScissor.style.display = 'block'
    }

    if((index === 0 && random === 2) || (index === 1 && random === 0) || (index === 2 && random === 1)){
        playerScore.innerText = parseInt(playerScore.innerHTML) + 1
    }

    if((random === 0 && index === 2) || (random === 1 && index === 0) || (random === 2 && index === 1)){
        computerScore.innerText = parseInt(computerScore.innerHTML) + 1
    }
}
