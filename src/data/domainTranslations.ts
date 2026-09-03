import { LanguageContent, SupportedLanguage } from '../types';
import { MODEL_MOCK_PHOTOS } from './mockPhotos';

export const DOMAIN_TRANSLATIONS: Record<SupportedLanguage, LanguageContent> = {
  en: {
    label: 'ENGLISH',
    heroHeadline: 'MORE THAN CLOTHING. A STATEMENT OF IDENTITY.',
    heroSubheadline:
      'Devil\'s Domain is built for those who refuse to compromise. We do not design to follow seasonal trends. We forge modern armor for individuals who write their own rules.',
    manifestoTitle: 'NOT MADE TO BELONG.',
    manifestoLead:
      'We believe true luxury is not about blending into high society—it is about unapologetic self-sovereignty, raw authenticity, and supreme craftsmanship.',
    manifestoBody: [
      'In a world saturated with generic mass-market silhouettes and disposable trends, Devil\'s Domain emerges from the nocturnal underground. Every piece we construct is treated as wearable sculpture—milled from ultra-heavyweight textiles, detailed with bespoke hardware, and numbered in strictly limited releases.',
      'Our garments are designed for the non-conformists: the creators, the rebels, the thinkers, and the nightcrawlers who understand that style is an armor of personal sovereignty.',
    ],
    philosophyTitle: 'NOT EVERYONE WAS MADE TO FIT IN.',
    philosophyPoints: [
      {
        title: 'INDIVIDUALITY & REBELLION',
        desc: 'We celebrate those who reject the status quo. Your identity is your greatest weapon and your greatest domain.',
      },
      {
        title: 'UNCOMPROMISING CRAFTSMANSHIP',
        desc: 'From custom 500 GSM French terry cotton to hand-hallmarked 925 sterling silver, every stitch is executed with supreme precision.',
      },
      {
        title: 'EXCLUSIVE VAULT RELEASES',
        desc: 'We never over-produce. Each capsule drop is strictly capped. When an archive piece sells out, it is retired forever.',
      },
      {
        title: 'GLOBAL REBEL SYNDICATE',
        desc: 'A boundary-pushing collective of thousands of rebels across Tokyo, London, Berlin, New York, and beyond.',
      },
    ],
    timeline: [
      {
        stage: '01',
        title: 'THE BEGINNING',
        subtitle: 'The Underground Atelier',
        content:
          'Born from late-night underground gatherings in Tokyo and London, Devil\'s Domain started as bespoke hand-distressed garments crafted exclusively for an inner circle of artists, musicians, and nightcrawlers.',
        image: MODEL_MOCK_PHOTOS.bannerStudio,
      },
      {
        stage: '02',
        title: 'THE IDEA',
        subtitle: 'Why Devil\'s Domain Was Created',
        content:
          'Modern luxury had lost its teeth. Streetwear had become commodified by mass-market conglomerates. We set out to restore danger, poetry, and uncompromising heavyweight weight to the garments people wear every day.',
        image: MODEL_MOCK_PHOTOS.domainY2kRedRoom,
      },
      {
        stage: '03',
        title: 'THE IDENTITY',
        subtitle: 'What The Brand Represents',
        content:
          'The blackletter gothic heritage paired with utilitarian tactical hardware represents the tension between historic legacy and aggressive modern defiance. Wearing the mark is a declaration of personal sovereignty.',
        image: MODEL_MOCK_PHOTOS.sataPlatformBackBlonde,
      },
      {
        stage: '04',
        title: 'THE EVOLUTION',
        subtitle: 'From Secret Capsules to Global Drops',
        content:
          'Rapidly growing through word-of-mouth underground demand, our capsule drops now span custom outerwear, technical cargo silhouettes, artisanal silver jewelry, and bespoke leather goods.',
        image: MODEL_MOCK_PHOTOS.satanCrossBlonde,
      },
      {
        stage: '05',
        title: 'THE FUTURE',
        subtitle: 'Where The Domain Is Going',
        content:
          'Expanding our creative universe into physical flagship sanctuaries, immersive runway experiences, and digital archive vaults while remaining fiercely independent and true to our rebel code.',
        image: MODEL_MOCK_PHOTOS.redMotionModel,
      },
    ],
  },
  zh: {
    label: '中文',
    heroHeadline: '不止于服饰，更是一种身份宣言。',
    heroSubheadline:
      'Devil\'s Domain 为那些拒绝妥协的灵魂而生。我们从不盲从季度潮流，我们为书写自己规则的叛逆者锻造现代铠甲。',
    manifestoTitle: '生而不为迎合。',
    manifestoLead:
      '我们坚信，真正的奢华绝非迎合流俗，而是毫不妥协的自我主权、纯粹的个性表达与精湛绝伦的工艺。',
    manifestoBody: [
      '在快时尚泛滥与同质化严重的当下，Devil\'s Domain 从暗夜的地下文化中破土而出。我们打造的每一件单品都是行走的艺术雕塑——采用高克重定制面料，搭配专属五金配件，以严格限量的形式发布。',
      '我们的作品专为不妥协者而造：创作者、叛逆者、思想家与夜行者，深知穿搭即是自我主权的铠甲。',
    ],
    philosophyTitle: '并非所有人都是为了顺从而生。',
    philosophyPoints: [
      {
        title: '个性与叛逆',
        desc: '我们致敬拒绝安于现状的勇者。你的独特身份，就是你最强大的武器。',
      },
      {
        title: '严苛匠心工艺',
        desc: '从 500 GSM 法国特制毛圈棉到 925 纯银手工打磨首饰，每一道工序均追求极致。',
      },
      {
        title: '绝版限量封存',
        desc: '我们坚持限量生产。每一次胶囊系列售罄后将永久封存，绝不再版。',
      },
      {
        title: '全球先锋社群',
        desc: '汇聚来自东京、伦敦、柏林、纽约等全球数以万计的先锋暗黑信徒。',
      },
    ],
    timeline: [
      {
        stage: '01',
        title: '起源之光',
        subtitle: '地下暗夜的工作室',
        content:
          '源于东京与伦敦地下夜行者的聚会，Devil\'s Domain 最初作为艺术家与音乐人的手工定制私服悄然问世。',
        image: MODEL_MOCK_PHOTOS.bannerStudio,
      },
      {
        stage: '02',
        title: '核心理念',
        subtitle: '为何创立 Devil\'s Domain',
        content:
          '现代奢华已失去棱角。我们要为日常穿着重新注入危险而诗意的先锋暗黑张力与硬核质感。',
        image: MODEL_MOCK_PHOTOS.domainY2kRedRoom,
      },
      {
        stage: '03',
        title: '品牌身份',
        subtitle: '图腾背后的寓意',
        content:
          '哥特黑体符号与战术机能硬件的结合，代表着经典遗产与现代叛逆力量的完美共鸣。',
        image: MODEL_MOCK_PHOTOS.sataPlatformBackBlonde,
      },
      {
        stage: '04',
        title: '进化蜕变',
        subtitle: '从私密胶囊走向全球首发',
        content:
          '凭借纯粹口碑在地下引爆，如今我们的胶囊产品已扩展至机能外套、战术工装裤、手作银饰及皮革系列。',
        image: MODEL_MOCK_PHOTOS.satanCrossBlonde,
      },
      {
        stage: '05',
        title: '未来版图',
        subtitle: '领域拓展与独立前行',
        content:
          '进军全球实体概念空间与沉浸式大秀，始终保持纯正的独立性与叛逆信条。',
        image: MODEL_MOCK_PHOTOS.redMotionModel,
      },
    ],
  },
  ja: {
    label: '日本語',
    heroHeadline: '衣服を超えた、アイデンティティの証明。',
    heroSubheadline:
      'Devil\'s Domain は妥協を拒む者のために生まれた。トレンドを追うのではない。自らの掟を刻む反逆者のための現代の鎧を鍛え上げる。',
    manifestoTitle: '同調するために創られたのではない。',
    manifestoLead:
      '真のラグジュアリーとは群れに紛れることではない。絶対的な自己主権、生々しい本物感、そして研ぎ澄まされた職人技にある。',
    manifestoBody: [
      '大量生産と使い捨てのトレンドが溢れる世界で、Devil\'s Domain は暗闇のアンダーグラウンドから姿を現した。私たちが創り出す一着一着は、着る彫刻であり、超重量級テキスタイルと特注パーツで構築される。',
      'クリエイター、反逆者、夜を生きる者たちへ。スタイルとは個人の誇りを守る鎧である。',
    ],
    philosophyTitle: '誰もが他人に馴染むために生まれたわけではない。',
    philosophyPoints: [
      {
        title: '個性と反骨精神',
        desc: '現状に抗う者を称える。あなたのアイデンティティこそが最強の武器である。',
      },
      {
        title: '妥協なきクラフトマンシップ',
        desc: '500 GSM フレンチテリーコットンから 925 シルバーまで、極限の精度で仕立てられる。',
      },
      {
        title: '完全限定アーカイブ',
        desc: '過剰生産はしない。完売したアーカイブ作品は二度と再販されない。',
      },
      {
        title: '世界規模の反逆者シンジケート',
        desc: '東京、ベルリン、ロンドン、ニューヨークを結ぶ先鋭的なコミュニティ。',
      },
    ],
    timeline: [
      {
        stage: '01',
        title: '始まり',
        subtitle: 'アトリエの火花',
        content:
          '東京とロンドンのアンダーグラウンドで誕生。限られたアーティストや夜行者のためのカスタムピースから始まった。',
        image: MODEL_MOCK_PHOTOS.bannerStudio,
      },
      {
        stage: '02',
        title: '理念',
        subtitle: 'なぜ創られたのか',
        content:
          '現代のラグジュアリーは牙を失った。衣服に危険なまでの美学と重厚なクオリティを取り戻す。',
        image: MODEL_MOCK_PHOTOS.domainY2kRedRoom,
      },
      {
        stage: '03',
        title: '象徴',
        subtitle: 'ブランドが意味するもの',
        content:
          'ゴシックブラックレターとミリタリータクティカルの融合。歴史的遺産と現代的反逆の激突。',
        image: MODEL_MOCK_PHOTOS.sataPlatformBackBlonde,
      },
      {
        stage: '04',
        title: '進化',
        subtitle: '世界中へ広がるドロップ',
        content:
          '口コミによって世界中に広まり、ヘビーアウター、カーゴ、シルバージュエリー、レザーへと拡張。',
        image: MODEL_MOCK_PHOTOS.satanCrossBlonde,
      },
      {
        stage: '05',
        title: '未来',
        subtitle: 'ドメインの行く先',
        content:
          'フィジカル空間とデジタルアーカイブの融合へ。妥協なき反逆の哲学を守り続ける。',
        image: MODEL_MOCK_PHOTOS.redMotionModel,
      },
    ],
  },
  my: {
    label: 'မြန်မာ',
    heroHeadline: 'အဝတ်အစားတစ်ခုထက်ပိုသော ကိုယ်ပိုင်လက္ခဏာကြေငြာချက်။',
    heroSubheadline:
      'Devil\'s Domain သည် မည်သည့်အရာကိုမျှ အလျှော့မပေးသော စိတ်ဓာတ်ရှိသူများအတွက် ရည်ရွယ်သည်။ ကျွန်ုပ်တို့သည် ရာသီအလိုက်ဖက်ရှင်ကို မလိုက်ပါ။ မိမိကိုယ်ပိုင်စည်းမျဉ်းကို ရေးဆွဲသူများအတွက် ခေတ်မီချပ်ဝတ်တန်ဆာများကို ဖန်တီးပေးသည်။',
    manifestoTitle: 'အများနဲ့တူရန် မဟုတ်။',
    manifestoLead:
      'စစ်မှန်သော ဇိမ်ခံမှုသည် လူအများကြားတွင် ရောနှောသွားရန်မဟုတ်ဘဲ ရဲရင့်သော မိမိကိုယ်ပိုင်လွတ်လပ်ခွင့်နှင့် အဆင့်မြင့်လက်ရာမြောက်မှုတွင် ရှိသည်ဟု ကျွန်ုပ်တို့ယုံကြည်သည်။',
    manifestoBody: [
      'ပုံစံတူအဝတ်အစားများနှင့် ပြည့်နှက်နေသောခေတ်တွင် Devil\'s Domain သည် အမှောင်ထုကြားမှ ပေါ်ထွက်လာခဲ့သည်။ ကျွန်ုပ်တို့ဖန်တီးသော အဝတ်အစားတိုင်းသည် အဆင့်မြင့်အထည်အလိပ်နှင့် သီးသန့်ဒီဇိုင်းများဖြင့် အကန့်အသတ်ဖြင့်သာ ထုတ်လုပ်သည်။',
      'ကျွန်ုပ်တို့၏ ဒီဇိုင်းများသည် ဖန်တီးသူများ၊ အသစ်ထွင်သူများနှင့် မိမိကိုယ်ပိုင်စတိုင်ကို တန်ဖိုးထားသူများအတွက် ဖြစ်သည်။',
    ],
    philosophyTitle: 'လူတိုင်းသည် အများသူငှာကဲ့သို့ နေထိုင်ရန် မွေးဖွားလာခြင်း မဟုတ်ပါ။',
    philosophyPoints: [
      {
        title: 'တစ်သီးပုဂ္ဂလဆန်မှုနှင့် ရဲရင့်ခြင်း',
        desc: 'သင့်ကိုယ်ပိုင်လက္ခဏာသည် သင့်အတွက် အကြီးမားဆုံးသော အင်အားနှင့် နယ်ပယ်ဖြစ်သည်။',
      },
      {
        title: 'အလျှော့မပေးသော လက်ရာအရည်အသွေး',
        desc: '500 GSM ချည်ထည်မှ 925 ငွေစစ်လက်ဝတ်ရတနာအထိ အသေးစိတ်ကျနစွာ ဖန်တီးထားသည်။',
      },
      {
        title: 'သီးသန့်အကန့်အသတ်ဖြင့် ထုတ်လုပ်မှု',
        desc: 'ကျွန်ုပ်တို့သည် အမြောက်အမြားမထုတ်ပါ။ ကုန်သွားသော ကာလအပိုင်းအခြားဒီဇိုင်းများကို ထပ်မံမထုတ်လုပ်ပါ။',
      },
      {
        title: 'ကမ္ဘာလုံးဆိုင်ရာ အဖွဲ့အစည်း',
        desc: 'တိုကျို၊ လန်ဒန်၊ ဘာလင်နှင့် ကမ္ဘာအနှံ့ရှိ စတိုင်ညီသူများ၏ အင်အားစု။',
      },
    ],
    timeline: [
      {
        stage: '01',
        title: 'အစပျိုးခြင်း',
        subtitle: 'အထည်ချုပ်စတူဒီယိုမှ မီးပွား',
        content:
          'တိုကျိုနှင့် လန်ဒန်မြို့များ၏ အနုပညာရှင်များနှင့် ဖန်တီးသူများအတွက် သီးသန့်လက်ချုပ်ဒီဇိုင်းများမှ စတင်ခဲ့သည်။',
        image: MODEL_MOCK_PHOTOS.bannerStudio,
      },
      {
        stage: '02',
        title: 'အယူအဆ',
        subtitle: 'Devil\'s Domain ကို အဘယ်ကြောင့် ဖန်တီးခဲ့သနည်း',
        content:
          'ခေတ်ပေါ်ဇိမ်ခံဖက်ရှင်များတွင် ပျောက်ဆုံးနေသော ရဲရင့်မှုနှင့် အလေးထားရသော အရည်အသွေးကို ပြန်လည်အသက်သွင်းရန်ဖြစ်သည်။',
        image: MODEL_MOCK_PHOTOS.domainY2kRedRoom,
      },
      {
        stage: '03',
        title: 'ကိုယ်ပိုင်အမှတ်အသား',
        subtitle: 'အမှတ်တံဆိပ်၏ အဓိပ္ပာယ်',
        content:
          'ဂေါသစ်အနုပညာနှင့် ခေတ်မီနည်းပညာဆန်သော ဒီဇိုင်းများပေါင်းစပ်မှုသည် မိမိကိုယ်ကို ပိုင်စိုးမှု၏ သင်္ကေတဖြစ်သည်။',
        image: MODEL_MOCK_PHOTOS.sataPlatformBackBlonde,
      },
      {
        stage: '04',
        title: 'တိုးတက်ပြောင်းလဲမှု',
        subtitle: 'သီးသန့်အဆင့်မှ ကမ္ဘာသို့',
        content:
          'အင်္ကျီများ၊ စစ်ဘောင်းဘီရှည်များ၊ ငွေလက်ဝတ်ရတနာများနှင့် သားရေအိတ်များအထိ တိုးချဲ့ထုတ်လုပ်လာခဲ့သည်။',
        image: MODEL_MOCK_PHOTOS.satanCrossBlonde,
      },
      {
        stage: '05',
        title: 'အနာဂတ်ခရီး',
        subtitle: 'နယ်ပယ်၏ ဦးတည်ချက်',
        content:
          'ကမ္ဘာ့အဆင့်မီ စတိုးဆိုင်များနှင့် သီးသန့်ပြပွဲများအထိ လွတ်လပ်သော ခံယူချက်ဖြင့် ဆက်လက်ချီတက်မည်။',
        image: MODEL_MOCK_PHOTOS.redMotionModel,
      },
    ],
  },
};
