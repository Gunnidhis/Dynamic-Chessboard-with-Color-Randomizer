
const chessboard = document.querySelector('.chessboard');
let prevWhiteSquare = null;
let intervalId = null;

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the color of the white square every second
function updateColor() {
  if (prevWhiteSquare != null) {
    prevWhiteSquare.style.backgroundColor = getRandomColor();
  }
}

// Function to create a chessboard
function createChessboard() {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    if ((i + Math.floor(i / 8)) % 2 === 0) {
      square.classList.add('white');
      square.addEventListener('click', () => {
        if (prevWhiteSquare) {
          prevWhiteSquare.style.backgroundColor = '#f0d9b5';
          clearInterval(intervalId);
        }
        square.style.backgroundColor = getRandomColor();
        prevWhiteSquare = square;
        intervalId = setInterval(updateColor, 1000);
      });
    } else {
      square.classList.add('black');
      square.addEventListener('click', () => {
        if (prevWhiteSquare) {
          prevWhiteSquare.style.backgroundColor = '#f0d9b5';
          clearInterval(intervalId);
          prevWhiteSquare = null;
        }
      });
    }
    chessboard.appendChild(square);
  }
}

createChessboard();