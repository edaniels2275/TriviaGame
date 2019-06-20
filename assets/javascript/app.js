

//  Interval Demonstration
//  Set our number counter to 12.
var clockRunning = false;


//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
var number = 12;


//correct, incorrect, unanswered defined here
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(document).ready(function(){ 

    $("#correctIcon").hide();
    $("#incorrectIcon").hide();
   
    $(".btn-outline-dark").hide();
    
    $("#start").on("click", start); 


//KEY FUNCTION CALLED EVERY TIME WE HAVE A NEW QUESTION
    function countdown () {

        number = 12;

        if (!clockRunning) {
            intervalId = setInterval(decrement, 1000);
            clockRunning = true;
        }

    }

//STOPS COUNTDOWN
    function stopCountdown() {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;

    }   




//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;
    console.log(number);

    //  Show the number in the #show-number tag.
    $("#time-left").html("<h2>Time Remaining: " + number +  " Seconds </h2>");

    if (number === 0 ) {
        stopCountdown();
    }
}

//RUN WHEN USER CLICKS START BUTTON, game begins now
    function start () {
        $("#time-left").show();
        $("#question-answer-display").show();
        // hides the start button
        $("#start").hide();

        // shows the buttons (unfilled)
        // $(".btn-outline-dark").show();

        questionOne();

    }

//QUESTION ONE
    function questionOne() {

        // shows the buttons (unfilled)
        $(".btn-outline-dark").show();
        $("#correctIcon").hide();
        $("#incorrectIcon").hide();

        countdown();

        $("#question-answer-display").html("Which team won the NBA championship this year?")

        $("#optionOne").html("Raptors");
        $("#optionTwo").html("Bucks");
        $("#optionThree").html("Warriors");
        $("#optionFour").html("Cavaliers");

        //if correct answer clicked
        $("#optionOne").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>CORRECT!!</h2>");
            $("#correctIcon").show();
            $("#incorrectIcon").hide();
            stopCountdown();
            setTimeout(questionTwo, 1000 * 3);
            correct++;

        });

        // //if incorrect answers clicked
        $("#optionTwo").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Raptors!");
            stopCountdown();
            setTimeout(questionTwo, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionThree").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Raptors!");
            stopCountdown();
            setTimeout(questionTwo, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionFour").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Raptors!");
            stopCountdown();
            setTimeout(questionTwo, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        if (number == 0) {
            console.log(number);
    
            $("#time-left").hide();
            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("Time's up!");
            $("#correct-display").html("The correct answer was" + " the Raptors!");
            stopCountdown();
            setTimeout(questionTwo(), 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            unanswered++;
            
        }
    }


//QUESTION TWO
    function questionTwo() {
        $("#correct-display").hide();
        $("#correctIcon").hide();
        $("#incorrectIcon").hide();
        // shows the buttons (unfilled)
        $(".btn-outline-dark").show();

        countdown();

        $("#question-answer-display").html("Which team won the Super Bowl this year?")

        $("#optionOne").html("Bears");
        $("#optionTwo").html("Packers");
        $("#optionThree").html("Saints");
        $("#optionFour").html("Patriots");

        $("#optionFour").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>CORRECT!!</h2>");
            stopCountdown();
            setTimeout(questionThree, 1000 * 3);
            $("#correctIcon").show();
            $("#incorrectIcon").hide();
            correct++;

        });

        //if incorrect answers clicked
        $("#optionOne").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Patriots!");
            stopCountdown();
            setTimeout(questionThree, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionTwo").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Patriots!");
            stopCountdown();
            setTimeout(questionThree, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionThree").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Patriots!");
            stopCountdown();
            setTimeout(questionThree, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });
    }




