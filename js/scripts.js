$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#name").val();
    var age = $("#age").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var select = $("#select").val();
    var nonWord = new RegExp(/\W*/, 'g');
    var word = new RegExp(/\w+/, 'g');

    if (name && age) {
      $("form div:nth-child(1)").removeClass("has-error");
      $("form div:nth-child(2)").removeClass("has-error");
      $("#person").show();
      $("span").text(name + ", " + age + " old");
      if (gender === "male" && select === "Music") {
        $("#simone").show();
        $("#celebrities > div").not("#simone").hide();
      } else if (gender === "female" && select === "Music"){
        $("#tom").show();
        $("#celebrities > div").not("#tom").hide();
      } else if (gender === "male" && select === "Movies"){
        $("#angelina").show();
        $("#celebrities > div").not("#angelina").hide();
      } else if (gender === "female" && select === "Movies"){
        $("#brad").show();
        $("#celebrities > div").not("#brad").hide();
      } else if (gender === "male" && select === "Politics"){
        $("#sarah").show();
        $("#celebrities > div").not("#sarah").hide();
      } else {
        $("#donald").show();
        $("#celebrities > div").not("#donald").hide();
      }
    } else if (name === "" && age) {
      $("form div:nth-child(1)").addClass("has-error");
      $("form div:nth-child(2)").removeClass("has-error");
    } else if (age === "" && name) {
      $("form div:nth-child(2)").addClass("has-error");
      $("form div:nth-child(1)").removeClass("has-error");
    } else {
        $("form div:nth-child(1)").addClass("has-error");
        $("form div:nth-child(2)").addClass("has-error");
    }

    event.preventDefault();
  });
});
