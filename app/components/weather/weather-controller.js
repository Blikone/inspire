(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		// console.log(typeof(weather));
		wc.weather = JSON.parse(weather);
		// console.log(typeof(wc.weather));
	})
	updateWeather = function() {
		var tempC = wc.weather.main.temp - 273.15;
		var template = `
			<div class="temp">
				<button class="btn celsius" id="temp-click" alt="click to change scale">${Math.round(tempC)}&deg;C</button>
			</div>
			<div class="description">
				<p>${wc.weather.weather[0].description}</p>
			</div>
		`;
		$('#weather').html(template);
	}
	updateWeather();
	
	$('#weather').on('click', '#temp-click', function() {
		debugger;
		var tempK = wc.weather.main.temp
		var tempC = wc.weather.main.temp - 273.15;
		var tempF = tempC * (9/5) + 32;
		var degree = $('#temp-click').attr('class');
		switch(degree) {
			case "btn celsius":
				$('#temp-click').html(`${Math.round(tempF)}&deg;F`);
				$('#temp-click').addClass('fahrenheit').removeClass('celsius');
				break;
			case "btn fahrenheit":
				$('#temp-click').html(`${Math.round(tempK)}&deg;K`);
				$('#temp-click').addClass('kelvin').removeClass('fahrenheit');
				break;
			case "btn kelvin":
				$('#temp-click').html(`${Math.round(tempC)}&deg;C`);
				$('#temp-click').addClass('celsius').removeClass('kelvin');
				break;
		}
	})
	
	
	
}())
