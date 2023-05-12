Array.from(document.querySelectorAll('.navigation-button')).forEach(button => {
    button.onclick = () => {
        button.parentElement.parentElement.classList.toggle('change');
    }
});