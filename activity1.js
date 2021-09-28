var score=0
function updateScore(){
    score=score+1;
    document.getElementById("score").innerHTML="Score:"+score;
}
function savescore(){
 localStorage.setItem("scorekey",score);
}
function nextPage(){
    window.location="activity2.html";
}