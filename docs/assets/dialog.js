"use strict";

import * as Dom from "./dom.js";

export function show_modal(dom)
{
	const dialog   = Dom.from_html(`<dialog><aside></aside></dialog>`);
	const dialogin = dialog.querySelector("aside");
	dialog.onclick = e => {
		if(e.target.closest("aside") === null)
		{
			dialog.close();
			document.body.style.overflow = "auto";
			document.body.removeChild(dialog);
		}
	};
	document.body.appendChild(dialog);
	document.body.style.overflow = "hidden";
	dialogin.appendChild(dom);
	dialog.showModal();
}
