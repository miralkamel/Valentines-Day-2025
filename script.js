function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase();
    const responseText = document.getElementById("response-text");
    const correctAnswer = "my love";
    if (userAnswer === correctAnswer) {
        responseText.textContent = "Correct! Here's my message to you: Happy Valentine's Day My Love! I'm so grateful to be spending another year celebrating our love together. I can't wait to build a lifetime's worth of memories with you that are as special as the ones we already share. I Love You!";
    } else {
        responseText.textContent = "Oops! Try again, my love.";
    }
}
