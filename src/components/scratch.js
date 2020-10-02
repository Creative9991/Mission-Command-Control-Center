// var lpWizard = new Quotewizard(data);
//
// var businessQuote = 0;
//
// $('#business-quote-lp').click(function () {
//     businessQuote = 1;
//     $('.quote-btn-container .quote-wizard-question').css('display','none');
//     $('#business-questions-lp').fadeIn("medium");
// });
//
// $('#business-location-one-lp, #business-location-two-five-lp').click(function () {
//     $('#business-questions-lp').css('display','none');
//     $('#small-business-quote-lp').fadeIn("medium");
// });
//
// $('#office-business-lp, #storefront-business-lp, #restaurant-business-lp').click(function () {
//     $('#small-business-quote-lp').css('display','none');
//     $('#business-quote-form-lp').fadeIn("medium");
//     $('#you-need-to-know-section #quote-wizard-container h2').css({'position':'relative','right':'125px'});
//     $('#you-need-to-know-section #quote-wizard-container h2').text('Thanks!');
// });
//
// $('#business-location-six-lp').click(function () {
//     businessQuote = 1;
//     $('.quote-btn-container #business-questions-lp').css('display','none');
//     $('#business-questions-lp').css('display','none');
//     $('#you-need-to-know-section #quote-wizard-container h2').text('Talk to an expert');
//     $('#talk-to-expert-business-form-lp').fadeIn("medium");
// });
//
// //fadein and fadeout questions
// $('.quote-wizard-question .quote-question-option').click(function () {
//     if(businessQuote == 0) {
//         $(this).parent().fadeOut("medium", function () {
//             $(this).next().fadeIn();
//         });
//     }
// });
// $('#business-quote-submit-lp').click(function(){
//     var email = $('#business-quote-email-lp').val();
//     if (lpWizard.verifyEmail(email)) {
//         lpWizard.addCompletedflag(email);
//         $('#business-quote-form-lp').fadeOut("medium", function () {
//             $('#quote-wizard-thanks-msg').fadeIn();
//             $('#you-need-to-know-section #quote-wizard-container h2').text('');
//         });
//         lpWizard.sendQw();
//     }
//     else {
//         $('#business-quote-email-lp').css('color','#c63e1d').css('border', '2px solid #c63e1d');
//         $('.qw-email-validation-business').css({'display':'block','top':'2px','position':'relative'});
//     }
// });
//
//
// $('#quote-wizard-business-submit-lp').click(function () {
//     var emailStatus = 0;
//     var phoneStatus = 0;
//     var firstnameStatus = 0;
//     var validationMessage = 'Please enter a valid';
//     var validationFlag = 0;
//
//     var firstname = $('#quote-wizard-b-firstname-lp').val();
//     if (lpWizard.verifyFirstname(firstname)) {
//         lpWizard.addFirstnameCompletedflag(firstname);
//         firstnameStatus = 1;
//         $('#quote-wizard-b-firstname-lp').removeClass('quote-wizard-form-validation');
//     } else {
//         validationMessage += ' firstname';
//         $('#quote-wizard-b-firstname-lp').addClass('quote-wizard-form-validation');
//         validationFlag = 1;
//     }
//
//     var email = $('#quote-wizard-b-email-lp').val();
//     if (lpWizard.verifyEmail(email)) {
//         lpWizard.addCompletedflag(email);
//         emailStatus = 1;
//         $('#quote-wizard-b-email-lp').removeClass('quote-wizard-form-validation');
//     } else {
//         if (validationFlag) {
//             validationMessage += ', ';
//         }
//         validationMessage += ' email address';
//         $('#quote-wizard-b-email-lp').addClass('quote-wizard-form-validation');
//         validationFlag = 1;
//     }
//     var phone = $('#quote-wizard-b-phone-lp').val();
//     if (lpWizard.verifyPhone(phone)) {
//         lpWizard.addPhoneCompletedflag(phone);
//         phoneStatus = 1;
//         $('#quote-wizard-b-phone-lp').removeClass('quote-wizard-form-validation');
//     } else {
//         if (validationFlag) {
//             validationMessage += ', ';
//         }
//         validationMessage += ' phone number';
//         $('#quote-wizard-b-phone-lp').addClass('quote-wizard-form-validation');
//     }
//     if (emailStatus == 1 && phoneStatus == 1 && firstnameStatus == 1) {
//
//         $('#talk-to-expert-business-form-lp').fadeOut("medium");
//         $('#quote-wizard-business-thanks-msg-lp').fadeIn();
//         lpWizard.businessSendQW();
//     } else {
//         $('.email-phone-validation-text-home').text(validationMessage);
//         $('.email-phone-validation-text-home').css('display', 'block');
//     }
// });
//
// //add answers to the request data
// $(".question-option-wrapper, .quote-option-business-wrapper").bind('click', function () {
//     var question = $(this).parent().parent().attr('data-question');
//     var answer = $(this).attr('data-answer-id');
//     lpWizard.addQWresponse(question,answer);
// });
//
// //submit complete wizard
// $("#quote-wizard-submit").click(function (e) {
//     e.preventDefault();
//     var email = $('#quote-wizard-email').val();
//     if (lpWizard.verifyEmail(email)) {
//         lpWizard.addCompletedflag(email);
//         $('.quote-wizard-form').fadeOut("medium", function () {
//             $('#quote-wizard-thanks-msg').fadeIn();
//         });
//         lpWizard.sendQw();
//     }
//     else {
//         $("#quote-wizard-email").css({"color":"#c63e1d", "border": "2px solid #c63e1d"}).next('.qw-email-validation').show();
//     }
// });
//
// $('#quote-wizard-email').keydown(function (e) {
//     if (e.keyCode == 13) {
//         $('#quote-wizard-submit').click();
//     }
// });
//
// $(window).unload(function () {
//     lpWizard.incompleteSubmit();
// });
//

import React, { Component }  from 'react';
import Todos from "./Todos";

class Scratch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
        console.log('An essay was submitted: ' + this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}
export default Scratch;
