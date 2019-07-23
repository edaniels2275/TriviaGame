$(document).ready(function(){ 

// new event listeners
    $("#remaining-time").hide();
    //when start button clicked, call startGame method from trivia object
    $("#start").on("click", trivia.startGame);
    //when button of class option clicked (not yet generated)
    $(document).on("click", ".option", trivia.guessChecker);

})


//trivia object
//follows notation property/key:value
var trivia = {
    //trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: "",

    //questions options and answers data
    questions: {
        q1: "Which team won the NBA championship this year?",
        q2: "Which team won the Superbowl this year?",
        q3: "Which team won the Stanley Cup Finals this year?",
        q4: "Which team won the World Series this year?",
        q5: "Which athlete won the Masters this year?",
        q6: "Which athlete won the French Open this year?"
    },
    options: {
        q1: ["Raptors", "Bucks", "Warriors", "Cavaliers"],
        q2: ["Bears", "Packers", "Saints", "Patriots"],
        q3: ["Blues", "Coyotes", "Rangers", "Bruins"],
        q4: ["Mariners", "Yankees", "Red Sox", "Cardinals"],
        q5: ["Jim Furyk","Tiger Woods","Brooks Koepka","Jordan Spieth"],
        q6: ["Rafael Nadal","Novak Djokovic","Roger Federer","Andy Murray"]
    },
    answers: {
        q1: "Raptors",
        q2: "Patriots",
        q3: "Blues",
        q4: "Red Sox",
        q5: "Tiger Woods",
        q6: "Rafael Nadal"
    },
    //trivia methods
    //method to initialize game
    startGame : function(){
        //resetting game results
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval (trivia.timerId);

        //show game section by calling game Div
        $("#game").show();

        $("#remaining-time").show();
        //empty last results (div holding correct and incorrect values)
        //NOTE: didnt realize you could just empty it like this???
        $("#results").html("");

        //show timer
        $("#timer").show();
        $("#timer").text(trivia.timer);

        //remove start button
        $("#start").hide();


        //ask first questions
        trivia.nextQuestion();
    },
    //method to loop through and display questions and options
    nextQuestion : function (){
        //set timer to 10 seconds each question
        trivia.timer = 10;
        $("#timer").removeClass("last-seconds");
        $("#timer").text(trivia.timer);

        //to prevent timer speed up
        if (!trivia.timerOn){
            trivia.timerId = setInterval(trivia.timerRunning, 1000);
        }

        //gets all the questions then indexes the current questions
        var questionContent = Object.values(trivia.questions)[trivia.currentSet];
        $("#question").text(questionContent);

        //array of all the user options for the current question
        var questionOptions = Object.values(trivia.options)[trivia.currentSet];

        //dynamically creates all the trivia guess options in the html as buttons
        $.each(questionOptions, function(index, key){
            $("#options").append($("<button class=option>" + key + "</button>"));
            $("button").addClass("btn btn-info btn-lg");

        })
    },
    //method to decrement counter and count unanswered if timer runs out
    timerRunning : function() {
        //if timer still has time left and there are still questions left to ask
        if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
            $("#game").show();
            $("#timer").text(trivia.timer);
            trivia.timer--;
                if (trivia.timer === 4) {
                    $("#timer").addClass("last-seconds");
                }
        }
        else if (trivia.timer === -1){
            $("#game").show();
            trivia.unanswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 2000);
            $("#results").html("<h3>Out of time! The answer was " + Object.values(trivia.answers)[trivia.currentSet] + "</h3>");
        }
        //if all the questions have been shown end the game, show results
        else if (trivia.currentSet === Object.keys(trivia.questions).length){
            //adds results of game (correct, incorrect, unanswered) to the page
            $("#results")
                .html("<h3>Thank you for playing!</h3>" + 
                "<p>Correct: " + trivia.correct + "</p>" +
                "<p>Incorrect: " + trivia.incorrect + "</p>" +
                "<p>Unanswered: " + trivia.unanswered + "</p>" + 
                "<h4>Please play again</h4>");

            //hide game section
            $("#game").hide();

            //show start button to begin a new game
            $("#start").show();
            
        }

    },
    //method to evaluate the option clicked
    guessChecker : function(){
        //timer ID for gameResult setTimeout
        var resultId;

        var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

        //if the text of the option picked matches the answer of the current question, increment correct
        if($(this).text() === currentAnswer) {
            // turn button green for correct
            $(this).addClass('btn-success').removeClass('btn-info');
            
            trivia.correct++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 2000);
            $('#results').html('<h3>Correct Answer!</h3>');
        }
            // else the user picked the wrong option, increment incorrect
        else{
            // turn button clicked red for incorrect
            $(this).addClass('btn-danger').removeClass('btn-info');
            
            trivia.incorrect++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 2000);
            $('#results').html('<h3>Better luck next time! The correct answer was '+ currentAnswer +'</h3>');
        }
    
    },
    // method to remove previous question results and options
    guessResult : function(){
        
        // increment to next question set
        trivia.currentSet++;
        
        // remove the options and results
        $('.option').remove();
        $('#results h3').remove();
        

        $("#game").show();
        // begin next question
        trivia.nextQuestion();
        
    }

}