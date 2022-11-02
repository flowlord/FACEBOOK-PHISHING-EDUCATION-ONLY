

var email = document.getElementById("email");
var password = document.getElementById("pass");

console.log(email);
console.log(password);


Email.send({
    SecureToken : "secret",
    To : 'xxx',
    From : "xxx",
    Subject : "sujet",
    Body : "body"
}).then(
  message => alert(message)
);




