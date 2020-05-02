function switchButton(status){
  var button = document.getElementById('send');
  if (status) {
	button.disabled = false;
  }else{
	button.disabled = true;
  }
}

function checkName(){
	var submitOK = true;
	var name = document.getElementById("name").value;
	const maxLength = 20;
	
	if(name.length > maxLength){
		return false;
	}
	
	var patt = new RegExp("([A-Z][A-Z]*)");
  	var res = patt.test(name);
	console.log(res);
	if(!res){
		return false;
	}
	return true;
}

function checkEmail(){
	var email = document.getElementById("email").value;
	
	if (email.indexOf("@") == -1) {
    	console.log("Not a valid e-mail!");
    	return false;
  	}
	
	var patt = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
  	var res = patt.test(email);
	console.log(res);
	if(!res){
		return false;
	}
	
	return true;	
}

function checkMessage(){
	var message = document.getElementById("message").value;
	
	if (message.length < 1 ) {
		console.log("The message is empty");
		console.log(message);
		return false;
  	}
	return true;
}

function checkData() {
	var submitOK = checkName();
	if(!submitOK){
		switchButton(submitOK);
		return;	
	}
	
	submitOK = checkEmail();
	if(!submitOK){
		switchButton(submitOK);
		return;	
	}
	
	submitOK = checkMessage();
	if(!submitOK){
		switchButton(submitOK);
		return;	
	}

    switchButton(submitOK);
	console.log(submitOK);
}

function displayMessage(){
	alert("You send a data");	
}

