describe("Contact Form Test Cases", function() {

  it("should return false when calling $contactForm.isValid with invalid required fields", function() {
    spyOn($contactForm, 'getRequiredFields').and.returnValue( [$('<input>')] );

    expect($contactForm.isValid()).toEqual(false);
  });

  it("should return true when calling $contactForm.isValid with valid required fields", function() {
    spyOn($contactForm, 'getRequiredFields').and.returnValue( [$('<input value="lalala">')] );

    expect($contactForm.isValid()).toEqual(true);
  });

  it("should not call $.fn.submit if form is not valid and formSubmit is called", function() {
    spyOn($.fn, 'submit');

    $contactForm.submit();

    expect($.fn.submit).not.toHaveBeenCalled();
  });

  it("should submit form when calling formSubmit", function() {
    spyOn($.fn, 'submit');
    spyOn($contactForm, 'isValid').and.returnValue(true);

    $contactForm.submit();

    expect($.fn.submit).toHaveBeenCalled();
  });

});