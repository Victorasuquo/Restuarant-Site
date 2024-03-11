document.addEventListener('DOMContentLoaded', function() {
    // Signup Form
    const signupForm = document.querySelector('.signup form');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const userName = signupForm.querySelector('input[name="txt"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const phone = signupForm.querySelector('input[name="phone"]').value;
        const password = signupForm.querySelector('input[name="pswd"]').value;
        // Perform validation if needed
        if (!userName || !email || !phone || !password) {
            alert("Please fill in all fields");
            return;
        }
        // Example of validation for email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        // Send data to server for signup process
        const formData = new FormData();
        formData.append('username', userName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('password', password);
        fetch('signup.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle server response, such as displaying a success message or handling errors
            console.log(data);
        })
        .catch(error => {
            // Handle error, such as displaying an error message
            console.error('Error:', error);
        });
        // Reset form after submission
        signupForm.reset();
    });
    // Login Form
    const loginForm = document.querySelector('.login form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="pswd"]').value;
        // Perform validation if needed
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }
        // Send data to server for login process
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);// Handle server response, such as redirecting to a dashboard page or displaying an error message
        })
        .catch(error => {
            console.error('Error:', error);// Handle error, such as displaying an error message
        });
        loginForm.reset();  // Reset form after submission
    });
    // password show and hide
    const passwordInput = document.getElementById("passwordInput");
    const loginPasswordInput = document.getElementById("loginPasswordInput");
    const passwordShow = document.getElementById("passwordShow");
    const passwordHide = document.getElementById("passwordHide");
    const loginPasswordShow = document.getElementById("loginPasswordShow");
    const loginPasswordHide = document.getElementById("loginPasswordHide");
    passwordShow.addEventListener("click", function() {
        passwordInput.type = "password";
        passwordShow.style.display = "none";
        passwordHide.style.display = "block";
    });
    passwordHide.addEventListener("click", function() {
        passwordInput.type = "text";
        passwordHide.style.display = "none";
        passwordShow.style.display = "block";
    });
    loginPasswordShow.addEventListener("click", function() {
        loginPasswordInput.type = "password";
        loginPasswordShow.style.display = "none";
        loginPasswordHide.style.display = "block";
    });
    loginPasswordHide.addEventListener("click", function() {
        loginPasswordInput.type = "text";
        loginPasswordHide.style.display = "none";
        loginPasswordShow.style.display = "block";
    });
    //country phone
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    // Adjust styles or behaviors based on screen size
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 600) {
            // Changing the font size of register-txt if screen width is less than or equal to 600px
            const registerTxt = document.querySelector('.register-txt');
            registerTxt.style.fontSize = '40px';
        } else {
            // Reseting styles if screen width is greater than 600px
            const registerTxt = document.querySelector('.register-txt');
            registerTxt.style.fontSize = '50px';
        }
    });
});