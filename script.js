var gameMatriz = loadInitMatriz();
var vezDeVar = loadInitPlayer();
var placar = {
  x: 0,
  o: 0,
  v: 0
};

function loadInitMatriz() {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
}

function loadInitPlayer() {
  return 'X';
}

function playIn(Locale, position) {
  if (document.querySelector('#' + Locale + position).value == '.') {
    document.querySelector('#' + Locale + position).value = vezDeVar;
    document.querySelector('#' + Locale + position).style.color =
      vezDeVar == 'X' ? '#f00' : '#00f';

    switch (Locale) {
      case 'top':
        gameMatriz[0][position - 1] = vezDeVar == 'X' ? 1 : 2;
        break;
      case 'middle':
        gameMatriz[1][position - 1] = vezDeVar == 'X' ? 1 : 2;
        break;
      case 'bottom':
        gameMatriz[2][position - 1] = vezDeVar == 'X' ? 1 : 2;
        break;

      default:
        break;
    }

    let winCheck = validWin();

    switch (winCheck) {
      case 1:
        alert('Vitória de X, parabéns!');
        placar.x += 1;
        break;
      case 2:
        alert('Vitória de O, parabéns!');
        placar.o += 1;
        break;
      case 3:
        alert('Infelizmente deu velha!');
        placar.v += 1;
        break;

      default:
        break;
    }

    vezDeVar = vezDeVar == 'X' ? 'O' : 'X';
    document.querySelector('#vezDe').innerHTML = vezDeVar;

    if (winCheck != 0) {
      updatePlac();
      restart(winCheck == 1 ? 'X' : 'O');
    }
  }
}

function validWin() {
  if (
    (gameMatriz[0][0] == 1 && gameMatriz[0][1] == 1 && gameMatriz[0][2] == 1) ||
    (gameMatriz[1][0] == 1 && gameMatriz[1][1] == 1 && gameMatriz[1][2] == 1) ||
    (gameMatriz[2][0] == 1 && gameMatriz[2][1] == 1 && gameMatriz[2][2] == 1) ||
    (gameMatriz[0][0] == 1 && gameMatriz[1][0] == 1 && gameMatriz[2][0] == 1) ||
    (gameMatriz[0][1] == 1 && gameMatriz[1][1] == 1 && gameMatriz[2][1] == 1) ||
    (gameMatriz[0][2] == 1 && gameMatriz[1][2] == 1 && gameMatriz[2][2] == 1) ||
    (gameMatriz[0][0] == 1 && gameMatriz[1][1] == 1 && gameMatriz[2][2] == 1) ||
    (gameMatriz[0][2] == 1 && gameMatriz[1][1] == 1 && gameMatriz[2][0] == 1)
  ) {
    return 1;
  } else if (
    (gameMatriz[0][0] == 2 && gameMatriz[0][1] == 2 && gameMatriz[0][2] == 2) ||
    (gameMatriz[1][0] == 2 && gameMatriz[1][1] == 2 && gameMatriz[1][2] == 2) ||
    (gameMatriz[2][0] == 2 && gameMatriz[2][1] == 2 && gameMatriz[2][2] == 2) ||
    (gameMatriz[0][0] == 2 && gameMatriz[1][0] == 2 && gameMatriz[2][0] == 2) ||
    (gameMatriz[0][1] == 2 && gameMatriz[1][1] == 2 && gameMatriz[2][1] == 2) ||
    (gameMatriz[0][2] == 2 && gameMatriz[1][2] == 2 && gameMatriz[2][2] == 2) ||
    (gameMatriz[0][0] == 2 && gameMatriz[1][1] == 2 && gameMatriz[2][2] == 2) ||
    (gameMatriz[0][2] == 2 && gameMatriz[1][1] == 2 && gameMatriz[2][0] == 2)
  ) {
    return 2;
  } else if (
    gameMatriz[0][0] != 0 &&
    gameMatriz[0][1] != 0 &&
    gameMatriz[0][2] != 0 &&
    gameMatriz[1][0] != 0 &&
    gameMatriz[1][1] != 0 &&
    gameMatriz[1][2] != 0 &&
    gameMatriz[2][0] != 0 &&
    gameMatriz[2][1] != 0 &&
    gameMatriz[2][2] != 0
  ) {
    return 3;
  }
  return 0;
}

function updatePlac() {
  document.querySelector('#placX').innerHTML = placar.x;
  document.querySelector('#placO').innerHTML = placar.o;
  document.querySelector('#placV').innerHTML = placar.v;
}

function restart(playerInit) {
  gameMatriz = loadInitMatriz();
  vezDeVar = playerInit;
  document.querySelector('#vezDe').innerHTML = vezDeVar;

  document.querySelector('#top1').value = '.';
  document.querySelector('#top1').style.color = '#bababa';
  document.querySelector('#top2').value = '.';
  document.querySelector('#top2').style.color = '#bababa';
  document.querySelector('#top3').value = '.';
  document.querySelector('#top3').style.color = '#bababa';
  document.querySelector('#middle1').value = '.';
  document.querySelector('#middle1').style.color = '#bababa';
  document.querySelector('#middle2').value = '.';
  document.querySelector('#middle2').style.color = '#bababa';
  document.querySelector('#middle3').value = '.';
  document.querySelector('#middle3').style.color = '#bababa';
  document.querySelector('#bottom1').value = '.';
  document.querySelector('#bottom1').style.color = '#bababa';
  document.querySelector('#bottom2').value = '.';
  document.querySelector('#bottom2').style.color = '#bababa';
  document.querySelector('#bottom3').value = '.';
  document.querySelector('#bottom3').style.color = '#bababa';
}
