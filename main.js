const app = document.querySelector('#app');
function Tag(attrs = {}) {
  const { tag, className, id, textContent, placeholder, src } = attrs;
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (id) element.id = id;
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (src) element.src = src;

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
const imageValid = Tag({
  tag: 'img',
  className: 'img-valid',
  id: 'img',
  src: 'https://media.tenor.com/DXv8UHVPtaIAAAAd/billy-herrington-drinks-beer-billy-herrington.gif',
});
const imageInvalid = Tag({
  tag: 'img',
  className: 'img-invalid',
  id: 'img-invalid',
  src: 'https://i.kym-cdn.com/photos/images/newsfeed/001/344/529/1b2.gif',
});

form.append(
  emailInput,
  passwordInput,
  imageValid,
  imageInvalid,
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
const img = document.querySelector('#img');
const imgNoAcces = document.querySelector('#img-invalid');

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

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateEmail(email) && validatePassword(password)) {
    alert('Welcome to the 300$ dungeon');

    img.style.display = 'flex';
  }
  if (!validateEmail(email) && !validatePassword(password)) {
    alert("You don't have access! Go away!");

    imgNoAcces.style.display = 'flex';
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
