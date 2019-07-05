// validate form

    // GETTING ALL INPUT TEXT FIELDS
    var cfname = document.forms["vForm"]["cfname"];
	var cemail = document.forms["vForm"]["cemail"];
	var clname = document.forms["vForm"]["clname"];



    // GETTING ALL ERROR OBJECTS
    var ctext_error = document.getElementById("ctext_error");
	var cemail_error = document.getElementById("cemail_error");
	var clname_error = document.getElementById("clname_error");

    // SETTING ALL EVENT LISTENERS
	cfname.addEventListener("blur", textVerify, true);
	cemail.addEventListener("blur", emailVerify, true);
	clname.addEventListener("blur", clnameVerify, true);


    	function Validate(){
		
		// VALIDATE fname
		if(cfname.value == ""){
			ctext_error.innerHTML = "First Name required"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			cfname.style.border = "1px solid red";
			
			return false;
		}

		

		// PASSWORD REQUIRED
		if (cemail.value == "") {
			cemail_error.innerHTML = "Email required"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			cemail.style.border = "1px solid red";
			
			return false;
		}

		if(clname.value == ""){
			clname_error.innerHTML = "Last Name required"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			clname.style.border = "1px solid red";

			return false;
		}

	}

    // ADD EVENT LISTENERS
	function textVerify(){
		if (cfname.value != "") {
			ctext_error.innerHTML = "";
			return true;
		}
	}
    function emailVerify(){
		if (cemail.value != "") {
			cemail_error.innerHTML = "";
			return true;
		}
	}
	function clnameVerify() {
		if (clname.value != "") {
			clname_error.innerHTML = "";
			return true;
		}
	}

	