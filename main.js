const h1 = document.getElementById("h1");
const player1  = document.getElementById("img1")
const player2  = document.getElementById("img2")

function rollDice(){
    let random1 = Math.floor(Math.random() * 6 + 1);
    let random2 = Math.floor(Math.random() * 6 + 1);
    console.log(random1, random2);
    if(random1 > random2){
        h1.textContent = "Player 1 Wins";
        player1.src = `image/dice${random1}.png`;
        player2.src = `image/dice${random2}.png`;

    }
    else if(random2 > random1){
        h1.textContent = "Player 2 wins";
        player1.src = `image/dice${random1}.png`;
        player2.src = `image/dice${random2}.png`;

    }
    else{
        h1.textContent = "Draw";
        player1.src = `image/dice${random1}.png`;
        player2.src = `image/dice${random2}.png`;
    }

}