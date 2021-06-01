$(function() {

  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element)

        .addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element)

        .removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, 'La contraseña debe tener al menos 6 caracteres y al menos un número o una letra.')

  $("#myFormId").validate({
    rules: {
      inputName: {
        required: true,
      },
      inputSurname: {
        required: true,
      },
      inputEmail: {
        required: true,
        email: true,
      },
      inputPassword: {
        required: true,
        strongPassword: true
      },
      inputPassword2: {
        required: true,
        equalTo: '#inputPassword'
      },
      inputAddress:{
        required: true
      },
      inputProvince: {
        required: true,
      },
      inputCity: {
        required: true,
      },
      inputZip: {
        required: true,
        number: true,
        minlength: 5,
        maxlength: 5,
      },
      gridCheck: {
        required: true
      },
    
    },
    messages: {
      "inputName": {
        required: "Aquest camp és obligatori.",
      },

      "inputSurname": {
        required: "Aquest camp és obligatori.",
      },

      "inputEmail": {
			required: "Aquest camp és obligatori.",
			email: "Si us plau, escriu una direcció de correu electrònic vàlida"
		},
		"inputPassword": {
			required: "Aquest camp és obligatori.",
      strongPassword: "Si us plau, no escriguis menys de 6 caracters, un número i una lletra."
		},
		"inputPassword2": {
      required: "Aquest camp és obligatori.",
			equalTo: "La contrasenya no coincideix. "
		},
    "inputAddress":{
      required: "Aquest camp és obligatori.",
    },
		"inputCity":{
			required: "Aquest camp és obligatori.",
			minlength: "Por favor, no escribas números."
		},
		"inputProvince":{
			required: "Aquest camp és obligatori.",
		},
		"inputZip":{
      required: "Aquest camp és obligatori.",
			number: "El codi postal consta de 5 números",
			minlength: "El codi postal consta de 5 números",
      maxlength:"El codi postal consta de 5 números",
		},
		"gridCheck": {
    	required: "Aquest camp és obligatori.",
      }
	
    }
  });

	$("#register-form").on('submit', function() {
		if ($('#register-form').valid()) {
			alert("formulario válido");
		} else {
			alert("formulario no válido");
		}
	});

});




