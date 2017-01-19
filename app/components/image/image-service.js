function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			// console.log('Image Data:', res)
			var imageData = JSON.parse(res);
			callWhenDone(imageData);
		})
	}
}