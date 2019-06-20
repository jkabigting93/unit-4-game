// Define variables 
var targetNumber;
var crystals = ["c0", "c1", "c2", "c3"]
var score = 0;
var wins = 0;
var losses = 0;

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

// Call game function
checkScore ()

// Define game reset function
function reset() {

    // Reset score
    score = 0;

    // Randomize crystal values
    var i;
    for (i = 0; i < crystals.length; i++) {
        crystals[i] = Math.floor((Math.random() * 12) + 1);
        console.log(crystals[i]);
    }

    //Randomize target value
    targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log(targetNumber);
    $("#randomNumberBox").html(targetNumber);
}

// Check if new score exceeds target value
function checkScore() {
    // IF equal, WIN
    if (score === targetNumber) {
        wins += 1;
        alert("You Win!");
        console.log(wins);

        // IF win, add to counter
        $("#wins").html("Wins: " + wins);

        // THEN reset
        reset();
    }

    // ELSE if new score > target value, LOSE
    if (score > targetNumber) {
        losses += 1;
        alert("You Lose!");
        console.log(losses);

        // IF loss, add to counter
        $("#losses").html("Losses: " + losses);

        // THEN reset
        reset();
    }
}