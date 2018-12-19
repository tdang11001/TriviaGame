
$(document).ready(function() {

    // var question1 = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander"];
    // var question2 = ["Pichu", "Jolteon", "Raichu", "Electabuzz"];
    // var question3 = ["Fire", "Water", "Grass", "Electric"];
    // var question4 = ["Water", "Fire", "Electric", "Grass"];
    // var question5 = ["Fire", "Flying", "Water", "Rock"];
    // var question6 = ["Water", "Fire", "Grass", "Electric"];

    var q1Answer = "Bulbasaur";
    var q2Answer = "Raichu";
    var q3Answer = "Electric";
    var q4Answer = "Water";
    var q5Answer = "Rock";
    var q6Answer = "Water";

    var correct = 0;
    var incorrect = 0;


    $('#submit').on("click", function(event) {
        event.preventDefault();
        checkAnswers();


    });


    function checkAnswers() {
        event.preventDefault();
        // var q1 = document.getElementById("q1");
        var q1 = $("input[name='q1']:checked").val();
        var q2 = document.getElementById("q2").value;
        var q3 = document.getElementById("q3").value;
        var q4 = document.getElementById("q4").value;
        var q5 = document.getElementById("q5").value;
        var q6 = document.getElementById("q6").value;

        // console.log(q1, q2, q3, q4, q5, q6);
        console.log(q1);

    }

    

    


});