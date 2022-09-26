console.log("Welcome to my Tic Tac Toe")
let music = new Audio("./images/presss.mp3")
let audioTurn = new Audio("./images/button-09a.mp3")
let gameover = new Audio("./images/win.mp3")
let turn = "X"
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
   
        let boxtext = document.getElementsByClassName('boxtext');
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText +   "  Won 🥇"
                isgameover = true 
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
                gameover.play();
            }
        }) 
        if(((boxtext[0].innerText == "X") || (boxtext[0].innerText == "0") ) && ((boxtext[1].innerText == "X") || (boxtext[1].innerText == "0")) && ((boxtext[2].innerText == "X") || (boxtext[2].innerText == "0")) && ((boxtext[3].innerText == "X") || (boxtext[3].innerText == "0") ) && ((boxtext[4].innerText == "X") || (boxtext[4].innerText == "0")) && ((boxtext[5].innerText == "X") || (boxtext[5].innerText == "0") )&& ((boxtext[6].innerText == "X") || (boxtext[6].innerText == "0")) && ((boxtext[7].innerText == "X") || (boxtext[7].innerText == "0")) && ((boxtext[8].innerText == "X") || (boxtext[8].innerText == "0") )){
            let draW=document.getElementById("draw")
            draW.textContent="It's a draw game"
            console.log(draW)
        }
}
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            changeTurn();
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
