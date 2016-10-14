(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	wc.weather;
	
	weatherService.getWeather(function(weather){
		// console.log(typeof(weather));
		wc.weather = JSON.parse(weather);
		// console.log(typeof(wc.weather));
	})
	updateWeather = function() {
		var tempC = wc.weather.main.temp - 273.15;
		var tempF = tempC * (9/5) + 32;
		var template = `
			<div class="temp">
				<p>${Math.round(tempC)}&deg;C</p>
			</div>
			<div class="description">
				<p>${wc.weather.weather[0].description}</p>
			</div>
		`;
		$('#weather').html(template);
	}
	updateWeather();
	
	
	
	
}())
