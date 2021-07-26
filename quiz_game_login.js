function addUser() {
   var U1 = document.getElementById("user1").value;
   var U2 = document.getElementById("user2").value;
   if (U1 == "" || U2 == "") {
      alert("Please enter both usernames.");
   } else {
      localStorage.setItem("User1", U1);
      localStorage.setItem("User2", U2);
      window.location = "quiz_game_page.html";
   }
}