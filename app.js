/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameState;

initialiseGame();

document.querySelector('.btn-roll').addEventListener('click',function(){

	// 1. Random Number is generated
	var dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result
	
	var diceDOM;
	diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-'+ dice + '.png';

	// 3. Update the round score ,if the score rolled was NOT a 1

	if(dice !== 1){
		// Add Score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}

	else {

		// Next Player
		nextPlayer();
	}

});


document.querySelector('.btn-hold').addEventListener('click',function(){

	// 1.Add Current Score to global Score

		scores[activePlayer] += roundScore;

	// 2.Update the UI

		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

	// 3.Check if the User is Winner

		if(scores[activePlayer] >= 100 ){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			document.querySelector('.btn-roll').disabled = true;
			document.querySelector('.btn-hold').disabled = true;
		}

		else {
			// Only if the current user is not the winner then go to next player
			nextPlayer();
		}
})


document.querySelector('.btn-new').addEventListener('click',initialiseGame)


function nextPlayer(){

	// Make round Score 0 and next Player

	activePlayer = activePlayer === 0 ? 1 : 0;
	roundScore = 0;

	// Also the round score on the UI should be made zero

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active')

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
		
	document.querySelector('.dice').style.display = 'none';
}

function initialiseGame(){

	scores = [0,0];
	roundScore = 0;

	activePlayer = 0; //FLag for the active Player : 0(player1) , 1(player2)



	// Hide the Dice
	document.querySelector('.dice').style.display = 'none';

	// Set the Scores of players to zero
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.btn-roll').disabled = false;
	document.querySelector('.btn-hold').disabled = false;
;}
























// document.querySelector('#current-' + activePlayer).textContent = dice;
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#current-' + activePlayer).textContent;
// console.log(x);


/*
function btnRoll(){
	// Code
}

document.querySelector('.btn-roll').addEventListener('click', btnRoll); // btnRoll is a callback function as that function is called by another function.
*/
