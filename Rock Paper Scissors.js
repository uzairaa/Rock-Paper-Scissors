var NUM_ELEMENTS = 3; // num of balls for selection, it must be in range of CODE_LENGTH..8
var LENGTH = 1; // set this number in the range of 1..5
var NUM_ATTEMPTS = 3; // change this number to have less or more attempts in range of 1..8
var MAX_NUM_ATTEMPTS = 7; // do not change this number

var element = 0;
var current_attempt_id;
//var url = "http://indigo.eecs.yorku.ca:3000/post";
var url = "http://localhost:3000/post";

var myName;

function getName()
{
    myName = prompt("Please enter your name", "");
    $('#name').text(myName);

}
function getNames()
{
    myName = prompt("Please enter your name", "");
    $('#name').text(myName);
    myName1 = prompt("Please enter your name", "");
    $('#name1').text(myName1);
}

  

function pickUser(hand){
     

       $.post(
            url+'?data='+JSON.stringify({
            'name':'Test', 
            'value':'100',
            'mysel':hand,
            'action':'ComputerChoice', 
            }),
            response
        );
    console.log(hand);
}


function response(data, status){
    var response = JSON.parse(data);
    console.log(data);
    var Eval = response['Eval'];

   // var my_choice = response['mysel']
   // console.log(opn_choice);

  console.log(Eval)
   switch (Eval) {
        case 'RR':
            document.getElementById('1').style.backgroundColor = 'grey';
            setTimeout(() => {
                document.getElementById('1').style.backgroundColor = 'transparent'
            }, 300); 
            document.getElementById('10').style.backgroundColor = 'grey';
             setTimeout(() => {
            document.getElementById('10').style.backgroundColor = 'transparent'
            }, 300); 
            break;
        case 'RS':
            document.getElementById('10').style.backgroundColor = 'green';
            setTimeout(() => {
            document.getElementById('10').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('2').style.backgroundColor = 'red';
            setTimeout(() => {
                document.getElementById('2').style.backgroundColor = 'transparent'
            }, 300);
            break;
        case 'RP':
            document.getElementById('10').style.backgroundColor = 'red';
            setTimeout(() => {
            document.getElementById('10').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('3').style.backgroundColor = 'green';
            setTimeout(() => {
                document.getElementById('3').style.backgroundColor = 'transparent'
            }, 300);
            break;
        case 'SR':
            document.getElementById('20').style.backgroundColor = 'green';
            setTimeout(() => {
            document.getElementById('20').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('1').style.backgroundColor = 'red';
            setTimeout(() => {
                document.getElementById('1').style.backgroundColor = 'transparent'
            }, 300);
            break;
        case 'SS':
            document.getElementById('20').style.backgroundColor = 'grey';
            setTimeout(() => {
            document.getElementById('20').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('2').style.backgroundColor = 'grey';
            setTimeout(() => {
                document.getElementById('2').style.backgroundColor = 'transparent'
            }, 300);
            break;
        case 'SP':
            document.getElementById('20').style.backgroundColor = 'green';
            setTimeout(() => {
            document.getElementById('20').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('3').style.backgroundColor = 'red';
            setTimeout(() => {
                document.getElementById('3').style.backgroundColor = 'transparent'
            }, 300);
            break; 
        case 'PR':
            document.getElementById('30').style.backgroundColor = 'red';
            setTimeout(() => {
            document.getElementById('30').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('1').style.backgroundColor = 'green';
            setTimeout(() => {
                document.getElementById('1').style.backgroundColor = 'transparent'
            }, 300);
            break;
        case 'PS':
            document.getElementById('30').style.backgroundColor = 'red';
            setTimeout(() => {
            document.getElementById('30').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('2').style.backgroundColor = 'green';
            setTimeout(() => {
                document.getElementById('2').style.backgroundColor = 'transparent'
            }, 300);
            break;
        case 'PP':
            document.getElementById('30').style.backgroundColor = 'grey';
            setTimeout(() => {
            document.getElementById('30').style.backgroundColor = 'transparent'
            }, 300);
            document.getElementById('3').style.backgroundColor = 'grey';
            setTimeout(() => {
                document.getElementById('3').style.backgroundColor = 'transparent'
            }, 300);
            break;


   }



    
} 