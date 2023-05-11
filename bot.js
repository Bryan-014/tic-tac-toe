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
  //actBoardInformations postition disclaimer second index represent: 0 = Y and 1 = X

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
      let foundGameOkSpot = () => {
        let sortPosition = Math.floor(Math.random() * 2);

        if (sortPosition == 0) {
          setX = positions.x[actBoardInformations.positionsO[0][1]];

          let isOkInThisLine = false;

          if (
            document.querySelector('#' + positions.y[0] + setX).value != '.' ||
            document.querySelector('#' + positions.y[1] + setX).value != '.' ||
            document.querySelector('#' + positions.y[2] + setX).value != '.'
          ) {
            isOkInThisLine = true;
          }

          if (isOkInThisLine) {
            do {
              setY = positions.y[parseInt(Math.random() * 3)];
            } while (document.querySelector('#' + setY + setX).value != '.');
          } else {
            setY = positions.y[actBoardInformations.positionsO[0][0]];

            do {
              setX = positions.x[parseInt(Math.random() * 3)];
            } while (document.querySelector('#' + setY + setX).value != '.');
          }
        } else {
          setY = positions.y[actBoardInformations.positionsO[0][0]];

          let isOkInThisLine = false;

          if (
            document.querySelector('#' + setY + positions.x[0]).value != '.' ||
            document.querySelector('#' + setY + positions.x[1]).value != '.' ||
            document.querySelector('#' + setY + positions.x[2]).value != '.'
          ) {
            isOkInThisLine = true;
          }

          if (isOkInThisLine) {
            do {
              setX = positions.x[parseInt(Math.random() * 3)];
            } while (document.querySelector('#' + setY + setX).value != '.');
          } else {
            setX = positions.x[actBoardInformations.positionsO[0][1]];

            do {
              setY = positions.y[parseInt(Math.random() * 3)];
            } while (document.querySelector('#' + setY + setX).value != '.');
          }
        }
      };

      if (
        actBoardInformations.positionsX[0][0] ==
        actBoardInformations.positionsX[1][0]
      ) {
        setY = actBoardInformations.positionsX[0][0];
        if (
          actBoardInformations.positionsX[0][1] != 0 &&
          actBoardInformations.positionsX[1][1] != 0
        ) {
          setX = 0;
        } else if (
          actBoardInformations.positionsX[0][1] != 1 &&
          actBoardInformations.positionsX[1][1] != 1
        ) {
          setX = 1;
        } else {
          setX = 2;
        }
        if (
          actBoardInformations.positionsO[0][1] != setX ||
          actBoardInformations.positionsO[0][0] != setY
        ) {
          setX = positions.x[setX];
          setY = positions.y[setY];
        } else {
          foundGameOkSpot();
        }
      } else if (
        actBoardInformations.positionsX[0][1] ==
        actBoardInformations.positionsX[1][1]
      ) {
        setX = actBoardInformations.positionsX[0][1];
        if (
          actBoardInformations.positionsX[0][0] != 0 &&
          actBoardInformations.positionsX[1][0] != 0
        ) {
          setY = 0;
        } else if (
          actBoardInformations.positionsX[0][0] != 1 &&
          actBoardInformations.positionsX[1][0] != 1
        ) {
          setY = 1;
        } else {
          setY = 2;
        }

        if (
          actBoardInformations.positionsO[0][1] != setX ||
          actBoardInformations.positionsO[0][0] != setY
        ) {
          setX = positions.x[setX];
          setY = positions.y[setY];
        } else {
          foundGameOkSpot();
        }
      } else if (
        (actBoardInformations.positionsX[0][0] == 1 &&
          actBoardInformations.positionsX[0][1] == 1 &&
          ((actBoardInformations.positionsX[1][0] == 0 &&
            actBoardInformations.positionsX[1][1] == 0) ||
            (actBoardInformations.positionsX[1][0] == 0 &&
              actBoardInformations.positionsX[1][1] == 2) ||
            (actBoardInformations.positionsX[1][0] == 2 &&
              actBoardInformations.positionsX[1][1] == 2) ||
            (actBoardInformations.positionsX[1][0] == 2 &&
              actBoardInformations.positionsX[1][1] == 0))) ||
        (actBoardInformations.positionsX[1][0] == 1 &&
          actBoardInformations.positionsX[1][1] == 1 &&
          ((actBoardInformations.positionsX[0][0] == 0 &&
            actBoardInformations.positionsX[0][1] == 0) ||
            (actBoardInformations.positionsX[0][0] == 0 &&
              actBoardInformations.positionsX[0][1] == 2) ||
            (actBoardInformations.positionsX[0][0] == 2 &&
              actBoardInformations.positionsX[0][1] == 2) ||
            (actBoardInformations.positionsX[0][0] == 2 &&
              actBoardInformations.positionsX[0][1] == 0))) ||
        (actBoardInformations.positionsX[0][0] == 0 &&
          actBoardInformations.positionsX[0][1] == 0 &&
          actBoardInformations.positionsX[1][0] == 2 &&
          actBoardInformations.positionsX[1][1] == 2) ||
        (actBoardInformations.positionsX[0][0] == 2 &&
          actBoardInformations.positionsX[0][1] == 2 &&
          actBoardInformations.positionsX[1][0] == 0 &&
          actBoardInformations.positionsX[1][1] == 0) ||
        (actBoardInformations.positionsX[0][0] == 0 &&
          actBoardInformations.positionsX[0][1] == 2 &&
          actBoardInformations.positionsX[1][0] == 2 &&
          actBoardInformations.positionsX[1][1] == 0) ||
        (actBoardInformations.positionsX[0][0] == 2 &&
          actBoardInformations.positionsX[0][1] == 0 &&
          actBoardInformations.positionsX[1][0] == 0 &&
          actBoardInformations.positionsX[1][1] == 2)
      ) {
        if (
          actBoardInformations.positionsX[0][0] != 1 &&
          actBoardInformations.positionsX[1][0] != 1
        ) {
          setX = 1;
          setY = 1;
        } else if (
          actBoardInformations.positionsX[0][1] == 0 ||
          actBoardInformations.positionsX[1][1] == 0
        ) {
          if (
            actBoardInformations.positionsX[0][0] == 0 ||
            actBoardInformations.positionsX[1][0] == 0
          ) {
            setX = 2;
            setY = 2;
          } else {
            setX = 2;
            setY = 0;
          }
        } else {
          if (
            actBoardInformations.positionsX[0][0] == 2 ||
            actBoardInformations.positionsX[1][0] == 2
          ) {
            setX = 0;
            setY = 0;
          } else {
            setX = 0;
            setY = 2;
          }
        }
        if (
          actBoardInformations.positionsO[0][0] != setX ||
          actBoardInformations.positionsO[0][1] != setY
        ) {
          setX = positions.x[setX];
          setY = positions.y[setY];
        } else {
          foundGameOkSpot();
        }
      } else {
        foundGameOkSpot();
      }
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
