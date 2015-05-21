
var $contactForm = {};

$contactForm.isValid = function(){
  var validFields = [];

  for (var i = 0; i < $contactForm.getRequiredFields().length; i++) {
    var field = $contactForm.getRequiredFields()[i];
    if ( field.val() ) {
      validFields.push(field);
    };
  };

  if ( validFields.length === $contactForm.getRequiredFields().length ) {
    return true;
  };

  return false;
}

$contactForm.submit = function() {
  if ( $contactForm.isValid() ) {
    $contactForm.getForm().submit();
  };
}
