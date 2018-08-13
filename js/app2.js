!function() {

//All Variables
const startScreen = document.getElementById('start');
const winScreen = document.getElementById('finish')
const startButton = document.querySelector('.button');
const board = document.getElementById('board');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const boxes = document.querySelector('.boxes').children;
const boxli = document.getElementsByClassName('box');
const newGameButton = document.querySelector('.newGame');


let randomNumberGenerator = Math.floor(Math.random() * 2) + 1;
let count = 0;
let message = document.querySelector('.message');


//All Functions


function hide(element) {
  element.style.display = 'none';
}


function show(element) {
  element.style.display = 'initial';
}


function currentPlayer(player) {
  player.classList.add('active');
  console.log(player)
}


function boxFunctions() {
  for (let i = 0; i < boxes.length; i += 1) {
    let box = boxes[i];


    let inputListener = function inputListener(e) {
      let hoverbox = e.currentTarget;
      if (hoverbox.classList.contains('box-filled-1') === false && hoverbox.classList.contains('box-filled-2') === false) {
        if (player1.classList.contains('active')) {
          hoverbox.style.backgroundImage = 'url(img/o.svg)';
          hoverbox.style.backgroundImage.display = 'block';
        } else if (player2.classList.contains('active')) {
          hoverbox.style.backgroundImage = 'url(img/x.svg)';
          hoverbox.style.backgroundImage.display = 'block';
        }
      }
    }

      boxes[i].addEventListener('mouseenter', inputListener);


    let leaveListener = function leaveListener(e) {
      let hoverbox = e.currentTarget;
      if (player1.classList.contains('active')) {
            if (!hoverbox.classList.contains('box-filled-1') || !hoverbox.classList.contains('box-filled-2')) {
                hoverbox.style.backgroundImage.display = 'none';
                hoverbox.style.backgroundImage = "";
            }
        } else if (player2.classList.contains('active')) {
            if (!hoverbox.classList.contains('box-filled-1') || !hoverbox.classList.contains('box-filled-2')) {
                hoverbox.style.backgroundImage.display = 'none';
                hoverbox.style.backgroundImage = "";
            }
        }
    }

      boxes[i].addEventListener('mouseleave', leaveListener);


    function selectBox(boxNum) {
        let box = boxes[boxNum];
        return box;
    }

    function switchPlayer(currentPlayer, newPlayer) {
      currentPlayer.classList.remove('active');
      newPlayer.classList.add('active');
    }

    function makeMove() {
          box.addEventListener('click', function(e) {
            if (box.classList.contains('box-filled-1') === false && box.classList.contains('box-filled-2') === false ) {
              count += (1);
              console.log(count);
            }
            if ( player1.classList.contains('active') && box.classList.contains('box-filled-1') === false && box.classList.contains('box-filled-2') === false ) {
              box.classList.add('box-filled-1');
              switchPlayer(player1, player2);
            } else
            if ( player2.classList.contains('active') && box.classList.contains('box-filled-1') === false && box.classList.contains('box-filled-2') === false ) {
              box.classList.add('box-filled-2');
              switchPlayer(player2, player1);
            }
          });
    }

    function tieGame() {
      console.log('running');
        if (count >= 9) {{
         hide(board);
         show(winScreen);
         message.textContent = "It's a draw!"
         console.log('tie');
         winScreen.classList.add('screen-win-tie');
         if (winScreen.classList.contains('screen-win-two')) {winScreen.classList.remove('screen-win-two')}
         if (winScreen.classList.contains('screen-win-one')) {winScreen.classList.remove('screen-win-one')}
         count = 0;
       }
      }
      return count;
    }

    function winningBoxes(first, second, third, boxColor) {
        boxes[i].addEventListener('click', function(e) {
          if ( selectBox(first).classList.contains(boxColor) && selectBox(second).classList.contains(boxColor) && selectBox(third).classList.contains(boxColor)) {
            console.log('you won!');
            hide(board);
            show(winScreen);
            count = 0;
            if ( player2.classList.contains('active') ) {
              winScreen.classList.add('screen-win-one');
              message.textContent = "Player 1 wins!"
              if (winScreen.classList.contains('screen-win-two')) {winScreen.classList.remove('screen-win-two')}
            } else if ( player1.classList.contains('active') ) {
              winScreen.classList.add('screen-win-two');
              message.textContent = "Player 2  wins!"
              if (winScreen.classList.contains('screen-win-one')) {winScreen.classList.remove('screen-win-one')}
            }
          } else {
            tieGame();
          }
        });
    }

    function newGame() {
      newGameButton.addEventListener('click', function(e) {
        hide(winScreen);
        show(board);
        let box = boxes[i];
        if ( box.classList.contains('box-filled-2') ) {
          box.classList.remove('box-filled-2');
        }
        if ( box.classList.contains('box-filled-1') ) {
          box.classList.remove('box-filled-1');
        }
        let newNum = Math.floor(Math.random() * 2) + 1;
        player1.classList.remove('active');
        player2.classList.remove('active');
        if ( newNum === 1 ) {
        player1.classList.add('active');
      } else if ( newNum === 2) {
        player2.classList.add('active');
      }
      console.log(newNum);
      });
    }


    makeMove();
    // highlightBox();

    winningBoxes(0, 1, 2, 'box-filled-1');
    winningBoxes(3, 4, 5, 'box-filled-1');
    winningBoxes(6, 7, 8, 'box-filled-1');
    winningBoxes(0, 3, 6, 'box-filled-1');
    winningBoxes(1, 4, 7, 'box-filled-1');
    winningBoxes(2, 5, 8, 'box-filled-1');
    winningBoxes(0, 4, 8, 'box-filled-1');
    winningBoxes(2, 4, 6, 'box-filled-1');

    winningBoxes(0, 1, 2, 'box-filled-2');
    winningBoxes(3, 4, 5, 'box-filled-2');
    winningBoxes(6, 7, 8, 'box-filled-2');
    winningBoxes(0, 3, 6, 'box-filled-2');
    winningBoxes(1, 4, 7, 'box-filled-2');
    winningBoxes(2, 5, 8, 'box-filled-2');
    winningBoxes(0, 4, 8, 'box-filled-2');
    winningBoxes(2, 4, 6, 'box-filled-2');

    newGame();
  }
}
function playRandom() {
  if ( randomNumberGenerator === 1 ) {
  player1.classList.add('active');
} else if ( randomNumberGenerator === 2) {
  player2.classList.add('active');
}
console.log( randomNumberGenerator);
}

//Calling Functions

//hide board at start of game
hide(player1);
hide(player2);
hide(winScreen);



//Add event for clicking start button
startButton.addEventListener('click', function(e) {
  e.preventDefault();
  hide(startScreen);
  show(player1);
  show(player2);
  playRandom();
});



//Highlighting boxes when player hovers
boxFunctions();
}();
