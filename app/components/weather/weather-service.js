function WeatherService() {

	var latitude, longitude;

	this.getWeatherByPosition = function (callWhenDone) {
		navigator.geolocation.getCurrentPosition(function (position) {
			latitude = Math.round(position.coords.latitude);
			longitude = Math.round(position.coords.longitude);

			var url = 'https://bcw-getter.herokuapp.com/?url=';
			var url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&&APPID=bd82255fd0a21fa1238699b9eda2ee35`;
			var apiUrl = url + encodeURIComponent(url2);

			$.get(apiUrl, function (res) { 
				var parsedWeather = JSON.parse(res);
				callWhenDone(parsedWeather);
			})
		})
	}

}