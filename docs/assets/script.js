"use strict";

function table_col_visible(table, visible, cols)
{
	const s = cols
		.map(col => "thead th:nth-child(" + col + "), tbody tr td:nth-child(" + col + ")")
		.join(", ");
	
	$(table).find(s).toggle(visible);
}

$(window).on('load', () => {
	$(".enemies-list").each((_, list) => {
		$(list).addClass("commands");
		const table = list.nextSibling.nextSibling;
		$(table).tablesorter({headers: {12: { sorter: "text" }}});
		table_col_visible(table, false, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,28, 29, 30, 31]);
		
		const parts = [
			{name: "主砲", pushed: true},
			{name: "副砲", pushed: true},
			{name: "弾幕", pushed: true}
		];
		
		const parts_list = $("<ul class='parts-list commands'></ul>");
		$(list).after(parts_list);
		parts_list.toggle();
		
		const level_list = $("<ul class='level-list commands'></ul>");
		parts_list.after(level_list);
		level_list.toggle();
		
		const calculation_list = $("<ul class='calculation-list commands'></ul>");
		level_list.after(calculation_list);
		calculation_list.toggle();
		
		const opts_update = () => {
			if(opts.filter(x => x.name.startsWith("武装") && x.pushed).length > 0)
			{
				parts_list.show();
			}
			else
			{
				parts_list.hide();
			}
			
			const main_visible    = parts.filter(x => x.name.startsWith("主砲") && x.pushed).length > 0;
			const sub_visible     = parts.filter(x => x.name.startsWith("副砲") && x.pushed).length > 0;
			const barrage_visible = parts.filter(x => x.name.startsWith("弾幕") && x.pushed).length > 0;
			
			opts.filter(x => x.name.startsWith("武装")).forEach(x => {
				table_col_visible(table, x.pushed && main_visible,    [x.columns[0]]);
				table_col_visible(table, x.pushed && sub_visible,     [x.columns[1]]);
				table_col_visible(table, x.pushed && barrage_visible, [x.columns[2]]);
			});
			
			if(opts.filter(x => (x.name == "武装威力" || x.name == "装甲" || x.name == "資金功績救出") && x.pushed).length > 0)
			{
				level_list.show();
				calculation_list.show();
			}
			else
			{
				level_list.hide();
				calculation_list.hide();
			}
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
			.map((opt) => {
				const v  = $("<span>" + (opt.pushed ? "非表示" : "表示") + "</span>");
				const a  = $("<a href='javascript:void(0)' class='box'>" + opt.name + "</a>")[0];
				const li = $("<li class='buttons" + (opt.pushed ? " pushed" : "") + "'></li>").append(a);
				a.append(v[0]);
				a.onclick = () => {
					table_col_visible(table, !opt.pushed, opt.columns);
					opt.pushed = !opt.pushed;
					v.text(opt.pushed ? "非表示" : "表示");
					li.removeClass("pushed");
					if(opt.pushed) li.addClass("pushed");
					opts_update();
				};
				return li;
			})
			.forEach(x => x.appendTo(list));
		
		const area_name = $("h2:first-child").text();
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
		
		const change_cols = "tbody tr td:nth-child(5), tbody tr td:nth-child(9), tbody tr td:nth-child(13), tbody tr td:nth-child(25), tbody tr td:nth-child(29), tbody tr td:nth-child(30)";
		$(table).find(change_cols).each((_, x) => $(x).attr("xvalue", $(x).text() - 0));
		const power_update = () => {
			const level = levels.filter(x => x.pushed)[0];
			const calc  = calculations.filter(x => x.pushed)[0];
			
			$(table).find(change_cols).each((_, x) => {
				const td_index = Array.prototype.indexOf.call(x.parentNode.children, x);
				const td       = $(x);
				const value    = td.attr("xvalue") - 0;
				if(isNaN(value)) return;
				
				const boss = $(x.parentNode.children[32 - 1]).text().indexOf("ボス") >= 0;
				const lv   = calc.func(level.min, level.max, boss ? level.boss : level.max);
				if(td_index <= 12)
				{
					const weapon     = $(x.parentNode.children[td_index == 4 ? 1 : td_index == 8 ? 2 : 3]).text();
					const power_plus = weapon.indexOf("Lv補正") >= 0 ? lv : weapon.indexOf("Lv*5補正") >= 0 ? lv * 5 : 0;
					td.text(Math.floor(value + power_plus + Math.ceil(value * lv / 2)).toLocaleString());
				}
				else
				{
					td.text(Math.floor(value + Math.ceil(value * lv / (td_index == 29 - 1 ? 10 : 2))).toLocaleString());
				}
			});
		};
		power_update();
		
		parts
			.map((part) => {
				const a  = $("<a href='javascript:void(0)' class='box'>" + part.name + "</a>")[0];
				const li = $("<li class='buttons" + (part.pushed ? " pushed" : "") + "'></li>").append(a);
				part.li = li;
				a.onclick = () => {
					part.pushed = !part.pushed;
					if(part.pushed)
					{
						part.li.addClass("pushed");
					}
					else
					{
						part.li.removeClass("pushed");
					}
					opts_update();
				};
				return li;
			})
			.forEach(x => x.appendTo(parts_list));
		
		levels
			.map((level) => {
				const a  = $("<a href='javascript:void(0)' class='box'>" + level.name + "</a>")[0];
				const li = $("<li class='buttons" + (level.pushed ? " pushed" : "") + "'></li>").append(a);
				level.li = li;
				a.onclick = () => {
					levels.forEach(x => {x.pushed = false; x.li.removeClass("pushed");});
					level.pushed = true;
					level.li.addClass("pushed");
					power_update();
				};
				return li;
			})
			.forEach(x => x.appendTo(level_list));
		
		calculations
			.map((calc) => {
				const a  = $("<a href='javascript:void(0)' class='box'>" + calc.name + "</a>")[0];
				const li = $("<li class='buttons" + (calc.pushed ? " pushed" : "") + "'></li>").append(a);
				calc.li = li;
				a.onclick = () => {
					calculations.forEach(x => {x.pushed = false; x.li.removeClass("pushed");});
					calc.pushed = true;
					calc.li.addClass("pushed");
					power_update();
				};
				if(calc.boss && is_solar_systems) $(li).toggle();
				return li;
			})
			.forEach(x => x.appendTo(calculation_list));
	});
	
	$("table:not(.tablesorter)").tablesorter();
	
	$("details[id^=details-cookie-]").each((_, xdetails) => {
		const details = $(xdetails);
		const id = xdetails.id;
		
		const value = $.cookie(id);
		if(value == "close")
		{
			details.removeAttr("open");
		}
		
		details.on("toggle", () => {
			const opend = details.attr("open") == "open";
			$.cookie(id, opend ? "open" : "close", { expires: 7 });
		});
	});
	
	$("input[type=number]").each((_, xinput) => {
		const input = $(xinput);
		const min   = parseFloat(input.attr("min"));
		const max   = parseFloat(input.attr("max"));
		const step  = input.attr("step");
		
		const enable_e     = false;
		const enable_minus = !(!isNaN(min) && min >= 0);
		const enable_point = !(step != "" && step.indexOf(".") < 0);
		
		input.on("input", () => {
			const v = parseFloat(input.val());
			if(isNaN(v))
			{
				if(xinput.required) input.val(isNaN(min) ? 0 : min);
				return;
			}
			
			if(!isNaN(min) && min > v) input.val(min);
			if(!isNaN(max) && max < v) input.val(max);
		});
		
		input.keydown((e) => {
			if(!enable_e && e.keyCode == 69) return false;
			if(!enable_minus && (e.keyCode == 189 || e.keyCode == 109)) return false;
			if(!enable_point && (e.keyCode == 190 || e.keyCode == 110)) return false;
			return true;
		});
	});
});
