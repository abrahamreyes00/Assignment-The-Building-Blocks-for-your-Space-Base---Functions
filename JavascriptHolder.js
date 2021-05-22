//Countdown Timer for webpage. Will begin at 10 and end at 1 with Blast Off following
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
    //Sets a timer to run code based off milliseconds
    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        //Decreases count by one
        count = count - 1;
        //Waits  1 second before displaying results
    }, 1000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  2 second before displaying results
    }, 2000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  3 second before displaying results
    }, 3000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  4 second before displaying results
    }, 4000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  5 second before displaying results
    }, 5000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  6 second before displaying results
    }, 6000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  7 second before displaying results
    }, 7000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  8 second before displaying results
    }, 8000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  9 second before displaying results
    }, 9000);

    setTimeout(function () {
        //after 1 sec, will print "Blast Off!!!"
        document.getElementById("countdownTimer").innerHTML = "Blast Off!!!";
        //Waits  10 seconds before displaying results
    }, 10000);
}

//Function to play craps
function PlayCraps() {
    console.log("PlayCraps has started");
    //Creates die1, ensures a random number between 1 and 6 is displayed and rounded up then prints the results
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    console.log("The value of die1 is: " + die1);
    document.getElementById("die1results").innerHTML = "The value of die1 is: " + die1;
    //Creates die2, ensures a random number between 1 and 6 is displayed and rounded up then prints the results
    var die2;
    die2 = Math.ceil(Math.random() * 6);
    console.log("The value of die2 is: " + die2);
    document.getElementById("die2results").innerHTML = "The value of die2 is: " + die2;
    //Thh variable diesum is used to add die1 and die2 then displays the combined results of die1 and die2 
    var diesum = die1 + die2;
    document.getElementById("sumresults").innerHTML = "The sum of die1 plus die2 is: " + diesum;
    if (diesum == 7 || diesum == 11) {
        //If the diesum is 7 or 11, Craps! You lose!!! will be printed
        document.getElementById("crapsresults").innerHTML = "Craps! You lose!!!";
        //die1 == die2 is a test for doubles, die1 % 2 == 0 is a test for evens
    } else if (die1 == die2 && die1 % 2 == 0) {
        //If die1 equals die2 and they are an even number, Hurray!! Doubles! You win!! is printed
        document.getElementById("crapsresults").innerHTML = "Hurray!! Doubles! You win!!";
    } else {
        //If the numbers dont equal 7 or 11 and you have not rolled even doubles, Play again until you win! is printed
        document.getElementById("crapsresults").innerHTML = "Play again until you win!";
    }

}