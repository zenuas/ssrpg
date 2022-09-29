"use strict";

export function col_visible(table, visible, cols)
{
	const s = cols
		.map(col => `thead th:nth-child(${ col }), tbody tr td:nth-child(${ col })`)
		.join(", ");
	
	table.querySelectorAll(s).forEach(x => x.classList.toggle("none", !visible));
}
