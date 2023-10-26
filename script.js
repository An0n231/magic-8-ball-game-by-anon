// Possible 8-Ball answers
const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  
];


// Function to generate a random answer
function generateAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}
function apply3DEffect() {
    const shakeButton = document.getElementById("shake-button");
    shakeButton.style.transform = "perspective(100px) rotateX(20deg)";
    setTimeout(() => {
        shakeButton.style.transform = "perspective(100px) rotateX(10deg)";
    }, 300);
}

function shakeMagicBall() {
    const magicBall = document.querySelector(".magic-ball");
    const answers = document.querySelector(".answers");
    magicBall.classList.add("shake");

    setTimeout(() => {
        magicBall.classList.remove("shake");
        answers.textContent = generateAnswer();

    }, 1000); // Adjust the duration (in milliseconds) to match your animation duration

        
   
}



// Event listener for the "Shake" button
document.getElementById("shake-button").addEventListener("click", () => {
    shakeMagicBall();
    apply3DEffect();
});

// Initial answer display
document.querySelector(".answers").textContent = "Ask a question...";

