const questions = [
    {
        question: "What is 20+(90/2)?",
        answers: [
            { text: "65", correct: true },
            { text: "55", correct: false }
        ]
    },
    {
        question: "Is it true AFRICA is a country?",
        answers: [
            { text: "No", correct: true },
            { text: "Yes", correct: false }
        ]
    },
    {
        question: "What came first, the Chicken or the Egg?",
        answers: [
            { text: "Chicken", correct: false },
            { text: "Egg", correct: true }
        ]
    },
    {
        question: "Did Travis deserve to lose the Grammys?",
        answers: [
            { text: "They robbed him", correct: true },
            { text: "no", correct: false }
        ]
    },
    {
        question: "Is the Earth a sphere or is it Flat?",
        answers: [
            { text: "Flat", correct: true },
            { text: "Sphere", correct: false }
        ]
    },
    {
        question: "How many months have 29 Days in them",
        answers: [
            { text: "Only February", correct: true },
            { text: "All of them", correct: false }
        ]
    },
    {
        question: "What can be broken but never held?",
        answers: [
            { text: "Broken Glass", correct: false },
            { text: "Promises", correct: true }
        ]
    },
    {
        question: "Whats Nelson Mandela REAL SURNAME",
        answers: [
            { text: "Mandela", correct: true },
            { text: "Nelson", correct: false }
        ]
    },
    {
        question: "What is 364 days plus 48 months?",
        answers: [
            { text: "5 Years", correct: false },
            { text: "1825 days", correct: true }
        ]
    },
    {
        question: "Do your parents know your gay",
        answers: [
            { text: "Yes", correct: true },
            { text: "No", correct: true }
        ]
    }
];

document.getElementById("name-btn").onclick = function(){
    let name = document.getElementById("name").value;

    if(name !== ""){

        const questionElement = document.getElementById("quiz-question");
        const answerButtonsElement = document.getElementById("answer-buttons");
        
        let currentQuestionIndex = 0;
        let score = 0;
        
        // Displays the questions on the HTML elements
        function showQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            answerButtonsElement.innerHTML = ""; // dis should Clear previous answer buttons
        
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.textContent = answer.text;
                button.classList.add("btn");
                button.addEventListener("click", () => {
                    if (answer.correct) {
                        score++;
                    }
        
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        showQuestion();
                    } else {
                        if(score > 7 ){
                            questionElement.textContent = "You're smart you got " + score + " out of " + questions.length + " UNLIKE MOST PEOPLE" + ` Be proud ${name}`;
                            answerButtonsElement.innerHTML = "";
                        }
                        else if (score > 5 && score < 7) {
                            questionElement.textContent = `You barely passed ${name}, so don't be too proud. You got ` + score + " out of " + questions.length;
                            answerButtonsElement.innerHTML = "";
                        }
                        else if(score < 5)    {
                            questionElement.textContent = name + "Go back to Kindergarden you got " + score + " out of " + questions.length;
                            answerButtonsElement.innerHTML = "";
                        }
                        
                    }
                });
                answerButtonsElement.appendChild(button);
            });
        }
        showQuestion();
    }
    else{
        alert("Please fill in your name")
    }

}

