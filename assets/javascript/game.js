
  var changeNum = 1;
  var crystalTotal = 0;
  

// Generate a random number
var compRandom = Math.floor(Math.random() * 120) + 19;
console.log("Computer number is " + compRandom);

document.getElementById("compRandomN").innerHTML = "Computers number to match " + compRandom;

var crystalRandom = Math.floor(Math.random() * 5) + 1;
console.log("Crystal number is " + crystalRandom);


$("#button-1").on("click", function() {
button1 = crystalRandom + 3;
crystalTotal = crystalTotal + button1
console.log("button1 number is " + button1);
console.log(crystalTotal);

document.getElementById("crystalTotalN").innerHTML = "Crystal total is: " + crystalTotal;

if (crystalTotal > compRandom) {
      alert("Crystal total is higher, sorry you lose");
        crystalTotal = 0;
 }
if (crystalTotal === compRandom) {
      alert("Total is equal");
}

$("#button-2").on("click", function() {
  button2 = crystalRandom + 0;
  crystalTotal = crystalTotal + button2;
console.log("button2 number is " + button2);
console.log(crystalTotal);

document.getElementById("crystalTotalN").innerHTML = "Crystal total is: " + crystalTotal;

if (crystalTotal > compRandom) {
      alert("Crystal total is higher, sorry you lose");
        crystalTotal = 0;
 }
if (crystalTotal === compRandom) {
      alert("Total is equal");
}

$("#button-3").on("click", function() {
  button3 = crystalRandom + 6;
  crystalTotal = crystalTotal + button3;
console.log("button3 number is " + button3);
console.log(crystalTotal);

document.getElementById("crystalTotalN").innerHTML = "Crystal total is: " + crystalTotal;

if (crystalTotal > compRandom) {
      alert("Crystal total is higher, sorry you lose");
        crystalTotal = 0;
 }
if (crystalTotal === compRandom) {
      alert("Total is equal");
}

$("#button-4").on("click", function() {
  button4 = crystalRandom + 4;
  crystalTotal = crystalTotal + button4;
console.log("button4 number is " + button4);
console.log(crystalTotal);

document.getElementById("crystalTotalN").innerHTML = "Crystal total is: " + crystalTotal;

if (crystalTotal > compRandom) {
      alert("Crystal total is higher, sorry you lose");
        crystalTotal = 0;
 }
if (crystalTotal === compRandom) {
      alert("Total is equal");
}

//console.log("Crystaltotal is  " + crystalTotal);
//console.log("compRandom is it " + compRandom);

//if (crystalTotal > compRandom) {
  //    alert("Crystal total is higher so you lose");
    //    crystalTotal = 0;
 //}
//if (crystalTotal === compRandom) {
  //    alert("Total is equal");
 //}        
});  
});
});
});