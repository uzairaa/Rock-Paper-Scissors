//var url = "http://indigo.eecs.yorku.ca:3000/post";
var url = "http://localhost:3000/post";

var my_Name;
var rounds;

// Add name for player 1

function getNameSinglePlayer(){
   
    var myName = prompt("Please enter your name", "");
    var outputObj = document.getElementById("name1");
    outputObj.innerHTML=myName;
    document.getElementById('namebtn').style.visibility = 'hidden';

}

// Add name for player 2

function getNameMultiplayer(){

    var myName = prompt("Please enter your name", "");
    document.getElementById("name1").innerHTML=myName;
    var myName1 = prompt("Please enter your name", "");
    document.getElementById("name2").innerHTML=myName;
    document.getElementById('namebtn').style.visibility = 'hidden';
}

// sets rounds

function Number_Rounds(num_rounds){
    
    console.log(num_rounds)

    sessionStorage.setItem("rounds",num_rounds);
    sessionStorage.setItem("remainrounds",num_rounds);
    var rounds = sessionStorage.getItem("rounds");

    return rounds
}


// gets the rounds in the Single Player Page

function SinglePlayerRounds(){

    document.getElementById("rounds").innerHTML = "Total Rounds : " + sessionStorage.getItem("rounds");
    document.getElementById("remainrounds").innerHTML = "Remaing Rounds : " + sessionStorage.getItem("remainrounds");

    var player1_score = 0;
    var computer_score = 0;


    sessionStorage.setItem("player1_score",player1_score);
    player1_score = sessionStorage.getItem("player1_score");

    sessionStorage.setItem("computer_score",computer_score);
    computer_score = sessionStorage.getItem("computer_score");

    console.log(player1_score);
    console.log(computer_score);
}

// Takes the sign from Player 1 and sends it to the server

function Player1Selection(sign){

    var remainrounds = sessionStorage.getItem("remainrounds");
    
    remainrounds =  remainrounds - 1;

    document.getElementById("remainrounds").innerHTML = "Remaing Rounds : " + remainrounds;
    sessionStorage.setItem("remainrounds",remainrounds);

    $.post(
         url+'?data='+JSON.stringify({
         'action':'ComputerChoice', 
         'name': my_Name, 
         'mySelection': sign, 
         }),
         response
     );
 console.log(sign);  

}
 
// Recieves the data from server and evaulates who wins

function response(data, status){

    var response = JSON.parse(data);
    console.log(data);

    var Evaluate = response['Evaluate'];
    var choose = response['choose'];
    var action1 = response['action'];
    document.getElementById("result").innerHTML = "Result : "+ Evaluate;

    player1_score = sessionStorage.getItem("player1_score");
    computer_score = sessionStorage.getItem("computer_score");

    console.log(player1_score);
    if(action1 == 'ComputerChoice'){
        document.getElementById('resultbtn').style.visibility = 'hidden';
    }
    else if(action1 == 'Evaluate'){
        document.getElementById('resultbtn').style.visibility = 'hidden';
    }
    EvalChoice(choose);

    if (sessionStorage.getItem("type") == 'M') {

              sessionStorage.setItem("player1_score",player1_score);

              sessionStorage.setItem("computer_score",computer_score);
          }
    else {
          sessionStorage.setItem("player1_score",player1_score);

          sessionStorage.setItem("computer_score",computer_score);
          
          }
    EvalScore();
        
          
         
    
console.log(player1_score);
console.log(computer_score);

}
function r(){
    console.log(sessionStorage.getItem("player1_score"));
    console.log(sessionStorage.getItem("computer_score"));
    document.getElementById("player1Score").innerHTML = sessionStorage.getItem("player1_score");
    document.getElementById("computerScore").innerHTML = sessionStorage.getItem("computer_score");
}

function Player1Choice(sign){

    sessionStorage.setItem("Player1",sign);
}


function Player2Choice(sign){

    var remainrounds = sessionStorage.getItem("remainrounds");

    remainrounds =  remainrounds - 1;

    console.log(sign);

    document.getElementById("remainrounds").innerHTML = "Remaing Rounds : " + remainrounds;
    sessionStorage.setItem("remainrounds",remainrounds);

    $.post(
        url+'?data='+JSON.stringify({
        'action':'Evaluate',
        'Player1':sessionStorage.getItem("Player1"),
        'Player2': sign,   
        }),
        response
    );

   }

function MultiplayerRound(){

    sessionStorage.setItem("type",'M');

    document.getElementById("rounds").innerHTML = "Total Rounds : " + sessionStorage.getItem("rounds");
    document.getElementById("remainrounds").innerHTML = "Remaing Rounds : " + sessionStorage.getItem("remainrounds");

    var player1_score = 0;
    var computer_score = 0;


    sessionStorage.setItem("player1_score",player1_score);
    player1_score = sessionStorage.getItem("player1_score");

    sessionStorage.setItem("computer_score",computer_score);
    computer_score = sessionStorage.getItem("computer_score");

    console.log(player1_score);
    console.log(computer_score);
}
function mr()
{
    console.log(sessionStorage.getItem("player1_score"));
    console.log(sessionStorage.getItem("computer_score"));
    document.getElementById("player1Score").innerHTML = sessionStorage.getItem("player1_score");
    document.getElementById("player2Score").innerHTML = sessionStorage.getItem("computer_score");
}


