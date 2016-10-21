function QuoteService(){
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	
	this.getQuote =  function(callWhenDone){
		$.get(apiUrl, function(res){
			console.log('Quote Data:', res)
			var quoteObj = JSON.parse(res);
			callWhenDone(quoteObj);
		})
	}
}