const app = document.querySelector('#app');
function Tag(attrs = {}) {
  const { tag, className, id, textContent, placeholder } = attrs;
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (id) element.id = id;
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;

  return element;
}
const styles = ['red', 'green'];

const form = Tag({
  tag: 'form',
  className: 'form',
});

const emailInput = Tag({
  tag: 'input',
  className: 'input',
  id: 'email-input',
  placeholder: 'Email',
});

const passwordInput = Tag({
  tag: 'input',
  className: 'input',
  id: 'password-input',
  placeholder: 'Password',
});

form.append(
  emailInput,
  passwordInput,
  Tag({
    tag: 'button',
    className: 'button',
    id: 'submit-btn',
    textContent: 'Submit',
  })
);

app.append(form);

const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const btn = document.querySelector('#submit-btn');

email.addEventListener('input', (e) => {
  e.preventDefault();

  if (validateEmail(email)) {
    email.style.background = 'green';
  } else {
    email.style.background = 'red';
  }
});

password.addEventListener('input', (e) => {
  e.preventDefault();

  if (validatePassword(password)) {
    password.style.background = 'green';
  } else {
    password.style.background = 'red';
  }
});

btn.addEventListener('click', () => {
  if (validateEmail(email) && validatePassword(password)) {
    alert('Welcome to the 300$ dungeon');
  }
});

function validateEmail(email) {
  if (
    email.value.includes('@') &&
    email.value.indexOf('.') > email.value.indexOf('@') &&
    email.value.length >= 4
  ) {
    return true;
  } else {
    return false;
  }
}

function validatePassword(password) {
  if (
    password.value.length >= 5 &&
    /\d/.test(password.value) &&
    /[a-zA-Z]/.test(password.value)
  ) {
    return true;
  } else {
    return false;
  }
}
