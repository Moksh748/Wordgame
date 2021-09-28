player1_name=localStorage.getItem("player1namekey");
player2_name=localStorage.getItem("player2namekey");
player1_score=0;
player2_score=0;
document.getElementById("player_1").innerHTML=player1_name+":";
document.getElementById("player_2").innerHTML=player2_name+":";
document.getElementById("points_1").innerHTML=player1_score;
document.getElementById("points_2").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn:" + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:" + player2_name;
function send(){
    question1=document.getElementById("question").value;
    question=question1.toLowerCase();
    console.log("The question in lowercase = " + question);
    secondletter=question.charAt(1);
    console.log(secondletter);
    indexlast=question.length-1;
    last=question.charAt(indexlast);
    console.log(last);
    middle1=question.length/2
    middle=Math.floor(middle1);
    mid=question.charAt(middle);
    console.log(mid);
    fakequestion=question.replace(secondletter,"_");
    fake=fakequestion.replace(mid,"_");
    realquestion=fake.replace(last,"_");
    console.log(realquestion);
    questionword="<h4> Question:"+realquestion+"</h4><br>";
    inputbox="Answer: <input id='checkbox1' type='text'><br><br>";
    checkbutton="<button class='btn btn-info' onclick='check()'>Check</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("question").value="";
}
answer_turn="p2";
question_turn="p1";
function check(){
    getanswer=document.getElementById("checkbox1").value;
    answer=getanswer.toLowerCase();
    console.log("The answer is"+answer);
    if(answer==question){
        if(answer_turn=="p1"){
            player1_score=player1_score+1;
            document.getElementById("points_1").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("points_2").innerHTML=player2_score;
        }
    }
    if (question_turn=="p1"){
        answer_turn="p1"
        question_turn="p2";
        document.getElementById("player_question").innerHTML="Question turn:"+player2_name;
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player1_name;
    }
    else{
        answer_turn="p2";
        question_turn="p1";
        document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;
    }
    document.getElementById("output").innerHTML="";
}
