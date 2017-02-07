jQuery(document).ready(function($){
  
  /* Global click toggle function used by other functions */
  $.fn.clickToggle = function(func1, func2) {
      var funcs = [func1, func2];
      this.data('toggleclicked', 0);
      this.click(function() {
          var data = $(this).data();
          var tc = data.toggleclicked;
          $.proxy(funcs[tc], this)();
          data.toggleclicked = (tc + 1) % 2;
      });
      return this;
  };
  
  /*
		The default minified height of a read more for example is: 70px
		To animate to it's full height we need to know and set the full height at forehand
		so we can tell the animate function to which height the span will be in it's full extended height.
	*/
	function setAttr_height(key) {
		$(key).each(function(){
			var setNormalHeight = $(this).height(); // Full height of span with text
			$(this).attr('data-height', setNormalHeight);
			$(this).css('height', $(this).attr('data-base') + 'px' );
		});
	}
	setAttr_height('div.read-more');
  
  $('[data-target]').clickToggle(function(){
		/* 
		 * The Data-id corresponds with the data-target of the clicked button.
		 * so you can have multiple read-more area's on one page
     */
		$('[data-id="'+$(this).data('target')+'"]').animate({height: $(this).parent().prev().attr('data-height')}, 200);
		$('[data-id="'+$(this).data('target')+'"]').find('em').fadeOut('fast');
		$(this).text('Lees minder');
	}, function(){
		/* Minify back to default 70px height of span */
		$(this).text('Lees meer');
		$('[data-id="'+$(this).data('target')+'"]').animate({height: $(this).parent().prev().attr('data-base')}, 200);
		$('[data-id="'+$(this).data('target')+'"]').find('em').fadeIn('fast');
	});
  
});
