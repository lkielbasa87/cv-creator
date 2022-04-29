const contactForm = document.querySelector('.contact-form');
const header = document.querySelector('.header');

const inputName = document.querySelector('#inputName');
const inputSecondName = document.querySelector('#inputSecondName');
const inputProfession = document.querySelector('#inputProfession');
const inputStreet = document.querySelector('#inputStreet');
const inputStreetNumber = document.querySelector('#inputStreetNumber');
const inputStreetLetter = document.querySelector('#inputStreetLetter');
const inputPostalCode = document.querySelector('#inputPostalCode');
const inputCity = document.querySelector('#inputCity');
const inputPhone = document.querySelector('#inputPhone');
const inputEmail = document.querySelector('#inputEmail');

const contactName = document.querySelector('#contactName');
const contactSecondName = document.querySelector('#contactSecondname');
const contactProfession = document.querySelector('#contactProfession');
const contactStreet = document.querySelector('#contactStreet');
const contactStreetNumber = document.querySelector('#contactStreetNumber');
const contactStreetLetter = document.querySelector('#contactStreetLetter');
const contactPostalCode = document.querySelector('#contactPostalCode');
const contactCity = document.querySelector('#contactCity');
const contactPhone = document.querySelector('#contactPhone');
const contactEmail = document.querySelector('#contactEmail');

// buttons
const contactFormButtonNext = document.querySelector('#contactFormButtonNext');

// Functions
const simpleCompletion = (input, result) => {
  if(input.value == ''){
    result.innerText = input.placeholder;
  } else {
    result.innerText = input.value;
  }
};

const colorFocus = (input, result) => {
  input.addEventListener('focusin', () => {
    result.style.color = 'crimson';
    header.style.border = '3px dotted lightskyblue';
  });
  input.addEventListener('focusout', () => {
    result.style.color = '';
    header.style.border = '';
  });
}

// Uzupełnij imię, nazwisko, zawód, ulicę, numer domu, opcjonalny numer lokalu, kod pocztowy, miejscowość, numer telefonu, adres e-mail
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  
  // Uzupełnij imię
  if(inputName.value == ''){
    contactName.innerText = 'Imię';
  } else {
    contactName.innerText = inputName.value;
  }

  // Uzupełnij nazwisko
  if(inputSecondName.value == ''){
    contactSecondName.innerText = 'Nazwisko';
  } else {
    contactSecondName.innerText = inputSecondName.value;
  }

  // Uzupełnij zawód
  if(inputProfession.value == ''){
    contactProfession.innerText = '';
  } else {
    contactProfession.innerText = inputProfession.value;
  }

  // Uzupełnij ulicę (using function)
  simpleCompletion(inputStreet, contactStreet);
  // Uzupełnij numer domu (using function)
  simpleCompletion(inputStreetNumber, contactStreetNumber);

  // Uzupełnij numer lokalu (w razie gdy nie uzupełniony to pozostawić puste)
  if(inputStreetLetter.value == ''){
    contactStreetLetter.innerText = '';
  } else {
    contactStreetLetter.innerText = inputStreetLetter.value;
  }

  // Uzupełnij kod pocztowy (using function)
  simpleCompletion(inputPostalCode, contactPostalCode);

  // Uzupełnij miejscowość (using function)
  simpleCompletion(inputCity, contactCity);

  // Uzupełnij numer telefonu (using function)
  simpleCompletion(inputPhone, contactPhone);

  // Uzupełnij adres e-mail (using function)
  simpleCompletion(inputEmail, contactEmail);

});

// Kolorowanie podglądów na focusie inputów
// Koloruj imię
colorFocus(inputName, contactName);

// Koloruj nazwisko 
colorFocus(inputSecondName, contactSecondName);

// Koloruj zawód
colorFocus(inputProfession, contactProfession);

// Koloruj ulicę
colorFocus(inputStreet, contactStreet);

// Koloruj numer domu
colorFocus(inputStreetNumber, contactStreetNumber);

// Koloruj numer lokalu
colorFocus(inputStreetLetter, contactStreetLetter);

// Koloruj kod pocztowy
colorFocus(inputPostalCode, contactPostalCode);

// Koloruj miejscowość
colorFocus(inputCity, contactCity);

// Koloruj numer telefonu
colorFocus(inputPhone, contactPhone);

// Koloruj adres e-mail
colorFocus(inputEmail, contactEmail);

// Załadowanie zdjęcia
const previewFile = () => {
  const preview = document.querySelector('#contactPhoto');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    //convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
};

// Przejście do następnego formularza
contactFormButtonNext.addEventListener('click', () => {
  contactForm.style.display = 'none';
  descriptionForm.style.display = 'block';
});