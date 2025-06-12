document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');

    const correctPassword = '05062025'; 
    const redirectToUrl = 'pagina_principal.html'; 

    loginButton.addEventListener('click', () => {
        checkPassword();
    });

    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    function checkPassword() {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            errorMessage.textContent = ''; 
            window.location.href = redirectToUrl; 
        } else {
            errorMessage.textContent = 'Senha incorreta. Tente novamente!';
            passwordInput.value = ''; 
            passwordInput.focus(); 
        }
    }
});