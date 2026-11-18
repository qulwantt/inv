window.onload = function() {
    let container = document.createElement("div");
    container.className = "container";

    let input = document.createElement("input");
    input.type = "text";
    input.className = "question-input";
    input.value = "Чи буде завтра сонячно?";
    input.id = "userQuestion";

    let ball = document.createElement("div");
    ball.className = "magic-ball";
    ball.onclick = getAnswer; 

    let answerText = document.createElement("div");
    answerText.className = "answer-text";
    answerText.id = "answerText";
    answerText.innerHTML = "Yes"; 

    ball.appendChild(answerText); 
    container.appendChild(input); 
    container.appendChild(ball);  
    
    document.body.appendChild(container);
};

function getAnswer() {
    let question = document.getElementById("userQuestion").value;
    let textDiv = document.getElementById("answerText");

    if (question.trim() === "") {
        alert("Помилка: Спочатку введіть своє питання!");
        return; 
    }

    let answers = [
        "Yes", "No", "Maybe", "Ask again", 
        "100%", "Never", "I doubt it", "Of course!"
    ];

    let randomIndex = Math.floor(Math.random() * answers.length);
    textDiv.innerHTML = answers[randomIndex];
}