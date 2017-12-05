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
   }
 
 else {
        console.log(value);
        var row=Math.floor(value/10);
        var col=value%10;
        var imageID="img"+row+col;
        document.getElementById(imageID).src = "img/o.png" ;
   }
    nextPlayer();
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
        var originName=$("#Player1").text(); 
        $("#Player1").html("<INPUT TYPE=\"TEXT\" onFocusout=\"confirmName(1)\" ID=\"inputP1\" placeholder=\"Enter name\">"); 
        $("#inputP1").focus(); 
    } 
 
    else 
    { 
        var originName=$("#Player2").text(); 
        $("#Player2").html("<INPUT TYPE=\"TEXT\" onFocusout=\"confirmName(2)\" ID=\"inputP2\" placeholder=\"Enter name\">"); 
        $("#inputP2").focus(); 
    } 
 
} 
 
function confirmName (value) 
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
