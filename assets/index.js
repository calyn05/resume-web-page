const showMenu =  (toggleId, navId) => {
    const toggle = document.getElementById('nav-toggle'),
    nav = document.getElementById('nav-list')

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-list')

const navLink = document.querySelectorAll('.nav-list > li')

function linkAction() {
    const navMenu = document.getElementById('nav-list')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll top

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');

    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// Dark/light mode

const themeBtn = document.getElementById('change-theme__btn')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// previously user selected

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtain the current theme

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](dark-theme);
    themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove']('icon-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected--icon', getCurrentIcon())
})