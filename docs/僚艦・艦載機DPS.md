## 僚艦・艦載機DPS

僚艦・艦載機のDPS(`与ダメージ * 発射数 / 装填時間`)を一覧で表示する。
発射した弾が全て着弾した場合のDPSを計算する。
単発与ダメージは[ダメージ計算](ダメージ計算.md#僚艦艦載機の与ダメージ)参照。
[サイクロプス](チップ.md#サイクロプス)の貫通ダメージ、[多弾頭兵器](その他.md#多弾頭兵器)は考慮しない。


<form action="#" method="get" class="inline-grid grid2-auto-fr" oninput="ryoukan()">

<label for="lv2">武装Lv</label>
<input type="number" id="lv2" value="0" min="0" max="999999" step="1" data-auto-cookie required />

<label for="status2">攻撃司令Lv</label>
<input type="number" id="status2" value="9999" min="0" max="9999" step="1" data-auto-cookie required />

<label for="kansyu2">潜宙艦Lv</label>
<input type="number" id="kansyu2" value="0" min="0" max="9999" step="1" data-auto-cookie required />

<label for="over2">銀河の英雄Lv</label>
<input type="number" id="over2" value="9999" min="0" max="9999" step="1" data-auto-cookie required />

<label for="pcut2">敵艦実弾カット率</label>
<input type="number" id="pcut2" value="0" min="0" max="100" step="0.1" data-auto-cookie required />

<label for="ecut2">敵艦Eカット率</label>
<input type="number" id="ecut2" value="0" min="0" max="100" step="0.1" data-auto-cookie required />

<label for="mainloading">主砲射撃指揮能力+</label>
<input type="number" id="mainloading" value="0" min="0" max="900" step="1" data-auto-cookie required />

<label for="subloading">副砲射撃指揮能力+</label>
<input type="number" id="subloading" value="0" min="0" max="900" step="1" data-auto-cookie required />

<label>その他</label>
<fieldset>
	<label><input type="checkbox" id="main2"      checked data-auto-cookie />主砲</label><br />
	<label><input type="checkbox" id="sub2"       checked data-auto-cookie />副砲</label><br />
	<label><input type="checkbox" id="barrage2"   checked data-auto-cookie />弾幕</label><br />
	<label><input type="checkbox" id="every-dps2"         data-auto-cookie />各DPS表示</label><br />
	<label><input type="checkbox" id="autolv2"            data-auto-cookie />自動Lv調整</label><br />
</fieldset>

</form>

| 船名                               | 主砲                           | 主砲Lv | 主砲DPS | 副砲                   | 副砲Lv | 副砲DPS | 弾幕                   | 弾幕Lv | 弾幕DPS | 総DPS |
|------------------------------------|--------------------------------|-------:|--------:|------------------------|-------:|--------:|------------------------|-------:|--------:|------:|
| 試作宇宙戦艦                       | 壊れかけのカノン砲             |      0 |       0 | Mk1ロケット            |      0 |       0 | 壊れかけの機銃座       |      0 |       0 |     0 |
| 宇宙作業艇D51                      | 20型携帯レーザー砲             |      0 |       0 | なし                   |      0 |       0 | なし                   |      0 |       0 |     0 |
| 試作宇宙戦闘機X0                   | 20型携帯レーザー砲             |      0 |       0 | Mk1ロケット            |      0 |       0 | なし                   |      0 |       0 |     0 |
| 軽空母                             | なし                           |      0 |       0 | なし                   |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 試作SF-AS00                        | SF用試作ビーム砲               |      0 |       0 | ビームソード           |      0 |       0 | 試作バルカン           |      0 |       0 |     0 |
| 軽巡洋艦                           | 試作ビーム砲                   |      0 |       0 | Mk2ロケット            |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 量産SF-AS11                        | 21型携帯レーザー砲             |      0 |       0 | アイアンロッド         |      0 |       0 | 試作バルカン           |      0 |       0 |     0 |
| 宇宙戦闘機X1                       | 21型携帯レーザー砲             |      0 |       0 | Mk1ロケット            |      0 |       0 | 試作バルカン           |      0 |       0 |     0 |
| 宇宙戦闘機X2                       | 21型携帯レーザー砲             |      0 |       0 | Mk1ロケット            |      0 |       0 | 試作バルカン           |      0 |       0 |     0 |
| 強襲揚陸艦                         | 0式ビーム砲                    |      0 |       0 | Mk2連装ロケット        |      0 |       0 | 10mm機銃座             |      0 |       0 |     0 |
| 支援SF-AS12                        | SF用ツインカノン               |      0 |       0 | アイアンロッド         |      0 |       0 | 試作バルカン           |      0 |       0 |     0 |
| ミサイル艦                         | 対艦ミサイルX1                 |      0 |       0 | 誘導ミサイル           |      0 |       0 | 10mm機銃座             |      0 |       0 |     0 |
| 輸送艦                             | なし                           |      0 |       0 | なし                   |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 工作艦                             | なし                           |      0 |       0 | なし                   |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 病院船                             | なし                           |      0 |       0 | なし                   |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 消防艦                             | なし                           |      0 |       0 | なし                   |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 宇宙空母                           | レールガン2                    |      0 |       0 | Mk3連装ロケット        |      0 |       0 | 12mm機銃座             |      0 |       0 |     0 |
| 重シールド艦                       | なし                           |      0 |       0 | なし                   |      0 |       0 | 核融合爆雷             |      0 |       0 |     0 |
| 重巡洋艦                           | 30口径レーザー砲               |      0 |       0 | Mk4連装ロケット        |      0 |       0 | 対空レーザーα         |      0 |       0 |     0 |
| 特化SF-AS01                        | メガビームライフル             |      0 |       0 | メガビームソード       |      0 |       0 | メガバルカン           |      0 |       0 |     0 |
| 宇宙戦艦                           | 5式ビーム砲                    |      0 |       0 | 誘導ミサイルV          |      0 |       0 | 18mm機銃座             |      0 |       0 |     0 |
| 重宇宙空母                         | レールガン3                    |      0 |       0 | Mk3連装ロケット        |      0 |       0 | 14mm機銃座             |      0 |       0 |     0 |
| 超兵器搭載実験機                   | なし                           |      0 |       0 | なし                   |      0 |       0 | なし                   |      0 |       0 |     0 |
| 銀河移民船                         | なし                           |      0 |       0 | なし                   |      0 |       0 | 移民船団用防御機銃     |      0 |       0 |     0 |
| 改造漁船                           | 壊れかけのカノン砲             |      0 |       0 | なし                   |      0 |       0 | 壊れかけの機銃座       |      0 |       0 |     0 |
| パトロール艇                       | 22型携帯レーザー砲             |      0 |       0 | なし                   |      0 |       0 | 壊れかけの機銃座       |      0 |       0 |     0 |
| ミサイル艇                         | なし                           |      0 |       0 | 試作誘導ミサイル       |      0 |       0 | なし                   |      0 |       0 |     0 |
| 長距離砲艦                         | 試作レールガン                 |      0 |       0 | なし                   |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 対空迎撃機XX1                      | 24型携帯レーザー砲             |      0 |       0 | 誘導ミサイル           |      0 |       0 | メガバルカン           |      0 |       0 |     0 |
| ダミー隕石                         | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| ダミー戦艦                         | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 試作宇宙戦艦改                     | 16cmカノン砲                   |      0 |       0 | Mk1ロケット            |      0 |       0 | 8mm機銃座              |      0 |       0 |     0 |
| 隕石要塞                           | ベータ要塞砲                   |      0 |       0 | Mk3連装ロケット        |      0 |       0 | 連装光子機雷           |      0 |       0 |     0 |
| テ級弩級戦艦                       | タイタニア                     |      0 |       0 | Mk5連装ロケット        |      0 |       0 | 連装光子機雷           |      0 |       0 |     0 |
| 氷塊船                             | 大質量氷塊弾                   |      0 |       0 | なし                   |      0 |       0 | なし                   |      0 |       0 |     0 |
| メタルSF                           | なし                           |      0 |       0 | メタルソード           |      0 |       0 | なし                   |      0 |       0 |     0 |
| 汎用SF-AS21                        | SF用対艦バズーカ               |      0 |       0 | ギガビームソード       |      0 |       0 | ビームバルカン         |      0 |       0 |     0 |
| 支援SF-AS22                        | SF用レールガン                 |      0 |       0 | アイアンスピア         |      0 |       0 | 近接用拡散ビーム       |      0 |       0 |     0 |
| 高熱量砲艦                         | なし                           |      0 |       0 | 高熱量弾               |      0 |       0 | なし                   |      0 |       0 |     0 |
| 電磁砲艦                           | なし                           |      0 |       0 | 超電磁砲               |      0 |       0 | なし                   |      0 |       0 |     0 |
| ス級弩級戦艦                       | 8式ビーム砲                    |      0 |       0 | 艦載ビームソード       |      0 |       0 | 重撃エメラルドレーザー |      0 |       0 |     0 |
| EX重シールド艦                     | ビームシールド                 |      0 |       0 | なし                   |      0 |       0 | 反応爆雷               |      0 |       0 |     0 |
| 高機動型作業艇D77                  | 20cmカノン砲                   |      0 |       0 | アイアンロッド         |      0 |       0 | なし                   |      0 |       0 |     0 |
| 統合軍軽巡洋艦                     | 20cm連装カノン砲               |      0 |       0 | Mk3ロケット            |      0 |       0 | 10mm機銃座             |      0 |       0 |     0 |
| 統合軍重巡洋艦                     | 26cm4連装カノン砲              |      0 |       0 | 誘導ミサイル           |      0 |       0 | 16mm機銃座             |      0 |       0 |     0 |
| 統合軍宇宙空母                     | レールガン4                    |      0 |       0 | Mk4連装ロケット        |      0 |       0 | 14mm機銃座             |      0 |       0 |     0 |
| ペ級弩級戦艦                       | レールガン6                    |      0 |       0 | 光子ミサイル           |      0 |       0 | 22mm機銃座             |      0 |       0 |     0 |
| 試作重SA-AS100                     | SF用携帯ガトリング             |      0 |       0 | 試作多弾頭ミサイルS00  |      0 |       0 | ビームバルカン         |      0 |       0 |     0 |
| 統合軍高速強襲艦                   | 28cm5連装カノン砲              |      0 |       0 | 誘導ミサイルV2         |      0 |       0 | 20mm機銃座             |      0 |       0 |     0 |
| エ級弩級戦艦                       | 試作ソーラ砲                   |      0 |       0 | 連装追尾レーザー       |      0 |       0 | 対空レーザーδ         |      0 |       0 |     0 |
| 青版超級空母                       | 重力子爆弾                     |      0 |       0 | 連装反物質ロケット     |      0 |       0 | 壊滅ルビーレーザー     |      0 |       0 |     0 |
| 超弩級戦艦メタトロン               | 光子砲                         |      0 |       0 | Hi光子ミサイル         |      0 |       0 | 光子レーザー           |      0 |       0 |     0 |
| 重SA-AS200                         | テラビームライフル             |      0 |       0 | ハイパービームソード   |      0 |       0 | メガバルカン4          |      0 |       0 |     0 |
| 重病院船                           | なし                           |      0 |       0 | 単装追尾レーザー       |      0 |       0 | 24mm機銃座             |      0 |       0 |     0 |
| 重輸送艦                           | なし                           |      0 |       0 | Mk8連装ロケット        |      0 |       0 | 24mm機銃座             |      0 |       0 |     0 |
| 重主砲実験艦                       | リフレクターレーザー2          |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 豪華宇宙観光船                     | 搭載不可                       |      0 |       0 | 花火1                  |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 赤版超級空母                       | 重ガトリング砲                 |      0 |       0 | 多弾頭ミサイルS01      |      0 |       0 | 重撃エメラルドレーザー |      0 |       0 |     0 |
| 重SA-AS111                         | SF用携帯ガトリング2            |      0 |       0 | 有線ビームソード       |      0 |       0 | メガバルカン3          |      0 |       0 |     0 |
| 空中戦艦                           | 戦艦有線ビーム砲               |      0 |       0 | 連装追尾レーザー＋     |      0 |       0 | 対空レーザーγ         |      0 |       0 |     0 |
| 帝式要塞                           | ネビュラ級要塞砲               |      0 |       0 | 搭載不可               |      0 |       0 | 帝国要塞機銃           |      0 |       0 |     0 |
| テ級弩級戦艦改                     | 重ガトリング砲                 |      0 |       0 | 反物質拡散砲           |      0 |       0 | 22mm機銃座             |      0 |       0 |     0 |
| ス級弩級戦艦改                     | 0式重ビーム砲                  |      0 |       0 | ハイパービームソード   |      0 |       0 | 重撃エメラルドレーザー |      0 |       0 |     0 |
| ペ級弩級戦艦改                     | 46cm7連装カノン砲              |      0 |       0 | Hi光子ミサイル         |      0 |       0 | 浄化パールレーザー     |      0 |       0 |     0 |
| エ級弩級戦艦改                     | 拡散重ビーム砲                 |      0 |       0 | 連装追尾レーザー＋     |      0 |       0 | 壊滅ルビーレーザー     |      0 |       0 |     0 |
| 試作SF-AS300                       | SF用携帯ガトリング3            |      0 |       0 | 301式発掘超鋼剣        |      0 |       0 | メガバルカン5          |      0 |       0 |     0 |
| 発掘戦艦                           | 時空転移砲                     |      0 |       0 | 分裂追尾レーザー       |      0 |       0 | 反物質爆雷             |      0 |       0 |     0 |
| コロニーレーザー                   | 999式発掘光線砲                |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 発掘戦闘機Z                        | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | メガバルカン6          |      0 |       0 |     0 |
| 発掘戦闘機F18                      | 搭載不可                       |      0 |       0 | 反物質ロケット         |      0 |       0 | メガバルカン6          |      0 |       0 |     0 |
| 発掘宇宙空母                       | 搭載不可                       |      0 |       0 | Zアタック              |      0 |       0 | 26mm機銃座             |      0 |       0 |     0 |
| 発掘宇宙戦艦                       | ネビュラ級要塞砲               |      0 |       0 | 誘導ミサイルV8         |      0 |       0 | 26mm機銃座             |      0 |       0 |     0 |
| 統合軍大型砲艦                     | 光子砲                         |      0 |       0 | 連装追尾レーザー＋     |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 発掘宇宙大戦艦                     | 80cm2*4連装カノン砲            |      0 |       0 | Mk10連装ロケット       |      0 |       0 | 26mm機銃座             |      0 |       0 |     0 |
| 発掘宇宙大空母                     | 搭載不可                       |      0 |       0 | F18アタック            |      0 |       0 | 26mm機銃座             |      0 |       0 |     0 |
| 強襲SF-AS400                       | SF用携帯ガトリング3            |      0 |       0 | 702式発掘超鋼剣        |      0 |       0 | メガバルカン6          |      0 |       0 |     0 |
| 帝式惑星級戦闘体                   | 対艦ミサイルX7                 |      0 |       0 | 弩級艦載ビームソード   |      0 |       0 | 26mm多連装機銃座       |      0 |       0 |     0 |
| 発掘航空戦艦                       | 80cm2*4連装カノン砲            |      0 |       0 | Zアタック              |      0 |       0 | 26mm多連装機銃座       |      0 |       0 |     0 |
| 地球                               | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 特化SF-Eライト                     | 拡散メガライフル               |      0 |       0 | 901式発掘超鋼剣        |      0 |       0 | ビームバルカン2        |      0 |       0 |     0 |
| 超時空戦闘母艦                     | 光子砲                         |      0 |       0 | 分裂追尾レーザー       |      0 |       0 | 浄化パールレーザー     |      0 |       0 |     0 |
| 生体SF-AS301                       | 発掘光弾1                      |      0 |       0 | 702式発掘超鋼剣        |      0 |       0 | メガバルカン7          |      0 |       0 |     0 |
| 人工惑星ディアスポラ               | 壊れかけのカノン砲             |      0 |       0 | Mk1ロケット            |      0 |       0 | 壊れかけの機銃座       |      0 |       0 |     0 |
| 試作潜宙艦                         | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 反物質爆雷             |      0 |       0 |     0 |
| 特化SF砲火小隊                     | 88式メガカノン砲               |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 発掘SF-Mシャドウ                   | SF用携帯ガトリング3            |      0 |       0 | 月光                   |      0 |       0 | メガバルカン7          |      0 |       0 |     0 |
| 特化SF大隊                         | メガビームライフル一斉射       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 統合軍宇宙戦艦                     | 30cm6連装カノン砲              |      0 |       0 | 誘導ミサイルV6         |      0 |       0 | 24mm機銃座             |      0 |       0 |     0 |
| 漂流艦マルドゥック                 | 発掘拡散レーザー               |      0 |       0 | 連続追尾レーザー       |      0 |       0 | カリストレーザー       |      0 |       0 |     0 |
| Vファイター                        | 25型携帯レーザー砲             |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| Vシールド                          | 対艦ミサイルX7                 |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 発掘面体-Mアタック                 | ドリルパンチ                   |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| サターン級惑星収縮要塞             | ソドムの光                     |      0 |       0 | 超重力子ロケット       |      0 |       0 | 強化パールレーザー     |      0 |       0 |     0 |
| Vガン                              | SF用携帯ガトリング2            |      0 |       0 | なし                   |      0 |       0 | なし                   |      0 |       0 |     0 |
| Vパワード                          | SA用重キャノン                 |      0 |       0 | 多弾頭ミサイルS01      |      0 |       0 | なし                   |      0 |       0 |     0 |
| Vバトラー                          | 2式重ビーム砲                  |      0 |       0 | 多弾頭ミサイルS02      |      0 |       0 | 26mm機銃座             |      0 |       0 |     0 |
| ビッグV                            | 銀河級ドリルミサイル           |      0 |       0 | サブドリルミサイル     |      0 |       0 | 近接用拡散ビーム4      |      0 |       0 |     0 |
| 超重改修艦ハーシェル               | デブリアタック                 |      0 |       0 | 搭載不可               |      0 |       0 | 26mm多連装機銃座       |      0 |       0 |     0 |
| アーマー級義体艦                   | 重ガトリング砲                 |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| フルアーマー級義体艦               | 拡散重ビーム砲                 |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| ウイザード級義体艦                 | Hi光子砲                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| レッドドラゴン級義体艦             | 搭載不可                       |      0 |       0 | ファイアブレス         |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| キング級義体艦                     | 搭載不可                       |      0 |       0 | キングオブキングス     |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| WEX重シールド艦                    | 搭載不可                       |      0 |       0 | 重ビームサブシールド   |      0 |       0 | 反物質爆雷             |      0 |       0 |     0 |
| SDL01                              | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 28mm速射機銃座         |      0 |       0 |     0 |
| 強襲SF-AS400R                      | SF用携帯ガトリング4            |      0 |       0 | トリプルビームクナイ   |      0 |       0 | メガバルカン8          |      0 |       0 |     0 |
| 特殊SF-Gナイト                     | Hi光子砲                       |      0 |       0 | ゴールデンスピア       |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 超級軽巡洋艦                       | 連装レールガン1                |      0 |       0 | Mk9連装ロケット        |      0 |       0 | 24mm機銃座             |      0 |       0 |     0 |
| 超重SAフレイ                       | 拡散メガライフル2              |      0 |       0 | 試作防御フィールド     |      0 |       0 | メガバルカン8          |      0 |       0 |     0 |
| 超重SAフレイヤ                     | ハイメガビーム一斉射           |      0 |       0 | ナインテイル           |      0 |       0 | メガバルカン8          |      0 |       0 |     0 |
| トライデント級巡洋艦               | 搭載不可                       |      0 |       0 | 拡散ブルーレーザー1    |      0 |       0 | 反物質爆雷             |      0 |       0 |     0 |
| サイキッカーA                      | 搭載不可                       |      0 |       0 | 光拳：連               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 強襲SF-AS400GB                     | 発掘拡散レーザー               |      0 |       0 | ムラマサブレード       |      0 |       0 | 近接用拡散ビーム4      |      0 |       0 |     0 |
| 超時空戦闘機プルト1                | Hiレーザー砲                   |      0 |       0 | 誘導ミサイルV8         |      0 |       0 | 反物質爆雷N2           |      0 |       0 |     0 |
| サイキッカーB                      | 搭載不可                       |      0 |       0 | 光拳：突               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 移動都市M6                         | 拡散重ビーム砲4                |      0 |       0 | 誘導ミサイルV9         |      0 |       0 | 26mm多連装機銃座       |      0 |       0 |     0 |
| 生体SF-AS333                       | 発掘レーザー1                  |      0 |       0 | 901式発掘超鋼剣        |      0 |       0 | メガバルカン8          |      0 |       0 |     0 |
| ダミーSF                           | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| ダミー要塞                         | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| アーク級ブルーノア                 | 時空転移砲                     |      0 |       0 | 分裂追尾レーザー+      |      0 |       0 | 対空レーザーΖ         |      0 |       0 |     0 |
| 武装移民船                         | 拡散重カノン砲                 |      0 |       0 | 搭載不可               |      0 |       0 | 28mm速射機銃座         |      0 |       0 |     0 |
| 深宇宙探査船                       | 超重力子爆弾                   |      0 |       0 | Mk12連装ロケット       |      0 |       0 | 反物質爆雷N2           |      0 |       0 |     0 |
| 空中要塞                           | 拡散重ビーム砲4                |      0 |       0 | 連装反物質ロケット     |      0 |       0 | 帝国要塞機銃3          |      0 |       0 |     0 |
| 特務砲艦                           | ディメンションストリーム       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 統合軍大型砲艦改改                 | ツインHi光子砲                 |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| アーク級ブラッドレイ               | 拡散光線1                      |      0 |       0 | 超重力子ロケット       |      0 |       0 | 強化ルビーレーザー     |      0 |       0 |     0 |
| スターレーザー                     | 2018式発掘光線砲               |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| サイコSF-AS500                     | 搭載不可                       |      0 |       0 | サイコ・ソード         |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 氷塊巨船                           | 拡散超質量氷塊弾               |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| スコーピオ級義体艦                 | 光槍1                          |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| アーク級グスタフ                   | 誘導光線1                      |      0 |       0 | 連続追尾レーザー       |      0 |       0 | 反物質爆雷             |      0 |       0 |     0 |
| サイコSF-AS501                     | 搭載不可                       |      0 |       0 | サイコ・マニピュレータ |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| アーク・ノヴァ級ハイペリオン       | ツインHi光子砲                 |      0 |       0 | 搭載不可               |      0 |       0 | 光爆防御弾1            |      0 |       0 |     0 |
| エグゼリオ級飛空艇                 | 宙域制圧ミサイル2              |      0 |       0 | Mk12連装ロケット       |      0 |       0 | 30mm速射機銃座         |      0 |       0 |     0 |
| ゴライアス級飛空艇                 | 宙域制圧ミサイル3              |      0 |       0 | Mk13連装ロケット       |      0 |       0 | 帝国要塞機銃3          |      0 |       0 |     0 |
| 超時空戦闘機プルト1M               | 超重力子爆弾                   |      0 |       0 | 誘導ミサイルV10        |      0 |       0 | 反物質爆雷N3           |      0 |       0 |     0 |
| サジタリウス級義体艦               | デスニードル                   |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| ソーラーエンジェル                 | 搭載不可                       |      0 |       0 | ファイアボール         |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 空母アマテラス                     | 搭載不可                       |      0 |       0 | メガフレアコア         |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| グレイトアース                     | 拡散光線1                      |      0 |       0 | イナヅマパンチ         |      0 |       0 | 反物質爆雷N3           |      0 |       0 |     0 |
| 大天使級光体                       | 拡散重ビーム砲5                |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| カプリコン級義体艦                 | 搭載不可                       |      0 |       0 | ゴールデンスピア       |      0 |       0 | 反物質爆雷N3           |      0 |       0 |     0 |
| 天使級光体                         | 光槍2                          |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 宇宙戦艦アストライア               | 拡散重ビーム砲3                |      0 |       0 | Mk12連装ロケット       |      0 |       0 | 28mm速射機銃座         |      0 |       0 |     0 |
| 要塞惑星ディアスポラM2             | 星生炉縮退砲                   |      0 |       0 | 廃棄宇宙戦艦           |      0 |       0 | 反物質爆雷N3           |      0 |       0 |     0 |
| 防衛システムBB2                    | 光輪3                          |      0 |       0 | なし                   |      0 |       0 | 反物質爆雷N3           |      0 |       0 |     0 |
| とある地球                         | 搭載不可                       |      0 |       0 | 地球防衛ロケットE1     |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| Eライト・ノヴァ                    | 拡散メガライフル2              |      0 |       0 | ムラマサブレード       |      0 |       0 | 光爆防御弾2            |      0 |       0 |     0 |
| 発掘宇宙戦艦9999                   | 波動光子砲                     |      0 |       0 | 地球防衛ロケットE2     |      0 |       0 | 強化ルビーレーザー     |      0 |       0 |     0 |
| 大海賊船                           | 拡散重カノン砲                 |      0 |       0 | Mk13連装ロケット       |      0 |       0 | 30mm速射機銃座         |      0 |       0 |     0 |
| クリムゾン・グローリー             | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 帝国要塞機銃4          |      0 |       0 |     0 |
| ダミー砲艦                         | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| ガード級義体艦                     | 拡散光線2                      |      0 |       0 | サイコ・ソード         |      0 |       0 | メガバルカン8          |      0 |       0 |     0 |
| 権天使級光体                       | 冷凍光線                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| キング・クリムゾン・グローリー     | ゴモラの光                     |      0 |       0 | 分裂追尾レーザー+      |      0 |       0 | 帝国要塞機銃4          |      0 |       0 |     0 |
| サイキッカー・リン                 | 搭載不可                       |      0 |       0 | 光拳：拳               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| サイキッカー・ネオ                 | 搭載不可                       |      0 |       0 | 光拳：掌               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| サイキッカー・ソウ                 | 搭載不可                       |      0 |       0 | 光拳：斬               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| サイキッカー・ジイ                 | 搭載不可                       |      0 |       0 | 光拳：波               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| アクエリアス級義体艦               | 搭載不可                       |      0 |       0 | 搭載不可               |      0 |       0 | 光爆防御弾3            |      0 |       0 |     0 |
| 銀河級帝式要塞                     | スーパーネビュラ級要塞砲       |      0 |       0 | 誘導ミサイルV10        |      0 |       0 | 帝国要塞機銃4          |      0 |       0 |     0 |
| 超銀河級帝式要塞                   | メガ・スーパーネビュラ級要塞砲 |      0 |       0 | 廃棄宇宙戦艦           |      0 |       0 | 帝国要塞機銃4          |      0 |       0 |     0 |
| 特化SF-AS01スナイパー              | 光子スナイパーライフル         |      0 |       0 | メガビームソード       |      0 |       0 | メガバルカン           |      0 |       0 |     0 |
| Gヴァルキリー級重巡洋艦            | 連装重ガトリング砲2            |      0 |       0 | Mk8連装ロケット        |      0 |       0 | 30mm速射機銃座         |      0 |       0 |     0 |
| アームド級装甲戦艦                 | 多重連装重ガトリング           |      0 |       0 | サブガトリング1        |      0 |       0 | 帝国要塞機銃4          |      0 |       0 |     0 |
| 惑星級多面体マーズＯ9              | オリュンポスビーム             |      0 |       0 | 顔面アタック           |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 小惑星ベヒモス                     | 隕石爆弾                       |      0 |       0 | 搭載不可               |      0 |       0 | 搭載不可               |      0 |       0 |     0 |
| 銀河統合軍巡洋艦ヴァーユ           | 220式10連装カノン砲            |      0 |       0 | 重反物質ロケット       |      0 |       0 | 35mm連射機銃座         |      0 |       0 |     0 |
| 力天型超重SAデニス                 | なし                           |      0 |       0 | クラウ・ソラス         |      0 |       0 | なし                   |      0 |       0 |     0 |
| 紅雀                               | 光子スナイパーライフル2        |      0 |       0 | サイコ・ピットα       |      0 |       0 | メガバルカン9          |      0 |       0 |     0 |
| 銀河統合軍汎用SFバサラ             | 収束ビームガトリング           |      0 |       0 | 909式発掘超剛剣        |      0 |       0 | メガバルカン9          |      0 |       0 |     0 |
| 智天型空母マザーメタトロン         | 超重力子榴砲                   |      0 |       0 | 光子追尾レーザー       |      0 |       0 | 対空レーザーλ         |      0 |       0 |     0 |
| アーク・ノヴァ級参番艦アレクシオン | トライHi光子砲                 |      0 |       0 | Mk12連装ロケット       |      0 |       0 | 強化パールレーザー改   |      0 |       0 |     0 |

<script type="module">
const stepover100 = (lv) => {
	var a = Math.floor(lv / 100);
	var b = lv % 100;
	return((a + 1) * (50 * a + b + 1) - 1);
};
const weapons = {};
const ryoukan = () => {
	const lv          = parseInt(document.getElementById("lv2").value);
	const status      = stepover100(parseInt(document.getElementById("status2").value));
	const kansyu      = parseInt(document.getElementById("kansyu2").value);
	const over        = parseInt(document.getElementById("over2").value) + 10000;
	const pcut        = parseFloat(document.getElementById("pcut2").value);
	const ecut        = parseFloat(document.getElementById("ecut2").value);
	const mainloading = parseInt(document.getElementById("mainloading").value);
	const subloading  = parseInt(document.getElementById("subloading").value);
	const main        = document.getElementById("main2").checked;
	const sub         = document.getElementById("sub2").checked;
	const barrage     = document.getElementById("barrage2").checked;
	const every_dps   = document.getElementById("every-dps2").checked;
	const autolv      = document.getElementById("autolv2").checked;
		
	const calc = (weapon, lv_) => {
		const lvup    = Math.ceil(weapon.power * 0.02 * lv_);
		const powerup = Math.min(weapon.power * over, lvup + (weapon.type == "主砲" ? kansyu : 0) + status);
		const damage  = weapon.power + (weapon.message == "威力固定兵器" ? 0 : powerup);
		const result  = Math.min(9999999, Math.ceil(damage * (100 - (weapon.bullet > 0 ? pcut : ecut)) / 100));
		const timep   = Math.max(0.1, weapon.time * (1000 - (weapon.type == "主砲" ? mainloading : weapon.type == "副砲" ? subloading : 0)) / 1000);
		
		const shotp   = weapon.shotnum / timep;
		
		return(result * shotp);
	};
	
	const display = (weapon, lvtd, dpstd) => {
		if(weapon in weapons && (
			(weapons[weapon].type == "主砲" && main) ||
			(weapons[weapon].type == "副砲" && sub)  ||
			(weapons[weapon].type == "弾幕" && barrage)))
		{
			if(autolv)
			{
				const minmax = {
					max     : lv,
					maxp    : calc(weapons[weapon], lv),
					min     : 0,
					minp    : calc(weapons[weapon], 0)
				};
				
				while(true)
				{
					if(minmax.min + 1 >= minmax.max) break;
					const xlv = minmax.min + Math.ceil((minmax.max - minmax.min) / 2);
					const xv  = calc(weapons[weapon], xlv);
					if(minmax.maxp == xv)
					{
						minmax.max  = xlv;
						minmax.maxp = xv;
					}
					else
					{
						minmax.min  = xlv;
						minmax.minp = xv;
					}
				}
				if(minmax.minp >= minmax.maxp)
				{
					minmax.max  = minmax.min;
					minmax.maxp = minmax.minp;
				}
				lvtd.textContent  = minmax.max.toLocaleString();
				dpstd.textContent = minmax.maxp.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
				return(minmax.maxp);
			}
			else
			{
				const v = calc(weapons[weapon], lv);
				lvtd.textContent  = lv.toLocaleString();
				dpstd.textContent = v.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
				return(v);
			}
		}
		else
		{
			lvtd.textContent  = "0";
			dpstd.textContent = "0.00";
			return(0);
		}
	};
	
	document.querySelectorAll("table tbody tr").forEach(tr => {
		const mainweapon    = tr.children[1].textContent;
		const mainlv        = tr.children[2];
		const maindps       = tr.children[3];
		const subweapon     = tr.children[4].textContent;
		const sublv         = tr.children[5];
		const subdps        = tr.children[6];
		const barrageweapon = tr.children[7].textContent;
		const barragelv     = tr.children[8];
		const barragedps    = tr.children[9];
		const totaldps      = tr.children[10];
		
		const total =
			display(mainweapon,    mainlv,    maindps) + 
			display(subweapon,     sublv,     subdps)  + 
			display(barrageweapon, barragelv, barragedps);
		
		totaldps.textContent = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
	});
	
	document.querySelectorAll("table thead tr th:nth-child(2),  table tbody tr td:nth-child(2)").forEach(x => x.classList.toggle("none", !main));
	document.querySelectorAll("table thead tr th:nth-child(3),  table tbody tr td:nth-child(3)").forEach(x => x.classList.toggle("none", !(main && autolv)));
	document.querySelectorAll("table thead tr th:nth-child(4),  table tbody tr td:nth-child(4)").forEach(x => x.classList.toggle("none", !(main && every_dps)));
	document.querySelectorAll("table thead tr th:nth-child(5),  table tbody tr td:nth-child(5)").forEach(x => x.classList.toggle("none", !sub));
	document.querySelectorAll("table thead tr th:nth-child(6),  table tbody tr td:nth-child(6)").forEach(x => x.classList.toggle("none", !(sub && autolv)));
	document.querySelectorAll("table thead tr th:nth-child(7),  table tbody tr td:nth-child(7)").forEach(x => x.classList.toggle("none", !(sub && every_dps)));
	document.querySelectorAll("table thead tr th:nth-child(8),  table tbody tr td:nth-child(8)").forEach(x => x.classList.toggle("none", !barrage));
	document.querySelectorAll("table thead tr th:nth-child(9),  table tbody tr td:nth-child(9)").forEach(x => x.classList.toggle("none", !(barrage && autolv)));
	document.querySelectorAll("table thead tr th:nth-child(10), table tbody tr td:nth-child(10)").forEach(x => x.classList.toggle("none", !(barrage && every_dps)));
	document.querySelector("table").dispatchEvent(new Event("update"));
};

window.addEventListener("load", async () => {
	(await (await fetch("https://raw.githubusercontent.com/zenuas/ssrpg/master/docs/%E6%97%97%E8%89%A6DPS.md")).text())
		.split(/\r\n?|\n/)
		.filter(s => s.startsWith("|"))
		.forEach(s => {
			const xs = s.split("|").map(v => v.trim()).splice(1);
			weapons[xs[1]] = {
				type:    xs[0],
				name:    xs[1],
				message: xs[2],
				power:   parseInt(xs[3]),
				time:    parseFloat(xs[4]),
				shotnum: parseInt(xs[5]),
				bullet:  parseInt(xs[6]),
				energy:  parseInt(xs[7])
			};
		});
	ryoukan();
});

window.ryoukan = ryoukan;
</script>
