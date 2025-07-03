function validateForm() {
  let name = document.forms["myForm"]["username"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}
