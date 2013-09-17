
// jquery.alttext plugin 
(function($)
{
	$.fn.altText = function($options)
	{
		var opts = $.extend({}, $.fn.altText.settings, $options || {});

		return $(this).each(function()
		{
			var $this = $(this);

			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

			this.valBackup = '';
			this.focused = false;
			this.altText = $this.attr(o.source);
			this.hoverText = o.hoverState ? $this.attr(o.hoverSource) : null;

			if (o.hoverSource == 'title')
			{
				this.title = '';
			}

			$(this).unbind();

			$this.val(this.altText).css('color', o.inactiveColor)

			.focus(function()
			{
				this.focused = true;
				this.valBackup = $(this).val();

				if (this.valBackup == this.altText || (this.valBackup == this.hoverText))
				{
					$(this).val('');
				}

				$(this).css($.extend({'color': o.activeColor}, o.activeCSS));
			})

			.blur(function()
			{
				this.focused = false;

				if ($(this).val() == '')
				{
					$(this).val(this.altText);
				}

				$(this).css($.extend({'color': o.inactiveColor}, o.inactiveCSS));
			})

			.hover
			(
				function()
				{
					if (!o.hoverState) return;

					if (($(this).val() == '' || $(this).val() == this.altText) && !this.focused)
					{
						this.valBackup = $(this).val();
						$(this).val(this.hoverText);
					}

					$(this).css($.extend({'color': o.hoverColor}, o.hoverCSS));
				},

				function()
				{
					if (!o.hoverState) return;

					if ($(this).val() == this.hoverText)
					{
						$(this).val(this.valBackup);
					}

					$(this).css($.extend({'color': this.focused ? o.activeColor : o.inactiveColor}, this.focused ? o.activeCSS : o.inactiveCSS));
				}
			);
		});
	};

	// isEmpty test function
	$.fn.isEmpty = function()
	{
		return	($(this).val() == '') ||
				($(this).val() == $(this)[0].altText) ||
				($(this).val() == $(this)[0].hoverText);
	};

	// global settings
	$.fn.altText.settings =
	{
		source: 'alt',
		hoverState: false
		//hoverSource: 'title',
		//hoverCSS: { 'font-style': 'italic' },
		//inactiveColor: '#666',
		//inactiveCSS: { 'font-style': 'normal' },
		//activeColor: '#333',
		//activeCSS: { 'font-style': 'normal' },
		//hoverColor: '#444'
	};

})(jQuery);

