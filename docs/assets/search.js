"use strict";

window.addEventListener("load", () => {
	document.querySelectorAll(".search-result").forEach(async (result) => {
		const q = get_param(window.location, "q");
		
		Array.from(await (await fetch("https://api.github.com/repos/zenuas/ssrpg/contents/docs/")).json())
			.forEach(async (blob) => {
				if(blob.name.slice(-3) != ".md") return;
				
				const text = await (await fetch(blob.download_url)).text();
				const lines = text.split(/\r\n?|\n/);
				const finds = lines
					.map((a, b) => {return {line: a, index: b};})
					.filter(x => x.line.indexOf(q) >= 0);
				
				if(finds.length <= 0) return;
				const name = blob.name.substr(0, blob.name.length - 3).replace(/^\d+\./, "");
				const li = document.createElement("li");
				const p = document.createElement("p");
				const a = document.createElement("a");
				a.textContent = name;
				a.href = `https://zenuas.github.io/ssrpg/${ name }.html#:~:text=${ q }`;
				const blockquote = document.createElement("blockquote");
				
				finds.forEach(s => {
					const linenum = document.createElement("span");
					linenum.classList.add("line-number");
					linenum.textContent = s.index;
					blockquote.appendChild(linenum);
					blockquote.appendChild(document.createTextNode(":"));
					
					split_before(s.line, q).forEach((x, i) => {
						const span = document.createElement("span");
						if(i % 2 == 1) span.classList.add("search-highlight");
						span.textContent = x;
						blockquote.appendChild(span);
					});
					blockquote.appendChild(document.createElement("br"));
				});
				
				// <li><p><a /></p><blockquote /></li>
				p.appendChild(a);
				li.appendChild(p);
				li.appendChild(blockquote);
				result.appendChild(li);
			});
	});
});

function get_param(location, name)
{
	const search = location.search.substring(1);
	const hash = {};
	search.split("&").forEach(kv => {
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
	
	return [s.substr(0, index), word].concat(split_before(s.slice(index + word.length), word));
}
