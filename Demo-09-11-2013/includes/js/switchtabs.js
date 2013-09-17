// JavaScript Document
$(document).ready(function() {
	var contentHeight = 0;
	$("#tabbed_content > div").each(function() {
		if ($(this).outerHeight() > contentHeight) {
			contentHeight = $(this).outerHeight();
		}
	});
	$("#tab_container li a").click(function() {
		$("#tab_container li a").parent("li").removeClass("active");
		$("#tabbed_content > div").removeClass("active");
		var attrID = $(this).attr("href");
		$(attrID).addClass("active");
		$(this).parent("li").addClass("active");
		
		//$("#tab_container").tabs("url", 1, attrID);	
		//event.preventDefault();
		//window.location.url=#;
		//$("#tab_container").tabs("select", window.location.hash);
		//autoSizeTabs();		
		return false;
	});
	$("#tabbed_content").css({"height": (contentHeight - 10 )+"px"});
	$("#tabbed_content > div").css({"position": "absolute", "top": 0, "left": 0, "height": contentHeight+"px"});
	$("#tab_container li a").html(function(index, htm) {
		return htm.replace(/\s/g, '&nbsp;');
	});
	autoSizeTabs();
});

$(window).resize(function() {
	autoSizeTabs();
});

function autoSizeTabs() {
	// Reset the tabs to their default state
	$("#tab_container li").css({"width": "auto", "borderRightWidth": "1px"});
	$("#tab_container li:last-child").css({'borderRightWidth': '0px'});
	$("#tab_container").parent().css({"width": "632px"});
	
	// Setup some variables
	var containerWidth = $("#tab_container").innerWidth();
	var tabsWidth = 0;
	var rowCount = 1;
	
	// Go through tabs and work out how many rows there are and which tabs are on which row
	$("#tab_container li").each(function() {
		tabsWidth = tabsWidth + $(this).outerWidth();
		if (tabsWidth > containerWidth) {
			tabsWidth = 0;
			rowCount++;
		}
		$(this).addClass('tab_row_'+rowCount);
	});
	
	// Now go through the tabs in each row and pad them out to fill the container
	for (var d=1; d<=rowCount; d++) {
		var row = $(".tab_row_"+d);
		var rowWidth = 0;
		
		// Work out the space left over in the row
		for (var r=0; r<$(row).length; r++) {
			rowWidth = rowWidth + $(row[r]).outerWidth();
			
		}
		var pxDiff = containerWidth - rowWidth;
		tabExtraPx = Math.round(pxDiff / $(row).length);
		// Now add the extra padding to each of the tabs in the row
		var newWidth = 0;
		$(".tab_row_"+d+":last").css({'borderRightWidth': '0px'});
		$(row).each(function() {
			var wd = $(this).outerWidth() + tabExtraPx;
			var cssWd = $(this).innerWidth() + tabExtraPx;
			$(this).css({'width': cssWd + 'px'});
			
			newWidth = newWidth + wd;
		});
		
		// Now deal with any difference left as a result of rounding
		if (newWidth > containerWidth) {
			var diff = newWidth - containerWidth;
			var lastTab = $(".tab_row_"+d+":last");
			var nWidth = Math.round($(lastTab).innerWidth() - diff);
			var row = $(lastTab).css({'width': nWidth+'px'});;
		}
		if (newWidth < containerWidth) {
			var diff = containerWidth - newWidth;
			var lastTab = $(".tab_row_"+d+":last");
			var nWidth = Math.round($(lastTab).innerWidth() + diff);
			var row = $(lastTab).css({'width': nWidth+'px'});;
		}
		// reset the row class
		$("#tab_container li").removeClass("tab_row_"+d);
	}
	// Fix the width of the container to get around browser rounding issues
	$("#tab_container").parent().css({"width": containerWidth+'px'});
}