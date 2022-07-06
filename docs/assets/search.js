"use strict";

$(window).on('load', function () {
	$(".search-result").each((_, xresult) => {
		const result = $(xresult);
		const q = get_param(window.location, "q");
		
		$.ajax({type: "GET", dataType: "json", url: "https://api.github.com/repos/zenuas/ssrpg/contents/docs/"})
		.then((json) => {
			$.each(json, (_, blob) => {
				
				if(blob.name.slice(-3) != ".md") return;
				$.ajax({type: "GET", dataType: "text", url: blob.download_url})
				.then((text) => {
					const lines = text.split(/\r\n?|\n/);
					const finds = $.grep($.map(lines, (a, b) => {return {line: a, index: b};}), (s) => {
						return s.line.indexOf(q) >= 0;
					});
					
					if(finds.length <= 0) return;
					const name = blob.name.substr(0, blob.name.length - 3).replace(/^\d+\./, "");
					const li = $("<li></li>");
					const p = $("<p></p>");
					const a = $("<a></a>").text(name).attr("href", "https://zenuas.github.io/ssrpg/" + name + ".html#:~:text=" + q);
					const blockquote = $("<blockquote></blockquote>");
					
					$.each(finds, (_, s) => {
						blockquote
							.append($("<span class='line-number'></span>").text(s.index))
							.append(":");
						
						$.each(split_before(s.line, q), (i, x) => {
							const span = $("<span></span>");
							if(i % 2 == 1) span.attr("class", "search-highlight");
							span.text(x);
							blockquote.append(span);
						});
						blockquote.append("<br />");
					});
					result.append(li.append(p.append(a)).append(blockquote));
				});
			});
		});
	});
});

function get_param(location, name)
{
	const search = location.search.substring(1);
	const hash = {};
	$.each(search.split("&"), (_, kv) => {
		const xs = kv.split("=");
		hash[xs[0]] = decodeURIComponent(xs[1] || "");
	});
	return hash[name];
}

function split_before(s, word)
{
	if(s.length == 0) return [];
	
	const index = s.indexOf(word);
	if(index < 0) return [s];
	
	return $.merge([s.substr(0, index), word], split_before(s.slice(index + word.length), word));
}
