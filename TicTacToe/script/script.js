var player=1;
  function clickimg(value) {
        console.log(value);
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
        console.log(imageID);
   }
    nextPlayer();
    whoNext();
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
    document.getElementById('player').innerHTML=" X turn ";
  }
  else{
    document.getElementById('player').innerHTML=" O turn ";
  }

}
function whoNext(){
  if (player==1) {
    document.getElementById('player').innerHTML="X turn ";
  }
  else{
    document.getElementById('player').innerHTML="O  turn ";
  }

}
function printMessage(){
            document.getElementById("message1").innerHTML="double click to change name";
            document.getElementById("message2").innerHTML="double click to change name";
        }
        function removeMessage(){
            document.getElementById("message1").innerHTML=" ";
            document.getElementById("message2").innerHTML=" ";
        }