
$(document).ready(function () { // run the ready function after all of the HTML elements have been loaded in the DOM

    var answers = ["Bulbasaur", "Raichu", "Electric", "Water", "Rock", "Water"]; // store correct answers in the array
    var correct = 0; // set correct answers to 0
    var incorrect = 0; // set incorrect answers to 0

    $('#submit').on("click", function (event) { // when the user click the submit button
        event.preventDefault(); // prevent the page from refreshing
        resetGame(); // call the resetGame function
        checkAnswers(); // call the checkAnswers function
        alert("Correct answers: " + correct + "\nIncorrect answers: " + incorrect); // display a pop-up windows to the user


    });

    function checkAnswers() { // check the answers

        var q1 = document.querySelector('[name=q1]:checked').value; // store the user value in a variable for each question
        var q2 = document.querySelector('[name=q2]:checked').value; // store the user value in a variable for each question
        var q3 = document.querySelector('[name=q3]:checked').value; // store the user value in a variable for each question
        var q4 = document.querySelector('[name=q4]:checked').value; // store the user value in a variable for each question
        var q5 = document.querySelector('[name=q5]:checked').value; // store the user value in a variable for each question
        var q6 = document.querySelector('[name=q6]:checked').value; // store the user value in a variable for each question

        var userAnswerArray = []; // create an empty array
        userAnswerArray.push(q1); // store the user answer in an array
        userAnswerArray.push(q2); // store the user answer in an array
        userAnswerArray.push(q3); // store the user answer in an array
        userAnswerArray.push(q4); // store the user answer in an array
        userAnswerArray.push(q5); // store the user answer in an array
        userAnswerArray.push(q6); // store the user answer in an array

        for (var i = 0; i < answers.length; i++) { // loop through the answers array
            if (userAnswerArray[i] === answers[i]) { // if user answer matches the answers array
                correct++; // increment correct answer by 1
            }
            else { // if not the correct answer
                incorrect++; // increment answer by 1
            }
        }

        $('#correctAnswers').text(correct); // display the total number of correct answers to the page
        $('#incorrectAnswers').text(incorrect); // display the total number of incorrect answers to the page

    }

    function resetGame() { // clear the game after completed
        correct = 0; // reset the correct answers back to 0
        incorrect = 0; //  reset the incorrect answers back to 0
    }

    /* after certain time has passed, run this code.
       run the alert function after 30 seconds have passed, and run the checkAnswers function.
       1000 milliseconds = 1 second */
    setTimeout(function () { alert("Your 3 seconds is up!"), checkAnswers(); }, 3000); 

    /* I dont know know how to write the JavaScript code for a countdown timer.
       I did not want to copy and paste JS countdown time code from Google so I am going to write a pseudocode for it  */
    
    /* countdown timer pseudocode
    1. get current time from the Date object, and store it in a variable (start time).
    2. create a new variable, and add 60 seconds to the Date object (end time).
    3. if the current time matches the end time, automatically submit the form.
    */

});