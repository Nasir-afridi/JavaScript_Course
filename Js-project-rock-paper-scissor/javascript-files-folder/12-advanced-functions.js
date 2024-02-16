let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
  score = {
  Wins : 0,
  losses :0,
  Ties:0}
};

updateScoreElement();

  let isAutoPlaying = false;
  let intervalId;

  function autoPlay() {
    if(!isAutoPlaying) {
      intervalId = setInterval(function () {
        const playerMove = pickComputerMove();
          playGame(playerMove);
      }, 1000);
        isAutoPlaying = true;
    }
    
    else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  };

  function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'Scissors') {
    if(computerMove === 'Rock'){
      result = 'You lose';
    }else if (computerMove === 'Paper'){
      result = 'You Win';
    }else if (computerMove === 'Scissors'){
      result = 'Tie';
    }
  }

  else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
    result = 'You Win';
    }else if (computerMove === 'Paper'){
      result = 'Tie';
    }else if (computerMove === 'Scissors'){
      result = 'You lose';
    }
  }

  else if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
    result = 'Tie';
    }else if (computerMove === 'Paper'){
      result = 'You lose';
    }else if (computerMove === 'Scissors'){
      result = 'You Win';
    }    
  }

  if(result ==='You Win'){
    score.Wins += 1;
  }else if(result ==='You lose'){
    score.losses += 1;
  }else if(result ==='Tie'){
    score.Ties += 1;
  }  

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-move')
    .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;

  localStorage.setItem('score' , JSON.stringify(score));

  updateScoreElement(); 
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `wins : ${score.Wins},
    losses : ${score.losses}, Tie : ${score.Ties}`;
  }

  function pickComputerMove (){
  let computerMove = '';
  const  randomNumber = Math.random();
              
  if (randomNumber >= 0 && randomNumber <= 1 / 3){
    computerMove = 'Rock';
  }else if(randomNumber >= 1 / 3 && randomNumber <= 2 / 3){
    computerMove = 'Paper';
  }else if(randomNumber >= 2 / 3 && randomNumber <= 1){
    computerMove = 'Scissors';
  } 

  return computerMove;
  }
