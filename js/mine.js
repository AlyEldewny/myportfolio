//$(".letter").slideDown(1000)
var x=document.getElementsByClassName("letter")


var y= []



function ins(){
    
    y.push(x)
    
    for(i=0;i<y.length;i++){
        $(y[i]).slideDown(1000, function(){$(y[i+1]).slideDown(5000)})
    }
}
ins()