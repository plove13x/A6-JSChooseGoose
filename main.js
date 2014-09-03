document.getElementById("update-button").onclick = function(){

var thimbles = document.getElementById("thimbles").value;
var swords = document.getElementById("swords").value;

Number(thimbles);
Number(swords);

var totalCost = (thimbles*1) + (swords*37);


// UNNECESSARY I THINK.
/*var text = document.getElementById("the-total").textContent;*/


var newString = "This will cost " + totalCost + " monies.";
document.getElementById("the-total").textContent = newString;

}
