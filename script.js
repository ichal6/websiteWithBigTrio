function switchButton(status){
  var button = document.getElementById('send');
  if (status) {
	button.disabled = false;
  }else{
	button.disabled = true;
  }
}

function checkData() {
  var email = document.getElementById("email").value.indexOf("@");
  var message = document.getElementById("message").value;
  var name = document.getElementById("name").value;
  submitOK = true;

  var patt = new RegExp("([A-Z])\\w+");
  var res = patt.test(name);
	console.log(res);
	if(!res){
		switchButton(res);
		return;
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

  switchButton(submitOK);
	console.log(submitOK);
}

function displayMessage(){
	alert("You send a data");	
}

