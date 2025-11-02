// card.js

// Get references
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

/** Demo check: only accept exactly this number (after removing spaces) */
function isCardNumberValid(number){
  return number === '1234123412341234';
}

/** Build a Date object for the expiry (end of month), returns true if not expired */
function isExpiryValid(mm, yy){
  // mm: 1-12, yy: two-digit like 24 -> 2024
  if (!/^\d{1,2}$/.test(mm) || !/^\d{2}$/.test(yy)) return false;
  const month = Number(mm);
  const year = Number(yy) + 2000;
  if (month < 1 || month > 12) return false;

  // expiry is last millisecond of the month
  const expiry = new Date(year, month, 0, 23, 59, 59, 999); // day 0 -> last day previous month -> so using month gives last day of that month
  const now = new Date();
  return expiry >= now;
}

function submitHandler(e){
  e.preventDefault();
  displayError('');
  let errors = [];

  // Name
  const name = cardHolderInput.value.trim();
  if (!name) errors.push('Cardholder name is required.');

  // Card number (allow spaces like "1234 1234 ...")
  const rawCard = cardNumberInput.value;
  const digitsOnly = rawCard.replace(/\s+/g, '');
  if (!/^\d{16}$/.test(digitsOnly)) {
    errors.push('Card number must be 16 digits.');
  } else if (!isCardNumberValid(digitsOnly)) {
    errors.push('Card number is not valid.');
  }

  // CVC
  if (!/^\d{3}$/.test(cvcInput.value.trim())) {
    errors.push('CVC must be 3 digits.');
  }

  // Expiration
  const mm = monthInput.value.trim();
  const yy = yearInput.value.trim();
  if (!isExpiryValid(mm, yy)) {
    errors.push('Expiration date is invalid or card has expired.');
  }

  if (errors.length) {
    displayError(errors.join(' '));
    return;
  }

  // Success: show confirmation and optionally reset form
  theForm.innerHTML = `
    <div class="success">
      <h2>Thank you for your purchase.</h2>
      <p>Payment processed for <strong>${name}</strong></p>
    </div>
  `;
}

// attach handler
theForm.addEventListener('submit', submitHandler);

/* Optional UX extras (not required, but nice):
   - auto-insert spaces while typing the card number
   - prevent non-digit input in numeric fields
*/
cardNumberInput.addEventListener('input', (e) => {
  // preserve caret roughly — simple approach
  let val = e.target.value.replace(/\D/g, '').slice(0,16);
  let spaced = val.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  e.target.value = spaced;
});
