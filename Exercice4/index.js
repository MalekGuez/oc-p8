document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const paragraph = document.createElement('p');
    document.body.appendChild(paragraph);

    button.addEventListener('click', () => {
        paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    });
});