(function(){
	quoteService = new QuoteService();
	quoteService.getQuote(function(quote) {
		var template = `
			<div class="quote-well">
				<p>${quote.quote}</br><span id="author" style="font-size: 12px">${quote.author.toLowerCase()}</span></p>
			</div>
		`;
		$('#quote').html(template);
	});
	
}())