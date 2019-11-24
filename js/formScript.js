function formValidate(form){
    validateName(form);
    validateEmail(form);
    validateSubject(form);
}
function validateName(form){
    var name=form.elements['Name'];
    if(name.validity.valueMissing)
    {
        name.setCustomValidity("Enter your name here");
    }
    else
    {name.setCustomValidity("");}
}

function validateEmail(form){
    var email=form.elements['email'];
    if(email.validity.valueMissing)
    {
        email.setCustomValidity("Enter your email here");
    }
    else if(email.validity.patternMismatch){
        email.setCustomValidity("Enter correct email format");
    }
    else{
        email.setCustomValidity("");
    }
}

function validateSubject(form){
    var subjectElement=form.elements['Subject'];
    var current=subjectElement.value;   
    var first=current.charAt(0);  
    if(!(isNaN(first)))    
        {
            subjectElement.setCustomValidity("There must be a valid message.");
    }
    else{
        subjectElement.setCustomValidity("");
    }

}