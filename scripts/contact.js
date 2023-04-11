// The function that retrieves the value from a radio button
// and displays the options in the dropdown menu according to that value
$(function () {
  $("input[type=radio]").on("change", function () {
    let selectedRadio = $("input[type=radio]:checked").val();
    let foodArray = getValue(selectedRadio);
    console.log(foodArray);

    let optionList = "";

    for (i = 0; i < foodArray.length; i++) {
      optionList += `<option value=" ${foodArray[i]} ">${foodArray[i]} </option>`;
    }
    console.log(optionList);

    $("#foodOption").empty().append(optionList);
  });

  // When the submit button is clicked, get the data from the form and send the data to a json file using Jquery's POST method
  $("form").submit(function (e) {
    console.log("button is clicked");

    // cancel the default submission of the form
    e.preventDefault();

    // get form data
    var formData = {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      password: $("input[name=password]").val(),
      country: $("input[name=country]").val(),
      food: $("input[name=food]").val(),
      message: $("input[name=message]").val(),
    };

    // Convert form the data to JSON format
    var jsonData = JSON.stringify(formData);

    // send a POST request
    $.ajax({
      url: "https://junnoiri.github.io/cis-376-INDIA/test.json",
      type: "POST",
      data: jsonData,
      dataType: "json",

      // Processing on success
      success: function (response) {
        console.log(response);
      },

      // Processing on error
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    });
  });
});

// The function to check the letter
function getValue(letter) {
  // Data array
  let ItalianFoods = ["Pizza", "Pasta", "Lasagna", "Gelato", "Carbonara"];

  let FrenchFoods = [
    "Macarons",
    "Croissants",
    "Ratatouille",
    "Roast beef",
    "Moules frites",
  ];
  let SpanishFoods = ["Paella", "Sangria", "Tapas", "Calamares", "Churros"];
  let JapaneseFoods = [
    "Sushi",
    "Ramen",
    "Udon",
    "Soba",
    "Takoyaki",
    "Yakitori",
  ];
  let IndianFoods = [
    "Curry",
    "Naan",
    "Masala chai",
    "Tandoori chicken",
    "Roti",
  ];
  let AmericanFoods = [
    "Hamburger",
    "Hot dog",
    "Fried chicken",
    "Ribs",
    "Steak",
    "Apple pie",
    "Mashed potatoes",
  ];

  // if function to check the letter
  if (letter === "Italy") {
    return ItalianFoods;
  } else if (letter === "France") {
    return FrenchFoods;
  } else if (letter === "Spain") {
    return SpanishFoods;
  } else if (letter === "Japan") {
    return JapaneseFoods;
  } else if (letter === "India") {
    return IndianFoods;
  } else if (letter === "United States") {
    return AmericanFoods;
  } else {
    return ["please select a country"];
  }
}
