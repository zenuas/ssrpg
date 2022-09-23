"use strict";

import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs";
import * as TableSort from "./table-sort.js";
import * as Dom from "./dom.js";

function table_col_visible(table, visible, cols)
{
	const s = cols
		.map(col => `thead th:nth-child(${ col }), tbody tr td:nth-child(${ col })`)
		.join(", ");
	
	table.querySelectorAll(s).forEach(x => x.classList.toggle("none", !visible));
}

window.addEventListener("load", () => {
	document.querySelectorAll(".enemies-list").forEach(list => {
		list.classList.add("commands");
		const table = list.nextSibling.nextSibling;
		const isbattle = list.classList.contains("rank-battle");
		table_col_visible(table, false, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28, 29, 30, 31]);
		
		const parts = [
			{name: "主砲", pushed: true},
			{name: "副砲", pushed: true},
			{name: "弾幕", pushed: true}
		];
		
		const parts_list       = Dom.create("ul", {className: "parts-list commands none"});
		const level_list       = Dom.create("ul", {className: "level-list commands none"});
		const calculation_list = Dom.create("ul", {className: "calculation-list commands none"});
		list.parentNode.insertBefore(parts_list, list.nextElementSibling);
		
		if(!isbattle)
		{
			parts_list.parentNode.insertBefore(level_list,       parts_list.nextElementSibling);
			level_list.parentNode.insertBefore(calculation_list, level_list.nextElementSibling);
		}
		
		const opts_update = () => {
			parts_list.classList.toggle("none", opts.filter(x => x.name.startsWith("武装") && x.pushed).length == 0);
			
			const main_visible    = parts.filter(x => x.name.startsWith("主砲") && x.pushed).length > 0;
			const sub_visible     = parts.filter(x => x.name.startsWith("副砲") && x.pushed).length > 0;
			const barrage_visible = parts.filter(x => x.name.startsWith("弾幕") && x.pushed).length > 0;
			
			opts.filter(x => x.name.startsWith("武装")).forEach(x => {
				table_col_visible(table, x.pushed && main_visible,    [x.columns[0]]);
				table_col_visible(table, x.pushed && sub_visible,     [x.columns[1]]);
				table_col_visible(table, x.pushed && barrage_visible, [x.columns[2]]);
			});
			
			const hidden = opts.filter(x => (x.name == "武装威力" || x.name == "装甲" || x.name == "資金功績救出") && x.pushed).length == 0;
			level_list.classList.toggle("none", hidden);
			calculation_list.classList.toggle("none", hidden);
		};
		
		const opts = [
			{name: "武装",           pushed: false, columns: [2, 3, 4]},
			{name: "武装威力",       pushed: false, columns: [5, 9, 13]},
			{name: "武装装填時間",   pushed: false, columns: [6, 10, 14]},
			{name: "武装発射数",     pushed: false, columns: [7, 11, 15]},
			{name: "武装貫通力",     pushed: false, columns: [8, 12, 16]},
			{name: "機関",           pushed: false, columns: [17]},
			{name: "ドロップ設計図", pushed: false, columns: [18]},
			{name: "カット率",       pushed: false, columns: [19, 20, 21]},
			{name: "回避率",         pushed: false, columns: [22, 23]},
			{name: "回復間隔",       pushed: false, columns: [24]},
			{name: "装甲",           pushed: false, columns: [25]},
			{name: "速度",           pushed: false, columns: [26]},
			{name: "対火電",         pushed: false, columns: [27, 28]},
			{name: "資金功績救出",   pushed: false, columns: [29, 30, 31]},
			{name: "登場ステージ",   pushed: true,  columns: [32]}
		];
		
		opts
			.map(opt => {
				const v  = Dom.create("span", {}, opt.pushed ? "非表示" : "表示");
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, opt.name);
				const li = Dom.create("li", {className: "buttons" + (opt.pushed ? " pushed" : "")});
				li.appendChild(a);
				a.appendChild(v);
				a.onclick = () => {
					table_col_visible(table, !opt.pushed, opt.columns);
					opt.pushed = !opt.pushed;
					v.textContent = opt.pushed ? "非表示" : "表示";
					li.classList.remove("pushed");
					if(opt.pushed) li.classList.add("pushed");
					opts_update();
				};
				return li;
			})
			.forEach(x => list.appendChild(x));
		
		const area_name = document.querySelector("h2:first-child").textContent;
		const is_solar_systems = [
			"月",
			"火星",
			"アステロイドベルト",
			"木星",
			"土星",
			"天王星",
			"海王星",
			"冥王星",
			"帝国軍太陽系要塞",
			"帝国軍移民船団"
		].includes(area_name);
		
		const levels = [
			{name: "一般兵", pushed: true,  min:    0, max:    0, boss:    0},
			{name: "熟練兵", pushed: false, min:    1, max:   10, boss:   11},
			{name: "強化兵", pushed: false, min:   11, max:   30, boss:   31},
			{name: "親衛隊", pushed: false, min:   31, max:  100, boss:  101},
			{name: "覚醒者", pushed: false, min:  101, max:  998, boss:  999},
			{name: "光化",   pushed: false, min: 1000, max: 1999, boss: 2000},
			{name: "真破",   pushed: false, min: 1500, max: 1999, boss: 2000}
		];
		
		const calculations = [
			{name: "平均", pushed: false,             boss: false, func: (a, b)    => Math.floor((a + b) / 2)},
			{name: "最小", pushed: false,             boss: false, func: (a, b)    => Math.min(a, b)},
			{name: "最大", pushed: is_solar_systems,  boss: false, func: (a, b)    => Math.max(a, b)},
			{name: "ボス", pushed: !is_solar_systems, boss: true,  func: (a, b, c) => c}
		];
		
		const rank_to_lv = (rank) => {
			if(rank <=  48) return(0);
			if(rank <=  98) return(Math.min(2000,  rank -  48));
			if(rank <= 148) return(Math.min(2000, (rank -  98) *  3 +   50));
			if(rank <= 198) return(Math.min(2000, (rank - 148) *  7 +  200));
			if(rank <= 248) return(Math.min(2000, (rank - 198) * 12 +  550));
			if(rank <= 298) return(Math.min(2000, (rank - 248) * 18 + 1150));
			return(Math.min(2000, (rank - 298) * 30 + 2050));
		};
		
		const change_cols = "tbody tr td:nth-child(5), tbody tr td:nth-child(9), tbody tr td:nth-child(13), tbody tr td:nth-child(25), tbody tr td:nth-child(29), tbody tr td:nth-child(30)";
		table.querySelectorAll(change_cols).forEach(x => x.xvalue = x.textContent - 0);
		const power_update = () => {
			const level = levels.filter(x => x.pushed)[0];
			const calc  = calculations.filter(x => x.pushed)[0];
			
			table.querySelectorAll(change_cols).forEach(td => {
				const td_index = Array.prototype.indexOf.call(td.parentNode.children, td);
				const value    = td.xvalue - 0;
				if(isNaN(value)) return;
				
				const stage = td.parentNode.children[32 - 1].textContent;
				const boss  = isbattle ? true : stage.indexOf("ボス") >= 0;
				const rank  = isbattle ? parseInt(stage.match(/ランク(\d+～)?(\d+)/)[2]) : 0;
				const lv    = isbattle ? rank_to_lv(rank) : calc.func(level.min, level.max, boss ? level.boss : level.max);
				if(td_index <= 12)
				{
					const weapon     = td.parentNode.children[td_index == 4 ? 1 : td_index == 8 ? 2 : 3].textContent;
					const power_plus = weapon.indexOf("Lv補正") >= 0 ? lv : weapon.indexOf("Lv*5補正") >= 0 ? lv * 5 : rank >= 300 ? rank : 0;
					td.textContent = Math.floor(value + power_plus + Math.ceil(value * lv / 2)).toLocaleString();
				}
				else
				{
					td.textContent = Math.floor(value + Math.ceil(value * lv / (td_index == 29 - 1 ? 10 : 2))).toLocaleString();
				}
			});
			table.dispatchEvent(new Event("update"));
		};
		power_update();
		
		parts
			.map(part => {
				const a  = Dom.create("a",  {href: "javascript:void(0)", className: "box"}, part.name);
				const li = Dom.create("li", {className: "buttons" + (part.pushed ? " pushed" : "")});
				li.appendChild(a);
				part.li = li;
				a.onclick = () => {
					part.pushed = !part.pushed;
					part.li.classList.toggle("pushed", part.pushed);
					opts_update();
				};
				return li;
			})
			.forEach(x => parts_list.appendChild(x));
		
		levels
			.map(level => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, level.name);
				const li = Dom.create("li", {className: "buttons" + (level.pushed ? " pushed" : "")});
				li.appendChild(a);
				level.li = li;
				a.onclick = () => {
					levels.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					level.pushed = true;
					level.li.classList.add("pushed");
					power_update();
				};
				return li;
			})
			.forEach(x => level_list.appendChild(x));
		
		calculations
			.map((calc) => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, calc.name);
				const li = Dom.create("li", {className: "buttons" + (calc.pushed ? " pushed" : "")});
				li.appendChild(a);
				calc.li = li;
				a.onclick = () => {
					calculations.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					calc.pushed = true;
					calc.li.classList.add("pushed");
					power_update();
				};
				if(calc.boss && is_solar_systems) li.classList.add("none");
				return li;
			})
			.forEach(x => calculation_list.appendChild(x));
	});
	
	document.querySelectorAll("table:not(.table-sort)").forEach(x => TableSort.attach(x));
	
	document.querySelectorAll("details[id^=details-cookie-]").forEach(details => {
		const id    = details.id;
		const value = Cookies.get(id);
		if(value == "close") details.open = false;
		details.addEventListener("toggle", () => Cookies.set(id, details.open ? "open" : "close", { expires: 7 }));
	});
	
	document.querySelectorAll("input[data-auto-cookie], select[data-auto-cookie], textarea[data-auto-cookie]").forEach(input => {
		const id    = "data-auto-cookie" + (
			input.dataset.autoCookie != undefined && input.dataset.autoCookie != "" ? input.dataset.autoCookie :
			input.name               != undefined && input.name               != "" ? input.name :
			input.id
			);
		const value = Cookies.get(id);
		if(value != undefined && value != "")
		{
			if(input.type == "checkbox" || input.type == "radio")
			{
				input.checked = value == "true";
			}
			else
			{
				input.value = value;
			}
			input.dispatchEvent(new Event("input",  {bubbles: true, cancelable: true}));
			input.dispatchEvent(new Event("change", {bubbles: true, cancelable: true}));
		}
		
		if(input.type == "checkbox" || input.type == "radio")
		{
			input.addEventListener("change", () => Cookies.set(id, input.checked, { expires: 7 }));
		}
		else
		{
			input.addEventListener("change", () => Cookies.set(id, input.value, { expires: 7 }));
		}
	});
	
	document.querySelectorAll("input[type=number]").forEach(input => {
		const min  = parseFloat(input.min);
		const max  = parseFloat(input.max);
		const step = input.step;
		
		const enable_e     = false;
		const enable_minus = !(!isNaN(min) && min >= 0);
		const enable_point = !(step != "" && step.indexOf(".") < 0);
		
		input.addEventListener("input", () => {
			const v = parseFloat(input.value);
			if(isNaN(v))
			{
				if(input.required) input.value = isNaN(min) ? 0 : min;
				return;
			}
			
			if(!isNaN(min) && min > v) input.value = min;
			if(!isNaN(max) && max < v) input.value = max;
		});
		
		input.addEventListener("keydown", e => {
			if(!enable_e && e.keyCode == 69) return false;
			if(!enable_minus && (e.keyCode == 189 || e.keyCode == 109)) return false;
			if(!enable_point && (e.keyCode == 190 || e.keyCode == 110)) return false;
			return true;
		});
	});
});
