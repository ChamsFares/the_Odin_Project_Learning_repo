document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const fields = ['email', 'country', 'zip', 'password', 'confirm-password'];

    const customValidators = {
        'email': (input) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(input.value)) {
                input.setCustomValidity('Please enter a valid email address.');
            } else {
                input.setCustomValidity('');
            }
        },
        'country': (input) => {
            if (input.value.trim() === '') {
                input.setCustomValidity('Please enter a country.');
            } else {
                input.setCustomValidity('');
            }
        },
        'zip': (input) => {
            const regex = /^\d{5}(-\d{4})?$/;
            if (!regex.test(input.value)) {
                input.setCustomValidity('Please enter a valid ZIP code (e.g., 12345 or 12345-6789).');
            } else {
                input.setCustomValidity('');
            }
        },
        'password': (input) => {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regex.test(input.value)) {
                input.setCustomValidity('Password must be at least 8 characters long and contain at least one letter and one number.');
            } else {
                input.setCustomValidity('');
            }
        },
        'confirm-password': (input) => {
            const password = document.getElementById('password').value;
            if (input.value !== password) {
                input.setCustomValidity('Passwords do not match.');
            } else {
                input.setCustomValidity('');
            }
        }
    };

    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(`${field}-error`);

        input.addEventListener('input', () => {
            if (customValidators[field]) {
                customValidators[field](input);
            }
            input.checkValidity();
        });

        input.addEventListener('invalid', () => {
            error.textContent = input.validationMessage;
            input.classList.add('invalid');
            input.classList.remove('valid');
        });

        input.addEventListener('blur', () => {
            if (input.checkValidity()) {
                error.textContent = '';
                input.classList.add('valid');
                input.classList.remove('invalid');
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
            alert('High five! Form submitted successfully!');
        } else {
            form.reportValidity();
        }
    });
});