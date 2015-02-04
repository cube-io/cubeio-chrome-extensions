var isWide = false;

$(document).keydown(function (event)
{
	if (doToggle(event))
	{
		toggle();
	}
});

var doToggle = function (event)
{
	return event.ctrlKey && event.altKey && event.which == 88;
}

function toggle()
{
	if(isWide)
	{
		$('.container').css('width', '980');
		$('#js-repo-pjax-container').css('float', 'left');
		$('#js-repo-pjax-container').css('width', '980');
	}
	else
	{
		$('.container').css('width', 'auto');
		$('#js-repo-pjax-container').css('float', 'none');
		$('#js-repo-pjax-container').css('width', 'auto');
	}
	
	isWide = !isWide;
}
