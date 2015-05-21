describe("ContactForm Presentation Layer", function() {

  it("should return multiple valued array when calling getRequiredFields", function() {
    var fixture = '';
    fixture += '<input id="id_1">';
    fixture += '<input id="id_2">';
    jasmine.getFixtures().set(fixture);

    $contactForm.requiredFields = ['id_1', 'id_2'];

    expect($contactForm.getRequiredFields().length).toEqual($contactForm.requiredFields.length);
    expect($contactForm.getRequiredFields()[0]).toEqual($('#id_1'));
    expect($contactForm.getRequiredFields()[1]).toEqual($('#id_2'));
  });

});