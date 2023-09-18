## トップページ

スマホゲームの宇宙戦艦物語RPGの攻略情報メモです。

本サイトのリポジトリは2023年9月19日を持ってアーカイブ化します。
以降、メンテナンスすることはありません。
追加・修正が必要な場合はフォークして下さい。

### 変更履歴

[コミットログ](https://github.com/zenuas/ssrpg/commits/)

<div id="commits"></div>


<script type="module">
/*
window.addEventListener("load", async () => {
	const commits = document.getElementById("commits");
	
	const promises = Array.from(await (await fetch("https://api.github.com/repos/zenuas/ssrpg/commits?per_page=10")).json())
		.map(async (blob) => {
			const author  = blob.committer.login;
			const avatar  = blob.committer.avatar_url;
			const date    = new Date(blob.commit.committer.date);
			const url     = blob.html_url;
			const message = blob.commit.message;
			const base    = blob.parents[0].sha;
			const ahead   = blob.sha;
			
			const details = document.createElement("details");
			const summary = document.createElement("summary");
			const text = document.createTextNode(
				date.getFullYear() + "/" +
				("00" + (date.getMonth() + 1)).slice(-2) + "/" +
				("00" + (date.getDate()  + 1)).slice(-2) + " ");
			const a = document.createElement("a");
			const ul = document.createElement("ul");
			a.textContent = message;
			a.href = url;
			
			details.addEventListener("toggle", async () => {
				if(ul.childNodes.length > 0) return;
				
				const diff = await (await fetch(`https://api.github.com/repos/zenuas/ssrpg/compare/${ base }...${ ahead }`)).json();
				Array.from(diff.files).forEach(x => {
					const li = document.createElement("li");
					const a2 = document.createElement("a");
					const name = x.filename.replace(/docs\/(\d+\.)?/, "").replace(/\.md$/, "");
					a2.textContent = name;
					a2.href = `https://zenuas.github.io/ssrpg/${ name }.html`;
					li.appendChild(a2);
					ul.appendChild(li);
				});
			});
			
			// <details><summary>text<a /></summary><ul><li /></ul></details>
			summary.appendChild(text);
			summary.appendChild(a);
			details.appendChild(summary);
			details.appendChild(ul);
			return details;
		});
	(await Promise.all(promises))
		.forEach(x => commits.appendChild(x));
});
*/
</script>
