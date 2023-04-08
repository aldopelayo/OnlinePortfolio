const hambagaButton = document.getElementById('hambaga')
const navList = document.getElementById('nav-list')


function toggleButton(){
    navList.classList.toggle('show')
}

hambagaButton.addEventListener('click',toggleButton)