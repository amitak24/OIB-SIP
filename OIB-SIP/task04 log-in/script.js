function register() {
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
  
    if (regUsername && regPassword) {
      // Hash the password using SHA-256
      var hashedPassword = CryptoJS.SHA256(regPassword).toString(CryptoJS.enc.Hex);
  
      // Store hashed credentials in localStorage
      localStorage.setItem("username", regUsername);
      localStorage.setItem("password", hashedPassword);
  
      // Display login form
      showLoginForm();
    } else {
      alert("Both username and password are required.");
    }
  }
  
  function login() {
    var storedUsername = localStorage.getItem("username");
    var storedPasswordHash = localStorage.getItem("password");
  
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;
  
    // Hash the entered password for comparison
    var enteredPasswordHash = CryptoJS.SHA256(loginPassword).toString(CryptoJS.enc.Hex);
  
    // Check if the entered credentials match the stored credentials
    if (loginUsername === storedUsername && enteredPasswordHash === storedPasswordHash) {
      alert("Login successful!");
      window.location.href = "todo.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
  }
  