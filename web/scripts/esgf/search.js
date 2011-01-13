/*
 * Author: 		Feiyi Wang
 * Created: 	October 12, 2010
 */

$(document).ready(function(){

	
	//global vars
	
	var searchBox = $("#searchbox");
	var data = $("#searchbox").val();
	var searchBoxDefault = "Search projects, datasets, and more";
	
	
	//Effects for both searchbox
	searchBox.focus(function(e){
		$(this).addClass("active");
	});
	searchBox.blur(function(e){
		$(this).removeClass("active");
	});
	
	searchBox.focus(function(){
		if($(this).attr("value") == searchBoxDefault) $(this).attr("value", "");
	});
	searchBox.blur(function(){
		if($(this).attr("value") == "") $(this).attr("value", searchBoxDefault);
	});	
	

	/**
	 * handle reset link
	 */
	$("div#showReset").click(function(){
		if ($('div#optionPane').is(":visible")) {
			$('div#optionPane').hide();
			$('div#showOptions').html('<a href="#">More Options</a>');
		}
		
		if ($('div#search_wrapper').is(":visible"))
			$('div#search_wrapper').hide();
		
		window.location='./search';
	});
	
	/** 
	 * Set up tool tip
	 */
	
	//$("#showOptions").tooltip({effect: 'fade', delay: 0});
	$("#showReset").tooltip({effect: 'fade', delay: 0});	
	$("#map_canvas").tooltip({effect: 'fade', delay: 0});
	
	/**
	 * Set up growl 
	 */
	$.jGrowl.defaults.position = 'bottom-right';
	jMsg("info", "This is a demo version of Geo-spatial search." +
	"You can define three different search constraints: " +
	"(1) Facets/categories; (2) Geo-spatial information " +
	"(3) Free text.", 5000);

	
//	$.jGrowl("Note: This is a demo version of Geo-spatial search." +
//			"You can define three different search constraints: " +
//			"(1) Facets/categories; (2) Geo-spatial information " +
//			"(3) Free text.", 
//			{
//				life: 15000,
//	    		animateOpen: {
//	    			height: 'show'
//	    		}
//	
//	});
	
	
});

function jMsg(msgtype, message, duration) {
	switch(msgtype) {
	case 'info':
		var theText = '<img src="images/info32.png" class="img-thumb"/>' +
			'<span class="separator">&nbsp;</span>' +
			message;
		
		// this can be merged, necessary only if we want to 
		// have different styles based on message type.
		$.jGrowl(theText, {
			theme: 'themed',
			life: duration,
			animateOpen: {
				height: 'show'
			}
		});
		
		break;
	case 'warn':
		var theText = '<img src="images/warning32.png" class="img-thumb"/>' +
		'<span class="separator">&nbsp;</span>' +
		message;
	
		// this can be merged, necessary only if we want to 
		// have different styles based on message type.
		$.jGrowl(theText, {
			theme: 'themed',
		life: duration,
		animateOpen: {
			height: 'show'
			}
		});
		
		
	}
	
}