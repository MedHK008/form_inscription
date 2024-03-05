

var valid_pass=0;
document.addEventListener("DOMContentLoaded", function () {
    var mail=document.getElementById("mail");
    var emailFeedback=document.getElementById("emailFeedback");
    var password=document.getElementById("password");
    var passwordFeedback=document.getElementById("passwordFeedback");
    var form = document.getElementById("loginForm");

    mail.addEventListener("input", function () {
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
        if(regex.test(mail.value)) {
            emailFeedback.innerHTML = "Email est valide";
            emailFeedback.className = "valid";
        } else {
            emailFeedback.innerHTML = "Email est non  invalide";
            emailFeedback.className = "invalid";
            
        }
        if (mail.value == "") {
            emailFeedback.innerHTML = "Email est obligatoire";
            emailFeedback.className = "invalid";
        }
    });

    password.addEventListener("input", function () {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
    

        if(password.value.length<3) 
        {
            passwordFeedback.innerHTML = "password doit d'être de longueur supérieur a 3!!!";
            passwordFeedback.className = "invalid";
            valid_pass=0;
        }
        else if(!/[A-Z]/.test(password.value))
        {
            passwordFeedback.innerHTML = "password doit contenir au moins une majuscule!!!";
            passwordFeedback.className = "invalid";
            valid_pass=0;
        }
        else if(!/[0-9]/.test(password.value))
        {
            passwordFeedback.innerHTML = "password doit contenir au moins un chiffre!!!";
            passwordFeedback.className = "invalid";
            valid_pass=0;
        }
        else if(!/[a-z]/.test(password.value))
        {
            passwordFeedback.innerHTML = "password doit contenir au moins une miniscule!!!";
            passwordFeedback.className = "invalid";
            valid_pass=0;
        }
        else{
            passwordFeedback.innerHTML = "password est valide";
            passwordFeedback.className = "valid";
            valid_pass=1;
        }
        // if(regex.test(password.value) && password.value.length > 3 ) 
        // {
        //     passwordFeedback.innerHTML = "password est valide";
        //     passwordFeedback.className = "valid";
        // } 
        // else 
        // {
        //     passwordFeedback.innerHTML = "password est non valide";
        //     passwordFeedback.className = "invalid";
        // }
        // if (password.value == "") {
        //     passwordFeedback.innerHTML = "password est obligatoire";
        //     passwordFeedback.className = "invalid";
        // }
    });
    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            alert("Please enter a valid email and password then try again");
            event.preventDefault();
        }
    });
    function validateForm() {
        var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(mail.value);
        return emailValid && valid_pass;
    }
});
