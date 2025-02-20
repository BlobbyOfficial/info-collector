const questions = [
    { q: "Have you ever been to France?", key: "travel" },
    { q: "Do you like video games?", key: "hobbies" },
    { q: "What is your favorite meal?", key: "food" },
    { q: "Do you wake up early or late?", key: "sleep" },
    { q: "Do you use social media a lot?", key: "social" }
];

let answers = [];
let currentQuestion = 0;

function nextQuestion() {
    let input = document.getElementById("answer").value.trim();
    
    if (input === "") {
        alert("Please enter an answer!");
        return;
    }

    answers.push({ key: questions[currentQuestion].key, answer: input });

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].q;
        document.getElementById("answer").value = "";
    } else {
        analyzeResults();
    }
}

function analyzeResults() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("results").style.display = "block";

    let ageGuess = Math.floor(Math.random() * 40) + 10;
    let genderGuess = Math.random() > 0.5 ? "Male" : "Female";
    let interests = answers.find(a => a.key === "hobbies") ? answers.find(a => a.key === "hobbies").answer : "Unknown";
    
    let finalText = `You are probably around ${ageGuess} years old, you seem to be ${genderGuess}, and you like ${interests}. 🎮📚🍕`;

    document.getElementById("final-guess").innerText = finalText;
}

function shareResults() {
    let textToCopy = document.getElementById("final-guess").innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard! 🎉 Now you can share it!");
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}

window.onload = () => {
    document.getElementById("question").innerText = questions[currentQuestion].q;
};
