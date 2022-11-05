"use strict";

import * as Dom from "./dom.js";

export function attach(table)
{
	const ths = table.querySelectorAll(":scope > thead > tr > th");
	
	ths.forEach((th, index) => {
		th.dataset.sort = "none";
		th.addEventListener("click", () => {
			const prev = th.dataset.sort;
			ths.forEach(x => x.dataset.sort = "none");
			th.dataset.sort = prev == "asc" ? "desc" : "asc";
			sort(table, index, th.dataset.sort == "asc");
		});
	});
	
	table.addEventListener("update", () => {
		const select = Array.from(ths)
			.map((x, i) => ({dom: x, index: i}))
			.filter(x => x.dom.dataset.sort != "none");
		if(select.length == 0) return;
		sort(table, select[0].index, select[0].dom.dataset.sort == "asc");
	});
	
	table.classList.add("table-sort");
}

function sort(table, index, asc)
{
	const tbody = table.querySelector(":scope > tbody");
	const trs   = Array.from(tbody.querySelectorAll(":scope > tr"))
		.map((x, i) => ({tr: x, value: x.querySelector(`:scope > td:nth-child(${ index + 1 })`).textContent, row: i}));
	
	const sorted = trs.sort((a, b) => compare(a.value, b.value));
	
	Dom.removeChildAll(tbody);
	(asc ? sorted : sorted.reverse()).forEach(x => tbody.appendChild(x.tr));
}

export function compare(a, b)
{
	const get_num = (s, i) => {
		const prev = i;
		if(s[i] == "-") i++;
		if(i >= s.length || s[i] < "0" || s[i] > "9") return({isnumeric: false});
		
		let value = 0;
		let point = 0;
		while(i < s.length)
		{
			if(s[i] == ".")
			{
				point = 1;
			}
			else if(s[i] != ",")
			{
				if(s[i] < "0" || s[i] > "9") break;
				if(point > 0)
				{
					value += (s.charCodeAt(i) - "0".charCodeAt(0)) * Math.pow(10, -point);
					point++;
				}
				else
				{
					value = value * 10 + (s.charCodeAt(i) - "0".charCodeAt(0));
				}
			}
			i++;
		}
		if(s[prev] == "-") value = -value;
		
		return({isnumeric: true, value: value, count: i - prev});
	};
	
	let ai = 0;
	let bi = 0;
	while(true)
	{
		if(ai <  a.length && bi >= b.length) return(-1);
		if(ai >= a.length && bi <  b.length) return(1);
		if(ai >= a.length && bi >= b.length) return(0);
		
		const an = get_num(a, ai);
		const bn = get_num(b, bi);
		if(an.isnumeric && bn.isnumeric)
		{
			if(an.value != bn.value) return(an.value - bn.value);
			ai += an.count;
			bi += bn.count;
		}
		else
		{
			const ac = a.charCodeAt(ai);
			const bc = b.charCodeAt(bi);
			if(ac != bc) return(ac - bc);
			ai++;
			bi++;
		}
	}
	return(0);
}
