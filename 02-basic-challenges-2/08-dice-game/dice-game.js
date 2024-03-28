/*
function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function diceGameSimulation(userInput) {
  const results = [];

  for (let i = 0; i < userInput; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let text = '';
    if (sum === 7 || sum === 11) {
      text = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      text = 'lose';
    } else {
      text = 'roll again';
    }

    results.push({ dice1: dice1, dice2: dice2, sum: sum, text: text });
  }

  return results;
  // { dice1: dice1, dice2: dice2, sum: sum, result: result}
}
*/

/*

const game = {
  dice1: number,
  dice2: number,
  sum: dice1 + dice2,
  result: "win" || "loose" || "roll again"
};
*/
const gameArray = [];

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function diceGameSimulation(numSimulations) {
  for (let i = 0; i < numSimulations; i++) {
    const game = {};
    game.dice1 = rollDice();
    game.dice2 = rollDice();
    game.sum = game.dice1 + game.dice2;

    if (game.sum === 7 || game.sum === 11) {
      game.result = 'win';
    } else if (game.sum === 2 || game.sum === 3 || game.sum === 12) {
      game.result = 'lose';
    } else {
      game.result = 'roll again';
    }

    gameArray.push(game);
  }
  return gameArray;
}

module.exports = diceGameSimulation;
