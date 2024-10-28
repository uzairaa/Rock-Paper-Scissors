var express = require('express');
var app = express();
var mySelection;


app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    var z = JSON.parse(req.query['data']);
    console.log(z)

   if (z['action'] == "ComputerChoice"){

        var Player1 = z['name']
        mySelection = z['mySelection']
    
        var jsontext = JSON.stringify({
            'Evaluate':SinglePlayerEvaluation(),
            'choose':choice })
          
   }
    else{

    if (z['action'] == "Evaluate"){
        
       var jsontext = JSON.stringify({
            'Evaluate': MutliplayerEvaluation(z['Player1'],z['Player2']),
            'choose':choose1 })
    }
    }
   
    res.send(jsontext)
    console.log(jsontext)
    
}
).listen(3000)
console.log("Server is running!");

function SinglePlayerEvaluation(){

    choice= mySelection+ComputerChoice();

    switch(choice){
        
            case 'RR':
                return("DRAW [rock : rock]");
                break;
            case 'RS':
                return("ROCK WINS");
                break;
            case 'RP':
                return("PAPER WINS");
                break;
            case 'SR':
                return("ROCK WINS");
                break;
            case 'SS':
                return("DRAW [scissors : scissors]");
                break;
            case 'SP':
                return("SCISSORS WINS");
                break;
            case 'PR':
                return("PAPER WINS");
                break;
            case 'PS':
                return("SCISSORS WINS");
                break;
            case 'PP':
                return("DRAW [paper : paper]");
                break;
        
        }
}

function MutliplayerEvaluation(Player1,Player2){

    choose1= Player1+Player2;
    
    console.log(choose1);

    switch(choose1){

            case 'RR':
                return("DRAW [rock : rock]");
                break;
            case 'RP':
                return("PAPER WINS");
                break;
            case 'RS':
                return("ROCK WINS");
                break;
            case 'SR':
                return("ROCK WINS");
                break;
            case 'SP':
                return("SCISSORS WINS");
                break;
            case 'SS':
                return("DRAW [scissors : scissors]");
                break;
            case 'PR':
                return("PAPER WINS");
                break;
            case 'PP':
                return("DRAW [paper : paper]");
                break;
            case 'PS':
                return("SCISSORS WINS");
                break;
        }
}

function ComputerChoice() {

    var choices =["S","R","P"];
    var randNum = Math.floor(Math.random() * 3);
    //betweeen 0 and 3.
    return choices[randNum];
}