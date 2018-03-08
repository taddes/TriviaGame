$(document).ready(function() {

    $(".questions").hide();

    

    //Establish the counter within timer object

    var timer = {
    startTime: 30,

    start: function() {
        counter = setInterval(timer.count, 1000);
        $(".timer").html("<p>Timer: " + timer.startTime + " seconds remain</p>");
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
        // console.log(timer.startTime);
        $(".timer").html("<p>Timer: " + timer.startTime + " seconds remain</p>");

        if (timer.startTime > 0) {
            $(".timer").html("<p>Timer: " + timer.startTime + " seconds remain</p>");
           
        } else {
            timer.stop();
            showScore();

        }
    },

    
};

//Arrays of questions and options

var questionsArray = [

    {
        question: "What is Canada's capital city?",
        choices: [
        "A. Toronto",
        "B. Calgary",
        "C. St. John's",
        "D. Ottawa"
        ],

        logic: [false, false, false, true],
        answer: "D. Ottawa"
    },

    {
        question: "What does the name Canada (Kanata) mean originally in Iroquois?",
        choices: [
        "A. Cold Place",
        "B.New Found Land",
        "C. Village",
        "D. Canoe" 
        ],
        
        logic: [false, false, true, false],
        answer: "C. Village"
    },

    {
        question: "What is Canada's national animal?",
        choices: [
        "A. Moose",
        "B. Beaver",
        "C. Polar Bear",
        "D. Canadian Goose"
        ],

        logic: [false, true, false, false],
        answer: "B. Beaver"
    },

    {
        question: "What is Canada's currency?",
        choices: [
        "A. Canadian Dollar",
        "B. American Dollar",
        "C. Pound Sterling",
        "D. Loonie"
        ],

        logic: [true, false, false, false],
        answer: "A. Canadian Dollar"
    },

    {
        question: "Who is Canada's current Prime Minister?",

        choices: [
        "A. Pierre Elliott Trudeau",
        "B. Stephen Harper",
        "C. Justin Trudeau",
        "D. Queen Elizabeth II"
        ],

        logic: [false, false, true, false],
        answer: "C. Justin Trudeau"
        
    },

]
    


    function instructionPage() {
        $(".instructions").html("<h3>Welcome to the Great White North! Test your knowledge about Canada, but don't doddle, eh? You have 30 seconds once you hit the start button... Sorry!")
        $(".instructions").append("<button class='startButton'>Start Game!</button>");
        $(".instructions").on("click", function(){
            $(this).hide();
            $(".questions").show();
        });
    }

    instructionPage();

    $(".startButton").on("click", function(){
        $(".timer").show();
        $(".questions").show();
        timer.start();

    })

    displayQuestions();
 
  



    var correct= 0;
    var incorrect= 0;

    function showScore() {

        
        $('.questions').empty();
        $(".questions").append("<br><h2><p>Your Score:</p></h2>")
        $('.questions').append("<h2><p>" + correct + " correct</p></h2>");
        $('.questions').append("<h2><p>" + incorrect + " incorrect</p></h2>");
        timer.stop();
        $('.timer').empty();
    }


  
    

   function displayQuestions() {
    
    
       
             for ( var i = 0; i < questionsArray.length; i++) {

                $(".questions").append("<br><h4>" + questionsArray[i].question + "<h4>"+ "<hr><br>");

          //make into a variable, then put it all up after 
          for ( var j = 0; j < questionsArray[i].choices.length; j++) {
            $(".questions").append("<input type='radio' id='radio' name='question-" + i + "'value='" + questionsArray[i].choices[j] +"'>" + questionsArray[i].choices[j] +"<br><br>");
                }

            }  
            $(".questions").append("<button class='submit'>Submit</button>");
            
    
               }
           
            //    $(".radio").on("click", function() {
            //     var storeAnswers = $(this).val();
            //     console.log(storeAnswers);
            //    })
  
   
 // $(".submit").on("click", showScore());   


    });


    

 