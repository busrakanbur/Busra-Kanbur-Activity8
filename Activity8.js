$(document).ready(function() {
    $("#userInput2").datepicker();
  
    var programmingLanguages = [
      "JavaScript",
      "Java",
      "C#",
      "Python",
      "C++",
      "Ruby",
      "PHP"
    ];
  
    $("#userInput1").autocomplete({
      source: programmingLanguages
    });
  
    $("form").submit(function(event) {
      var invalidEmail = $('input[type="email"]');
      var invalidUrl = $('input[type="url"]');
      
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      
      invalidEmail.each(function() {
        if (!emailRegex.test($(this).val())) {
          $(this).closest('.form-row').addClass('error');
          event.preventDefault();
        } else {
          $(this).closest('.form-row').removeClass('error');
        }
      });
      
      invalidUrl.each(function() {
        if (!urlRegex.test($(this).val())) {
          $(this).closest('.form-row').addClass('error');
          event.preventDefault();
        } else {
          $(this).closest('.form-row').removeClass('error');
        }
      });
    });
  });
  