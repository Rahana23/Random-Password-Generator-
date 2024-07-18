document.addEventListener('DOMContentLoaded', (event) => {
    const passwordBox = document.getElementById("password");
    const length = 16;
  
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()";
    const allCharacters = upperCase + lowerCase + numbers + specialCharacters;
  
    function generatePassword() {
      let password = "";
      password += upperCase[Math.floor(Math.random() * upperCase.length)];
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  
      while (password.length < length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
      }
      passwordBox.value = password;
    }
  
    window.generatePassword = generatePassword;
  });
  