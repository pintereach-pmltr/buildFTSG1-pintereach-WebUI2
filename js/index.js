class Dropdown {
    constructor(menu) {
        this.menu = menu;

        this.button = this.menu.querySelector('.dropdown-button');

        this.content = this.menu.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => {
            this.toggleContent()
        })
    }

    toggleContent() {
        this.content.classList.toggle('hidden');
    }
}

let dropdown = document.querySelectorAll('.dropdown-menu').forEach(dropdown => new Dropdown(dropdown));

let title = document.querySelector('.logo h1');

title.addEventListener('mouseenter', () => {
    title.textContent = 'The Ultimate Article Organizer';
    title.style.color = '#EDF2F4'
})

title.addEventListener('mouseleave', () => {
    title.textContent = 'Pintereach';
    title.style.color = '#2B2D42'
})