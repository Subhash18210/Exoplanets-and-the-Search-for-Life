// Define levels, study points, and questions
const levels = [
    {
        title: "Level 10:Exoplanets and the Search for Life",
        studyPoints: [
            "The discovery of exoplanets expands the search for extraterrestrial life.",
            "Key factors for life include liquid water, an atmosphere, and suitable temperatures.",
            "The Fermi Paradox questions why we haven't found signs of extraterrestrial life yet.",
            "Scientists look for biosignatures in the atmospheres of exoplanets as indicators of life.",
            "Ongoing research aims to identify exoplanets with Earth-like conditions.",

        ],
        questions: [
            {
            question: "How do exoplanets relate to the search for extraterrestrial life?",
            options: ["They are irrelevant to the search", "They expand the search for extraterrestrial life", "They are all uninhabitable", "They are only gas giants"],
            answer: 1
            },
            {
            question: "Which factors are crucial for the possibility of life on exoplanets?",
            options: ["Liquid water and distance from Earth", "Presence of moons and rings", "Liquid water, atmosphere, and suitable temperatures", "Only proximity to the Sun"],
            answer: 2
            },
            {
            question: "What is the Fermi Paradox?",
            options: ["The belief in multiple universes", "A theory about the Big Bang", "A question about the lack of evidence for extraterrestrial life", "A concept related to time travel"],
            answer: 2
            },
            {
            question: "What are biosignatures?",
            options: ["Signs of a planet's size", "Indicators of life in an atmosphere", "Geological formations on planets", "The distance to a planet"],
            answer: 1
            },
            {
            question: "What is an ongoing research goal regarding exoplanets?",
            options: ["To find only gas giants", "To identify exoplanets with Earth-like conditions", "To measure the distance to stars", "To determine the age of the universe"],
            answer: 1
            }
            ]
        
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}