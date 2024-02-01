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

module.exports = diceGameSimulation;
