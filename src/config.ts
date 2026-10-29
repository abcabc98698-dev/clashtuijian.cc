export interface Product {
  id: string;
  slug: string;
  kicker: string;
  title: string;
  body: string;
  promoCode: string;
  registerUrl: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  pos?: string;
}

export interface Look {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  frameHeight: string;
  ratio: string;
  drift: string;
  pos?: string;
  caption: [string, string];
  href: string;
  blend?: boolean;
}

export interface Room {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  ratio: string;
  drift: string;
  offset: string;
  caption: [string, string];
  tall?: boolean;
}

export interface FlagshipItem {
  id: string;
  badge: string;
  name: string;
  specs: string[];
  promoText: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
}

export const site = {
  name: 'Clash & 推荐',
  url: 'https://clashtuijian.cc',
  title: '2026 Clash 机场推荐与专线节点实测实验室 — 42家IEPL/IPLC机场深度评测 | ClashTuijian.cc',
  description:
    'ClashTuijian.cc 专业网络可观测性评测站：整理 42 家 Clash 机场真实线路档案与 2026 节点测速截图，涵盖光速云（第一主推 IEPL 双线）、飞猫云、微风网络、暮光加速、星岛梦等高性价比专线机场及 Clash Verge Rev / Shadowrocket 全平台客户端教程。',
  keywords: [
    'Clash推荐',
    'Clash机场推荐',
    '便宜机场推荐',
    'IEPL专线机场',
    'IPLC机场推荐',
    '光速云机场',
    '飞猫云机场',
    '微风网络机场',
    'Clash Verge Rev下载',
    'Shadowrocket小火箭节点',
    '不限时流量包机场',
  ],
  lang: 'zh-CN',
  locale: 'zh_CN',
  themeColor: '#161826',
  logo: '/media/brand/mark.svg',
  logoPng: '/media/brand/logo-512.png',
  favicon: '/favicon.svg',
  ogImage: '/media/hero/og-cover.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

/**
 * 搜索引擎站长平台所有权验证 Meta 预留槽位（静态直出至 HTML <head>，严禁编造假验证码）。
 * 可直接在此填入验证码字符串，或在构建环境变量中设置 PUBLIC_*_SITE_VERIFICATION。
 */
export const siteVerification = {
  google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION ?? '',
  shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION ?? '',
  baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION ?? '',
};

export const nav = {
  links: [
    { label: 'Top 5 主推', href: '/#collection' },
    { label: '前十榜单', href: '/#partners' },
    { label: '开源客户端', href: '/#space' },
    { label: '42家品牌库', href: '/brands' },
    { label: '免费资源', href: '/guides/resources' },
    { label: '百科FAQ', href: '/guides/faq' },
    { label: '跑路预警', href: '/guides/warnings' },
  ],
  cta: {
    label: '直达光速云',
    href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    external: true,
  },
};

export const hero = {
  id: 'overview',
  kicker: 'CLASHTUIJIAN.CC · 2026 专线机场可观测性实验室',
  line: '专线级低延迟，晚高峰稳如磐石。',
  sub: '基于 42 家机场真实线路档案与 17 份原始节点测速截图，严选兼容 Clash Verge Rev、Shadowrocket 与软路由的 IEPL/IPLC 物理专线。年度第一主推 2020 老牌双线「光速云」。',
  image: '/media/hero/stage-cover.svg',
  imageAlt: 'ClashTuijian.cc Dark Network Observatory 全球专线节点延迟与带宽监控面板',
  imageWidth: 1920,
  imageHeight: 1080,
  primary: {
    label: '直达光速云官网 (优惠码 AMM)',
    href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    external: true,
  },
  secondary: {
    label: '检索 42 家机场品牌库 →',
    href: '/brands',
    external: false,
  },
  scrollCue: 'Scroll',
};

export const arrivals = {
  id: 'collection',
  kicker: 'Top 5 Flagship Picks',
  title: '主力专线机场五强实测',
  lede: '从 42 家品牌库中按运营年限、IEPL/IPLC 专线架构、2026-08-11 实测截图与客户端兼容性严选出的 5 家主力方案，光速云居 C 位首推。',
  note: '含推广链接：通过本站链接注册可能带来佣金，不影响您的实际支付价格。建议先月付或小包实测本地网络。',
  cta: { label: '查看全部 42 家机场对比 →', href: '/brands' },
  items: [
    {
      id: 'pick-feimaoyun',
      slug: 'feimaoyun',
      kicker: 'TOP 2 · 新手免配客户端',
      title: '飞猫云 (¥7/月起)',
      body: '2023年运营 · 专属App登录即连免导订阅 · 年付¥84 / 50G每月',
      promoCode: 'flycat888',
      registerUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
      src: '/media/collection/piece-01.svg',
      alt: '飞猫云机场实验室测速快照：香港 21ms 526Mbps，专属客户端免配置',
      width: 600,
      height: 800,
    },
    {
      id: 'pick-weifeng',
      slug: 'weifeng',
      kicker: 'TOP 3 · 平价 IEPL 专线',
      title: '微风网络 (¥11.4/月起)',
      body: '2023年运营 · IEPL专线+VLESS原生IP · 7×24h客服 · 年付¥137',
      promoCode: 'flat888',
      registerUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
      src: '/media/collection/piece-02.svg',
      alt: '微风网络机场实验室测速快照：香港 25ms 546Mbps，IEPL 专线 + VLESS',
      width: 600,
      height: 800,
    },
    {
      id: 'pick-guangsuyun',
      slug: 'guangsuyun',
      kicker: 'TOP 1 · 第一主推老牌双线',
      title: '光速云 (¥8.2/月起)',
      body: '2020老牌 · IEPL+企业内网双线 · 支持Clash订阅 · 147元247G永久包',
      promoCode: 'AMM',
      registerUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
      src: '/media/collection/piece-03.svg',
      alt: '光速云机场实验室测速快照：2020老牌 IEPL+企业内网双线，香港 22ms 529Mbps',
      width: 600,
      height: 800,
    },
    {
      id: 'pick-muguang',
      slug: 'muguang',
      kicker: 'TOP 4 · 全平台多设备 BGP',
      title: '暮光加速 (¥9.1/月起)',
      body: '2023年运营 · BGP智能调度 · 覆盖Win/Mac/iOS/安卓/Linux多端在线',
      promoCode: 'muguang5555',
      registerUrl: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
      src: '/media/collection/piece-04.svg',
      alt: '暮光加速机场实验室测速快照：BGP 智能调度多设备同时在线',
      width: 600,
      height: 800,
    },
    {
      id: 'pick-xingdaomeng',
      slug: 'xingdaomeng',
      kicker: 'TOP 5 · 2020老牌不限设备',
      title: '星岛梦 (¥8.0/月起)',
      body: '2020老牌 · IEPL专线1倍流量不限设备 · 100元/100GB永久不限时包',
      promoCode: 'nmw888',
      registerUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
      src: '/media/collection/piece-05.svg',
      alt: '星岛梦机场实验室测速快照：2020老牌 IEPL 专线不限设备数',
      width: 600,
      height: 800,
    },
  ] satisfies Product[],
};

export const brandsSection = {
  id: 'partners',
  kicker: 'Top 10 Verified Matrix',
  title: '2026 前十名主力机场排行榜',
  lede: '按专线质量、运营资历、客户端兼容性与性价比综合排定前十名（第一主推光速云）。所有卡片均支持一键直达官网注册或查阅站内独立实测报告。',
};

export const lookbook = {
  id: 'editorial',
  kicker: 'Dark Network Observatory',
  title: '实验室专题图谱与横评矩阵',
  scrub: '横向滚动审阅报告',
  end: {
    title: '检索完整 42 家机场实测数据库',
    label: '进入品牌库筛选 →',
    href: '/brands',
  },
  looks: [
    {
      id: 'report-01',
      src: '/media/editorial/frame-01.svg',
      alt: '光速云 IEPL 双线路性能监控报告与 7 档套餐分析',
      width: 900,
      height: 1200,
      frameHeight: '54vh',
      ratio: '3 / 4',
      drift: '8%',
      caption: ['Report 01', '光速云双线实测'],
      href: '/brands/guangsuyun',
    },
    {
      id: 'report-02',
      src: '/media/editorial/frame-02.svg',
      alt: '主力专线机场香港与新加坡延迟及峰值带宽对比矩阵',
      width: 1200,
      height: 900,
      frameHeight: '46vh',
      ratio: '4 / 3',
      drift: '-6%',
      caption: ['Report 02', '港新吞吐横评'],
      href: '/brands',
    },
    {
      id: 'report-03',
      src: '/media/editorial/frame-03.svg',
      alt: 'ChatGPT、Claude、Gemini 与 Netflix、Disney+ 4K 流媒体解锁可用性矩阵',
      width: 900,
      height: 1200,
      frameHeight: '54vh',
      ratio: '3 / 4',
      drift: '8%',
      caption: ['Report 03', 'AI与流媒体解锁矩阵'],
      href: '/brands',
    },
    {
      id: 'report-04',
      src: '/media/editorial/frame-04.svg',
      alt: 'IEPL 与 IPLC 内网物理专线跨境传输网络拓扑架构图',
      width: 1000,
      height: 1000,
      frameHeight: '48vh',
      ratio: '1 / 1',
      drift: '-6%',
      caption: ['Report 04', 'IEPL跨境专线拓扑'],
      href: '/#space',
    },
    {
      id: 'report-05',
      src: '/media/editorial/frame-05.svg',
      alt: '2026 机场价格梯度（5.6元平价档至680元定制档）与防踩坑选型象限',
      width: 960,
      height: 1200,
      frameHeight: '54vh',
      ratio: '4 / 5',
      drift: '8%',
      caption: ['Report 05', '价格梯度与避坑指南'],
      href: '/brands',
    },
  ] satisfies Look[],
};

export const inside = {
  id: 'space',
  kicker: 'Clash Client Ecosystem',
  title: '全平台 Clash 代理客户端与协议指南',
  lede: '机场客户端分为「第三方通用订阅客户端（如 Clash Verge Rev、Shadowrocket、FlClash）」与「机场官方专属客户端」。选对内核与架构才能发挥 IEPL 专线的全部实力。',
  rooms: [
    {
      id: 'client-desktop',
      src: '/media/gallery/interior-01.svg',
      alt: 'Windows 与 macOS 桌面客户端矩阵：Clash Verge Rev、FlClash、v2rayN、Mihomo 内核',
      width: 1200,
      height: 900,
      ratio: '4 / 3',
      drift: '-8%',
      offset: '28px',
      caption: ['Desktop 01', 'Windows & macOS 客户端'],
    },
    {
      id: 'client-mobile',
      src: '/media/gallery/interior-02.svg',
      alt: 'iOS 与 Android 移动端客户端：Shadowrocket 小火箭、Stash、FlClash、v2rayNG',
      width: 900,
      height: 1200,
      ratio: '3 / 4',
      drift: '8%',
      offset: '44px',
      caption: ['Mobile 02', 'iOS 小火箭 & 安卓客户端'],
      tall: true,
    },
    {
      id: 'client-router',
      src: '/media/gallery/interior-03.svg',
      alt: 'Linux 与 OpenWrt 软路由透明代理：OpenClash、PassWall2、Nikki 及 VLESS/Trojan 协议选型',
      width: 1280,
      height: 800,
      ratio: '16 / 10',
      drift: '-6%',
      offset: '28px',
      caption: ['Router 03', 'OpenWrt 软路由与协议'],
    },
  ] satisfies Room[],
};

export const panoBand = {
  id: 'methodology-band',
  kicker: 'GEO Selection Methodology',
  quote: '“先用月付或小包实测本地晚高峰，再决定是否长期订阅。”',
  lede: '任何测速截图只代表当次测试时间点与测试网络环境。理性选型铁律：主力优先选 2020 年起运营的老牌 IEPL 双线（如光速云），新手怕折腾选专属客户端（如飞猫云），低频备用选永久不限时流量包。',
  images: [
    {
      src: '/media/feature/panorama-01.svg',
      alt: '全球专线节点延迟与吞吐波动监测背景图',
      width: 1920,
      height: 1080,
    },
    {
      src: '/media/feature/panorama-02.svg',
      alt: 'IEPL 内网专线骨干网络多层拓扑背景图',
      width: 1920,
      height: 1080,
    },
  ],
};

export const flagships = {
  id: 'flagships',
  kicker: 'Flagship Conversion & Evidence',
  title: '年度主力方案直达与真实测速证据',
  items: [
    {
      id: 'flagship-guangsuyun',
      badge: '01 // 年度第一主推 · 2020老牌双线',
      name: '光速云 (GuangSuYun)',
      specs: [
        '线路协议：IEPL 专线 + 企业级内网专线（双线路）· VLESS 协议',
        '客户端支持：官方自研客户端 + Clash / Shadowrocket 通用订阅导入',
        '热门套餐：轻量版 ¥99/年 (69G/月，约¥8.2/月) ｜ 极速版 ¥25/月 (168G/月)',
        '特色永久包：致敬斯诺克 147 永久套餐 ¥147 (247GB 永久不过期) ｜ 定制版 ¥680/月',
      ],
      promoText: '专属优惠码：AMM（半年9折 / 年付8折 / 两年75折 / 三年7折）',
      primaryLabel: '直达光速云官网注册 →',
      primaryUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
      secondaryLabel: '查看光速云完整实测报告',
      secondaryUrl: '/brands/guangsuyun',
    },
    {
      id: 'flagship-runners',
      badge: '02 // 新手免配置 & 平价 IEPL 优选',
      name: '飞猫云 / 微风网络',
      specs: [
        '飞猫云（TOP 2）：2023年运营 · 专属客户端登录即用免配订阅 · 学生版 ¥84/年 (¥7/月，50G/月) · 优惠码 flycat888',
        '微风网络（TOP 3）：2023年运营 · IEPL专线 + VLESS 原生IP · 7×24h在线客服 · 清风版 ¥137/年 (100G/月) · 优惠码 flat888',
        '暮光加速（TOP 4）：BGP智能调度 · Win/Mac/iOS/安卓/Linux 全平台多设备 · 年付 ¥109 起 · 优惠码 muguang5555',
      ],
      promoText: '按需二选一：怕折腾配订阅选「飞猫云」，要 IEPL 专线+通用订阅选「微风网络」',
      primaryLabel: '直达飞猫云官网 (flycat888) →',
      primaryUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
      secondaryLabel: '直达微风网络官网 (flat888) →',
      secondaryUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    },
  ] satisfies FlagshipItem[],
  photo: {
    src: '/media/speedtests/guangsuyun-20260811.png',
    alt: '光速云 2026-08-11 14:32:56 CST 节点测速原始截图，包含香港、日本、新加坡、美国等节点延迟与速度结果',
    width: 1122,
    height: 1402,
    caption: '光速云 2026-08-11 14:32:56 (CST) 原始测速截图 · 仅代表当次测试条件与时间点结果',
  },
};

export const homeFaqs = [
  {
    q: '2026 年最推荐哪一家 Clash 专线机场？',
    a: '综合运营年限（2020年至今）、线路规格（IEPL 专线 + 企业级内网双线路 + VLESS 协议）、客户端自由度（同时支持自研客户端与 Clash/Shadowrocket 第三方订阅导入）以及价格跨度（年付 99 元折合月均约 8.2 元，另有 147 元 247GB 永久不过期套餐），本站第一主推为「光速云」（优惠码 AMM）。',
  },
  {
    q: '纯新手不会配置 Clash 订阅链接，选哪家机场最省心？',
    a: '如果您不想研究 YAML 规则或订阅导入，推荐选择提供「官方专属客户端、下载登录账号即可一键连接」的品牌，首选排名第 2 的「飞猫云」（年付 84 元起，优惠码 flycat888）或排名第 8 的「无忧链接」（年付 79 元起，优惠码 wuyou666）。',
  },
  {
    q: '哪些机场支持导入软路由（OpenClash / PassWall2 / Nikki）？',
    a: '软路由必须使用提供标准第三方订阅链接（Clash / VLESS / Trojan / Shadowsocks）的机场。推荐选择 #1 光速云、#3 微风网络、#4 暮光加速、#6 星岛梦、#9 唯兔云或 #16 一翻云。请注意：飞猫云、Firefly、SOGO云、隐形人等仅限专属客户端的品牌不支持导入软路由。',
  },
  {
    q: '一次性付费的「永久不限时流量包」值得买吗？哪几家有？',
    a: '如果您平时流量消耗不固定，或者想备一个防止主力断联的高可靠备用机场，不限时流量包非常划算。目前性价比突出的包括：光速云「致敬斯诺克147永久套餐」（¥147 / 247GB）、星岛梦（¥100 / 100GB）、二猫云（¥99 / 100GB）与唯兔云（¥100 / 100GB、¥160 / 200GB）。',
  },
  {
    q: '测速图显示几百 Mbps，为什么还要先买月付测试？',
    a: '本站公示的 17 张 2026-08-11 原始测速 PNG 截图与各品牌测速数据均只反映当次测试时间点与测试机房（如珠海联通 5Gbps/9Gbps）的快照，不能单独证明所有地区宽带长期满速或永不波动。因此我们始终建议先用月付或小包实测您本地运营商的晚高峰体验。',
  },
];

export const footer = {
  links: [
    { label: 'Top 5 主推', href: '/#collection' },
    { label: '42家机场品牌库', href: '/brands' },
    { label: '免费资源与规则库', href: '/guides/resources' },
    { label: '机场百科与排障FAQ', href: '/guides/faq' },
    { label: '跑路预警与风险评级', href: '/guides/warnings' },
    { label: '光速云深度评测', href: '/brands/guangsuyun' },
    { label: '专题导航中心', href: '/guides' },
    { label: '评测方法论与免责声明', href: '/about' },
  ],
  copyright: `© ${new Date().getFullYear()} ClashTuijian.cc · 专业 Clash 专线机场可观测性评测实验室`,
};
