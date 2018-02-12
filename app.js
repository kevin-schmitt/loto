var loto = require("./module/loto.js");

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

let numberList = new Array();
let numberQuestion = 7;


rl.setPrompt('Taper Entrer puis entrer vos nombres> ');
rl.prompt();


rl.on('line', function(line) {
    switch(line.trim()) {
      default:
      if(parseInt(line) == line && line < 50)
			{
				numberList.push(parseInt(line));
				numberQuestion --;
			}
			if(numberQuestion == 0)
			{
				loto.game(numberList);
				process.exit(0);
			}
        break;
    }
}).on('close', function() {
    process.exit(0);
});
