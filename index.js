//Contact form
const sendButton = document.getElementById("js_send");

function sendEmail() {
  const input_name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message_raw =document.getElementById("message").value;
  function f_message(name, email, message) { 
    return `
    Name: ${name}\n
    Email: ${email}\n
    ${message}`}
  sendButton.value='Sending…';
  sendButton.disabled=true;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shubhanshurana2@gmail.com",
    Password: "6367D517209F4021AAFDCBE8D20860A74F87",
    To: 'pooja251012@gmail.com',
    From: "shubhanshurana2@gmail.com",
    Subject: input_name+' wants to talk to you',
    Body: f_message(input_name, email, message_raw),
  })
    .then(function (message) {
      sendButton.disabled=true;
      alert('Message Sent 👍')
      sendButton.value='Sent';
      console.log(message);
    });
  }

sendButton.onclick = function() {
  sendEmail();
 }