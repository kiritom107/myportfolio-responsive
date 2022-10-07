const Button = document.getElementById('btn')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

Button.addEventListener('click', toggleButton)