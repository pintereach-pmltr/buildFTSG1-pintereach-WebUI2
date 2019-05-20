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