var findCommitLinks = function () {
	var links = $.map($('#discussion_bucket a.message'), function (a) {
		return "https://github.com" + $(a).attr("href");
	});

	links.push(document.URL.toString());
	
	return links;
};

chrome.storage.local.set({"justfoneCommitLinks": findCommitLinks()});