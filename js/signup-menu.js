document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const firstName = document.querySelector('input[name="firstName"]').value;
      const lastName = document.querySelector('input[name="lastName"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
      const password = document.querySelector('input[name="password"]').value;
      const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
  
      // Simple validation
      if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      // Additional validation logic can be added here
  
      // If all validation passes, you can submit the form
      form.submit();
    });
  });
  