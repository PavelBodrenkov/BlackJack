// --------------------------------------------------------------------//
const fieldUser = document.querySelector('.user');
const fieldDealer = document.querySelector('.computer');
const buttonStart = document.querySelector('.button-start');
const hit = document.querySelector('.hit')
const stand = document.querySelector('.stand');
const victoties = document.querySelector('.victoties');
const losing = document.querySelector('.losing');
const draw = document.querySelector('.draw');
const buttonRate = document.querySelector('.button-rate');
const inputRate = document.querySelector('.input-rate');
const spanRate = document.querySelector('.span-rate');
const buttonDelRate = document.querySelector('.button-del-rate');
const rules = document.querySelector('.rules__link');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');
const popupMessage = document.querySelector('.popup__message');
const popupRate = document.querySelector('.popup__rate');
const popupWinnerClose = document.querySelector('.popup__winner_close');
const winnerSpan = document.querySelector('.winner-span');
const popupWinner = document.querySelector('.popup__winner');
const moneyRate = document.querySelector('.money-rate');
const attempt = document.querySelectorAll('.attempt');
const popupAll = document.querySelector('.popup__all');
const rateContainer = document.querySelector('.rate-container');
const titleStatus = document.querySelector('.title__status');

let cardsAll = [
    {img: './images/cards2/2(1).png', points: 2},
    {img: './images/cards2/2(2).png', points: 2},
    {img: './images/cards2/2(3).png', points: 2},
    {img: './images/cards2/2(4).png', points: 2},
    {img: './images/cards2/3(1).png', points: 3},
    {img: './images/cards2/3(2).png', points: 3},
    {img: './images/cards2/3(3).png', points: 3},
    {img: './images/cards2/3(4).png', points: 3},
    {img: './images/cards2/4(1).png', points: 4},
    {img: './images/cards2/4(2).png', points: 4},
    {img: './images/cards2/4(3).png', points: 4},
    {img: './images/cards2/4(4).png', points: 4},
    {img: './images/cards2/5(1).png', points: 5},
    {img: './images/cards2/5(2).png', points: 5},
    {img: './images/cards2/5(3).png', points: 5},
    {img: './images/cards2/5(4).png', points: 5},
    {img: './images/cards2/6(1).png', points: 6},
    {img: './images/cards2/6(2).png', points: 6},
    {img: './images/cards2/6(3).png', points: 6},
    {img: './images/cards2/6(4).png', points: 6},
    {img: './images/cards2/7(1).png', points: 7},
    {img: './images/cards2/7(2).png', points: 7},
    {img: './images/cards2/7(3).png', points: 7},
    {img: './images/cards2/7(4).png', points: 7},
    {img: './images/cards2/8(1).png', points: 8},
    {img: './images/cards2/8(2).png', points: 8},
    {img: './images/cards2/8(3).png', points: 8},
    {img: './images/cards2/8(4).png', points: 8},
    {img: './images/cards2/9(1).png', points: 9},
    {img: './images/cards2/9(2).png', points: 9},
    {img: './images/cards2/9(3).png', points: 9},
    {img: './images/cards2/9(4).png', points: 9},
    {img: './images/cards2/10(1).png', points: 10},
    {img: './images/cards2/10(2).png', points: 10},
    {img: './images/cards2/10(3).png', points: 10},
    {img: './images/cards2/10(4).png', points: 10},
    {img: './images/cards2/Ace(1).png', points: 11},
    {img: './images/cards2/Ace(2).png', points: 11},
    {img: './images/cards2/Ace(3).png', points: 11},
    {img: './images/cards2/Ace(4).png', points: 11},
    {img: './images/cards2/Jack(1).png', points: 2},
    {img: './images/cards2/Jack(2).png', points: 2},
    {img: './images/cards2/Jack(3).png', points: 2},
    {img: './images/cards2/Jack(4).png', points: 2},
    {img: './images/cards2/Queen(1).png', points: 3},
    {img: './images/cards2/Queen(2).png', points: 3},
    {img: './images/cards2/Queen(3).png', points: 3},
    {img: './images/cards2/Queen(4).png', points: 3},
    {img: './images/cards2/King(1).png', points: 4},
    {img: './images/cards2/King(2).png', points: 4},
    {img: './images/cards2/King(3).png', points: 4},
    {img: './images/cards2/King(4).png', points: 4}
]
    
