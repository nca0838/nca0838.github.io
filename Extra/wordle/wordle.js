var Height = 6; //Number of guesses that the player has.

var Width = 5; //the length of the word.

var Row = 0; // current guess
var Col = 0; // current letter

var GameOver = false;
var Word = "SQUID"

window.onload = function(){
  intialize();
  
}

function intialize(){
  
  //Game Board
  for (let r = 0; r < Height; r++){
  for (let c = 0; c < Width; c++){
      let tile = document. createElement('span');
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add('tile');
      tile.innerText = "";
      document.getElementById('board').appendChild(tile);
      
    }
  }
  
  //Watch Keypress
  document.addEventListener('keyup', (e) => {
    
    if(GameOver) return;
    if ('KeyA' <= e.code && e.code <= 'KeyZ'){
      
      if (Col < Width){
        
        let currTile = document.getElementById(Row.toString() + "-" + Col.toString());
        
        if (currTile.innerText === ""){
          currTile.innerText = e.code[3];
          
          Col += 1;
        }
      }
    }
    
    else if(e.code === "Backspace"){
      
      if (Col < 0 && Col <= Width){
        
        Col -= 1;
      }
      let currTile = document.getElementById(Row.toString() + "-" + Col.toString());
      currTile.innerText = "";
      
    }
    
    else if(e.code === "Enter"){
      update();
      Row += 1;
      Col = 0;
      
    }
    
    if(!GameOver && Row === Height){
      
      GameOver = true;
      document.getElementById('answer').innerText = Word;
    }
  })
  
}

function update(){
  
  
}