function play() {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    let leftImage = document.querySelector(".img1")
    leftImage.setAttribute("src", `images/dice${randomNumber1}.png`);

    let rightImage = document.querySelector(".img2");
    rightImage.setAttribute("src", `images/dice${randomNumber2}.png`);

    let result = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        result.textContent = "🚩 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        result.textContent = "Player 2 Wins! 🚩";
    }
    else {
        result.textContent = "Draw!";
    }
}

document.querySelector(".btn").addEventListener("click", play);