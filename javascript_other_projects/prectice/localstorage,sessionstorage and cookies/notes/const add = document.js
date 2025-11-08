const add = document.querySelector('#add-btn');
const formContainer = document.querySelector('.form-container');
const close = document.querySelector('#close');
const form = document.querySelector('form');
const imageUrlInput = document.querySelector('#imageUrl');
const fullNameInput = document.querySelector('#fullName');
const homeTownInput = document.querySelector('#homeTown');
const purposeInput = document.querySelector('#purpose');
const categoryRadios = document.querySelectorAll('input[name="category"]');

add.addEventListener('click', () => {
  formContainer.style.display = 'block';
  document.querySelector('.card-display').style.display = 'none';
});

close.addEventListener('click', () => {
  formContainer.style.display = 'none';
  document.querySelector('.card-display').style.display = 'flex';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const regex = {
    url: /^(https?:\/\/)[^\s$.?#].[^\s]*$/i,
    name: /^[A-Za-z\s]{3,50}$/,
    hometown: /^[A-Za-z\s.\-]{2,50}$/,
    purpose: /^[A-Za-z0-9\s.,'"!?-]{5,200}$/
  };

  const fields = [
    { input: imageUrlInput, regex: regex.url, error: '.URL-error', msg: 'URL is incorrect' },
    { input: fullNameInput, regex: regex.name, error: '.name-error', msg: 'Name is incorrect' },
    { input: homeTownInput, regex: regex.hometown, error: '.home-error', msg: 'Home Town is incorrect' },
    { input: purposeInput, regex: regex.purpose, error: '.purpose-error', msg: 'Purpose is incorrect' }
  ];

  let valid = true;

  fields.forEach(({ input, regex, error, msg }) => {
    const errorEl = document.querySelector(error);
    if (!input.value.trim()) {
      errorEl.textContent = 'Please fill out this field';
      errorEl.style.color = 'red';
      input.style.border = '1px solid red';
      valid = false;
    } else if (!regex.test(input.value)) {
      errorEl.textContent = msg;
      errorEl.style.color = 'red';
      input.style.border = '1px solid red';
      valid = false;
    } else {
      errorEl.textContent = '';
      input.style.border = '1px solid #e0e0e0';
    }
  });

  // radio validation
  const radioError = document.querySelector('.redio-error');
  const categorySelected = [...categoryRadios].some(r => r.checked);

  if (!categorySelected) {
    radioError.textContent = 'Please select a category';
    radioError.style.color = 'red';
    valid = false;
  } else {
    radioError.textContent = '';
  }

  if (!valid) return;

  // success
  console.log('Form submitted successfully');
});
