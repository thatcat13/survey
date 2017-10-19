$(document).ready(function() {
  $("#radio").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
  });


  $("form-control").submit(function(event) {
    var beverage = $("#beverage").val();
  });

  $("form-group").submit(function(event) {
    var nounInput1 = $("#noun1").val();
    var verbInput = $("#verb").val();
    var nounInput2 = $("#noun2").val();
    var exclamationInput = $("#exclamation").val();

    $(".noun1").text(nounInput1Input);
    $(".noun2").text(nounInput2Input);
    $(".exclamation").text(exclamationInputInput);
    $(".verb").text(verbInputInput);
    $(".noun1").text(nounInput1Input);

    $("#story").show();

    event.preventDefault();

  });
});
