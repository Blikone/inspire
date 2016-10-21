function WeatherService() {
	debugger;

	////////////////////////
	//// CALLBACK CHAIN ////
	////////////////////////

	/**
	 * Asynchronous code:
	 * 	- getCurrentPosition(callback)
	 * 	- getWeather(callback)
	 * 
	 * Pass in getWeather as the callback to getCurrentPosition?
	 * 
	 * All I can do is try it.
	 */

	var latitude, longitude;

	this.getWeatherByPosition = function (callWhenDone) {
		navigator.geolocation.getCurrentPosition(function (position) {
			debugger;
			console.log(position);
			latitude = Math.round(position.coords.latitude);
			longitude = Math.round(position.coords.longitude);
			console.log('lat: ' + latitude + '; lon: ' + longitude);

			var url = 'https://bcw-getter.herokuapp.com/?url=';
			var url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&&APPID=bd82255fd0a21fa1238699b9eda2ee35`;
			var apiUrl = url + encodeURIComponent(url2);

			$.get(apiUrl, function (res) { 
				debugger;
				console.log('raw data: ' + res) //Nothing is coming back from api.  Simply printing [object Object]
				var parsedWeather = JSON.parse(res);
				console.log(parsedWeather);
				callWhenDone(parsedWeather);
			})
		})
	}

}
// var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35';