

function validateForm(){

    let x = document.forms['myForm']['fname'].value;

    if(x == ''){

        alert ('O campo deve ser preenchido');
        return false;
    }


}