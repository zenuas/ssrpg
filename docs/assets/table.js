"use strict";

export function col_visible(table, visible, cols)
{
	const s = cols
		.map(col => `thead th:nth-child(${ col }), tbody tr td:nth-child(${ col })`)
		.join(", ");
	
	table.querySelectorAll(s).forEach(x => x.classList.toggle("none", !visible));
}

export function row_filter(table, visible, f)
{
	const trs = table.querySelectorAll("tbody tr")
	trs.forEach(x => x.classList.remove("none"));
	if(visible) return;
	
	const s = Array.from(trs)
		.map((row, i) => ({row: row, index: i}))
		.filter(x => f(x.row, x.index))
		.forEach(x => x.row.classList.toggle("none", !visible));
}
