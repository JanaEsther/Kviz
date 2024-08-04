const answer = prompt("Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.");

const answerElement = document.querySelector('.answer__text');
const puvodniObsah = answerElement.textContent;
answerElement.textContent = answer;

const answerCheck = document.querySelector('.answer');
if(answer === "Bell"){
  answerCheck.classList.add('answer--correct');
}else{
  answerCheck.classList.add('answer--wrong');
}
