/*--- tabs ---*/
function initTabs(tabsContainer, tabsList, tabItem, useHrefForTarget){
	var foundHash = '';
	if (window.location.hash !== undefined)
	{
		foundHash = window.location.hash.toString();
	}
    var max_height = 0;
	/* For Anchor */
	$(".tabList").find('a').each(function() {
		if ($(this).height() > max_height) max_height = $(this).height();
	});
	$(".tabList").find('a').each(function() {
		$(this).height(max_height);
	});
	/* For Span */
	$(".tabList").find('span').each(function() {
		if ($(this).height() > max_height) max_height = $(this).height();
	});
	$(".tabList").find('span').each(function() {
		$(this).height(max_height);
	});
	$('.spacer').height(max_height);
        
	$(tabsContainer).each(function(tabIndex){
     if($(".tabList").attr('id') != 'productFinderGrid'){           
                var _hold = $(this);
                var _btn = _hold.find(tabsList);
		var _box = _hold.find(tabItem);

                var _a = _btn.index(_btn.filter('.active:eq(0)'));
		if(_a == -1) _a = 0;
		_btn.removeClass('active').eq(_a).addClass('active');
		_box.removeClass('active').css({
			position: 'absolute',
			top:'-9999px',
			left:'-9999px'
		});
		_box.eq(_a).addClass('active').css({
			position: 'static',
			top:'0',
			left:'0'
		});
		
		_btn.click(function(event){
                        
                        var _contentIndex = _btn.index(this);
                        
                        if(useHrefForTarget==true){
                            _contentIndex = $(_box).index($($(this).find('a').attr('href')));
                        }
                        
                        
			event.preventDefault();
			changeTab(_contentIndex);
			return false;
		});
		_btn.each(function(btnIndex) {
			if ("#"+$(this).find('a').attr('rel') == foundHash && foundHash != '')
			{
				changeTab(btnIndex);
			}
		});
	}
        function changeTab(_ind){
                if(_ind != _a){
                        _btn.eq(_a).removeClass('active');
                        _btn.eq(_ind).addClass('active');
                        if (_btn.eq(_ind).find('a').attr('rel') != '' && _btn.eq(_ind).find('a').attr('rel') != undefined) window.location.hash = '#' + _btn.eq(_ind).find('a').attr('rel');
                        _box.eq(_a).removeClass('active').css({
                                position: 'absolute',
                                top:'-9999px',
                                left:'-9999px'
                        });
                        _box.eq(_ind).addClass('active').css({
                                position: 'static',
                                top:'0',
                                left:'0'
                        });
                        _a = _ind;
                }
        }
    });
}


function initHoverTabs(tabsContainer, tabsList, tabItem, useHrefForTarget){
	var foundHash = '';
	if (window.location.hash !== undefined)
	{
		foundHash = window.location.hash.toString();
	}
    var max_height = 0;
	/* For Anchor */
	$(".tabList").find('a').each(function() {
		if ($(this).height() > max_height) max_height = $(this).height();
	});
	$(".tabList").find('a').each(function() {
		$(this).height(max_height);
	});
	/* For Span */
	$(".tabList").find('span').each(function() {
		if ($(this).height() > max_height) max_height = $(this).height();
	});
	$(".tabList").find('span').each(function() {
		$(this).height(max_height);
	});
	$('.spacer').height(max_height);
        
	$(tabsContainer).each(function(tabIndex){
     if($(".tabList").attr('id') != 'productFinderGrid'){           
                var _hold = $(this);
                var _btn = _hold.find(tabsList);
		var _box = _hold.find(tabItem);

                var _a = _btn.index(_btn.filter('.active:eq(0)'));
		if(_a == -1) _a = 0;
		_btn.removeClass('active').eq(_a).addClass('active');
		_box.removeClass('active').css({
			position: 'absolute',
			top:'-9999px',
			left:'-9999px'
		});
		_box.eq(_a).addClass('active').css({
			position: 'static',
			top:'0',
			left:'0'
		});
		
		_btn.hover(function(event){
                        
                        var _contentIndex = _btn.index(this);
                        
                        if(useHrefForTarget==true){
                            _contentIndex = $(_box).index($($(this).find('a').attr('href')));
                        }
                        
                        
			event.preventDefault();
			changeTab(_contentIndex);
			return false;
		});
		_btn.each(function(btnIndex) {
			if ("#"+$(this).find('a').attr('rel') == foundHash && foundHash != '')
			{
				changeTab(btnIndex);
			}
		});
	}
        function changeTab(_ind){
                if(_ind != _a){
                        _btn.eq(_a).removeClass('active');
                        _btn.eq(_ind).addClass('active');
                        if (_btn.eq(_ind).find('a').attr('rel') != '' && _btn.eq(_ind).find('a').attr('rel') != undefined) window.location.hash = '#' + _btn.eq(_ind).find('a').attr('rel');
                        _box.eq(_a).removeClass('active').css({
                                position: 'absolute',
                                top:'-9999px',
                                left:'-9999px'
                        });
                        _box.eq(_ind).addClass('active').css({
                                position: 'static',
                                top:'0',
                                left:'0'
                        });
                        _a = _ind;
                }
        }
    });
}
