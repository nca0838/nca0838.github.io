var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
var wordPicker = Math.floor(Math.random() * 52 + 1);
if (wordPicker === 1){
  word = "ABOUT";
} else if (wordPicker === 2){
  word = "ALERT"
} else if (wordPicker === 3){
  word = "ARGUE"
}else if (wordPicker === 4){
  word = "ALIKE"
}else if (wordPicker === 5){
  word = "ARISE"
}else if (wordPicker === 6){
  word = "BEGAN"
}else if (wordPicker === 7){
  word = "ABUSE"
}else if (wordPicker === 8){
  word = "ALIVE"
}else if (wordPicker === 9){
  word = "ARRAY"
}else if (wordPicker === 10){
  word = "BEGIN"
}else if (wordPicker === 11){
  word = "ACTOR"
}else if (wordPicker === 12){
  word = "ALLOW"
}else if (wordPicker === 13){
  word = "ASIDE"
}else if (wordPicker === 14){
  word = "BEGUN"
}else if (wordPicker === 15){
  word = "ACUTE"
}else if (wordPicker === 16){
  word = "ALONE"
}else if (wordPicker === 17){
  word = "ASSET"
}else if (wordPicker === 18){
  word = "BEING"
}else if (wordPicker === 19){
  word = "ADMIT"
}else if (wordPicker === 20){
  word = "ALONG"
}else if (wordPicker === 21){
  word = "AUDIO"
}else if (wordPicker === 22){
  word = "BELOW"
}else if (wordPicker === 23){
  word = "ADOPT"
}else if (wordPicker === 24){
  word = "ALTER"
}else if (wordPicker === 25){
  word = "AUDIT"
}else if (wordPicker === 26){
  word = "BENCH"
}else if (wordPicker === 27){
  word = "ADULT"
}else if (wordPicker === 28){
  word = "AMONG"
}else if (wordPicker === 29){
  word = "AVOID"
}else if (wordPicker === 30){
  word = "AFTER"
}else if (wordPicker === 31){
  word = "ANGER"
}else if (wordPicker === 32){
  word = "AWARD"
}else if (wordPicker === 33){
  word = "BIRTH"
}else if (wordPicker === 34){
  word = "AGAIN"
}else if (wordPicker === 35){
  word = "WATER"
}else if (wordPicker === 36){
  word = "ANGLE"
}else if (wordPicker === 37){
  word = "AWARE"
}else if (wordPicker === 38){
  word = "BLACK"
}else if (wordPicker === 39){
  word = "AGENT"
}else if (wordPicker === 40){
  word = "ANGRY"
}else if (wordPicker === 41){
  word = "BADLY"
}else if (wordPicker === 42){
  word = "BLAME"
}else if (wordPicker === 43){
  word = "AGREE"
}else if (wordPicker === 44){
  word = "APART"
}else if (wordPicker === 45){
  word = "BAKER"
}else if (wordPicker === 46){
  word = "BLIND"
}else if (wordPicker === 47){
  word = "AHEAD"
}else if (wordPicker === 48){
  word = "APPLE"
}else if (wordPicker === 49){
  word = "BASES"
}else if (wordPicker === 50){
  word = "BLOCK"
}else if (wordPicker === 51){
  word = "ALARM"
}else if (wordPicker === 52){
  word = "APPLY"
}
var word;


window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }


    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return; 

        // alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }

        else if (e.code == "Enter") {
            update();
            row += 1; //start new row
            col = 0; //start at 0 for new row
        }


        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    })
}


function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } // Is it in the word?
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        } // Not in the word
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }

    }
}