"use strict";

export function create(tag, option, text)
{
	const p = document.createElement(tag);
	if(option)
	{
		Object.keys(option).forEach(key => p[key] = option[key]);
	}
	if(typeof text === "string")
	{
		p.textContent = text;
	}
	return(p);
}

export function from_html(html)
{
	const dom = (new DOMParser()).parseFromString(html, "text/html");
	return(dom.body.childNodes[0]);
}

export function removeChildAll(v)
{
	while(v.firstChild) v.removeChild(v.firstChild);
}
