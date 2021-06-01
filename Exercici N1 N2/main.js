const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	var inputName = document.forms["myForm"]["inputName"];
    var inputSurame = document.forms["myForm"]["inputSurname"];
    var inputEmail = document.forms["myForm"]["inputEmail"];
    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputPassword2 = document.forms["myForm"]["inputPassword2"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];



    if(inputName.value == ""){
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Introdueix el teu nom";
        
    }

    
    if(inputSurame.value == ""){
        inputSurname.classList.add("is-invalid");
        document.getElementById("errorSurname").textContent = "Introdueix el teu cognom";
        acumErrores ++;
    }


    if(inputPassword.value == "" || validar_contrasenya(inputPassword.value) !== true ){
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Introdueix una contrasenya vàlida";
        acumErrores ++;
    }


    if(inputPassword2.value == "") {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "Repeteix la contrasenya";
        acumErrores ++;
    }else if(inputPassword2.value !== inputPassword.value) {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "Les contrasenyes no són iguals";
        acumErrores ++;
    }
    
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Introdueix el teu correu electrònic";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "No compleix amb el format";
		acumErrores ++;
	}
    
    if(inputAddress.value == "") {
        inputAddress.classList.add("is-invalid");
        document.getElementById("errorAddress").textContent = "Introdueix la teva adreça";
        acumErrores ++;
    }
    
    
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "introdueix la teva ciutat";
		acumErrores ++;
	}
	
	if(inputZip.value == "" || inputZip.value.length !== 5 || validar_zip(inputZip.value) !== true) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "El codi postal no compleix els requisitis";
		acumErrores ++;
    }


	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}

    
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    registerValidate();
}, true);

function validar_email(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_zip(zip){
    let regex = /[0-9]/;
    return regex.test(zip);
}

function validar_contrasenya(contrasenya){
    regex =  /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[?!])[a-zA-Z0-9!?]{8,}/gm;
    return regex.test(contrasenya);
}







