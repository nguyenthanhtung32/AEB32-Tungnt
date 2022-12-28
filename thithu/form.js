function handleLogin() {
  let inputUser = document.getElementById("inputUser").value;
  let inputPass = document.getElementById("inputPassword").value;
  console.log(inputUser, inputPass);
  if (
    inputUser.toLowerCase() === "aptech" &&
    inputPass.toLowerCase() === "aptech"
  ) {
    alert("Login Success !");
    window.location.href = `./list.html?islogin=true`;
  } else {
    alert("Login Fail !");
  }
}
