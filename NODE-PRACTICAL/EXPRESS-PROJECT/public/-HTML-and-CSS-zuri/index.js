/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validate_password() {
 
            var pass = document.getElementById('pass').value;
            var confirm_pass = document.getElementById('confirm_pass').value;
            if (pass != confirm_pass) {
                document.getElementById('wrong_pass_alert').style.color = 'red';
                document.getElementById('wrong_pass_alert').innerHTML
                  = '☒ Use same password';
                document.getElementById('create').disabled = true;
                document.getElementById('create').style.opacity = (0.4);
            } else {
                document.getElementById('wrong_pass_alert').style.color = 'green';
                document.getElementById('wrong_pass_alert').innerHTML =
                    '🗹 Password Matched';
                document.getElementById('create').disabled = false;
                document.getElementById('create').style.opacity = (1);
            }
        }


function wrong_pass_alert() {
          if (document.getElementById('pass').value != "" &&
              document.getElementById('confirm_pass').value != "") {
              alert("Your response is submitted");
        } else {
                alert("Please fill all the fields");
            }
}


// function validateForm() {
//                 var name =
//                     document.forms.RegForm.Name.value;
//                 var email =
//                     document.forms.RegForm.EMail.value;
//                 var phone =
//                     document.forms.RegForm.Telephone.value;
//                 var what =
//                     document.forms.RegForm.Subject.value;
//                 var password =
//                     document.forms.RegForm.Password.value;
//                 var address =
//                     document.forms.RegForm.Address.value;
//                 var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
//                 var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
//                 var regName = /\d+$/g;                                    // Javascript reGex for Name validation
 
//                 if (name == "" || regName.test(name)) {
//                     window.alert("Please enter your name properly.");
//                     name.focus();
//                     return false;
//                 }

//                 if (address == "") {
//                     window.alert("Please enter your address.");
//                     address.focus();
//                     return false;
//                 }
                 
//                 if (email == "" || !regEmail.test(email)) {
//                     window.alert("Please enter a valid e-mail address.");
//                     email.focus();
//                     return false;
//                 }
                  
//                 if (password == "") {
//                     alert("Please enter your password");
//                     password.focus();
//                     return false;
//                 }
//                 if(password.length <6){
//                     alert("Password should be atleast 6 character long");
//                     password.focus();
//                     return false;
 
//                 }
//                 if (phone == "" || !regPhone.test(phone)) {
//                     alert("Please enter valid phone number.");
//                     phone.focus();
//                     return false;
//                 }
 
//                 if (what.selectedIndex == -1) {
//                     alert("Please enter your course.");
//                     what.focus();
//                     return false;
//                 }
 
//                 return true;
// }