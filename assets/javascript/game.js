// Define variables 
var targetNumber;
var crystals = ["c0", "c1", "c2", "c3"]
var score = 0;


// Pick random target number
targetNumber = Math.floor((Math.random() * 120) + 19);
console.log(targetNumber);
$("#randomNumberBox").html(targetNumber);

// Assign random variables to crystals
var i;
for (i = 0; i < crystals.length; i++) {
    crystals[i] = Math.floor((Math.random() * 12) + 1);
    console.log(crystals[i]);
}

// Click listeners on crystals
// On click, add crystal value to current score
$("#crystal0").click(function addC0() {
    score += crystals[0];
    $("#scoreBoxNumber").html(score);
})

$("#crystal1").click(function addC1() {
    score += crystals[1];
    $("#scoreBoxNumber").html(score);
})

$("#crystal2").click(function addC2() {
    score += crystals[2];
    $("#scoreBoxNumber").html(score);
})

$("#crystal3").click(function addC3() {
    score += crystals[3];
    $("#scoreBoxNumber").html(score);
})

// Check if new score exceeds target value

// IF equal, WIN

// ELSE if new score > target value, LOSE

// ELSE if new score < target value, keep playing

// IF win, add to counter

// THEN reset game

// IF loss, add to counter

// THEN reset game

// IF game reset, set score to zero

// THEN randomize crystal values

// THEN randomize target value