function EvalChoice(choose){
    if ((choose)=='RR') {
        // DRAW
            document.getElementById('R').style.backgroundColor = 'grey';

            setTimeout(() => {
                document.getElementById('R').style.backgroundColor = 'transparent';
            }, 1300); 

            document.getElementById('r').style.backgroundColor = 'grey';

             setTimeout(() => {
            document.getElementById('r').style.backgroundColor = 'transparent';
            }, 1300); 
            
     }

    else if ((choose)=='RP') { 
        //COMPUTER WINS
            computer_score =  Number(computer_score) + 1;

            document.getElementById('R').style.backgroundColor = 'red';

            setTimeout(() => {
            document.getElementById('R').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('p').style.backgroundColor = 'green';

            setTimeout(() => {
            document.getElementById('p').style.backgroundColor = 'transparent'
            }, 1300);
        
      

    }
   else if ((choose)=='RS') {
        //PLAYER WINS!
          
            player1_score =  Number(player1_score) + 1;

            document.getElementById('R').style.backgroundColor = 'green';

            setTimeout(() => {
            document.getElementById('R').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('s').style.backgroundColor = 'red';

            setTimeout(() => {
                document.getElementById('s').style.backgroundColor = 'transparent'
            }, 1300);
           
 
   }
    
    else if ((choose)=='SR') {
        //COMPUTER WINS!

            computer_score =  Number(computer_score) + 1;

            document.getElementById('r').style.backgroundColor = 'green';

            setTimeout(() => {
            document.getElementById('r').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('S').style.backgroundColor = 'red';

            setTimeout(() => {
                document.getElementById('S').style.backgroundColor = 'transparent'
            }, 1300);
           
    
    }

    else if ((choose)=='SP') {
    //PLAYER WINS!
            player1_score =  Number(player1_score) + 1;

            document.getElementById('p').style.backgroundColor = 'green';

            setTimeout(() => {
            document.getElementById('p').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('S').style.backgroundColor = 'red';

            setTimeout(() => {
            document.getElementById('S').style.backgroundColor = 'transparent'
            }, 1300);
       
      
    }


    else if ((choose)=='SS') {  
        //ITS A DRAW!
            document.getElementById('s').style.backgroundColor = 'grey';

            setTimeout(() => {
            document.getElementById('s').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('S').style.backgroundColor = 'grey';

            setTimeout(() => {
                document.getElementById('S').style.backgroundColor = 'transparent'
            }, 1300);
           
        }
    
    else if ((choose)=='PR') { 
        //PLAYER WINS!
            player1_score =  Number(player1_score) + 1;   

            document.getElementById('r').style.backgroundColor = 'red';

            setTimeout(() => {
            document.getElementById('r').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('P').style.backgroundColor = 'green';

            setTimeout(() => {
                document.getElementById('P').style.backgroundColor = 'transparent'
            }, 1300);
         
         
          
        }
    else if ((choose)=='PP') {
         //ITS A DRAW!
            document.getElementById('p').style.backgroundColor = 'grey';

            setTimeout(() => {
            document.getElementById('p').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('P').style.backgroundColor = 'grey';

            setTimeout(() => {
                document.getElementById('p').style.backgroundColor = 'transparent'
            }, 1300);
         
   }
    else if ((choose)=='PS') {
       //COMPUTER WINS!
            computer_score =  Number(computer_score) + 1;

            document.getElementById('P').style.backgroundColor = 'red';

            setTimeout(() => {
            document.getElementById('P').style.backgroundColor = 'transparent'
            }, 1300);

            document.getElementById('s').style.backgroundColor = 'green';

            setTimeout(() => {
                document.getElementById('s').style.backgroundColor = 'transparent'
            }, 1300);
          
        }
}
function EvalScore(){
    if ( sessionStorage.getItem("remainrounds")== 0) {

        alert("Game Over")
        document.getElementById('resultbtn').style.visibility = 'visible';

        if (sessionStorage.getItem("player1_score") == sessionStorage.getItem("computer_score")) {
            alert("Game is Tied");
        }
        if ( sessionStorage.getItem("player1_score") > sessionStorage.getItem("computer_score")) {
            alert("Player1 Wins");
        }
        if ( sessionStorage.getItem("player1_score") < sessionStorage.getItem("computer_score")) {
           
          if (sessionStorage.getItem("type") == 'M') {
                  alert("Player2 Wins");
            }
            else{
                  alert("Computer Wins");
            }   
        }
    }
}