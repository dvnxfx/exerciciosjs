function activateDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
}

function activateLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}


document.body.classList.add('light-mode');