$(document).ready(function () {
  $("#get_data_button").click(function () {
    $.ajax({
      url: "https://api.openaq.org/v1/cities",

      success: function (data) {
        $("#city_list").empty();
        for (let i = 0; i < 10; i++) {
          $("#city_list").append(
            "<li>" +
              data.results[i].city +
              ", " +
              data.results[i].country +
              "</li>"
          );
        }
      },
      error: function () {
        console.log(
          "There was an error with the OpenAQ API request. Trying the PokeAPI instead..."
        );
        $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon",

          success: function (data) {
            $("#city_list").empty();
            for (let i = 0; i < 10; i++) {
              $("#city_list").append("<li>" + data.results[i].name + "</li>");
            }
          },
          error: function () {
            console.log(
              "There was an error with both the OpenAQ and PokeAPI requests."
            );
          },
        });
      },
    });
  });
});
