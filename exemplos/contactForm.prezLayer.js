
$contactForm.id = 'contact-form';
$contactForm.requiredFields = ['id_name', 'id_message'];

$contactForm.getForm = function(){ return $('#' + $contactForm.id) };

$contactForm.getRequiredFields = function() {
  var requiredFields = [];
  for (var i = 0; i < $contactForm.requiredFields.length; i++) {
    requiredFields.push( $('#' + $contactForm.requiredFields[i]) );
  };
  return requiredFields;
}
