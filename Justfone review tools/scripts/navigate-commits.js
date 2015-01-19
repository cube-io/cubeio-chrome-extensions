$(document).keydown(function (event)
{
	if (navigate(event))
	{
		chrome.storage.local.get(null, function (options)
		{
			$.each(options.justfoneCommitLinks, function (index, value)
			{
				if(value.indexOf(document.URL) === -1)
				{
					return;
				}
				
				if (event.which == 37)
				{
					window.location = getPreviousLink(index, options.justfoneCommitLinks);
				}
				else if (event.which == 39)
				{
					window.location = getNextLink(index, options.justfoneCommitLinks);
				}

				return false;
			});
		});
	}
});

var navigate = function (event)
{
	return event.ctrlKey && event.shiftKey && (event.which == 37 || event.which == 39)
}

var getPreviousLink = function (index, links)
{
	if (index == 0)
	{
		return links[links.length - 1];
	}

	return links[index - 1];
};

var getNextLink = function (index, links)
{
	if (index == links.length - 1)
	{
		return links[0];
	}

	return links[index + 1];
};
