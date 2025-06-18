function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const prefix = [
  "爆裂式", "烈焰型", "魔改級", "地獄強化", "暗影殘響", "詛咒合成", "超古代", "DLC殘版", "末日預設", "違禁流通",
  "流放者製", "觀測型", "煉金紀元製", "深層次生成", "非法轉錄版", "次元撕裂級", "記憶碎片型", "荒誕精製", "逆神預留版", "魂印驅動型"
];

const myth = [
  "奈亞拉托體", "冥府碎音", "古蛇封印", "赤燄骨王", "七曜幽靈", "失控星靈", "蟲洞祕儀", "深井龍骨", "黃銅機械獸", "犰狳神話盜火者",
  "風精靈的骸骨", "墮落月神", "被驅逐的涅槃", "惡念織網者", "古波斯的夜蛾", "蘇美獵首神", "龍蛇柱之影", "索羅亞斯德燼火", "阿斯塔羅斯遺緒", "黑羽骨偶",
  "水鬼信仰餘燼", "巫毒傀儡碎靈", "斐濟惡靈面具", "殘響的女巫手環", "亡語遮日神", "秘儀的第六視界", "毒蘑冕神", "紅燼幻獸體", "裂縫守門人", "禁域降靈者"
];

const meme = [
  "夜市炸蝦魂", "百合花香味", "羊排限定", "氣炸鍋專屬", "塑膠微粒增幅", "鹽酥雞贊助", "月老指定款", "便利商店聯名", "保健食品副作用", "轉蛋副作用",
  "吹風機風格", "廢棄飲料瓶魂", "洗碗機共鳴", "絨毛玩具殘響", "除濕機霉控", "甜不辣意志", "龍鬚糖反應", "豆腐腦血統", "貓耳偏執", "刺蝟形象工程",
  "河豚震動波", "冰箱庫存精", "咖啡機渣魂", "吐司邊傳承", "金魚腦備份", "老鼠尾數據化", "地瓜球軟化率", "自動販賣機審判", "超商關東煮蒸氣", "冰淇淋失溫現象",
  "無線耳機干擾波", "毛孩記憶結晶", "蓮蓬頭溫度差", "空氣濾芯咒印", "睡袋折疊式傳送", "貓毛化身儀", "三用電鍋共振模式", "夜市娃娃機預知性", "汽水爆炸泡沫冤魂", "抱枕詛咒殘響"
];

const formula = [
  "NaCl超導", "C8H11NO2調和", "CO2+混沌反應", "H2SO4附著", "Ctrl+C結晶態", "4G訊號穩定版", "Fe++強化", "EXE附身", "神經傳導偏移", "pH值漂移",
  "e=mc²波動體", "熵值超載", "能量層崩解", "反物質堆疊", "量子轉址符", "重力反彈場", "靜電感應輪廓", "電子雲錯位效應", "質能壓縮閘", "磁場交錯扭曲",
  "摩擦力退化態", "液氮滑動序列", "熱能破碎定理", "聲波碎裂干涉", "介電擊穿臨界", "π值紊亂引擎", "Planck單位化", "神經激發脈衝網", "絕對零度殘影", "熱震波記憶片段"
];

const weapon = [
  "短刀", "匕首", "雙手劍", "戰斧", "流星鎚", "刺劍", "飛輪刀", "盾斧",
  "魔法杖", "召喚法鈴", "星晶法杖", "冥界書頁", "靈魂燈籠", "占卜石球", "符文火環",
  "鐵處女", "斷頭台", "絞刑繩", "審判椅", "壓指鉗", "火烙架", "刺喉錐",
  "火焰噴射器", "爆裂子彈槍", "蒸汽機構步槍", "星核釘槍", "雷達干擾槍",
  "M249戰術機槍", "Glock18C", "德拉科短突", "MP5-SD", "XM8模組步槍", "FN F2000", "Desert Eagle荒漠之鷹"
];

function generateName() {
  const nameBox = document.getElementById("name-text");

  let count = 0;
  let delay = 70;           // 初始速度
  const maxCount = 10;      // 總閃動次數

  function flash() {
    const name = rand(prefix) + "・" + rand(myth) + "・" + rand(meme) + "・" + rand(formula) + rand(weapon);
    
    nameBox.textContent = name;
    nameBox.classList.remove('flash');
    void nameBox.offsetWidth; // 強制重新觸發動畫
    nameBox.classList.add('flash');

    count++;

    if (count < maxCount) {
      delay += 20; // ✅ 每次稍微延長（漸慢）
      setTimeout(flash, delay);
    } else {
      // 最終名稱
      const finalName = rand(prefix) + "・" + rand(myth) + "・" + rand(meme) + "・" + rand(formula) + rand(weapon);
      nameBox.textContent = finalName;

      // 最終閃動
      nameBox.classList.remove('flash');
      void nameBox.offsetWidth;
      nameBox.classList.add('flash');
    }
  }

  flash(); // 開始動畫
}

