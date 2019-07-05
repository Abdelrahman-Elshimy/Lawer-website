// validate form

    // GETTING ALL INPUT TEXT FIELDS
    var cfname = document.forms["vForm"]["cfname"];
	var cemail = document.forms["vForm"]["cemail"];
    var clname = document.forms["vForm"]["clname"];
    var rpassword = document.forms["vForm"]["rpassword"];
    var cpassword = document.forms["vForm"]["confpassword"];



    // GETTING ALL ERROR OBJECTS
    var ctext_error = document.getElementById("ctext_error");
	var cemail_error = document.getElementById("cemail_error");
    var clname_error = document.getElementById("clname_error");
    var cpassword_error = document.getElementById("cpassword_error");
    var cpasswordc_error = document.getElementById("cpasswordc_error");


    // SETTING ALL EVENT LISTENERS
	cfname.addEventListener("blur", textVerify, true);
	cemail.addEventListener("blur", emailVerify, true);
    clname.addEventListener("blur", clnameVerify, true);
    rpassword.addEventListener("blur", rpasswordVerify, true);
    cpassword.addEventListener("blur", cpasswordVerify, true);


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
        if(rpassword.value == ""){
			cpassword_error.innerHTML = "Password required"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			rpassword.style.border = "1px solid red";

			return false;
        }
        

        if(cpassword.value !== rpassword.value)
            {
                cpasswordc_error.innerHTML = "Two password Not Match"+ 
            "<img src='images/icons/sub-icons/9.png'>";
			cpassword.style.border = "1px solid red";

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
    
    function rpasswordVerify() {
		if (rpassword.value != "") {
			cpassword_error.innerHTML = "";
			return true;
		}
    }
    
    function cpasswordVerify()
    {
        if (cpassword.value != "") {
			cpasswordc_error.innerHTML = "";
			return true;
		}
    }

	