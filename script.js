let span = document.getElementsByTagName('span')
function passCheck(data){
    const lowercase = new RegExp ('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
    const eightChar = new RegExp ('(?=.{8,})');
    var passClass = document.getElementsByClassName('password-check')

     if (eightChar.test(data)){
        passClass[0].style.color = "green";
     }else{
        passClass[0].style.color = "grey";
     }

if(lowercase.test(data)){
    passClass[1].style.color = "green";
}else{
   passClass[1].style.color = "grey";
}

if(uppercase.test(data)){
    passClass[2].style.color = "green";
}else{
   passClass[2].style.color = "grey";
}

if(number.test(data)){
    passClass[3].style.color = "green";
}else{
   passClass[3].style.color = "grey";
}

if(specialChar.test(data)){
    passClass[4].style.color = "green";
}else{
   passClass[4].style.color = "grey";
}

}

function emailCheck(data){
    const regex =/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([A-Za-z]){2,8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([A-Za-z]){2,3}\.[a-zA-Z]{1,3}$/;

    if (regex.test(data) || regexo.test(data)){
        span[0].innerText = "Your email is valid";
        span[0].style.color = "lime";
    } else{
        span[0].innerText = "Your email is Invalid";
        span[0].style.color = "red";
    }

}
function phonenumCheck(data){
    const regexn = /^(\+44)?-?0[0-9]\d{9}$/;
    if (regexn.test(data)){
        span[1].innerText = "Your number is valid";
        span[1].style.color = "lime";
    } else{
        span[1].innerText = "Your number is Invalid";
        span[1].style.color = "red";
    }
}

function postcodeCheck(data){
    const regexcode = /^[A-Za-z]?[0-9]{2}\s[0-9]?[A-Za-z]{2}$/;
    if (regexcode.test(data)){
        span[2].innerText = "Your number is valid";
        span[2].style.color = "lime";
    } else{
        span[2].innerText = "Your number is Invalid";
        span[2].style.color = "red";
    }
}