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

  $("#register-form").validate({
    rules: {
      registrationemail: {
        required: true,
        email: true,
      },
      registrationpassword1: {
        required: true,
        strongPassword: true
      },
      registrationpassword2: {
        required: true,
        equalTo: '#password'
      },
      registrationcity: {
        required: true,
        lettersonly: true
      },
      registrationstate: {
        required: true,
      },
      registrationzipcode: {
        required: true,
        number: true
      },
      terms: {
        required: true
      }
    },
    messages: {
      "registrationemail": {
			required: "Este campo es obligatorio.",
			email: "Por favor, escribe una dirección de correo válida"
		},
		"registrationpassword1": {
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas menos de {0} caracteres."
		},
		"registrationpassword2": {
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas menos de {0} caracteres.",
			equalTo: "La contraseña no coincide. "
		},
		"registrationcity":{
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas números."
		},
		"registrationstate":{
			required: "Selecciona una provincia."
		},
		"registrationzipcode":{
			required: "Este campo es obligatorio.",
			number: "Codigo Postal no válido",
			minlength: 5
		},
		"terms": {
        	required:"Este campo es obligatorio."
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




