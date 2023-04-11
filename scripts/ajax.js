let jsonURL = "test.json";

$("#btnLoadData").click(function (e) {
  console.log("button is clicked");
  e.preventDefault();

  $.ajax({
    url: jsonURL,
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, val) {
        console.log(key, val);
        $(`#${key}`).val(val);
      });

      $("input[type=radio]").each(function () {
        if (data.country === $(this).val()) {
          $(this).prop("checked", true);
          console.log($(this));

          $("#foodOption").remove();
          var jsonStr = JSON.stringify(data.food);
          jsonStr = jsonStr.replace(/^\"|\"$/g, "");
          var output = `The favorite food is ${jsonStr} in ${data.country}!!!`;
          $("#selectedFood").text(output);
        }
      });
    },
  });
});