//QUESTION THREE
    function questionThree() {
        $("#correct-display").hide();
        $("#correctIcon").hide();
        $("#incorrectIcon").hide();

        // shows the buttons (unfilled)
        $(".btn-outline-dark").show();

        countdown();

        $("#question-answer-display").html("Which team won the Stanley Cup Finals this year?")

        $("#optionOne").html("Blues");
        $("#optionTwo").html("Coyotes");
        $("#optionThree").html("Rangers");
        $("#optionFour").html("Bruins");

        $("#optionOne").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>CORRECT!!</h2>");
            stopCountdown();
            setTimeout(questionFour, 1000 * 3);
            $("#correctIcon").show();
            $("#incorrectIcon").hide();
            correct++;

        });

        //if incorrect answers clicked
        $("#optionTwo").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Blues!");
            stopCountdown();
            setTimeout(questionFour, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionThree").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Blues!");
            stopCountdown();
            setTimeout(questionFour, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionFour").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Blues!");
            stopCountdown();
            setTimeout(questionFour, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });
    }



//QUESTION FOUR
    function questionFour() {
        $("#correct-display").hide();
        $("#correctIcon").hide();
        $("#incorrectIcon").hide();

        $(".btn-outline-dark").show();

        $("#question-answer-display").html("Which team won the World Series this year?")

        $("#optionOne").html("Mariners");
        $("#optionTwo").html("Yankees");
        $("#optionThree").html("Red Sox");
        $("#optionFour").html("Cardinals");

        $("#optionThree").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>CORRECT!!</h2>");
            stopCountdown();
            setTimeout(questionFive, 1000 * 3);
            $("#correctIcon").show();
            $("#incorrectIcon").hide();
            correct++;

        });

        //if incorrect answers clicked
        $("#optionOne").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Red Sox!");
            stopCountdown();
            setTimeout(questionFive, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionTwo").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Red Sox!");
            stopCountdown();
            setTimeout(questionFive, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionFour").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " the Red Sox!");
            stopCountdown();
            setTimeout(questionFive, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });
    }





//QUESTION FIVE
    function questionFive () {
        $("#correct-display").hide();
        $("#correctIcon").hide();
        $("#incorrectIcon").hide();
        $(".btn-outline-dark").show();

        $("#question-answer-display").html("Which athlete won the masters this year?")

        $("#optionOne").html("Jim Furyk");
        $("#optionTwo").html("Tiger Woods");
        $("#optionThree").html("Brooks Koepka");
        $("#optionFour").html("Jordan Spieth");

        $("#optionTwo").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>CORRECT!!</h2>");
            stopCountdown();
            setTimeout(questionSix, 1000 * 3);
            $("#correctIcon").show();
            $("#incorrectIcon").hide();
            correct++;

        });

        //if incorrect answers clicked
        $("#optionOne").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " Tiger Woods!");
            stopCountdown();
            setTimeout(questionSix, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionThree").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " Tiger Woods!");
            stopCountdown();
            setTimeout(questionSix, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionFour").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            $("#correct-display").html("The correct answer was" + " Tiger Woods!");
            stopCountdown();
            setTimeout(questionSix, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });
    }



//QUESTION SIX
    function questionSix() {
        $("#correct-display").hide();
        $("#correctIcon").hide();
        $("#incorrectIcon").hide();

        $(".btn-outline-dark").show();

        $("#question-answer-display").html("Which athlete won the French Open this year?")

        $("#optionOne").html("Rafael Nadal");
        $("#optionTwo").html("Novak Djokovic");
        $("#optionThree").html("Roger Federer");
        $("#optionFour").html("Andy Murray");

        $("#optionOne").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>CORRECT!!</h2>");
            stopCountdown();
            setTimeout(totalScore, 1000 * 3);
            $("#correctIcon").show();
            $("#incorrectIcon").hide();
            correct++;

        });

        //if incorrect answers clicked
        $("#optionTwo").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            stopCountdown();
            setTimeout(totalScore, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionThree").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            stopCountdown();
            setTimeout(totalScore, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });

        $("#optionFour").click(function(){

            $(".btn-outline-dark").hide();
            $("#question-answer-display").html("<h2>WRONG!!</h2>");
            stopCountdown();
            setTimeout(totalScore, 1000 * 3);
            $("#incorrectIcon").show();
            $("#correctIcon").hide();
            incorrect++;

        });
    }

// displays total stats
    function totalScore() {

        $("#icon").hide();
        $("#question-answer-display").hide();
        $(".btn-outline-dark").hide();
        $("#start").show();
        $("#start").html("Play again!")
        $("#time-left").hide();

    }



//ends document.run function
});
