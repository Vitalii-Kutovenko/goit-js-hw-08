import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(e => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));
window.addEventListener('load', () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
      const { email, message } = JSON.parse(savedState);
      emailInput.value = email;
      messageInput.value = message;
    }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
