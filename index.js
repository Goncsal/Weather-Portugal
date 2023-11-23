$(document).ready(function () {
  $("#botao").click(function () {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        q: $("#cityselector").val(),
        APPID: "b2b1df463182c3cca5276e9d3267cc95",
      },
      success: function (data) {
        if (data.name) {
          $(".card-body").removeClass("d-none");
          $("#temp").html(
              (data.main.temp - 273.15).toFixed(1).toString() +
              "ºC"
          );
          $("#weather").html(data.weather[0].description);
          $("#humidade").html(data.main.humidity);
          $("#ventos").html(data.wind.speed + "km/h")
          $("#allinfo").html(
            JSON.stringify(data, null, 4).replace(/\n/g, "<br>")
          );
        } else {
          $(".card-body").addClass("d-none");
          alert(data.message);
        }
      },
      error: function () {
        $("table").addClass("d-none");
        alert("Erro!");
      },
    });
  });
});
