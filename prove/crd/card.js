
const theForm = document.querySelector('#checkoutForm');
const cardHolderInput = document.querySelector('#cardHolder');
const cardNumberInput = document.querySelector('#creditCardNumber');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc');
const errorsBox = document.querySelector('.errors');

function displayError(msg){
  errorsBox.textContent = msg;
  if(msg) errorsBox.style.color = 'crimson';
}

function isCardNumberValid(number){
  return number === '1234123412341234';
}

function isExpiryValid(mm, yy){
  if (!/^\d{1,2}$/.test(mm) || !/^\d{2}$/.test(yy)) return false;
  const month = Number(mm);
  const year = Number(yy) + 2000;
  if (month < 1 || month > 12) return false;

  const expiry = new Date(year, month, 0, 23, 59, 59, 999); 
  const now = new Date();
  return expiry >= now;
}

function submitHandler(e){
  e.preventDefault();
  displayError('');
  let errors = [];

  const name = cardHolderInput.value.trim();
  if (!name) errors.push('Cardholder name is required.');

  const rawCard = cardNumberInput.value;
  const digitsOnly = rawCard.replace(/\s+/g, '');
  if (!/^\d{16}$/.test(digitsOnly)) {
    errors.push('Card number must be 16 digits.');
  } else if (!isCardNumberValid(digitsOnly)) {
    errors.push('Card number is not valid.');
  }

  if (!/^\d{3}$/.test(cvcInput.value.trim())) {
    errors.push('CVC must be 3 digits.');
  }

  const mm = monthInput.value.trim();
  const yy = yearInput.value.trim();
  if (!isExpiryValid(mm, yy)) {
    errors.push('Expiration date is invalid or card has expired.');
  }

  if (errors.length) {
    displayError(errors.join(' '));
    return;
  }

  theForm.innerHTML = `
    <div class="success">
      <h2>Thank you for your purchase.</h2>
      <p>Payment processed for <strong>${name}</strong></p>
    </div>
  `;
}

theForm.addEventListener('submit', submitHandler);


cardNumberInput.addEventListener('input', (e) => {
  let val = e.target.value.replace(/\D/g, '').slice(0,16);
  let spaced = val.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  e.target.value = spaced;
});
