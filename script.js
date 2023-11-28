
const questionnaire = [
    {
        sectionTitle: "Design and Planning",
        questions: [
            {
                text: "Q1: When designing APIs, what factors do you consider?",
                type: "checkbox", // Likert scale question
                options: [
                    { text: "User-friendliness", weight: 1 },
                    { text: "Performance optimization", weight: 1 },
                    { text: "Security features", weight: 2 },
                    { text: "Compatibility with older systems", weight: 1 }
                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
            },
            // More questions for this section
        ],
        sectionWeight: 2, // Section weight as per your criteria
    },
    // More sections...
];


let currentSectionIndex = 0;
let currentQuestionIndex = 0;
let currentSection = 1;
let currentQuestion = 1;
let sectionScores = {};
let totalScore = 0;

function startQuestionnaire() {
    displayQuestion(currentSection, currentQuestion);
}

function displayQuestion() {
    let section = questionnaire[currentSectionIndex];
    let question = section.questions[currentQuestionIndex];

    document.getElementById('sectionTitle').innerText = section.sectionTitle;
    document.getElementById('questionText').innerText = question.text;

    let optionsHtml = '';
    if (question.type === 'likert') {
        optionsHtml = question.options.map((option, index) =>
            `<div><input type="radio" name="questionOption" value="${index}">${option.text}</div>`
        ).join('');
    } else if (question.type === 'checkbox') {
        // Checkbox type question
        optionsHtml = question.options.map((option, index) =>
            `<div><input type="checkbox" name="questionOption" value="${index}">${option.text}</div>`
        ).join('');
    } else {
        // Default to radio buttons
        optionsHtml = question.options.map((option, index) =>
            `<div><input type="radio" name="questionOption" value="${index}">${option.text}</div>`
        ).join('');
    }

    document.getElementById('questionOptions').innerHTML = optionsHtml;
}



function submitAnswer() {
    let section = questionnaire[currentSectionIndex];
    let question = section.questions[currentQuestionIndex];
    let selectedOptions = getSelectedOptions(question);

    let score = question.calculateScore(selectedOptions);
    let weightedScore = score * section.sectionWeight; // Apply section weight to the score
    // Update total and section scores
    totalScore += weightedScore;
    sectionScores[currentSectionIndex] = (sectionScores[currentSectionIndex] || 0) + weightedScore;

    displayEvaluationResult(score);
    prepareForNextQuestion();
}

function getSelectedOptions(question) {
    let selected = [];
    let optionsElements = document.getElementsByName('questionOption');
    optionsElements.forEach((element, index) => {
        if (question.type === 'checkbox' && element.checked) {
            selected.push(question.options[index]);
        } else if ((question.type === 'radio' || question.type === 'likert') && element.checked) {
            selected.push(question.options[index]);
        }
    });
    return selected;
}


function displayEvaluationResult(score) {
    let recommendation = getRecommendation(score); // Define this function based on score ranges
    document.getElementById("evaluationResult").innerHTML = `Score for this question: ${score}<br>Recommendation: ${recommendation}`;
}

function getRecommendation(score) {
    // Logic to return recommendations based on the score
    if (score < 40) {
        return "Consider focusing more on security aspects...";
    } else if (score >= 40 && score < 60) {
        return "You are on the right track, but there's room for improvement...";
    } else {
        return "Great job! Continue to prioritize security...";
    }
}


function prepareForNextQuestion() {
    // Logic to check if there are more questions in the current section
    // Show 'nextQuestionBtn' or 'nextSectionBtn' accordingly
}

function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionnaire[currentSectionIndex].questions.length) {
        currentQuestionIndex = 0;
        currentSectionIndex++;
        // Handle end of questionnaire or move to next section
    }
    displayQuestion();
}


function displayNextSection() {
    // Logic to increment section number, reset question number and display the first question of the next section
}

function calculateFinalResults() {
    // Logic to calculate and display final results
    // This function can be called after the last section is completed
}

// Start the questionnaire
startQuestionnaire();
