
let userScore = 0;
let compScore = 0;
let userName = "User"; 


window.onload = function() {

    let inputName = prompt("Введіть ваше ім'я для початку гри:", "Гравець");

    if (inputName !== null && inputName.trim() !== "") {
        userName = inputName.trim();
    }
    
    document.getElementById("playerName").innerHTML = userName;
};


function generateNumbers() {

    if (userScore >= 3 || compScore >= 3) {
        alert("Гра вже завершена! Оновіть сторінку (F5), щоб зіграти знову.");
        return; 
    }

    let userNum = Math.floor(Math.random() * 11);
    let compNum = Math.floor(Math.random() * 11);

    document.getElementById("userNumber").innerHTML = userNum;
    document.getElementById("compNumber").innerHTML = compNum;

    if (userNum > compNum) {
        userScore++; 
        document.getElementById("userScore").innerHTML = userScore;
    } else if (compNum > userNum) {
        compScore++; 
        document.getElementById("compScore").innerHTML = compScore;
    }
  
    setTimeout(function() {
        if (userScore === 3) {
            alert("Вітаємо, " + userName + "! Ви перемогли комп'ютер!");
        } else if (compScore === 3) {
            alert("На жаль, переміг комп'ютер. Спробуйте ще раз!");
        }
    }, 100);
}