(function (){
	
	var localWeather;
	var weatherService = new WeatherService();
	
	weatherService.getWeatherByPosition(function(weather){
		console.log(weather);
		console.log(typeof(weather));
		localWeather = weather;
		// console.log(typeof(localWeather));
		updateWeather();
	})
	updateWeather = function() {
		var tempC = localWeather.main.temp - 273.15;
		var template = `
			<div class = "location">
				<p>${localWeather.name}</p>
			</div>
			<div class="temp">
				<button class="btn celsius" id="temp-click" alt="click to change scale">${Math.round(tempC)}&deg;C</button>
			</div>
			<div class="description">
				<p>${localWeather.weather[0].description}</p>
			</div>
		`;
		$('#weather').html(template);
	}
	
	$('#weather').on('click', '#temp-click', function() {
		debugger;
		var tempK = localWeather.main.temp
		var tempC = localWeather.main.temp - 273.15;
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
	
	
	
}()) //wrapping in an IIFE means this is immediately invoked