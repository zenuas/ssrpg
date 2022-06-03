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
		table_col_visible(table, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
		
		const opts = [
			{name: "武装",           visible: false, columns: [2, 3, 4]},
			{name: "武装威力",       visible: false, columns: [5, 9, 13]},
			{name: "武装装填時間",   visible: false, columns: [6, 10, 14]},
			{name: "武装発射数",     visible: false, columns: [7, 11, 15]},
			{name: "武装貫通力",     visible: false, columns: [8, 12, 16]},
			{name: "機関",           visible: false, columns: [17]},
			{name: "ドロップ設計図", visible: false, columns: [18]},
			{name: "カット率",       visible: false, columns: [19, 20, 21]},
			{name: "回避率",         visible: false, columns: [22, 23]},
			{name: "回復間隔",       visible: false, columns: [24]},
			{name: "登場ステージ",   visible: true,  columns: [25]}
		];
		
		opts
			.map((opt) => {
				const v  = $("<span>" + (opt.visible ? "非表示" : "表示") + "</span>")[0];
				const a  = $("<a href='javascript:void(0)' class='box'>" + opt.name + "</a>")[0];
				const li = $("<li class='buttons" + (opt.visible ? " pushed" : "") + "'></li>").append(a);
				a.append(v);
				a.onclick = () => {
					table_col_visible(table, opt.columns);
					opt.visible = !opt.visible;
					$(v).text(opt.visible ? "非表示" : "表示");
					li.removeClass("pushed");
					if(opt.visible) li.addClass("pushed");
				};
				return li;
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
});
