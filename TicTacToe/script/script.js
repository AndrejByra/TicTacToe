var player=1;
var pic1 = document.getElementById("img00").src;
var pic2 = document.getElementById("img01").src;
var pic3 = document.getElementById("img02").src;
var pic4 = document.getElementById("img10").src;
var pic5 = document.getElementById("img11").src;
var pic6 = document.getElementById("img12").src;
var pic7 = document.getElementById("img20").src;
var pic8 = document.getElementById("img21").src;
var pic9 = document.getElementById("img22").src;

function clickimg(value) {
        var row=Math.floor(value/10);
        var col=value%10;
 if (player==1) {
        console.log(value);
        var row=Math.floor(value/10);
        var col=value%10;
        var imageID="img"+row+col;
        document.getElementById(imageID).src = "img/x.png" ;
        console.log(imageID);
   }

 else {
        console.log(value);
        var row=Math.floor(value/10);
        var col=value%10;
        var imageID="img"+row+col;
        document.getElementById(imageID).src = "img/o.png" ;
        console.log(value);
   }
    nextPlayer();
    whoNext();
    detectWin();
   // alertWin();

  }
  function detectWin()
{
    if ( pic1 ==  pic2 ==  pic3){
          console.log("prvyriadok");
    }
    else if ( pic4 ==  pic5 &&  pic6)
    {
        console.log("druhyriadok");
    }
    else {
        console.log("nothing");
    }

}
  function alertWin(){

     alert($("#Player1").val());

  }
  function nextPlayer(){
    if (player == 1) {
    player = 2;

  }
  else {
    player = 1;

  }
  }
  function changeName (value)
{
    if (value==1)
    {
        var playersName=$("#Player1").text();
        $("#Player1").html("<INPUT TYPE=\"TEXT\" onFocusout=\"createName(1)\" ID=\"inputP1\" placeholder=\"Enter name\">");
        $("#inputP1").focus();
    }

    else
    {
        var playersName=$("#Player2").text();
        $("#Player2").html("<INPUT TYPE=\"TEXT\" onFocusout=\"createName(2)\" ID=\"inputP2\" placeholder=\"Enter name\">");
        $("#inputP2").focus();
    }

}

function createName (value)
{
    if (value==1)
    {
        var name=$("#inputP1").val();
        if (name.trim().length==0)
            $("#Player1").text("Player 1");
        else
            $("#Player1").text(name);
    }
    else
    {
        var name=$("#inputP2").val();
        if (name.trim().length==0)
            $("#Player2").text("Player 2");
        else
            $("#Player2").text(name);
    }
}
function whoNext(){
  if (player==1) {
    document.getElementById('player').innerHTML=" Player X turn ";
  }
  else{
    document.getElementById('player').innerHTML=" Player O turn ";
  }
}
function printMessage(){
 
            document.getElementById("message1").innerHTML="double-click to change the name";
            document.getElementById("message2").innerHTML="double-click to change the name"; } 

function removeMessage(){
   
            document.getElementById("message1").innerHTML=" "; 
            document.getElementById("message2").innerHTML=" "; }
             
   
