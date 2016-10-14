(function(){
	var imageService = new ImageService();
	imageService.getImage(setBackground)
	function setBackground(image) {
		$('body').css('background-image', `url("${image.url}")`).css('background-size', 'cover');
	}	
}())
