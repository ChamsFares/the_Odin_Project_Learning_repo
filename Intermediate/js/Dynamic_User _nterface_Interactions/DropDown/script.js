class Dropdown {
    constructor(element) {
        this.dropdown = element;
        this.button = this.dropdown.querySelector('.dropdown-button');
        this.content = this.dropdown.querySelector('.dropdown-content');
        this.trigger = this.dropdown.dataset.trigger || 'click';

        this.addEventListeners();
    }

    addEventListeners() {
        if (this.trigger === 'click') {
            this.button.addEventListener('click', () => this.toggleMenu());
        } else if (this.trigger === 'hover') {
            this.dropdown.addEventListener('mouseenter', () => this.showMenu());
            this.dropdown.addEventListener('mouseleave', () => this.hideMenu());
        }
    }

    toggleMenu() {
        this.content.classList.toggle('visible');
    }

    showMenu() {
        this.content.classList.add('visible');
    }

    hideMenu() {
        this.content.classList.remove('visible');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => new Dropdown(dropdown));
})