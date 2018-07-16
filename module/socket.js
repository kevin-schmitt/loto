const io = require('socket.io');

module.exports = {

	//random numbers
	getNumbers: function()
	{
		let limit = 7;
		let numbersForWin = new Array();

		// on génère nos nombres
		for(var end = 0;end < limit;end++)
		{
			nbRand = parseInt(Math.random()*48+1);
			if (nbRand < 50)
			{
				numbersForWin.push(nbRand);
			}
		}

		if(end === limit) return numbersForWin;

	},

}
