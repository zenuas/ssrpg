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
	return(from_htmls(html)[0]);
}

export function from_htmls(html)
{
	const dom = (new DOMParser()).parseFromString(html, "text/html");
	return(dom.body.childNodes);
}

export function appendChildAll(v, xs)
{
	if(Array.isArray(xs) ||
		NodeList.prototype.isPrototypeOf(xs) ||
		HTMLCollection.prototype.isPrototypeOf(xs))
	{
		Array.from(xs).forEach(x => v.appendChild(x));
	}
	else
	{
		v.appendChild(xs);
	}
	return(v);
}

export function removeChildAll(v)
{
	while(v.firstChild) v.removeChild(v.firstChild);
	return(v);
}
