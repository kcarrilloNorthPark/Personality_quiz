let answers = [];

const questionBlocks = document.querySelectorAll(".question-block");
questionBlocks.forEach((block, index) => {
  const options = block.querySelectorAll(".option");

  buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            
            // Remove 'selected' from all buttons in this question
            buttons.forEach(b => b.classList.remove("selected"));

            // Add selected style
            btn.classList.add("selected");

            // Store answer
            answers[index] = btn.dataset.value;
        });
    });
});

document.getElementById("show-result").addEventListener("click", displayResult);

function displayResult() {
  
    const score = {
        mango: 0,
        grape: 0,
        pineapple: 0,
        watermelon: 0

    }
    answers.forEach(ans => {
        if (ans) score[ans]++;
    });
    let finalFruit = Object.keys(score).reduce((a, b) =>
        score[a] > score[b] ? a : b
    );

    const descriptions = {
        mango: "🥭 You are Mango! Warm, energetic, and adventurous. People love your sunshine energy!",
        grape: "🍇 You are Grape! Calm, comforting, and thoughtful. You’re easy to trust and peaceful to be around.",
        pineapple: "🍍 You are Pineapple! Bold, confident, and a little extra — you'll always stand out in a crowd.",
        watermelon: "🍉 You are Watermelon! Fun-loving, social, and full of good vibes. Everyone wants you at the party!"
    };

    document.getElementById("result-text").textContent = descriptions[finalFruit];
    document.getElementById("result-container").style.display = "block";

}