let playerCard = [];
let dealerCard = [];
let playerRoundScore = 0;
let dealerRoundScore = 0;
fieldUser.textContent = "0";
fieldDealer.textContent = "0";
victoties.textContent = "0";
losing.textContent = "0";
draw.textContent = "0";

function randomCard(cardsAll, player, itteration) {
    for(let i = 0; i<itteration; i++) {
        player.push(cardsAll[Math.floor(Math.random() * cardsAll.length)]);
    }   
};

popupWinnerClose.addEventListener('click', () => {
    console.log('dfgfghg')
    popupMessage.classList.remove('popup__active');
    
    hit.removeEventListener('click', addCard);
    newGame()
});

newGame();

function trigger () {
    if(inputRate.textContent !== "") {
        buttonRate.classList.remove('disabled')
    }
    if(inputRate.textContent === "") {
        buttonRate.classList.add('disabled');
    }
    attempt.forEach((button) => {
        button.classList.remove('color')
    })
};

function newGame () {
    inputRate.textContent = ""
    if(inputRate.textContent !== "") {
        buttonRate.classList.remove('disabled')
    }
    if(inputRate.textContent === "") {
        buttonRate.classList.add('disabled');
    }
    attempt.forEach((button) => {
        button.classList.remove('disabled')
        button.classList.add('color')
        button.classList.remove('color-red')
        if(+moneyRate.textContent < +button.textContent.split('').slice(0,4).join('')) {
            button.classList.add('disabled');
            button.classList.remove('color');
        } 
    })

    if(+victoties.textContent + +losing.textContent + +draw.textContent == 6) {
        popupWinner.classList.add('popup__active');
         titleStatus.textContent = "Зарегистрируйтесь или перезагрузите страницу!";
         winnerSpan.textContent = "";
         titleStatus.style.top = "55%";
         titleStatus.style.left = "50%";
    }
    console.log(+victoties.textContent + +losing.textContent + +draw.textContent)

    if (moneyRate.textContent == 0) {
        popupWinner.classList.add('popup__active');
        titleStatus.textContent = "Пора пополнить бонусный счет!";
        titleStatus.style.top = "55%";
    }

    playerRoundScore = 0;
    dealerRoundScore = 0;
    fieldUser.textContent = "0";
    fieldDealer.textContent = "0";
    hit.classList.add('disabled');
    stand.classList.add('disabled');
    buttonRate.addEventListener('click', startGame)
    hit.addEventListener('click', addCard);
    stand.addEventListener('click', showCompareCard);
    document.querySelector('.player__card-1').style.display = "none";
    document.querySelector('.player__card-2').style.display = "none";
    document.querySelector('.player__card-3').style.display = "none";
    document.querySelector('.player__card-4').style.display = "none";
    document.querySelector('.player__card-5').style.display = "none";
    document.querySelector('.dealer__card-1').style.display = "none";
    document.querySelector('.dealer__card-2').style.display = "none";
    document.querySelector('.dealer__card-3').style.display = "none";
    document.querySelector('.dealer__card-4').style.display = "none";
    document.querySelector('.dealer__card-5').style.display = "none";
};

