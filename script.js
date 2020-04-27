function checkData() {
  var email = document.getElementById("email").value.indexOf("@");
  var message = document.getElementById("message").value;
  var name = document.getElementById("name").value;
  submitOK = true;

  if (name.length < 1) {
    console.log("The name is empty");
    submitOK = false;
  } 

  if (message.length < 1 ) {
    console.log("The message is empty");
	console.log(message);
    submitOK = false;
  }

  if (email == -1) {
    console.log("Not a valid e-mail!");
    submitOK = false;
  }

  if (submitOK) {
    const button = document.getElementById('send');
	button.disabled = false;
  }else{
	const button = document.getElementById('send');
	button.disabled = true;
  }
	console.log(submitOK);
}