function color() {
document.getElementById("h").style.color="blue";
}
var change=0;
function clickme() {
  
    if (change==0) {
        document.getElementById("picture").src="final-cover-forest.jpg";
        change=1;  
    } else {
       document.getElementById("picture").src="forest.jpg";
       change=0;
    }
    
}
