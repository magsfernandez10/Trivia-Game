$(document).ready(function () {

    //var questions = [];
    var questions = [
        {
            q: "What is Michael Scott's middle name??",
            a: ["Gary", "Mike", "Jim", "Bob"],
            correctAnswer: "Gary",
            name: "name"
        },

        {
            q: "This character became Jim's love interest after he moved to the Stamford branch in this season?",
            a: ["Pam", "Karen", "Sam", "Julia Childs"],
            correctAnswer: "Karen",
            name: "names"
        },

        {
            q: "Where does the show take place?'",
            a: ["Chicago", "Scranton", "San Francisco", "New York"],
            correctAnswer: "Sranton",
            name: "city"
        },

        {
            q: "Who did Jim Helper Marry at the end of the Show?",
            a: ["Karen", "Pam", "Mike", "Angela"],
            correctAnswer: "Pam",
            name: "namess"

        },

        {
            q: "What does Dwight grow on his farm?",
            a: ["Tomatoes", "Lettuce", "Beets", "Oranges"],
            correctAnswer: "Beets",
            name: "fruit"

        }


    ]


    $(".container").hide();
    $('#results').hide();

    var startGame = $("#start-btn").on('click', function () {
        $("#start").fadeOut(400).hide();
        $(".logo").fadeOut(400).hide()
        $(".container").fadeIn(400).show();
        countdown(60);
        questionDisplay();
    });

    var questionDisplay = function () {
        $(".question-area :not('#submit')").empty();
        

        for (var j = 0; j < questions.length; j++) {
            //console.log(questions[i]);
            var questionDiv = "<div class ='displayQues'>" + (j+1) + "." + questions[j].q + "</div";
            $(".question-area").append(questionDiv);

            for (var i = 0; i <=3; i++) {
                var answerButton = '<input type="radio" name"' + questions[j].name + '" value="' + questions[j].a[i] + '"/>' + questions[j].a[i];
                $(".question-area").append(answerButton);
            }



        }

    }

    var countdown = function (seconds) {

        var timer = setInterval(function () {
            seconds--;
            $("#time-remain").html(seconds);

            if (seconds <= 0) {
                $('.container').fadeOut(400).hide();
                var correctAnswers = 0;
                var wrongAnswers = 0;
                var unAnswered = 0;


                for (var i = 0; i < questions.length; i++) {
                    if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
                        correctAnswers++;
                    } else if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === undefined) {
                        unAnswered++;
                    } else {
                        wrongAnswers++;
                    }

                };

                $('#correct').append('<span>' + correctAnswers + '</span>');
                $('#wrong').append('<span>' + wrongAnswers + '</span>');
                $('#unanswered').append('<span>' + unAnswered + '</span>');
                $('#results').show();

                // alert("Times Up!");
                clearInterval(timer);
                return;
            }
        }, 1000);

        // click event for submit button to stop timer
        $('#submit').on('click', function () {
            clearInterval(timer);
        })
    }; // end countdown

    var gradeQuiz = $('#submit').on('click', function() {
        $(".logo").fadeIn(400).show();

        var correctAnswers = 0;
        var wrongAnswers = 0;
        var unAnswered = 0;
    
        // loop through correctArray & radioName to match html elements & answers
        for (var i = 0; i < questions.length; i++) {
    
            if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
                correctAnswers++;
            } else if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === undefined) {
                unAnswered++;
            } else {
                wrongAnswers++;
            }
    
        };

        // once submit is clicked...
    // tests
    // stop timer
    countdown();

    // fade out questions
    $('.container').fadeOut(400).hide();
    $('#results').fadeIn(400).show();
    $('#correct').append('<span>' + correctAnswers + '</span>');
    $('#wrong').append('<span>' + wrongAnswers + '</span>');
    $('#unanswered').append('<span>' + unAnswered + '</span>');

    })


});

