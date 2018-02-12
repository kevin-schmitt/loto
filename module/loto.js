const readline = require('readline');
const rand = require('random');

module.exports = {
	//  vérifie si on a gagné
	winner: function(game, numbersGame)
	{
		console.log(game);
		console.log(numbersGame);
		let nb=0;
		for(i=0;i<game.length;i++)
		{
			for(j=0;j<numbersGame.length;j++)
		   {
				if(game[i] == numbersGame[j]) nb++;
		   }
		}

		if(game.length <= i)
		{
			(nb > 2) ? console.log("Vous avez " + nb + " bons numéros") : console.log("Game over!");
		}

	},

	// retourne un tableau avec des nombres aléatoires
	numbersGame:function(numberList)
	{

		let numbersForWin = new Array();
		console.log("Tirage des numéros -> ");
		// on génère nos nombres
		for(var end = 0;end < 7;end++)
		{
			nbRand = parseInt(Math.random()*48+1);
			if (nbRand < 50)
			{
				console.log(nbRand);
				numbersForWin.push(nbRand);
			}
		}

		if(end == 7){
			this.winner(numberList, numbersForWin);
		}
	},

	// fonction principale
	game: function(numberList)
	{
		this.numbersGame(numberList);
	}
}
