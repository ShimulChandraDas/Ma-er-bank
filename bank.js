document.getElementById('login-submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;

    //get user password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;


    if (userEmail == 'abc@def.com' && userPassword == 'bolod') {
        window.location.href = 'banking.html';
    }
})
