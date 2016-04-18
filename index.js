module.exports = function rps(playerOneChoice, playerTwoChoice) {
  if (playerOneChoice === playerTwoChoice) {
    return 'tie'
  }
  switch (playerOneChoice) {
    case 'rock':
      return playerTwoChoice === 'scissors' ? 'win' : 'lose'
    case 'paper':
      return playerTwoChoice === 'rock' ? 'win' : 'lose'
    case 'scissors':
      return playerTwoChoice === 'paper' ? 'win' : 'lose'
    default:
      throw new Error('not one of the choices!')
  }
}
