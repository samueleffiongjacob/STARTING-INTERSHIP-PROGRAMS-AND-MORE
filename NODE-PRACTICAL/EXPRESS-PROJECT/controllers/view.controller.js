const path = require('path');


function home(req,res) {
	// body...
	res.render('index',{
		title: "SAMUEL EFFIONG Home",
		caption0: "About",
		caption: "About",
		caption1: "Contact",
		caption2: "Register",
		caption3: "Login",
		header: "ABOUT ME",
		footer : "SAMUEL EFFIONG FOR ZURI TEAM",
		
	})
}

function Login(req,res) {
	// body...
	res.render('login', {
		title: "SAMUEL EFFIONG Login",
		caption: "Register",
		caption1 : "Login",
		caption2 : "welcome back !",
		caption3 : "Login here",
		caption4 : "Email",
		caption5 : "Password",
		caption6 : "Remember me",
		caption7 : "If don't have An Account click Register",
		caption8 : "Sign In",
		footer : "SAMUEL EFFIONG FOR ZURI TEAM",
	})
}

function Contact(req,res) {
	// body...
	res.render('contact', {
		title: "SAMUEL EFFIONG Contact",
		caption: "About",
		caption1 : "Contact",
		caption2: "Register",
		caption3 : " Login",
		header : " TALK TO ME",
		caption4 : "NAME",
		caption5 : "EMAIL",
		caption6 : "Enter message below",
		caption7 : "SUBMIT",
		footer : "SAMUEL EFFIONG FOR ZURI TEAM",
	})
}

function Register(req,res) {
	// body...
	res.render('register', {
		title: "SAMUEL EFFIONG Register",
		caption: "Register",
		caption1: "Login",
		header: " WELCOME TO OUR REGISTRAION PAGE",
		header1: "First Name",
		caption2 : " Last Name",
 		caption3: " Phone",
		caption4 : "Select Your Gender",
		caption5 : "Country",
		caption6 : "State/province",
		caption7 : "Email",
		caption8 : "password",
		caption9 : "Confirm password",
		option : "Select Your Gender e.g: Male",
		option1 : "Male",
		option2 : "Female",
		option3 : "Others",
		footer : "SAMUEL EFFIONG FOR ZURI TEAM",

	})
}
module.exports = {
	home,
	Login,
	Contact,
	Register,
}