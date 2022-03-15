"use strict";

function table_col_visible(table, cols)
{
	const s = cols
		.map((col) => "thead th:nth-child(" + col + "), tbody tr td:nth-child(" + col + ")")
		.join(", ");
	
	$(table).find(s).toggle();
}

$(window).on('load', function () {
	const list  = $("#visible_list")[0];
	const table = list.nextSibling.nextSibling;
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
			const a = $("<a href='javascript:void(0)'>" + opt.name + "</a>")[0];
			a.append(v);
			a.onclick = () => {
				table_col_visible(table, opt.columns);
				opt.visible = !opt.visible;
				$(v).text(opt.visible ? "非表示" : "表示");
			};
			return $("<li></li>").append(a);
		})
		.forEach((x) => x.appendTo(list));
});
