var defaultColor = document.getElementById("name").style.backgroundColor;

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
		changeColor("name", "red");
		return false;
	}
	
	var patt = new RegExp("([A-Z][A-Z]*)");
  	var res = patt.test(name);
	console.log(res);
	if(!res){
		changeColor("name", "red");
		return false;
	}
	changeColor("name", defaultColor);
	
	return true;
}

function checkEmail(){
	var email = document.getElementById("email").value;
	
	if (email.indexOf("@") == -1) {
    	console.log("Not a valid e-mail!");
		changeColor("email","red");
    	return false;
  	}
	
	var patt = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
  	var res = patt.test(email);
	console.log(res);
	if(!res){
		changeColor("email","red");
		return false;
	}
	
	changeColor("email", defaultColor);
	
	return true;	
}

function checkMessage(){
	var message = document.getElementById("message").value;
	
	if (message.length < 1 ) {
		console.log("The message is empty");
		console.log(message);
		changeColor("message", "red");
		return false;
  	}
	changeColor("message", defaultColor);
	
	return true;
}

function checkData() {
	var isNameCorrect = checkName();
	var isEmailCorrect = checkEmail();
	var isMessageCorrect = checkMessage();

	if(!isNameCorrect || !isEmailCorrect || !isMessageCorrect ){
		switchButton(false);
	}else{
    	switchButton(true);
	}
}

function displayMessage(){
	alert("You send a data");	
}

function changeColor(IDForChange ,nameOfColor){
	document.getElementById(IDForChange).style.backgroundColor = nameOfColor;	
}

