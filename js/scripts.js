$(document).ready(function() {
  $("#radio").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
  });
});
