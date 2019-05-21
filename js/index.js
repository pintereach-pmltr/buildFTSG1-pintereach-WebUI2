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
    document.querySelector('.fa-bookmark').style.color = '#EDF2F4'
})

title.addEventListener('mouseleave', () => {
    title.textContent = 'Pintereach';
    title.style.color = '#2B2D42'
    document.querySelector('.fa-bookmark').style.color = '#2B2D42'
})

class Member {
    constructor(member) {
        this.member = member;

        this.button = member.querySelector('.accordion');

        this.panel = member.querySelector('.panel');

        this.button.addEventListener('click', () => this.expandPanel())
    }

    expandPanel() {
        (this.panel.style.display === 'block') ? this.panel.style.display = 'none' : this.panel.style.display = 'block';

        this.button.classList.toggle('active');
    }
}

const members = document.querySelectorAll('.person');

members.forEach(member => {
    const individualMember = new Member(member)
})