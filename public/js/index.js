function setContentHeight() {	
	var viewportHeight = window.innerHeight;		
	$("section-1").css("#height", viewportHeight);		

	var sections = $(".section");
	for (i = 0; i < sections.length; i ++)  {		
		sections[i].style.visibility = "visible";
	}
}

$(function() {		
	var flipContainer = $(".flip-container")
	flipContainer.click(function(e) {
		$(e.delegateTarget).toggleClass("flip")		
	})
})

$(window).load(function() {	
	setContentHeight();

	// now set the height for each of the flippers, which need don't have the correct height beacuse
	// their children are absolutely positionned
	$(".flipper").each(function(i, el) {
		$el = $(el)
		var height = $el.find(".front").height();
		var width = $el.find(".front").width();
		$el.css("height", height);
		$el.css("width", width);
	})
})