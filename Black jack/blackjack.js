

let sum=0
let balckjack = false
let isAlive=false
let sumEl=document.getElementById("sum-el")
let cards=[]
//let messageEl = document.getElementById("message-el")
let messageEl=document.querySelector(".message-el")
let cardsEl=document.getElementById("cards-el")
let player={
    Name:"Mydh",
    Money: 66
    
}
let playerEl=document.getElementById("player-el")
playerEl.textContent= player.Name +":"+ player.Money + " rs"


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}
function StartGame(){
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum = firstcard+secondcard
    render()
}

function render(){
    cardsEl.textContent = "Cards :"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent="Sum:"+ sum
    if (sum < 21){
        message = "Do u want to draw new card..?"
    }else if(sum==21){
        message = "you got blackjack"
        balckjack=true
    }else{
        message = "you are out of game"
        isAlive=false
  
    }
   
    messageEl.textContent = message
}
function New(){
    if(isAlive===true && balckjack==false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    render()
    }
}
