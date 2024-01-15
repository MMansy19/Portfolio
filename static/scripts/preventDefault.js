// Add Border For Input Form Contact
const contactInput = document.querySelectorAll('.contact__input');

contactInput.forEach((input) => {
  input.addEventListener('focus', (event) => {
    event.target.classList.add('border-bottom-input');
  });
  input.addEventListener('blur', (event) => {
    event.target.classList.remove('border-bottom-input');
  });
});

//-----
// Form Doesn't work if Empty
const contactButton = document.querySelector('.contact__button');

contactButton.addEventListener('click', (event) => {
  contactInput.forEach((input) => {
    if (input.value === '') {
      event.preventDefault();
    }
  });
});

//----
// Switch Button For Accessibility
const toggleLabel = document.querySelector('.toggle__label');

toggleLabel.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.currentTarget.click();
  }
});
