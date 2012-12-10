$(document).ready(function() {

	$('html').removeClass("no-js");
	
	//http://v4.thewatchmakerproject.com/blog/how-to-fix-the-broken-ipad-form-label-click-issue/
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
		$('label[for]').click(function () {
			var el = $(this).attr('for');
			if ($('#' + el + '[type=radio], #' + el + '[type=checkbox]').attr('selected', !$('#' + el).attr('selected'))) {
				return;
			} else {
				$('#' + el)[0].focus();
			}
		});
	}

	// Validate signup form on keyup and submit
	$('.example1').validate({
		errorClass: 'error',
		validClass: 'valid',
		errorElement: "div",
		ignore: ':hidden',	
		rules: {
			requiredField: 'required',
			checkboxA: 'required',		
			checkboxB: { required: true, minlength: 2 },
			checkboxC: { required: true, minlength: 3 },
			radioA: 'required'
		},
		messages: {
			requiredField: 'Error message for required field.',
			checkboxA: 'Please select one of the options',
			radioA: { required: "Please select one of the options" },
			checkboxB: { required: "Please select atleast 2 options", minlength: "Please select atleast 2 options" },
			checkboxC: { required: "Please select atleast 3 options", minlength: "Please select atleast 3 options" }
		},
		// Validation error placement
		errorPlacement: function (error, element) {
			if ( element.parents().is(".form-col") ) {
			error.insertAfter( element.parents(".form-col"));
		    } else if ( element.is(":radio, :checkbox") ) {
			error.insertAfter( element.parents("fieldset"));
			} else { 
			error.insertAfter( element);
			}
		}
	}); // End .validate


	// Validate signup form on keyup and submit
	$('.example2').validate({
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
			agree: 'required',
			checkboxA: 'required',		
			checkboxB: { required: true, minlength: 2 },
			checkboxC: { required: true, minlength: 3 },
			radioA: 'required'
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
			agree: 'Please agree to the Terms of Service.',
			checkboxA: { required: "Please select on of the options" },
			radioA: { required: "Please select one of the options above" },
			checkboxB: { required: "Please select atleast 2 options", minlength: "Please select atleast 2 options" },
			checkboxC: { required: "Please select atleast 3 options", minlength: "Please select atleast 3 options" }
		},
		// Validation error placement
		errorPlacement: function (error, element) {
			if ( element.is(":radio, :checkbox") ) {
			error.insertAfter( element.parents("fieldset"));
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