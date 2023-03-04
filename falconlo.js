const btn = document.querySelector('#login');
const welcome = document.querySelector('.container h1');
const form = document.querySelector('.form');
const passwords = document.getElementById('pass');
const users = document.getElementById('user');

btn.addEventListener('click', e => {
    e.preventDefault();

    form.style.opacity = 0;
    welcome.style.transform = 'translateY(70px)';
})

btn.addEventListener('mouseover', () => {
    btn.style.color = 'white';
    btn.style.backgroundColor = 'black';
})

passwords.addEventListener('mouseover', () => {
    passwords.style.backgroundColor = 'black';
    passwords.style.color = 'white';
})

users.addEventListener('mouseover', () => {
    users.style.backgroundColor = 'black';
    users.style.color = 'white';
})