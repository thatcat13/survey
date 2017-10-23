// $(document).ready(function() {
//   $("#radio").submit(function(event) {
//     event.preventDefault();
//     var animal = $("input:radio[name=animal]:checked").val();
//   });
//
//
//   $("#beverage").change(function() {
//     // var beverage = $(this).val();
//   });

  // $("#madlibs").submit(function(event) {
  //   event.preventDefault();
  //   var nounInput1 = $("#noun1").val();
  //   var verbInput = $("#verb").val();
  //   var nounInput2 = $("#noun2").val();
  //   var exclamationInput = $("#exclamation").val();
  //
  //   $(".noun1").text(nounInput1);
  //   $(".noun2").text(nounInput2);
  //   $(".exclamation").text(exclamationInput);
  //   $(".verb").text(verbInput);
  //   $(".noun1").text(nounInput1);
  //
  //   $("#story").show();

$(document).ready(function() {
  $("#madlibs").submit(function(event) {
  var blanks = ["noun1", "verb", "noun2", "exclamation"];

  blanks.forEach(function(blank) {
    var userInput = $("input#" + blank).val();
    $("." + blank).text(userInput);
  });

  $("#story").show();

  event.preventDefault();
  });
});
