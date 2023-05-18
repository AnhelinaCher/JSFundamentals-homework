//01
$("h2.head").css("background-color", "green");
$(".inner").css("font-size", "35px");

//02
$(document).ready(function() {
    $('a[href^="https://"]').attr('target', '_blank');
  });

//03
$(document).ready(function() {
    $('h3').each(function() {
      let $h3 = $(this);
      let $div = $h3.next('div');
      $div.insertBefore($h3);
    });
  });

//04
$(document).ready(function() {
    let checkboxes = $('input[type="checkbox"]');
    checkboxes.change(function() {
      let checkedCount = checkboxes.filter(':checked').length;
      if (checkedCount >= 3) {
        checkboxes.not(':checked').prop('disabled', true);
      } else {
        checkboxes.prop('disabled', false);
      }
    });
  });
  