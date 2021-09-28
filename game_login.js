function adduser(){
    player1=document.getElementById("player1name").value;
    player2=document.getElementById("player2name").value;
    localStorage.setItem("player1namekey",player1);
    localStorage.setItem("player2namekey",player2);
    window.location="game_page.html";
}