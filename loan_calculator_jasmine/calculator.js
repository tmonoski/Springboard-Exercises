window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// Defaults
const AMOUNT = 1000
const TERM = 10
const RATE = 4.5

// From MDN. Used to convert monthly payment into USD
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = AMOUNT;
  document.getElementById("loan-years").value = TERM;
  document.getElementById("loan-rate").value = RATE;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();

  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// P×i1−(1+i)^−n
function calculateMonthlyPayment(values) {
  const n = values.years * 12;
  const i = values.rate / 12 / 100;

  let payment = (values.amount * i) / (1 - ((1+i)**(n * -1)));
  return numberFormat.format(payment); 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');

  monthlyPayment.innerText = monthly;
}
