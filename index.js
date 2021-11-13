var citys = document.getElementById("city_name").value;
var cname = 'jaipur';
var api_key = "66b372e3242274bf354dca1360145913";
var api = `http://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${api_key}`;
//var icons = `http://openweathermap.org/img/wn/${weather_icon}@2x.png`;
var date = new Date();

function search() {
  var citys = document.getElementById("city_name").value;
  var api = `http://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${api_key}`;
  fetch(api)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var weather_icon = data.weather[0].icon;
      var icons = `http://openweathermap.org/img/wn/${weather_icon}@2x.png`;
      var temp = data.main.temp;
      var temp_celsius = temp - 273.15;
      var temp_celsius = temp_celsius.toFixed(2);
      var temp_celsius = document.getElementById("temprature").innerHTML = temp_celsius + "°C";
      var city = document.getElementById("city").innerHTML = data.name;
      var country = document.getElementById("country").innerHTML = data.sys.country;
      var humidity = data.main.humidity;




      var sunrise = data.sys.sunrise;
      var sunrise_time = new Date(sunrise * 1000);
      var sunrise_time = document.getElementById('sunrise').innerHTML = sunrise_time.toLocaleTimeString();
      var sunset = data.sys.sunset;
      var sunset_time = new Date(sunset * 1000);
      var sunset_time = document.getElementById('sunset').innerHTML = document.getElementById('sunset').innerHTML = sunset_time.toLocaleTimeString();
      var condition = document.getElementById('des').innerHTML = data.weather[0].description;
      var weather_icon = data.weather[0].icon;
      var icons = `http://openweathermap.org/img/wn/${weather_icon}@2x.png`;
      var weather = document.querySelector(".icon").setAttribute("src", icons);
      console.log(sunset);



    }).catch(function (error) {
      //document.getElementById("error").innerHTML = "City Not Found 😻 ";
    });


}

