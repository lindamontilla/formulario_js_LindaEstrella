function validarSignIn(event)
{
	event.preventDefault();
	var submit = true;
	var email = document.getElementById("email");
	var pass = document.getElementById("pass");
	var signin = document.getElementById("signin")
	var expRegEmail= /[A-Za-z0-9._-]+@[A-Za-z0-9_-]{2,}[.][A-Za-z0-9_.-]{2,}/;
	var expRegPass = /[A-Za-z0-9]{8,}/;


	if (!email.value)
		{
		alert("Enter your email")
		submit=false;
		email.focus();
		}
	else if(!expRegEmail.exec(email.value))
		{
		alert("Enter a valid Email Address")
		submit=false;
		email.focus();
		}
	else if(!pass.value)
		{
		alert("Enter your password")
		submit=false;
		pass.focus();
		}
	else if(!expRegPass.exec(pass.value))
		{
		alert("Enter a valid password")
		submit=false;
		pass.focus();
		}
	else if
		{
		alert("You are sign in")
		}	
}



var botonSignin = document.getElementById("submit");
if (botonSignin !== null) 
{
	botonSignin.addEventListener('click', validarSignIn);
}




function validarRegistro()
{
	var register=true;
	var name = document.getElementById("name");
	var	lastname = document.getElementById("lastname");
	var email = document.getElementById("email");
	var remail = document.getElementById("remail");
	var pass = document.getElementById("pass");
	var repass = document.getElementById("repass");
	var phone = document.getElementById("phone");
	var country = document.getElementById("country")
	var registry = document.getElementById("registry")
	var expRegName = /[A-Za-z ÑñÁáÉéÍíÓóÚú][^0-9_]{2,}/;
	var expRegLastname = /[A-Za-z ÑñÁáÉéÍíÓóÚú][^0-9_]{2,}/;
	var expRegEmail = /[A-Za-z0-9._-]+@[A-Za-z0-9_-]{2,}[.][A-Za-z0-9_.-]{2,}/;
	var expRegRemail = /[A-Za-z0-9._-]+@[A-Za-z0-9_-]{2,}[.][A-Za-z0-9_.-]{2,}/;
	var expRegPass = /[A-Za-z0-9]{8,}/;
	var expRegRepass = /[A-Za-z0-9]{8,}/;
	var expRegPhone = /[(][0-9]{3,}[)][0-9]{7,}/;

		if (!name.value)
		{
			alert("Enter your name")
			register=false;
			name.focus();
		}
		else if(!expRegName.exec(name.value))
		{
			alert("Enter a valid name")
			register=false;
			name.focus();
		}
		else if(!lastname.value)
		{
			alert("Enter your lastname")
			register=false;
			lastname.focus()
		}
		else if(!expRegLastname.exec(lastname.value))
		{
			alert("Enter a valid lastname")
			register=false;
			lastname.focus();
		}
		else if(!email.value)
		{
			alert("Enter your email address")
			register=false;
			email.focus()
		}
		else if(!expRegEmail.exec(email.value))
		{
			alert("Enter a valid email address")
			register=false;
			email.focus();
		}
		else if((email.value) != (remail.value))
		{
			alert("Email address and confirm email address are diferent")
			register=false;
			remail.focus()
		}
		else if(!pass.value)
		{
			alert("Enter your password")
			register=false;
			pass.focus()
		}
		else if(!expRegPass.exec(pass.value))
		{
			alert("Enter a valid password")
			register=false;
			pass.focus();
		}
		else if((pass.value)!=(repass.value))
		{
			alert("Password and confirm password are diferent")
			register=false;
			repass.focus()
		}
		else if(!phone.value)
		{
			alert("Enter your phone number")
			register=false;
			phone.focus()
		}
		else if(!expRegPhone.exec(phone.value))
		{
			alert("Enter a valid phone number")
			register=false;
			phone.focus();
		}
		else if(country.value=="select")
		{
			alert("Select your country")
			register=false;
			country.focus();
		}

}

var botonRegister = document.getElementById("register");
if (botonRegister !== null) 
{
	botonRegister.addEventListener('click', validarRegistro);
}





function validarContacto(event)
{
	event.preventDefault();
	var contact=true;
	var name = document.getElementById("name");
	var	lastname = document.getElementById("lastname");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	var myquestion = document.getElementById("myquestion");
	var contacus	= document.getElementById("contacus");
	var expRegName = /[A-Za-z ÑñÁáÉéÍíÓóÚú][^0-9_]{2,}/;
	var expRegLastname = /[A-Za-z ÑñÁáÉéÍíÓóÚú][^0-9_]{2,}/;
	var expRegEmail = /[A-Za-z0-9._-]+@[A-Za-z0-9_-]{2,}[.][A-Za-z0-9_.-]{2,}/;
	var expRegPhone = /[(][0-9]{3,}[)][0-9]{7,}/;

		if (!name.value)
		{
			alert("Enter your name")
			register=false;
			name.focus();
		}
		else if(!expRegName.exec(name.value))
		{
			alert("Enter a valid name")
			register=false;
			name.focus();
		}
		else if(!lastname.value)
		{
			alert("Enter your lastname")
			register=false;
			lastname.focus();
		}
		else if(!expRegLastname.exec(lastname.value))
		{
			alert("Enter a valid lastname")
			register=false;
			lastname.focus();
		}
		else if(!email.value)
		{
			alert("Enter your email address")
			register=false;
			email.focus();
		}
		else if(!expRegEmail.exec(email.value))
		{
			alert("Enter a valid email address")
			register=false;
			email.focus();
		}
		else if(!phone.value)
		{
			alert("Enter your phone number")
			register=false;
			phone.focus();
		}
		else if(!expRegPhone.exec(phone.value))
		{
			alert("Enter a valid phone number")
			register=false;
			phone.focus();
		}
		else if(myquestion.value=="select")
		{
			alert("Select your question")
			register=false;
			myquestion.focus();
		}

}

var botonContact = document.getElementById("contact");
if (botonContact !== null) 
{
	botonContact.addEventListener('click', validarContacto);
}
