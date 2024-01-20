function validateForm() {
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Reset error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  // Validate name
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    return false;
  }

  // Validate password
  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Password is required";
    return false;
  }
  // If all validations pass, the form will be submitted
  return true;
}
