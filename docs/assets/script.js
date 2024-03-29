"use strict";

import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs";
import * as TableSort from "./table-sort.js";
import * as Dom       from "./dom.js";
import * as Table     from "./table.js";

window.addEventListener("load", () => {
	document.querySelectorAll("#enemies-list").forEach(table => {
		const area_name = document.querySelector("h2:first-child").firstChild.textContent.trim();
		const is_battle = area_name == "宇宙闘技場";
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
		const is_onepunch = [
			"射爆場",
			"主砲射爆場",
			"試剣場",
			"弾幕射爆場"
		].includes(area_name);
		const is_not_defensive_ship = [
			"宇宙闘技場",
			"射爆場",
			"主砲射爆場",
			"試剣場",
			"弾幕射爆場",
			"ポルックスα",
			"水星",
			"カノープス",
			"ベルセルク",
			"惑星サーズ",
			"オルフェウス",
			"ネオ・コロニー",
			"スコーピオ"
		].includes(area_name);
		
		Table.col_visible(table, false, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28, 29, 30, 31]);
		
		const parts = [
			{name: "主砲", pushed: true},
			{name: "副砲", pushed: true},
			{name: "弾幕", pushed: true}
		];
		
		const commands_list    = Dom.create("ul", {className: "commands-list commands"});
		const parts_list       = Dom.create("ul", {className: "parts-list commands none"});
		const level_list       = Dom.create("ul", {className: "level-list commands none"});
		const calculation_list = Dom.create("ul", {className: "calculation-list commands none"});
		const defence_list     = Dom.create("ul", {className: "defence-list commands none"});
		const dps_list         = Dom.create("ul", {className: "dps-list commands none"});
		table.parentNode.insertBefore(commands_list, table);
		commands_list.parentNode.insertBefore(parts_list, commands_list.nextElementSibling);
		parts_list.parentNode.insertBefore(defence_list, parts_list.nextElementSibling);
		defence_list.parentNode.insertBefore(dps_list, defence_list.nextElementSibling);
		
		if(!is_battle && !is_onepunch)
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
				Table.col_visible(table, x.pushed && main_visible,    [x.columns[0]]);
				Table.col_visible(table, x.pushed && sub_visible,     [x.columns[1]]);
				Table.col_visible(table, x.pushed && barrage_visible, [x.columns[2]]);
			});
			
			const damege = opts.filter(x => x.name == "武装威力" && x.pushed).length == 0;
			const hidden = opts.filter(x => (x.name == "武装威力" || x.name == "装甲" || x.name == "資金功績救出") && x.pushed).length == 0;
			level_list.classList.toggle("none", hidden);
			calculation_list.classList.toggle("none", hidden);
			defence_list.classList.toggle("none", damege);
			dps_list.classList.toggle("none", damege);
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
					Table.col_visible(table, !opt.pushed, opt.columns);
					opt.pushed = !opt.pushed;
					v.textContent = opt.pushed ? "非表示" : "表示";
					li.classList.remove("pushed");
					if(opt.pushed) li.classList.add("pushed");
					opts_update();
				};
				return li;
			})
			.forEach(x => commands_list.appendChild(x));
		
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
		
		const defensive_ship = [
			{name: "防御艦0", pushed: true,  num: 0},
			{name: "1",       pushed: false, num: 1},
			{name: "2",       pushed: false, num: 2},
			{name: "3",       pushed: false, num: 3},
			{name: "4",       pushed: false, num: 4},
			{name: "5",       pushed: false, num: 5},
			{name: "6",       pushed: false, num: 6},
			{name: "7",       pushed: false, num: 7},
			{name: "8",       pushed: false, num: 8},
			{name: "9",       pushed: false, num: 9}
		];
		
		const defence = [
			{name: "旗艦防御ゼロ", pushed: true,  num: 0},
			{name: "旗艦防御MAX",  pushed: false, num: 1999600}
		];
		
		const dps = [
			{name: "単発威力", pushed: true,  num: 0},
			{name: "DPS",      pushed: false, num: 1},
			{name: "DPS*30",   pushed: false, num: 30}
		];
		
		const evasion = [
			{name: "回避0", pushed: true,  num: 0},
			{name: "10",    pushed: false, num: 10},
			{name: "20",    pushed: false, num: 20},
			{name: "30",    pushed: false, num: 30},
			{name: "40",    pushed: false, num: 40},
			{name: "50",    pushed: false, num: 50},
			{name: "60",    pushed: false, num: 60},
			{name: "70",    pushed: false, num: 70},
			{name: "80",    pushed: false, num: 80},
			{name: "90",    pushed: false, num: 90}
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
			const level   = levels.filter(x => x.pushed)[0];
			const calc    = calculations.filter(x => x.pushed)[0];
			const defship = defensive_ship.filter(x => x.pushed)[0].num;
			const def     = defence.filter(x => x.pushed)[0].num;
			const dpstype = dps.filter(x => x.pushed)[0].num;
			const eva     = evasion.filter(x => x.pushed)[0].num;
			
			table.querySelectorAll(change_cols).forEach(td => {
				const td_index = Array.prototype.indexOf.call(td.parentNode.children, td);
				const value    = td.xvalue - 0;
				if(isNaN(value)) return;
				
				const stage = td.parentNode.children[32 - 1].textContent;
				const boss  = is_battle ? true : stage.indexOf("ボス") >= 0;
				const rank  = is_battle ? parseInt(stage.match(/ランク(\d+～)?(\d+)/)[2]) : 0;
				const lv    = is_battle ? rank_to_lv(rank) : calc.func(level.min, level.max, boss ? level.boss : level.max);
				if(td_index <= 12)
				{
					const weapon     = td.parentNode.children[td_index == 4 ? 1 : td_index == 8 ? 2 : 3].textContent;
					const loading    = parseFloat(td.parentNode.children[td_index + 1].textContent);
					const firing     = parseInt(td.parentNode.children[td_index + 2].textContent);
					const power_plus = weapon.indexOf("Lv補正") >= 0 ? lv : weapon.indexOf("Lv*5補正") >= 0 ? lv * 5 : rank >= 300 ? rank : 0;
					const fixation   = weapon.indexOf("光拳：") >= 0 || weapon.indexOf("メタルソード") >= 0 || weapon.indexOf("ナインテイル") >= 0;
					const hit        = weapon.match(/命中\+(\d+)%/);
					const hitrate    = hit ? parseInt(hit[1]) : 0;
					const defshipv   = fixation ? 0 : defship;
					const defv       = fixation ? 0 : def;
					const options    = eva == 0 && dpstype == 0 ? undefined : {minimumFractionDigits: 2, maximumFractionDigits: 2};
					const damage     = value == 0 ? 0 : Math.max(1, Math.ceil((value + Math.ceil(value * lv / 2)) * (10 - defshipv) / 10) + power_plus - defv);
					const nps        = dpstype == 0 || isNaN(loading) || isNaN(firing) ? 1 : 1 / loading * firing * dpstype;
					td.textContent = (damage * nps * Math.max(0, Math.min(100, 100 - eva + hitrate)) / 100).toLocaleString(undefined, options);
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
			.map((elment) => {
				const a  = Dom.create("a",  {href: "javascript:void(0)", className: "box"}, elment.name);
				const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
				li.appendChild(a);
				elment.li = li;
				a.onclick = () => {
					elment.pushed = !elment.pushed;
					elment.li.classList.toggle("pushed", elment.pushed);
					opts_update();
				};
				return li;
			})
			.forEach(x => parts_list.appendChild(x));
		
		levels
			.map((elment) => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, elment.name);
				const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
				li.appendChild(a);
				elment.li = li;
				a.onclick = () => {
					levels.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					elment.pushed = true;
					elment.li.classList.add("pushed");
					power_update();
				};
				return li;
			})
			.forEach(x => level_list.appendChild(x));
		
		calculations
			.map((elment) => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, elment.name);
				const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
				li.appendChild(a);
				elment.li = li;
				a.onclick = () => {
					calculations.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					elment.pushed = true;
					elment.li.classList.add("pushed");
					power_update();
				};
				if(elment.boss && is_solar_systems) li.classList.add("none");
				return li;
			})
			.forEach(x => calculation_list.appendChild(x));
		
		if(!is_not_defensive_ship)
		{
			defensive_ship
				.map((elment) => {
					const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, elment.name);
					const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
					li.appendChild(a);
					elment.li = li;
					a.onclick = () => {
						defensive_ship.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
						elment.pushed = true;
						elment.li.classList.add("pushed");
						power_update();
					};
					return li;
				})
				.forEach(x => defence_list.appendChild(x));
		}
		
		defence
			.map((elment) => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, elment.name);
				const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
				li.appendChild(a);
				elment.li = li;
				a.onclick = () => {
					defence.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					elment.pushed = true;
					elment.li.classList.add("pushed");
					power_update();
				};
				return li;
			})
			.forEach(x => defence_list.appendChild(x));
		
		dps
			.map((elment) => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, elment.name);
				const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
				li.appendChild(a);
				elment.li = li;
				a.onclick = () => {
					dps.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					elment.pushed = true;
					elment.li.classList.add("pushed");
					power_update();
				};
				return li;
			})
			.forEach(x => dps_list.appendChild(x));
		
		evasion
			.map((elment) => {
				const a  = Dom.create("a", {href: "javascript:void(0)", className: "box"}, elment.name);
				const li = Dom.create("li", {className: "buttons" + (elment.pushed ? " pushed" : "")});
				li.appendChild(a);
				elment.li = li;
				a.onclick = () => {
					evasion.forEach(x => {x.pushed = false; x.li.classList.remove("pushed");});
					elment.pushed = true;
					elment.li.classList.add("pushed");
					power_update();
				};
				return li;
			})
			.forEach(x => dps_list.appendChild(x));
		
		table.querySelectorAll("tbody tr td:nth-child(1)").forEach(td => {
			const name_v = td.textContent;
			const name_a = Dom.create("a", {target: "_blank", href: "%E6%95%B5%E8%89%A6%E3%83%87%E3%83%BC%E3%82%BF.html?q=" + encodeURI(name_v)}, name_v);
			Dom.removeChildAll(td);
			td.appendChild(name_a);
		});
		table.querySelectorAll("tbody tr td:nth-child(2), tbody tr td:nth-child(3), tbody tr td:nth-child(4)").forEach(td => {
			const name_v = td.textContent;
			const name   = name_v.replace(/\(.+\)/, "");
			if(name == "なし" || name == "搭載不可") return;
			const name_a = Dom.create("a", {target: "_blank", href: "%E6%AD%A6%E8%A3%85%E3%83%87%E3%83%BC%E3%82%BF.html?q=" + encodeURI(name)}, name);
			Dom.removeChildAll(td);
			td.appendChild(name_a);
			if(name_v != name) td.appendChild(document.createTextNode(name_v.substring(name.length)));
		});
		table.querySelectorAll("tbody tr td:nth-child(17)").forEach(td => {
			const name_v = td.textContent;
			const name_a = Dom.create("a", {target: "_blank", href: "%E6%A9%9F%E9%96%A2%E3%83%87%E3%83%BC%E3%82%BF.html?q=" + encodeURI(name_v)}, name_v);
			Dom.removeChildAll(td);
			td.appendChild(name_a);
		});
		table.querySelectorAll("tbody tr td:nth-child(18)").forEach(td => {
			const name_v = td.textContent;
			const name_a = Dom.create("a", {target: "_blank", href: "%E6%88%A6%E8%89%A6%E3%83%87%E3%83%BC%E3%82%BF.html?q=" + encodeURI(name_v)}, name_v);
			Dom.removeChildAll(td);
			td.appendChild(name_a);
		});
	});
	
	document.querySelectorAll("table:not(.table-sort)").forEach(x => TableSort.attach(x));
	
	document.querySelectorAll("details[data-auto-cookie]").forEach(details => {
		const id    = details.dataset.autoCookie;
		const value = Cookies.get(id);
		if(value == "close") details.open = false;
		details.addEventListener("toggle", () => Cookies.set(id, details.open ? "open" : "close", { expires: 7 }));
	});
	
	const input_set_value = (input, value) => {
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
	};
	
	const url = (new URL(window.location.href)).searchParams;
	document.querySelectorAll("input[data-auto-param], select[data-auto-param], textarea[data-auto-param]").forEach(input => {
		const id    = input.dataset.autoParam;
		const param = url.get(id);
		if(param != null)
		{
			input_set_value(input, param);
		}
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
			input_set_value(input, value);
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