function startGame () {
    buttonRate.classList.add('disabled');
    playerCard = [];
    dealerCard = [];
    playerRoundScore = 0;
    dealerRoundScore = 0;
    hit.classList.remove('disabled');
    stand.classList.remove('disabled');
    randomCard(cardsAll, playerCard, 2);
    randomCard(cardsAll, dealerCard, 2);
    cardsAll.splice(cardsAll.indexOf(playerCard[0]), 1);
    cardsAll.splice(cardsAll.indexOf(playerCard[1]), 1);
    cardsAll.splice(cardsAll.indexOf(dealerCard[0]), 1);
    cardsAll.splice(cardsAll.indexOf(dealerCard[1]), 1);
    document.querySelector('.player__card-1').style.display = "inline-block";
    setTimeout(() => document.querySelector('.player__card-2').style.display = "inline-block", 500);
    setTimeout(() => document.querySelector('.dealer__card-1').style.display = "inline-block", 1200);
    setTimeout(() => document.querySelector('.dealer__card-2').style.display = "inline-block", 1800);
    document.querySelector('.player__card-1').src = playerCard[0].img;
    document.querySelector('.player__card-2').src = playerCard[1].img;
    document.querySelector('.dealer__card-1').src = dealerCard[0].img;
    document.querySelector('.dealer__card-2').src = dealerCard[1].img;;
    playerRoundScore = playerCard[0].points + playerCard[1].points;
    dealerRoundScore = dealerCard[0].points + dealerCard[1].points;

    if(playerRoundScore === 21 && dealerRoundScore <21) {
        hit.classList.add('disabled');
        stand.classList.add('disabled');
            setTimeout(() => {
                popupWinner.classList.add('popup__active');
                titleStatus.textContent = "Победа!"
                winnerSpan.textContent = `Вы выиграли ${inputRate.textContent * 2} USD`
                moneyRate.textContent= +moneyRate.textContent + inputRate.textContent * 2;
                titleStatus.style.top = "50%"
                victoties.textContent++
            }, 3500)
    }
    if(dealerRoundScore === 21 && playerRoundScore <21) {
        hit.classList.add('disabled');
        stand.classList.add('disabled');
        setTimeout(() => {
            popupWinner.classList.add('popup__active');
            titleStatus.textContent = "Вы проиграли!"
            titleStatus.style.top = "55%"
            winnerSpan.textContent = ""
            losing.textContent++
        }, 3500)
    }

    setTimeout(() => fieldUser.textContent = playerRoundScore, 1300)
    setTimeout(() => fieldDealer.textContent = dealerRoundScore, 2500)
    

    if(playerCard[0].points == 11 && playerCard[1].points == 11) {
        setTimeout(() => {
            popupWinner.classList.add('popup__active');
            titleStatus.textContent = "Победа!"
            winnerSpan.textContent = `Вы выиграли ${inputRate.textContent * 2} USD`
            moneyRate.textContent= +moneyRate.textContent + inputRate.textContent * 2;
            titleStatus.style.top = "50%"
            victoties.textContent++
        }, 3500)
    } else if(dealerCard[0].points == 11 && dealerCard[1].points == 11) {
        setTimeout(() => {
            popupWinner.classList.add('popup__active');
            titleStatus.textContent = "Вы проиграли!"
            titleStatus.style.top = "55%"
            winnerSpan.textContent = ""
            losing.textContent++
        }, 3500)
        
    } 
    // else if (playerRoundScore > 21) {
        // showCompareCard();
    // }

    buttonRate.removeEventListener('click', startGame)  
}

function addCard () {
    if(playerCard.length === 2){
        randomCard(cardsAll, playerCard, 1);
        cardsAll.splice(cardsAll.indexOf(playerCard[2]), 1);
        if(playerCard[2].points === 11) {
            playerCard[2].points = 1
        }
        document.querySelector('.player__card-3').src = playerCard[2].img;
        document.querySelector('.player__card-3').style.display = "inline-block";
        playerRoundScore += playerCard[2].points;
        fieldUser.textContent = playerRoundScore;
    } else if (playerCard.length === 3) {
        randomCard(cardsAll, playerCard, 1);
        cardsAll.splice(cardsAll.indexOf(playerCard[3]), 1);
        if(playerCard[3].points === 11) {
            playerCard[3].points = 1
        }
        document.querySelector('.player__card-4').src = playerCard[3].img;
        document.querySelector('.player__card-4').style.display = "inline-block";
        playerRoundScore += playerCard[3].points;
        fieldUser.textContent = playerRoundScore;
    }else if (playerCard.length === 4) {
        randomCard(cardsAll, playerCard, 1);
        cardsAll.splice(cardsAll.indexOf(playerCard[4]), 1);
        if(playerCard[4].points === 11) {
            playerCard[4].points = 1
        }
        document.querySelector('.player__card-5').src = playerCard[4].img;
        document.querySelector('.player__card-5').style.display = "inline-block";
        playerRoundScore += playerCard[4].points;
        fieldUser.textContent = playerRoundScore;
    }
    if (playerRoundScore >= 21) {
            showCompareCard();
   
    }

    if(playerCard.length === 5) {
            hit.classList.add('disabled');
            showCompareCard();
    }
}

