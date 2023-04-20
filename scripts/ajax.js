let jsonURL = "test.json";

$("#btnLoadData").on("click", function (e) {
  console.log("Load button is clicked");
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
          console.log(data.food);
          var jsonStr = JSON.stringify(data.food);
          $('#foodOption option[value="empty"]').text(data.food);
          $('#foodOption option[value="empty"]').val(data.food);
        }
      });
    },
  });
});

$("#submitBtn").on("click", function (e) {
  var name = $("#name").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var country = $("input[type=radio]:checked").val();
  var food = $("#foodOption").val();
  var message = $("#message").val();

  // Display an alert if the input value is blank
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    country === "" ||
    food === "" ||
    message === ""
  ) {
    alert("Please fill out all fields");
    return;
  } else {
    console.log("submit button is clicked");
    e.preventDefault();
    $("#main-container").children().hide();

    const el = `<h1 class="message text-center">${name}, Thank you for submitting!!</h1>\
                <h2 class="text-center">Check your private information below ☟</h2>\
                <div class="private-info-container mb-3">\
                  <p class="private-name">Name: ${name}<p>\
                  <p class="private-email">Email: ${email}<p>\
                  <p class="private-password">Password: ${password}<p>\
                  <p class="private-country">Country: ${country}<p>\
                  <p class="private-food">Your favorite food: ${food}<p>\
                  <p class="private-feedback">The reason why you like it: ${message}<p>\
                </div>`;

    $("#main-container").append(el);
  }
});
