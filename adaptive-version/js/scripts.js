$(document).ready(function() {

	// Validate signup form on keyup and submit
	$('.form-bp-example2').validate({
		errorClass: 'error',
		validClass: 'valid',
		errorElement: "div",
		ignore: ':hidden',
		/* Research validation sync issue when using groups for multiple fields
		 * Below works, though it seems like it could be better
		 */
		groups: {
	        primaryPhoneDetails: "primaryPhone primaryPhoneType",
	        dateOfBirth: "dateOfBirth1 dateOfBirth2 dateOfBirth3"
	    },		
		rules: {
			userName: 'required',
			password: 'required',
			firstName: 'required',
			lastName: 'required',
			address: 'required',
			city: 'required',
			state: 'required',
			zip: {
				required: true,
				zipUS: true
			},
			country: 'required',
			email: {
				required: true,
				email: true
			},
			primaryPhone: {
				required: true,
				phoneUS: true
			},
			primaryPhoneType: {
				required: true
			},
			secondarPhone: {
				required: true,
				phoneUS: true
			},
			dateOfBirth1: 'required',
			dateOfBirth2: 'required',
			dateOfBirth3: 'required',
			agree: 'required'
		},
		messages: {
			userName: 'Please select a campus.',
			password: 'Please select a program.',
			firstName: 'Please enter your first name.',
			lastName: 'Please enter your last name.',
			address: 'Please enter your address.',
			city: 'Please enter your city.',
			state: 'Please select your state.',
			zip: 'Please enter your zip code.',
			country: 'Please select your country.',
			email: 'Please enter a valid email.',
			primaryPhone: 'Please enter a valid phone number and your type of phone.',
			primaryPhoneType: 'Please enter a valid phone number and your type of phone.',
			dateOfBirth1: 'Please enter your date of birth.',
			dateOfBirth2: 'Please enter your date of birth.',
			dateOfBirth3: 'Please enter your date of birth.',
			agree: 'Please agree to the Terms of Service.'
		},
		// Validation error placement
		errorPlacement: function (error, element) {
			if ( element.is(":radio, :checkbox") ) {
			error.appendTo( element.parents("fieldset"));
			} else if ( element.parents().is(".form-col") ) {
			error.insertAfter( element.parents(".form-col"));
			} else { 
			error.insertAfter( element);
			}
		}
		
	}); // End .validate

	$('form').submit( function(e){
		e.preventDefault();
	}); 
	
}); // Close document.ready