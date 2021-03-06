var apiKey = "778757951402b5ff34120149a5dc168a";

$(document).ready(function() {
  $("#location-entry").submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    var tempKelvin;
    var tempFahrenheit;
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then(function(response) {
      tempKelvin = response.main.temp;
      tempFahrenheit = parseInt(1.8 * (tempKelvin - 273) + 32);
      $('.showWeather').html("The humidity in " + city + " is " + response.main.humidity + "%. <br> The temperature in your beloved city of " + city + " is " + tempFahrenheit + " degrees.");
    })
      .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
