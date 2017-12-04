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