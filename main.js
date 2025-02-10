const questions = [
    {
        question: "5円玉と50円玉の穴の直径は同じであるか",
        answers: ["〇", "✖"],
        correct: 0
    },
    {
        question: "次の質問はこちら？",
        answers: ["回答1", "回答2"],
        correct: 1
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer-button');

    questionElement.textContent = questions[currentQuestionIndex].question;
    answerButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].answers[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        alert('正解');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert('すべての質問に正解しました！おめでとうございます！');
        }
    } else {
        alert('不正解！もう一度挑戦してください。');
    }
}

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('trolley-container').style.display = 'block';
    showQuestion();
});


