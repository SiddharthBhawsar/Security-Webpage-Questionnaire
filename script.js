
const questionnaire = [
    {
        sectionTitle: "Design and Planning",
        questions: [
            {
                text: "Q1: When designing APIs, what factors do you consider?",
                type: "checkbox", // Likert scale question
                options: [
                    { text: "User-friendliness", weight: 1.5, isCorrect: true, recommendation: "Great! User-friendly APIs increase adoption." },
                    { text: "Performance optimization", weight: 1.5, isCorrect: true, recommendation: "Speed matters! Keep optimizing." },
                    { text: "Security features", weight: 2, isCorrect: true, recommendation: "Excellent choice! Secure APIs are the backbone of trust." },
                    { text: "Compatibility with older systems", weight: 1, isCorrect: false, recommendation: "Good, but remember, modern security needs might outweigh legacy compatibility." }
                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q2: I regularly update my knowledge on secure API usage through formal training.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 0.5, isCorrect: true, recommendation: "Room for growth! Consider joining a security workshop." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Stay updated! Security trends evolve rapidly." },
                    { text: "Neutral", weight: 1.5, isCorrect: true, recommendation: "Middle ground! How about a security webinar?" },
                    { text: "Agree", weight: 2, isCorrect: false, recommendation: "Good going! Continuous learning is key." },
                    { text: "Strongly Agree", weight: 2.5, isCorrect: false, recommendation: "Great! Keep leading the way in security knowledge." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q3: When designing software, what security principles do you follow??",
                type: "checkbox", // Likert scale question
                options: [
                    { text: "Simple Design", weight: 2, isCorrect: true, recommendation: "Simplicity is the soul of efficiency! Keep it up." },
                    { text: "Secure defaults", weight: 1.5, isCorrect: true, recommendation: "Secure by default is the way to go!" },
                    { text: "Fail-safe mechanisms", weight: 1, isCorrect: true, recommendation: "Fail-safe = Success. Good choice!" },
                    { text: "Principle of least privilege", weight: 1, isCorrect: false, recommendation: "Less is more in privileges. Wise choice!" }
                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q4: My team and I consider security aspects from the earliest stages of design.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "It's never too late to start! Prioritize security early on." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Consider shifting your focus to early security integration." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "Balancing act! Try leaning more towards early security considerations." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Good job! Early consideration of security pays off." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Excellent! Early birds catch the secure worms." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q5: How integrated is the concept of security in your company's culture?",
                type: "radio", // Likert scale question
                options: [
                    { text: "Fully integrated", weight: 1, isCorrect: true, recommendation: "Top-notch! A secure culture is a successful culture." },
                    { text: "Partially integrated", weight: 1, isCorrect: true, recommendation: "Halfway there! Keep pushing for full integration." },
                    { text: "Minimally integrated", weight: 2, isCorrect: true, recommendation: "Every step counts! Work towards a more secure culture." },
                    { text: "Not integrated", weight: 1, isCorrect: false, recommendation: "Time to initiate! Start weaving security into your culture." }
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
    {
        sectionTitle: "Development",
        questions: [
            {
                text: "Q1: In my organization, separate teams are responsible for functionality, security, and privacy.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "Collaboration is key. Consider team integration for better security." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "A unified approach might strengthen your security posture." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "A balanced view! Could there be more collaboration?" },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Specialization helps! Ensure regular inter-team communication." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Great approach! Specialized teams can fortify security." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q2 Which secure coding standards do you employ? (Select all that apply)",
                type: "checkbox", // Likert scale question
                options: [
                    { text: "OWASP guidelines", weight: 1, isCorrect: true, recommendation: "Staying on top of standards! OWASP is a solid choice." },
                    { text: "Language-specific best practices", weight: 1, isCorrect: true, recommendation: "Language mastery includes security. Good job!." },
                    { text: "Company-specific standards", weight: 2, isCorrect: true, recommendation: "Custom-fit security! Just ensure they're up-to-date." },
                    { text: "I don't follow specific standards", weight: 1, isCorrect: false, recommendation: "Time to level up! Consider adopting standard practices." }
                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q3 I ensure to incorporate security at all stages of the SDLC.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "Security is a full journey, not a destination. Start incorporating it throughout." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "A bit of attention at each stage can significantly boost your security." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "Fair enough, but there's always room for more security." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Good strategy! Security at all stages fortifies your software." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "That's the spirit! A comprehensive approach is best." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q4 I am confident in my ability to implement secure coding practices.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "Confidence will grow with practice. Keep learning!" },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Step by step, you'll get there. Keep building your skills." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "You're on the right track. Stay curious and keep improving." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Confidence and caution make a great pair in security." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Confidence backed by skill is a security superpower!" }

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
    {
        sectionTitle: "Testing and Integration",
        questions: [
            {
                text: "Q1 How often does your development team collaborate with the testing team on security matters?",
                type: "radio", // Likert scale question
                options: [
                    { text: "Very Frequently", weight: 1, isCorrect: true, recommendation: "Frequent collaboration is a cornerstone of robust security!" },
                    { text: "Occasionally", weight: 1, isCorrect: true, recommendation: "More collaboration can lead to stronger security. Keep it up!" },
                    { text: "Rarely", weight: 2, isCorrect: true, recommendation: "Teamwork makes the security dream work. Collaborate more!" },
                    { text: "Never", weight: 1, isCorrect: false, recommendation: "Start the conversation! Collaboration is crucial for security." }
                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q2 I regularly use threat modeling to inform security practices at various SDLC stages.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "Give it a try! Threat modeling can be a game changer." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Consider adding threat modeling to your toolbox." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "Exploring threat modeling could provide new insights." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "That’s proactive! Continue using threat modeling effectively." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Ahead of the curve! Keep using threat modeling as your secret weapon." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q3 What is your biggest challenge in implementing security features?",
                type: "radio", // Likert scale question
                options: [
                    { text: "Time constraints", weight: 1, isCorrect: true, recommendation: "Efficiency meets security! Look for ways to streamline processes." },
                    { text: "Knowledge gaps", weight: 1, isCorrect: true, recommendation: "Fill the gaps! Continuous learning is key in cybersecurity." },
                    { text: "Complexity of security features", weight: 2, isCorrect: true, recommendation: "Simplify to amplify security. Seek clarity in complexity." },
                    { text: "Balancing functionality and security", weight: 1, isCorrect: false, recommendation: "A delicate dance! Strive for harmony between the two." }
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
    {
        sectionTitle: "Deployment and Maintenance",
        questions: [
            {
                text: "Q1: Which aspect do you prioritize more in your projects?",
                type: "radio", // Likert scale question
                options: [
                    { text: "Utilizing security tools", weight: 1, isCorrect: true, recommendation: "Tools are great, but don't forget the human touch in security." },
                    { text: "Following privacy policies", weight: 1, isCorrect: true, recommendation: "Policies matter, but they're just one piece of the security puzzle." },
                    { text: "Balancing both equally", weight: 2, isCorrect: true, recommendation: "Balanced approach for a secure outcome. Great strategy!" },
                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q2: External security consultations have significantly improved our project's security.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "External insights can be invaluable. Consider giving it another shot." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Sometimes a fresh pair of eyes can make all the difference." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "There's potential in external consultations. Maybe explore different options." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Leveraging external expertise can enhance your security. Keep it up!" },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Fantastic! External insights are a great way to bolster your defenses." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q3: How do you determine the level of security effort in your applications?",
                type: "radio", // Likert scale question
                options: [
                    { text: "Based on the application's risk profile", weight: 1, isCorrect: true, recommendation: "Risk-based approach keeps you focused. Smart move!" },
                    { text: "Uniform security across all applications", weight: 1, isCorrect: true, recommendation: "Consistency is key, but tailor security to specific needs too." },
                    { text: "Focus more on high-risk applications", weight: 2, isCorrect: true, recommendation: "Prioritizing high-risk areas is wise, but don't neglect the rest." },
                    { text: "Security efforts are determined by external factors (e.g., client requirements)", weight: 1, isCorrect: false, recommendation: "Adaptability is great, but make sure to have a solid internal security baseline." }
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
    {
        sectionTitle: "Team Dynamics and Culture",
        questions: [
            {
                text: "Q1: I view software security as a collective responsibility involving all team members.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "Team effort equals strong security. Time to get everyone on board!" },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Security is a team sport. Encourage more involvement." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "Middle of the road! How about rallying the troops for more collective action?" },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Great mindset! Collective responsibility leads to stronger security." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Excellent! A united front makes for an impenetrable security shield." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q2: I believe that current best practices in software security are realistic and applicable to our development process.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "If they're not fitting, it's time for some custom tailoring." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "A bit of tweaking can make best practices more applicable." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "Best practices are a guide, not a straitjacket. Adapt as needed." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Keep applying them wisely! Best practices are there for a reason." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "That's the spirit! Best practices are the building blocks of strong security." }

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
    {
        sectionTitle: "Learning and Resources",
        questions: [
            {
                text: "Q1: I believe the sources of information I use for software development are reliable and promote secure coding.",
                type: "likert", // Likert scale question
                options: [
                    { text: "Strongly Disagree", weight: 1, isCorrect: true, recommendation: "Diversify your sources for a broader security perspective." },
                    { text: "Disagree", weight: 1, isCorrect: true, recommendation: "Challenge your sources. Reliable information is key to security." },
                    { text: "Neutral", weight: 2, isCorrect: true, recommendation: "Good to question! Keep evaluating the reliability of your sources." },
                    { text: "Agree", weight: 1, isCorrect: false, recommendation: "Reliable sources are a treasure. Keep them close." },
                    { text: "Strongly Agree", weight: 1, isCorrect: false, recommendation: "Knowledge is power! Reliable sources are crucial for secure coding." }

                ],
                calculateScore: (selectedOptions) => {
                    // Custom logic for calculating the score based on selected options
                    return selectedOptions.reduce((total, option) => total + option.weight, 0);
                }
                
            },
            {
                text: "Q2: What type of documentation do you prefer for learning about secure coding?",
                type: "radio", // Likert scale question
                options: [
                    { text: "Detailed and comprehensive guides", weight: 1, isCorrect: true, recommendation: "Depth of knowledge leads to height of security!" },
                    { text: "Quick and easy-to-understand summaries", weight: 1, isCorrect: true, recommendation: "Summaries are great for quick learning, but don’t skip the details." },
                    { text: "Video tutorials", weight: 2, isCorrect: true, recommendation: "Visual learning sticks! Keep up with those tutorials." }
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
let sectionScores = {};
let totalScore = 0;

function startQuestionnaire() {
    populateSectionList();
    displayQuestion();
}
function populateSectionList() {
    const sectionList = document.getElementById('sectionList');
    questionnaire.forEach((section, index) => {
        const li = document.createElement('li');
        li.innerText = section.sectionTitle;
        li.onclick = () => jumpToSection(index);
        sectionList.appendChild(li);
    });
}
function jumpToSection(index) {
    currentSectionIndex = index;
    currentQuestionIndex = 0;
    displayQuestion();
}
function displayQuestion() {
    updateProgressBar();
    highlightCurrentSection();
    let section = questionnaire[currentSectionIndex];
    let question = section.questions[currentQuestionIndex];

    document.getElementById('sectionTitle').innerText = section.sectionTitle;
    document.getElementById('questionText').innerText = question.text;

    let optionsHtml = '';

    if (question.type === 'checkbox') {
        optionsHtml = question.options.map((option, index) =>
            `<div>
                <input type="checkbox" name="questionOption" value="${index}" id="option${index}">
                <label for="option${index}">${option.text}</label>
                <div class='recommendation' id='recommendation${index}'></div>
            </div>`
        ).join('');
    } else if (question.type === 'radio') {
        optionsHtml = question.options.map((option, index) =>
            `<div>
                <input type="radio" name="questionOption" value="${index}" id="option${index}">
                <label for="option${index}">${option.text}</label>
                <div class='recommendation' id='recommendation${index}' style='display:none;'></div>
            </div>`
        ).join('');
    } else if (question.type === 'likert') {
        optionsHtml = question.options.map((option, index) =>
            `<div>
                <input type="radio" name="questionOption" value="${index}" id="option${index}">
                <label for="option${index}">${option.text}</label>
                <div class='recommendation' id='recommendation${index}' style='display:none;'></div>
            </div>`
        ).join('');
    }

    document.getElementById('questionOptions').innerHTML = optionsHtml;
}

function updateProgressBar() {
    const totalQuestions = questionnaire.reduce((total, section) => total + section.questions.length, 0);
    const currentQuestionNumber = questionnaire.slice(0, currentSectionIndex).reduce((total, section) => total + section.questions.length, 0) + currentQuestionIndex + 1;
    const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + '%';
}

function highlightCurrentSection() {
    const sectionListItems = document.querySelectorAll('#sectionList li');
    sectionListItems.forEach((li, index) => {
        if (index === currentSectionIndex) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
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
    // Check if any option is selected
    if (selectedOptions.length === 0) {
        alert("Please select an option before proceeding."); // Alert or show a message to the user
        return; // Stop the function if no option is selected
    }
    document.getElementById('nextQuestionBtn').style.display = 'block';
    document.querySelector('button[onclick="submitAnswer()"]').style.display = 'none';

    
    if (question.type === 'checkbox') {
        question.options.forEach((option, index) => {
            let isSelected = selectedOptions.includes(option);
            let recommendationElement = document.getElementById('recommendation' + index);
            recommendationElement.innerHTML = isSelected ? option.recommendation : '';
            recommendationElement.style.display = isSelected ? 'block' : 'none';
        });
    } else if (question.type === 'radio' || question.type === 'likert') {
        let selectedOption = selectedOptions.length > 0 ? selectedOptions[0] : null;
        question.options.forEach((option, index) => {
            if (selectedOption && selectedOption.text === option.text) {
                let recommendationElement = document.getElementById('recommendation' + index);
                recommendationElement.innerHTML = option.recommendation;
                recommendationElement.style.display = 'block';
            } else {
                document.getElementById('recommendation' + index).style.display = 'none';
            }
        });
    }

    prepareForNextQuestion();
}



function getSelectedOptions(question) {
    let selected = [];
    let optionsElements = document.getElementsByName('questionOption');
    optionsElements.forEach((element, index) => {
        if ((question.type === 'checkbox' && element.checked) ||
            (question.type === 'radio' || question.type === 'likert') && element.checked) {
            selected.push(question.options[index]);
        }
    });
    return selected;
}


function displayEvaluationResult(score) {
    let section = questionnaire[currentSectionIndex];
    let question = section.questions[currentQuestionIndex];
    let selectedOptions = getSelectedOptions(question);

    let recommendation = question.getRecommendation(selectedOptions);
    document.getElementById("evaluationResult").innerHTML = `Score for this question: ${score}<br>Recommendation: ${recommendation}`;
}


function getRecommendation(question, selectedOptions) {
    let recommendationsHtml = "";

    question.options.forEach((option, index) => {
        let isSelected = selectedOptions.includes(option);
        if (isSelected) {
            recommendationsHtml += `<div id='recommendation${index}' style='color: ${option.isCorrect ? "green" : "red"};'>${option.recommendation}</div>`;
        }
    });

    return recommendationsHtml;
}



function prepareForNextQuestion() {
    // Logic to check if there are more questions in the current section
    // Show 'nextQuestionBtn' or 'nextSectionBtn' accordingly
}

function displayNextQuestion() {
    currentQuestionIndex++;
    let section = questionnaire[currentSectionIndex];
    if (currentQuestionIndex < section.questions.length) {
        displayQuestion();
        document.getElementById('nextQuestionBtn').style.display = 'none';
        document.querySelector('button[onclick="submitAnswer()"]').style.display = 'block';
    
    } else {
        displayNextSection();
    }
}

function displayNextSection() {
    currentSectionIndex++;
    if (currentSectionIndex < questionnaire.length) {
        currentQuestionIndex = 0;
        displayQuestion();
    } else {
        // All sections are completed
        document.getElementById('nextQuestionBtn').style.display = 'none';
        document.querySelector('button[onclick="submitAnswer()"]').style.display = 'block';
    }
}


function calculateFinalResults() {
    let overallScore = calculateOverallScore();
    displayFinalResults(overallScore);
}

function calculateOverallScore() {
    let totalWeightedScore = 0;
    let totalMaxScore = 0;
    questionnaire.forEach((section, index) => {
        let sectionMaxScore = section.questions.length * 5 * section.sectionWeight; // Assuming max score per question is 5
        totalMaxScore += sectionMaxScore;
        totalWeightedScore += sectionScores[index] || 0;
    });

    return (totalWeightedScore / totalMaxScore) * 100; // Percentage score
}

function displayFinalResults(overallScore) {
    let resultsHtml = "<h3>Final Results</h3>";

    questionnaire.forEach((section, index) => {
        let sectionScore = sectionScores[index] || 0;
        resultsHtml += `<p>${section.sectionTitle} Score: ${sectionScore.toFixed(2)}</p>`;
    });

    resultsHtml += `<p><strong>Overall Score: ${overallScore.toFixed(2)}</strong></p>`;
    resultsHtml += `<p><strong>Overall Recommendation:</strong> ${getOverallRecommendation(overallScore)}</p>`;

    document.getElementById("finalResults").innerHTML = resultsHtml;
    document.getElementById("finalResults").style.display = "block";
}

function getOverallRecommendation(score) {
    // Logic to return overall recommendations based on the score
    // ...
}


// Start the questionnaire
startQuestionnaire();
