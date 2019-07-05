// validate form

    // GETTING ALL INPUT TEXT FIELDS
    var email = document.forms["vForm"]["email"];
	var password = document.forms["vForm"]["password"];

    // GETTING ALL ERROR OBJECTS
    var email_error = document.getElementById("email_error");
	var password_error = document.getElementById("password_error");


    // SETTING ALL EVENT LISTENERS
	email.addEventListener("blur", emailVerify, true);
	password.addEventListener("blur", passwordVerify, true);


    	function Validate(){
		
		// VALIDATE EMAIL
		if(email.value == ""){
			email_error.innerHTML = "Email required"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			email.style.border = "1px solid red";
			
			return false;
		}

		

		// PASSWORD REQUIRED
		if (password.value == "") {
			password_error.innerHTML = "Password required"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			password.style.border = "1px solid red";
			
			return false;
		}
	}

    // ADD EVENT LISTENERS
	function emailVerify(){
		if (email.value != "") {
			email_error.innerHTML = "";
			return true;
		}
	}
    function passwordVerify(){
		if (password.value != "") {
			password_error.innerHTML = "";
			return true;
		}
	}

	