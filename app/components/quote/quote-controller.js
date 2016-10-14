(function(){
	quoteService = new QuoteService();
	quoteService.getQuote(function(quote) {
		var template = `
			<div class="quote-well">
				<p>${quote.quote} <span id="author"><small>${quote.author}</small></span></p>
			</div>
		`;
		$('#quote').html(template);
	});
	
}())
