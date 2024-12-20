const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const termsCheckbox = document.getElementById('terms');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = emailInput.value;
    if (!emailValue.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    const numberValue = numberInput.value;
    if (!/^\d{10}$/.test(numberValue)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    if (!termsCheckbox.checked) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    alert('Form submitted successfully!');
    form.submit();
});

document.getElementById('reset').addEventListener('click', function(event) {
    event.preventDefault();
    form.reset();
});