function showCompareCard () {
        if(dealerRoundScore <17 && playerRoundScore <=21) {
            randomCard(cardsAll, dealerCard, 1);
            cardsAll.splice(cardsAll.indexOf(dealerCard[2]), 1);
            if(dealerCard[2].points === 11) {
                dealerCard[2].points = 1
            }
            document.querySelector('.dealer__card-3').src = dealerCard[2].img;
            document.querySelector('.dealer__card-3').style.display = "inline-block";
            dealerRoundScore += dealerCard[2].points;
            fieldDealer.textContent = dealerRoundScore;
        }
        if(dealerRoundScore <17 && playerRoundScore <=21) {
            // setTimeout(() => {
                randomCard(cardsAll, dealerCard, 1);
                cardsAll.splice(cardsAll.indexOf(dealerCard[3]), 1);
                if(dealerCard[2].points === 11) {
                    dealerCard[2].points = 1
                }
                document.querySelector('.dealer__card-4').src = dealerCard[3].img;
                document.querySelector('.dealer__card-4').style.display = "inline-block";
                dealerRoundScore += dealerCard[3].points;
                fieldDealer.textContent = dealerRoundScore;
            // }, 500)
        }
        if(dealerRoundScore <17 && playerRoundScore <=21) {
            // setTimeout(() => {
                randomCard(cardsAll, dealerCard, 1);
                cardsAll.splice(cardsAll.indexOf(dealerCard[4]), 1);
                if(dealerCard[2].points === 11) {
                    dealerCard[2].points = 1
                }
                document.querySelector('.dealer__card-5').src = dealerCard[4].img;
                document.querySelector('.dealer__card-5').style.display = "inline-block";
                dealerRoundScore += dealerCard[4].points;
                fieldDealer.textContent = dealerRoundScore;
            // }, 500)
        }
        if (playerRoundScore < dealerRoundScore && dealerRoundScore <= 21 || playerRoundScore > 21) {
            hit.classList.add('disabled');
            stand.classList.add('disabled');
            setTimeout(() => {
                popupWinner.classList.add('popup__active');
                titleStatus.textContent = "Вы проиграли!"
                titleStatus.style.top = "55%"
                winnerSpan.textContent = ""
                losing.textContent++
            }, 1500)
        } else if (playerRoundScore > dealerRoundScore && playerRoundScore <=21 || dealerRoundScore >= 22) {
            hit.classList.add('disabled');
            stand.classList.add('disabled');
            setTimeout(() => {
                popupWinner.classList.add('popup__active');
                titleStatus.textContent = "Победа!"
                winnerSpan.textContent = `Вы выиграли ${inputRate.textContent.split('').slice(0,4).join('') * 2} USD`
                moneyRate.textContent= +moneyRate.textContent + inputRate.textContent * 2;
                titleStatus.style.top = "50%"
                victoties.textContent++
            }, 1500)
        } else if (playerRoundScore === dealerRoundScore){
            hit.classList.add('disabled');
            stand.classList.add('disabled');
            setTimeout(() => {
                popupWinner.classList.add('popup__active');
                titleStatus.textContent = "Ничья!"
                winnerSpan.textContent = ""
                titleStatus.style.top = "55%"
                moneyRate.textContent= +moneyRate.textContent + +inputRate.textContent;
                draw.textContent++
            }, 1500)
        }
}

function openPopup(popup) {
    popup.classList.add('popup__active');
}

function closePopup (popup) {
popup.classList.remove('popup__active');
}

rules.addEventListener('click', () => {
    openPopup(popup)
})

closeButton.addEventListener('click', () => {
    closePopup(popup)
    inputRate.textContent = ""
    newGame()
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup__active')) {
        closePopup(popup)
        closePopup(popupMessage)
        closePopup(popupWinner)
        hit.removeEventListener('click', addCard);
        inputRate.textContent = ""
        newGame()
    }
})

document.addEventListener('keydown', (e) => {
    if(e.key = '27') {
        closePopup(popup)
        closePopup(popupMessage)
        closePopup(popupWinner)
        hit.removeEventListener('click', addCard);
        inputRate.textContent = ""
        newGame()
    }
})

attempt.forEach((item) => {
    item.addEventListener('click', ()=> {
        inputRate.textContent = item.textContent.split('').slice(0,4).join('');
        moneyRate.textContent = +moneyRate.textContent - +item.textContent.split('').slice(0,4).join('')
        console.log(item.textContent.split('').slice(0,4).join(''))
        item.classList.add('color-red')
        trigger();
        attempt.forEach((button) => {
            button.classList.add('disabled')
        })
    })
})



