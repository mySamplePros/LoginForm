const form = document.getElementById('form');

const username = document.getElementById('username');
const password = document.getElementById('password');

const error_username = document.getElementById('error_username');
const error_password = document.getElementById('error_password');

form.addEventListener("submit",(e)=>
    {   
        
        if(username.value === '' || username.value==null){
            e.preventDefault();
            error_username.innerHTML = "You have not entered username";
        }
        else{
            error_username.innerHTML = "";
        }

        if(password.value.length <= 8){
            e.preventDefault();
            error_password.innerHTML = "Password must contain more than 8 characters";
        }
        else{
            error_password.innerHTML ="";
        }
    })
