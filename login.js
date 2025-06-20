document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const toggleFormButton = document.getElementById('toggleFormButton');
    const formTitle = document.getElementById('form-title');
    const submitButton = document.getElementById('submit-button');
    const emailField = document.getElementById('email-field');
    const confirmPasswordField = document.getElementById('confirm-password-field');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    let isLoginForm = true;
    

    toggleFormButton.addEventListener('click', function() {
        isLoginForm = !isLoginForm;
        
        if (isLoginForm) {
            formTitle.textContent = 'Вход';
            submitButton.textContent = 'Войти';
            toggleFormButton.textContent = 'Нет аккаунта? Зарегистрироваться';
            emailField.style.display = 'none';
            confirmPasswordField.style.display = 'none';
        } else {
            formTitle.textContent = 'Регистрация';
            submitButton.textContent = 'Зарегистрироваться';
            toggleFormButton.textContent = 'Уже есть аккаунт? Войти';
            emailField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
        }
    });
    
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (isLoginForm) {
    
            const username = usernameInput.value;
            const password = passwordInput.value;
            
       
            if (!username || !password) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }
            

            console.log('Вход с:', { username, password });
            

            window.location.href = 'calendar.html';
        } else {
           
            const email = document.getElementById('email').value;
            const username = usernameInput.value;
            const password = passwordInput.value;
            const confirmPassword = document.getElementById('confirm-password').value;
            

            if (!email || !username || !password || !confirmPassword) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            

            console.log('Регистрация:', { email, username, password });
            
   
            window.location.href = 'calendar.html';
        }
    });
    

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = '#E56B6F';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = '#87AFC7';
        });
    });
    

    checkAuth();
    
    function checkAuth() {
       
    }
});