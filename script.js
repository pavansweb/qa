const showAnswerButtons = document.querySelectorAll('.show-answer');

showAnswerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answerElement = button.nextElementSibling;
    answerElement.style.display = answerElement.style.display === 'none' ? 'block' : 'none';
  });
});