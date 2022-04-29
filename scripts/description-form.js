const descriptionForm = document.querySelector('.description-form');
const contactForm1 = document.querySelector('.contact-form');
const educationForm = document.querySelector('.education-form');

const inputDescription = document.querySelector('#inputDescription');
const descriptionTarget = document.querySelector('#descriptionTarget');

// buttons
const descriptionFormButtonBack = document.querySelector('#descriptionFormButtonBack');
const descriptionFormButtonNext = document.querySelector('#descriptionFormButtonNext');

// Functions
const simpleCompletion1 = (input, result) => {
  if(input.value == ''){
    result.innerText = input.placeholder;
  } else {
    result.innerText = input.value;
  }
};

const colorFocus1 = (input, result) => {
  input.addEventListener('focusin', () => {
    result.style.color = 'crimson';
    descriptionTarget.style.border = '3px dotted lightskyblue';
  });
  input.addEventListener('focusout', () => {
    result.style.color = '';
    descriptionTarget.style.border = '';
  });
}

// Uzupełnij opis/cel zawodowy
descriptionForm.addEventListener('submit', e => {
  e.preventDefault();
  
  //Uzupełnij opis/cel zawodowy (w razie, gdy nie uzupełnione, to pozostawić puste)
  if(inputDescription.value == ''){
    descriptionTarget.innerText = '';
  } else {
    descriptionTarget.style.display = 'block';
    descriptionTarget.innerText = inputDescription.value;
  }

  // Kolorowanie podglądów na focusie inputów
  // Koloruj imię
  colorFocus1(inputDescription, descriptionTarget);
  
});

  // Przejście do poprzedniego formularza
  descriptionFormButtonBack.addEventListener('click', () => {
    descriptionForm.style.display = 'none';
    contactForm1.style.display = 'block';       
  });

  // Przejście do następnego formularza
  descriptionFormButtonNext.addEventListener('click', () => {
    descriptionForm.style.display = 'none';
    educationForm.style.display = 'block';
  });
