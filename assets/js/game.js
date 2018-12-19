
$(document).ready(function() {


    var answers = ["Bulbasaur", "Raichu", "Electric", "Water", "Rock", "Water"];

    var correct = 0;
    var incorrect = 0;


    $('#submit').on("click", function(event) {
        event.preventDefault();
        checkAnswers();


    });


    function checkAnswers() {
      
       
        var q1 = document.querySelector('[name=q1]:checked').value;
        var q2 = document.querySelector('[name=q2]:checked').value;
        var q3 = document.querySelector('[name=q3]:checked').value;
        var q4 = document.querySelector('[name=q4]:checked').value;
        var q5 = document.querySelector('[name=q5]:checked').value;
        var q6 = document.querySelector('[name=q6]:checked').value;

        var userAnswerArray = [];
        userAnswerArray.push(q1);
        userAnswerArray.push(q2);
        userAnswerArray.push(q3);
        userAnswerArray.push(q4);
        userAnswerArray.push(q5);
        userAnswerArray.push(q6);

       


        for (var i = 0; i < answers.length; i++) {
            if (userAnswerArray[i] === answers[i]) {
                correct++;
            }
            else {
                incorrect++;
            }
        }



        console.log("You have " + correct + " answers");
        console.log("You have " + incorrect + " incorrect answers");

        $('#correctAnswers').text(correct);
        $('#incorrectAnswers').text(incorrect);







    }

    setTimeout(function(){ checkAnswers(); }, 10000);



   
    
    
    
   

    


});