$(document).ready(function() {

    $(".questions").hide();

    //Establish the counter within timer object

    var timer = {
    startTime: 30,

    start: function() {
        counter = setInterval(timer.count, 1000);
    },
     
    stop: function() {
        clearInterval(counter);
    },

    reset: function() {
        this.time = 30;
        $(".timer").html("<p>" + this.startTime + " seconds remain</p>");
    },

    count: function() {
        timer.startTime--;
        console.log(timer.startTime);
        $(".timer").html(timer.startTime);

        if (timer.startTime >= 0) {
            $(".timer").html("<p>" + timer.startTime + " seconds remain</p>");
        } else {
            wrongAnswers();
            timer.reset();
        }
    },

    
};
    


    function instructionPage() {
        $(".instructions").html("<button class='startButton'>Start Game!</button>");
        $(".startButton").on("click", function(){
            $(this).hide();
            timer.start();
            $(".questions").show();
        
        });
    }

    instructionPage();

    $(".startButton").on("click", function(){
        $(".questions").show();
        timer();



    })


 
  
 








    var questions = [

        {
        question: "What is Canada's capital city?",
        answer: "Ottawa",
        choiceA: "Toronto",
        choiceB: "Calgary",
        choiceC: "St. John's"
        },

        {
        question: "What does the name Canada (Kanata) mean originally in Iroquois?",
        answer: "Village",
        choiceA: "Cold Place",
        choiceB: "New Found Land",
        choiceC: "Canoe"    
        },

        {
        question: "What is Canada's national animal?",
        answer: "Beaver",
        choiceA: "Moose",
        choiceB: "Polar Bear",
        choiceC: "Canadian Goose"
        },

        {
        question: "What is Canada's currency?",
        answer: "Canadian Dollar",
        choiceA: "American Dollar",
        choiceB: "Pound Sterling",
        choiceC: "Loonie"
        },

        {
            question: "Who is Canada's current Prime Minister?",
            answer: "Justin Trudeau",
            choiceA: "Pierre Elliott Trudeau",
            choiceB: "Stephen Harper",
            choiceC: "Queen Elizabeth II"
        },
   
    ]





    });


    

 