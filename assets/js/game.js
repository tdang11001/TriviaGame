
$(document).ready(function() {

    // var question1 = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander"];
    // var question2 = ["Pichu", "Jolteon", "Raichu", "Electabuzz"];
    // var question3 = ["Fire", "Water", "Grass", "Electric"];
    // var question4 = ["Water", "Fire", "Electric", "Grass"];
    // var question5 = ["Fire", "Flying", "Water", "Rock"];
    // var question6 = ["Water", "Fire", "Grass", "Electric"];

    // var q1Answer = "Bulbasaur";
    // var q2Answer = "Raichu";
    // var q3Answer = "Electric";
    // var q4Answer = "Water";
    // var q5Answer = "Rock";
    // var q6Answer = "Water";

    var answers = ["Bulbasaur", "Raichu", "Electric", "Water", "Rock", "Water"];

    var correct = 0;
    var incorrect = 0;


    $('#submit').on("click", function(event) {
        event.preventDefault();
        checkAnswers();


    });


    function checkAnswers() {
        event.preventDefault();
        // var q1 = document.getElementById("q1");
        // var q1 = $("input[name='q1']:checked").val();
        // var q2 = document.getElementById("q2").value;
        // var q3 = document.getElementById("q3").value;
        // var q4 = document.getElementById("q4").value;
        // var q5 = document.getElementById("q5").value;
        // var q6 = document.getElementById("q6").value;

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

        // console.log(q1, q2, q3, q4, q5, q6);
        console.log(q1, q2, q3, q4, q5, q6);


        for (var i = 0; i < answers.length; i++) {
            if (userAnswerArray[i] === answers[i]) {
                correct++;
            }
            else {
                incorrect++;
            }
        }


        // if (q1 === q1Answer) {
        //     correct++;
        // }
        // else {
        //     incorrect++;
        // }

        // if (q2 === q2Answer) {
        //     correct++;
        // }
        // else {
        //     incorrect++;
        // }

        // if (q3 === q3Answer) {
        //     correct++;
        // }
        // else {
        //     incorrect++;
        // }

        // if (q4 === q4Answer) {
        //     correct++;
        // }
        // else {
        //     incorrect++;
        // }

        // if (q5 === q5Answer) {
        //     correct++;
        // }
        // else {
        //     incorrect++;
        // }

        // if (q6 === q6Answer) {
        //     correct++;
        // }
        // else {
        //     incorrect++;
        // }

        console.log("You have " + correct + " answers");
        console.log("You have " + incorrect + " incorrect answers");







    }


    // $("input[type='button']").on('click', function(){
    //     var radioValue = $("input[name='q1']:checked").val();
    //     if(radioValue){
    //         alert(radioValue);
    //     }
    // });
    

    


});