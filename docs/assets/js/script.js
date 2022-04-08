"use strict";

function table_col_visible(table, cols)
{
	const s = cols
		.map((col) => "thead th:nth-child(" + col + "), tbody tr td:nth-child(" + col + ")")
		.join(", ");
	
	$(table).find(s).toggle();
}

$(window).on('load', function () {
	$(".enemies-list").each((_, list) => {
		$(list).attr("class", "commands");
		const table = list.nextSibling.nextSibling;
		$(table).tablesorter({headers: {12: { sorter: "text" }}});
		table_col_visible(table, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		
		const opts = [
			{name: "武装",           visible: false, columns: [2, 3, 4]},
			{name: "機関",           visible: false, columns: [5]},
			{name: "ドロップ設計図", visible: false, columns: [6]},
			{name: "カット率",       visible: false, columns: [7, 8, 9]},
			{name: "回避率",         visible: false, columns: [10, 11]},
			{name: "回復間隔",       visible: false, columns: [12]},
			{name: "登場ステージ",   visible: true,  columns: [13]}
		];
		
		opts
			.map((opt) => {
				const v = $("<span>" + (opt.visible ? "非表示" : "表示") + "</span>")[0];
				const a = $("<a href='javascript:void(0)' class='box'>" + opt.name + "</a>")[0];
				a.append(v);
				a.onclick = () => {
					table_col_visible(table, opt.columns);
					opt.visible = !opt.visible;
					$(v).text(opt.visible ? "非表示" : "表示");
				};
				return $("<li class='buttons'></li>").append(a);
			})
			.forEach((x) => x.appendTo(list));
	});
	
	$("table:not(.tablesorter)").tablesorter();
	
	$("details[id^=details-cookie-]").each((_, xdetails) => {
		const details = $(xdetails);
		const id = xdetails.id;
		
		const value = $.cookie(id);
		if(value == "close")
		{
			details.removeAttr("open");
		}
		
		details.on("toggle", () => {
			const opend = details.attr("open") == "open";
			$.cookie(id, opend ? "open" : "close", { expires: 7 });
		});
	});
	
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
					const name = blob.name.substr(0, blob.name.length - 3);
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
