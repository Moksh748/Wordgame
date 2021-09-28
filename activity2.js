function getscore(){
  answer=localStorage.getItem("scorekey");
  document.getElementById("update").innerHTML="Score:"+answer;
}
function back(){
    window.location="activity_1.html";
}