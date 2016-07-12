function WeatherService(){
	
	this.getWeather =  function(callWhenDone){
		var w = localStorage.getItem('weather');
		if(w){
			w = JSON.parse(w);
			console.log('Weather Data:', w)
<<<<<<< HEAD
			return callWhenDone(w);
=======
			return callWhenDone(w)
>>>>>>> ccf75870746f3593cab7db38eb273d77b4d21c5f
		}
		
		$.get('http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35', function(res){
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}
}
