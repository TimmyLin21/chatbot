const backToTopBtn = document.querySelector('.backToTop');

backToTopBtn.addEventListener('click',(e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth'});
})

const questions = [...document.querySelectorAll('.question')];
const toggleBtns = [...document.querySelectorAll('.question a')]

toggleBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedBtn = e.target
    const id = selectedBtn.dataset.id;
    const selectedQuestion = questions.find((question) => question.dataset.id === id);
    if (selectedBtn)
    selectedQuestion.classList.toggle('active');
    selectedBtn.classList.toggle('close');
    selectedBtn.classList.toggle('open');
  })
})

console.log(questions,toggleBtns);