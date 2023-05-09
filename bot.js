function botTurn() {
  switch (document.querySelector('#mode').value) {
    case 'easy':
      botEasy();
      break;
    case 'med':
      botMed();
      break;
    case 'imposs':
      botImposs();
      break;
    default:
      break;
  }
}

function botEasy() {
  let positions = {
    x: [1, 2, 3],
    y: ['top', 'middle', 'bottom']
  };

  let sortX = '';
  let sortY = '';

  do {
    sortX = positions.x[parseInt(Math.random() * 3)];
    sortY = positions.y[parseInt(Math.random() * 3)];
  } while (document.querySelector('#' + sortY + sortX).value != '.');

  playIn(sortY, parseInt(sortX));
}

function botMed() {
  let positions = {
    x: [1, 2, 3],
    y: ['top', 'middle', 'bottom']
  };

  let actBoardInformations = viewBoard();

  let setX = '';
  let setY = '';

  switch (actBoardInformations.round) {
    case 1:
      setX = positions.x[parseInt(Math.random() * 3)];
      setY = positions.y[parseInt(Math.random() * 3)];
      break;
    case 2:
      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');
      break;
    case 3:
      if (
        actBoardInformations.positionsO[0][0] == 1 &&
        actBoardInformations.positionsO[0][1] == 1
      ) {
        let ocuped = false;
        do {
          setX = parseInt(Math.random() * 3);
          setY = parseInt(Math.random() * 3);
          ocuped =
            actBoardInformations.positionsX[0][0] == setY &&
            actBoardInformations.positionsX[0][1] == setX;
        } while (!(setX != 1 && setY != 1 && !ocuped));
        setX = positions.x[setX];
        setY = positions.y[setY];
      } else if (
        (actBoardInformations.positionsO[0][0] == 0 &&
          actBoardInformations.positionsO[0][1] == 1) ||
        (actBoardInformations.positionsO[0][0] == 1 &&
          actBoardInformations.positionsO[0][1] == 0) ||
        (actBoardInformations.positionsO[0][0] == 1 &&
          actBoardInformations.positionsO[0][1] == 2) ||
        (actBoardInformations.positionsO[0][0] == 2 &&
          actBoardInformations.positionsO[0][1] == 1)
      ) {
        let tempX;
        let tempY;
        let ocuped = false;
        if (actBoardInformations.positionsO[0][0] == 1) {
          tempY = 1;
          tempX = actBoardInformations.positionsO[0][1] == 0 ? 2 : 0;
          ocuped =
            actBoardInformations.positionsX[0][0] == tempY &&
            actBoardInformations.positionsX[0][1] == tempX;
          if (!ocuped) {
            setX = positions.x[tempX];
            setY = positions.y[tempY];
          } else {
            setX = positions.x[actBoardInformations.positionsO[0][1]];
            let rand = Math.floor(Math.random() * 2);
            setY = positions.y[rand == 0 ? 0 : 2];
          }
        } else {
          tempY = actBoardInformations.positionsO[0][0] == 0 ? 2 : 0;
          tempX = 1;
          ocuped =
            actBoardInformations.positionsX[0][0] == tempY &&
            actBoardInformations.positionsX[0][1] == tempX;
          if (!ocuped) {
            setX = positions.x[tempX];
            setY = positions.y[tempY];
          } else {
            let rand = Math.floor(Math.random() * 2);
            setY = positions.y[actBoardInformations.positionsO[0][0]];
            setX = positions.x[rand == 0 ? 0 : 2];
          }
        }
      } else {
        let ocuped = false;
        let isMiddle = false;
        do {
          setX = parseInt(Math.random() * 3);
          setY = parseInt(Math.random() * 3);
          ocuped =
            document.querySelector('#' + positions.y[setY] + positions.x[setX])
              .value != '.';
          isMiddle = setX != 1 && setY != 1;
        } while (!(isMiddle && !ocuped));
        setX = positions.x[setX];
        setY = positions.y[setY];
      }
      break;
    case 4:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 5:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 6:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 7:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 8:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 9:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    default:
      break;
  }
  playIn(setY, parseInt(setX));
}

function botImposs() {
  let positions = {
    x: [1, 2, 3],
    y: ['top', 'middle', 'bottom']
  };

  let actBoardInformations = viewBoard();

  let setX = '';
  let setY = '';

  switch (actBoardInformations.round) {
    case 1:
      do {
        setX = parseInt(Math.random() * 3);
        setY = parseInt(Math.random() * 3);
      } while (!(setX != 1 && setY != 1));
      setX = positions.x[setX];
      setY = positions.y[setY];
      break;
    case 2:
      if (actBoardInformations.tabOverView[1][1] == 0) {
        setX = positions.x[1];
        setY = positions.y[1];
      } else {
        do {
          setX = parseInt(Math.random() * 3);
          setY = parseInt(Math.random() * 3);
        } while (!(setX != 1 && setY != 1));
        setX = positions.x[setX];
        setY = positions.y[setY];
      }
      break;
    case 3:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 4:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 5:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 6:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 7:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 8:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    case 9:
      //This code is only for test, remove after programing the correct round!

      do {
        setX = positions.x[parseInt(Math.random() * 3)];
        setY = positions.y[parseInt(Math.random() * 3)];
      } while (document.querySelector('#' + setY + setX).value != '.');

      break;
    default:
      break;
  }
  playIn(setY, parseInt(setX));
}

function viewBoard() {
  let tab = gameMatriz;
  let countXPlays =
    tab[0].filter(x => x == 1).length +
    tab[1].filter(x => x == 1).length +
    tab[2].filter(x => x == 1).length;

  let countOPlays =
    tab[0].filter(x => x == 2).length +
    tab[1].filter(x => x == 2).length +
    tab[2].filter(x => x == 2).length;

  return {
    tabOverView: tab,
    turnXPlays: countXPlays,
    positionsX: takePositions(tab, 1),
    turnOPlays: countOPlays,
    positionsO: takePositions(tab, 2),
    round: countXPlays + countOPlays + 1
  };
}

function takePositions(board, player) {
  let positions = [];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (board[x][y] == player) {
        positions.push([x, y]);
      }
    }
  }
  return positions;
}
