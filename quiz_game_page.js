var PlayerName1 = localStorage.getItem("User1");
var PlayerName2 = localStorage.getItem("User2");
document.getElementById("player_1_name").innerHTML = PlayerName1 + " : ";
document.getElementById("player_2_name").innerHTML = PlayerName2 + " : ";
var Player1Score = 0;
var Player2Score = 0;
var question_turn = PlayerName1;
var answer_turn = PlayerName2;
document.getElementById("player_1_score").innerHTML = Player1Score;
document.getElementById("player_2_score").innerHTML = Player2Score;
document.getElementById("question_turn").innerHTML = question_turn;
document.getElementById("answer_turn").innerHTML = answer_turn;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4> Question : " + number1 + " X " + number2 + "</h4>";
    input_box = " Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><button class='btn btn-info m-2' onclick='check()' >Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    $("#output").show();
    $("#number_block").hide();

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

function check() {
    input_answer = parseInt(document.getElementById('input_check_box').value);
    if (actual_answer == input_answer) {
        if (answer_turn == PlayerName1) {
            Player1Score += 1;
            document.getElementById("player_1_score").innerHTML = Player1Score;
        } else {
            Player2Score += 1;
            document.getElementById("player_2_score").innerHTML = Player2Score;

        }
    } 
    else  alert("Sorry. Wrong Answer");
   
    $("#output").hide();
    $("#number_block").show(); 

    //Better way of swapping values
    [question_turn, answer_turn] = [answer_turn, question_turn];
    
    document.getElementById("question_turn").innerHTML = question_turn;
    document.getElementById("answer_turn").innerHTML = answer_turn;
    document.getElementById('input_check_box').value = "";
    if (Player1Score == 3 || Player2Score == 3) Congratulations();
}

function Congratulations() {
    $("#output").html("<label class='d-flex justify-content-center p-3'> Congratulations ! " + question_turn + " WINS.</label>");
    $("#output").show();
    $("#number_block").hide();
    $("#Turns").hide();    
}