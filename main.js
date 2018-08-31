
var $contactEmail = $('#contact-email');
var $contactMessage = $('#contact-message')
var $contactSendButton = $('#contact-send')
var $formInputs = $('.form-control')
$formInputs.on('change', (e)=>{
    console.log("this", $(this))
    console.log("CHANGE")
    console.log("value", $contactEmail.value)

})
if($contactEmail.value){
    $contactSendButton.disabled(false);
}

$contactSendButton.on('click', function(){
    console.log("send")
})