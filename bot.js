function botTurn() {
  switch (document.querySelector('#mode').value) {
    case 'easy':
      turnBotEasy();
      break;
    case 'med':
      turnBotMed();
      break;
    case 'imposs':
      turnBotImposs();
      break;
    default:
      break;
  }
}

function turnBotEasy() {
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

function turnBotMed() {}

function turnBotImposs() {}
