const questionElement = document.querySelector('.question');

const question =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

questionElement.textContent = question;
const userAnswer = prompt(question);

const answerElement = document.querySelector('.answer__text');
answerElement.textContent = userAnswer;

const AnswerElement = document.querySelector('.answer');

if (userAnswer === 'Bell') {
  AnswerElement.classList.add('answer--correct');
} else {
  AnswerElement.classList.add('answer--wrong');
}
