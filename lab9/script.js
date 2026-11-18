let uScore = 0, cScore = 0, attempts = 0;


const deck = [
    { v: 6, img: "url('https://deckofcardsapi.com/static/img/6S.png')" },
    { v: 7, img: "url('https://deckofcardsapi.com/static/img/7H.png')" },
    { v: 8, img: "url('https://deckofcardsapi.com/static/img/8C.png')" },
    { v: 9, img: "url('https://deckofcardsapi.com/static/img/9D.png')" },
    { v: 10, img: "url('https://deckofcardsapi.com/static/img/0S.png')" },
    { v: 2, img: "url('https://deckofcardsapi.com/static/img/JC.png')" },
    { v: 3, img: "url('https://deckofcardsapi.com/static/img/QH.png')" },
    { v: 4, img: "url('https://deckofcardsapi.com/static/img/KD.png')" },
    { v: 11, img: "url('https://deckofcardsapi.com/static/img/AS.png')" }
];

window.onload = () => {
    let name = prompt("Ваше ім'я:", "Гравець");
    if (name && name.trim()) document.getElementById("userName").innerHTML = name;
};

function playRound() {
    if (attempts >= 3) return; 
    attempts++;
    document.getElementById("attemptCount").innerHTML = `Спроба ${attempts} з 3`;

    let u = deck[Math.floor(Math.random() * deck.length)];
    let c = deck[Math.floor(Math.random() * deck.length)];

    uScore += u.v;
    cScore += c.v;
    document.getElementById("userScore").innerHTML = uScore;
    document.getElementById("compScore").innerHTML = cScore;

    let uCard = document.getElementById("userCard");
    let cCard = document.getElementById("compCard");


    uCard.innerHTML = "";
    cCard.innerHTML = "";


    uCard.style.backgroundColor = "white";
    uCard.style.backgroundImage = u.img;
    uCard.style.backgroundSize = "cover";
    uCard.style.backgroundPosition = "center";

    cCard.style.backgroundColor = "white";
    cCard.style.backgroundImage = c.img;
    cCard.style.backgroundSize = "cover";
    cCard.style.backgroundPosition = "center";

    if (attempts === 3) {
        document.getElementById("generateBtn").disabled = true;
        setTimeout(() => {
            let result = uScore > cScore ? "Ви перемогли!" : (cScore > uScore ? "Комп'ютер виграв!" : "Нічия!");
            alert(`${result}\nРахунок: ${uScore} : ${cScore}`);
        }, 300);
    }
}