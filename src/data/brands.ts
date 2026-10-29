export interface BrandPlan {
  name: string;
  cycle: string;
  price: string;
  traffic: string;
  period: string;
}

export interface BrandSpeedRow {
  node: string;
  latency: string;
  download: string;
  date?: string;
}

export interface MeasuredPngEvidence {
  src: string;
  testedAt: string;
  protocolDisplayed: string;
  toolFamily: string;
  dateConfidence: string;
  note: string;
}

export interface BrandItem {
  rank: number;
  slug: string;
  name: string;
  isTopTen: boolean;
  isPrimaryPick?: boolean;
  badge: string;
  accent: string;
  registerUrl: string;
  linkNotice?: string;
  promoCode: string;
  promoDetail: string;
  founded: string;
  entryPriceText: string;
  minMonthlyPrice: number;
  lineType: string;
  protocols: string[];
  clientMode: 'both' | 'clash-sub' | 'custom-only' | 'unverified';
  clientText: string;
  hasUnlimitedPack: boolean;
  regions: string;
  highlights: string[];
  plans: BrandPlan[];
  speedDataStatus: 'vendor' | 'historical' | 'unverified';
  speedDateText: string;
  speeds: BrandSpeedRow[];
  measuredPng?: MeasuredPngEvidence;
  unlockSupported: string[];
  unlockPartial: string[];
  unlockNote: string;
  summary: string;
  description: string;
  pros: string[];
  cons: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  riskNote: string;
  comparisonNote: string;
  relatedSlugs: string[];
  dataStatus: 'measured-plus-vendor' | 'vendor' | 'historical';
  verifiedDate: string;
  updatedDate: string;
  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    geoQuestions: string[];
    title: string;
    metaDescription: string;
    h1: string;
    faqs: { q: string; a: string }[];
  };
}

export const AFFILIATE_DISCLOSURE =
  '含推广链接：通过本站链接注册可能为本站带来佣金支持，但完全不影响您的实际支付价格与优惠码折扣。';

export const rawBrands: BrandItem[] = [
  {
    rank: 1,
    slug: 'guangsuyun',
    name: '光速云',
    isTopTen: true,
    isPrimaryPick: true,
    badge: '年度第一主推 · 2020老牌双线',
    accent: '#b5abfc',
    registerUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    promoCode: 'AMM',
    promoDetail: '新人优惠码 AMM；半年9折 / 年付8折 / 两年75折 / 三年7折（轻量版与147永久套餐不打折）',
    founded: '2020年',
    entryPriceText: '¥8.2/月起 (年付¥99)',
    minMonthlyPrice: 8.2,
    lineType: 'IEPL 专线 + 企业级内网专线（双线路架构）',
    protocols: ['VLESS'],
    clientMode: 'both',
    clientText: '提供自研客户端，同时支持 Clash Verge Rev、Shadowrocket 等第三方订阅导入',
    hasUnlimitedPack: true,
    regions: '香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等',
    highlights: [
      '2020年运营至今的老牌综合型机场，IEPL 专线 + 企业级内网双线路架构',
      '同时提供一键自研客户端与标准 Clash / Shadowrocket 通用订阅导入',
      '独创「致敬斯诺克147永久套餐」（¥147 享 247GB 永久不过期流量）',
      '单节点最高 2.5Gbps 带宽，全节点 ×1 倍率且不限客户端设备数量',
    ],
    plans: [
      { name: '光速云·轻量版', cycle: '年付', price: '¥99', traffic: '69GB', period: '每月' },
      { name: '光速云·极速版', cycle: '月付', price: '¥25', traffic: '168GB', period: '每月' },
      { name: '光速云·流光版', cycle: '月付', price: '¥34', traffic: '238GB', period: '每月' },
      { name: '光速云·量子版', cycle: '月付', price: '¥68', traffic: '500GB', period: '每月' },
      { name: '光速云·无界版', cycle: '月付', price: '¥138', traffic: '900GB', period: '每月' },
      { name: '光速云·致敬斯诺克147永久套餐', cycle: '一次性付费', price: '¥147', traffic: '247GB', period: '永久不过期' },
      { name: '光速云·定制套餐（独享原生IP）', cycle: '月付', price: '¥680', traffic: '500GB', period: '每月' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港 IEPL', latency: '22ms', download: '529Mbps' },
      { node: '台湾', latency: '41ms', download: '114Mbps' },
      { node: '新加坡 IEPL', latency: '46ms', download: '387Mbps' },
      { node: '日本', latency: '57ms', download: '135Mbps' },
      { node: '美国', latency: '143ms', download: '18Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/guangsuyun-20260811.png',
      testedAt: '2026-08-11 14:32:56 CST',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)',
      dateConfidence: 'visible-in-image',
      note: '测试时间：2026-08-11 14:32:56（CST）。本图记录当次测试环境下的节点延迟与吞吐结果，仅代表该时间点和测试线路，不代表长期表现或所有用户体验。',
    },
    unlockSupported: ['Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['ChatGPT (视节点而定)', 'Gemini (视节点而定)'],
    unlockNote: '品牌资料显示支持跨境电商、TikTok直播与主流流媒体；ChatGPT、Gemini 等 AI 工具并非所有节点均固定支持，实际使用可能需在客户端内切换节点。',
    summary:
      '光速云（2020年运营）是本站第一主推的综合型 IEPL + 企业级内网双线机场，支持 VLESS 协议与 Clash/Shadowrocket 第三方订阅导入及自研客户端。入门年付 99 元（折合月均约 8.2 元，每月 69GB），并提供 147 元 247GB 永久不限时流量包与 680 元/月独享原生 IP 定制方案。',
    description:
      '光速云在便宜与高性价比机场推荐中兼具运营年限与双线路优势：2020 年开业，将 IEPL 专线与企业级内网专线结合，支持支付宝、微信与 USDT 支付。香港（20个节点）、日本（10个）、新加坡（10个）、美国（10个）及英法德土泰巴等 12+ 国家地区覆盖全面。既保留了 Clash、Shadowrocket 等第三方客户端订阅导入能力，也提供一键登录自研客户端。需要注意特殊套餐不支持退款，建议新用户先通过月付极速版（25元/168GB）或轻量包实测本地晚高峰表现。',
    pros: [
      '2020年运营至今，相比2024-2025新开机场具备更长运营验证周期',
      'IEPL 专线 + 企业级内网双线路，单节点标注最高 2.5Gbps 且不限设备数',
      '同时兼容 Clash/Shadowrocket 第三方订阅导入与官方自研客户端',
      '档位极全：涵盖99元/年轻量版、147元/247GB永久套餐与680元独享IP定制版',
    ],
    cons: [
      '8.2元/月为年付99元折算均价，普通月付从25元/168GB起',
      'ChatGPT 与 Gemini 需视具体落地节点切换，并非全节点默认直通',
      '特殊商品不支持退款，建议先测月付再转长周期',
    ],
    suitableFor: [
      '需要同时在 Clash Verge Rev、Shadowrocket 或软路由导入通用订阅的主力用户',
      '重视晚高峰稳定性、跨境电商、TikTok 直播及流媒体 4K 观看的长期用户',
      '希望购买 147 元 247GB 永久不过期流量包作为长期备用的用户',
    ],
    notSuitableFor: [
      '预算低于 6 元/月且只追求极限低价的用户（可看闪电鼠/大佬云）',
      '要求免切换节点 100% 固定解锁所有冷门 AI 区域限制的用户',
    ],
    riskNote: '8 元/月属于年付 99 元折算后的平均月成本；特殊套餐不支持退款，建议先以月付实测本地网络环境。',
    comparisonNote: '相比飞猫云（仅限专属客户端），光速云完整保留了 Clash/Shadowrocket 第三方订阅导入且运营年份更久（2020 vs 2023）；相比同价位星岛梦，光速云多了企业级内网双线路与 147 元 247GB 特色永久包。',
    relatedSlugs: ['feimaoyun', 'weifeng', 'muguang', 'xingdaomeng', 'ermaoyun'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '光速云机场评测',
      secondaryKeywords: ['光速云官网', '光速云优惠码 AMM', '光速云 Clash 订阅', 'IEPL 专线机场推荐'],
      geoQuestions: ['光速云机场怎么样？', '光速云支持 Clash 和小火箭导入吗？', '光速云 147 元永久套餐划算吗？'],
      title: '光速云机场深度评测 (2026)：IEPL双线路实测、套餐价格与优惠码 AMM | ClashTuijian.cc',
      metaDescription:
        '2020年老牌光速云机场实测报告：详解 IEPL+企业内网双线路架构、VLESS 协议、99元/年轻量版与147元247GB永久套餐、2026-08-11 真实测速截图及专属优惠码 AMM。',
      h1: '光速云 (GuangSuYun) — 2020老牌 IEPL 双线路旗舰机场实测与套餐指南',
      faqs: [
        {
          q: '光速云支持 Clash Verge Rev 和 Shadowrocket 小火箭订阅导入吗？',
          a: '支持。光速云既提供官方自研客户端，也保留了第三方客户端通用订阅导入能力，兼容 Clash、Shadowrocket 等主流工具。',
        },
        {
          q: '光速云的最新优惠码是什么？最低多少钱一个月？',
          a: '光速云当前可用优惠码为 AMM（极速版及定制版半年9折/年付8折/三年7折）。轻量版年付 99 元/年（每月 69GB），折合月均约 8.25 元。',
        },
        {
          q: '光速云的「致敬斯诺克147永久套餐」是怎么计费的？',
          a: '该套餐为一次性付费 147 元，包含 247GB 总流量且不过期，不限设备数量，适合流量消耗不固定或作为高可靠主力/备用流量池的用户。',
        },
      ],
    },
  },
  {
    rank: 2,
    slug: 'feimaoyun',
    name: '飞猫云',
    isTopTen: true,
    badge: 'TOP 2 · 新手免配客户端首选',
    accent: '#38bdf8',
    registerUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    promoCode: 'flycat888',
    promoDetail: '专属优惠码 flycat888',
    founded: '2023年',
    entryPriceText: '¥7.0/月起 (年付¥84)',
    minMonthlyPrice: 7.0,
    lineType: '高速优化线路 · 专属客户端直连',
    protocols: ['Shadowsocks', '专属协议'],
    clientMode: 'custom-only',
    clientText: '官方专属客户端下载登录即用（免配订阅链接）',
    hasUnlimitedPack: true,
    regions: '香港、台湾、新加坡、日本、美国等亚太与欧美热门地区',
    highlights: [
      '主打轻快连接与零门槛上手，下载官方 App 登录账号即可一键连接',
      '无需寻找订阅链接、无需配置 Clash 规则，彻底解决新手配置痛点',
      '年付学生版仅 ¥84/年（折合 ¥7/月，含 50GB/月），另有 1000GB 不限时套餐',
      '支持 ChatGPT、Claude 及 Netflix、Disney+、YouTube、TikTok 解锁',
    ],
    plans: [
      { name: '飞猫·学生版', cycle: '年付', price: '¥84', traffic: '50GB', period: '每月' },
      { name: '飞猫·星耀版', cycle: '月付', price: '¥25', traffic: '150GB', period: '每月' },
      { name: '飞猫·星环版', cycle: '月付', price: '¥45', traffic: '300GB', period: '每月' },
      { name: '飞猫·银河版', cycle: '月付', price: '¥85', traffic: '600GB', period: '每月' },
      { name: '飞猫·宇宙版', cycle: '月付', price: '¥150', traffic: '1000GB', period: '每月' },
      { name: '飞猫·不限时套餐', cycle: '一次性付费', price: '¥680', traffic: '1000GB', period: '一次性' },
      { name: '飞猫·定制套餐', cycle: '月付', price: '¥550', traffic: '500GB', period: '每月' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '21ms', download: '526Mbps' },
      { node: '台湾', latency: '41ms', download: '116Mbps' },
      { node: '新加坡', latency: '45ms', download: '413Mbps' },
      { node: '日本', latency: '54ms', download: '138Mbps' },
      { node: '美国', latency: '178ms', download: '14Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/feimaoyun-20260811.png',
      testedAt: '2026-08-11 08:52:30 CST',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)',
      dateConfidence: 'visible-in-image',
      note: '测试时间：2026-08-11 08:52:30（CST）。本图记录当次测试环境下的节点延迟与吞吐结果，仅代表该时间点和测试线路。',
    },
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '日常流媒体与 ChatGPT/Claude 均在支持列表内，Gemini 需视具体节点切换。',
    summary:
      '飞猫云（2023年运营）是新手机场推荐的首选代表，采用专属客户端模式，下载登录即用，免去繁琐的 Clash 订阅配置，年付学生版低至 7 元/月（50GB/月）。',
    description:
      '飞猫云的核心竞争力在于“省事”：无需自己挑选客户端或导入订阅链接，第一次接触机场的新手也能在 1 分钟内完成连接。84 元/年的学生版折合每月仅 7 元，节点覆盖香港、台湾、新加坡、日本、美国等常见地区，日常刷 4K 视频、使用 ChatGPT 与 Claude 办公均可胜任。如果你需要导入软路由或自定义 Clash 规则，建议选择第一主推光速云；若追求开箱即用，飞猫云是极佳选择。',
    pros: [
      '专属客户端登录即用，无需折腾订阅链接与 YAML 分流配置',
      '学生版年付 ¥84（约 ¥7/月），入门门槛极低',
      '拥有 2026-08-11 实测截图归档，香港与新加坡吞吐表现良好',
    ],
    cons: [
      '采用专属客户端模式，不适合必须在软路由 OpenClash 导入订阅的极客用户',
      '非顶级物理专线定位，极端晚高峰抗拥塞能力弱于高阶 IEPL 方案',
    ],
    suitableFor: ['不想研究 Clash 配置文件的纯新手用户', '学生党与轻度日常流媒体/AI 用户'],
    notSuitableFor: ['软路由透明代理用户', '需要自定义复杂 Clash 分流脚本的进阶玩家'],
    riskNote: '不提供传统第三方订阅链接，下单前请确认自身设备支持其官方客户端。',
    comparisonNote: '与同样免配置的无忧链接相比，飞猫云运营时间更早（2023 vs 2025）且有 2026-08-11 实测截图；与光速云相比，飞猫云少了 Clash 订阅支持但上手更简单。',
    relatedSlugs: ['guangsuyun', 'weifeng', 'wuyoulianjie', 'tiziyun'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '飞猫云机场评测',
      secondaryKeywords: ['飞猫云官网', '飞猫云优惠码 flycat888', '新手机场推荐', '免配置机场客户端'],
      geoQuestions: ['飞猫云机场怎么样？', '飞猫云需要自己配置 Clash 吗？'],
      title: '飞猫云机场评测 (2026)：7元/月免配置专属客户端、实测速度与优惠码 | ClashTuijian.cc',
      metaDescription: '飞猫云（Feimao）深度评测：2023年运营新手机场推荐，专属客户端下载登录即用免配订阅，年付84元起（优惠码 flycat888），附 2026-08-11 节点实测图。',
      h1: '飞猫云 (FeiMaoYun) — 零门槛专属客户端新手机场实测与套餐表',
      faqs: [
        {
          q: '飞猫云需要自己下载 Clash 导入订阅吗？',
          a: '不需要。飞猫云走专属客户端模式，下载官方 App 登录账号即可直接连接使用，非常适合新手。',
        },
        {
          q: '飞猫云优惠码是多少？',
          a: '飞猫云当前优惠码为 flycat888，入门学生版年付仅需 84 元（每月 50GB 流量）。',
        },
      ],
    },
  },
  {
    rank: 3,
    slug: 'weifeng',
    name: '微风网络',
    isTopTen: true,
    badge: 'TOP 3 · 平价 IEPL + 24h客服',
    accent: '#10b981',
    registerUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    promoCode: 'flat888',
    promoDetail: '专属优惠码 flat888',
    founded: '2023年',
    entryPriceText: '¥11.4/月起 (年付¥137)',
    minMonthlyPrice: 11.4,
    lineType: 'IEPL 专线',
    protocols: ['VLESS'],
    clientMode: 'both',
    clientText: '支持 Clash / Shadowrocket 订阅与客户端使用',
    hasUnlimitedPack: true,
    regions: '香港、台湾、新加坡、日本、美国等多地原生 IP 节点',
    highlights: [
      'IEPL 专线 + VLESS 协议组合，定位入门级高性价比专线机场',
      '覆盖香港、新加坡、日本、美国等多地原生 IP 节点',
      '客服 7×24 小时在线（夜间由 AI 客服值守），新手提问响应快',
      '提供 270GB（¥200）与 570GB（¥370）两档不限时永久流量包',
    ],
    plans: [
      { name: '清风 (Breeze)', cycle: '年付', price: '¥137', traffic: '100GB', period: '每月' },
      { name: '乘风 (Riding)', cycle: '月付', price: '¥27', traffic: '200GB', period: '每月' },
      { name: '破风 (Breaking)', cycle: '月付', price: '¥57', traffic: '500GB', period: '每月' },
      { name: '御风 (Mastery)', cycle: '月付', price: '¥127', traffic: '1200GB', period: '每月' },
      { name: '信风·不限时', cycle: '一次性付费', price: '¥200', traffic: '270GB', period: '一次性' },
      { name: '长风·不限时', cycle: '一次性付费', price: '¥370', traffic: '570GB', period: '一次性' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '25ms', download: '546Mbps' },
      { node: '台湾', latency: '40ms', download: '115Mbps' },
      { node: '新加坡', latency: '43ms', download: '384Mbps' },
      { node: '日本', latency: '54ms', download: '131Mbps' },
      { node: '美国', latency: '167ms', download: '17Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/weifeng-20260811.png',
      testedAt: '2026-08-11 CST',
      protocolDisplayed: 'Shadowsocks / VLESS',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      dateConfidence: 'visible-in-image',
      note: '测试批次：2026-08-11（CST）。本图记录当次测试环境下的节点延迟与吞吐结果，仅代表该时间点和测试线路。',
    },
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '原生 IP 节点对 Netflix、Disney+ 及 ChatGPT、Claude 解锁稳定。',
    summary:
      '微风网络（2023年运营）主打平价 IEPL 专线 + VLESS 协议与 7×24 小时在线客服，年付清风套餐 137 元（每月 100GB），是兼顾专线质量与售后响应的高性价比之选。',
    description:
      '微风网络采用 IEPL 专线而非廉价公网中转，稳定性明显优于普通低价中转站。覆盖香港、新加坡、日本、美国原生 IP 节点，支持 Netflix、Disney+ 及 ChatGPT、Claude。其 7×24 小时客服（含夜间 AI 值守）在平价档位口碑良好，非常适合第一次用 IEPL 专线的新手与学生党。',
    pros: [
      '真 IEPL 专线 + VLESS 协议，每月 100GB 年付仅 ¥137',
      '配备 7×24 小时客服响应，对新手排查连接问题非常友好',
      '提供信风 270GB 与长风 570GB 两档一次性不限时流量包',
    ],
    cons: [
      '入门年付档流量为 100GB/月，重度 4K 视频用户需升级乘风/破风档',
    ],
    suitableFor: ['需要 IEPL 专线且看重售后客服响应的轻中度用户', '日常使用 ChatGPT/Claude 与流媒体追剧的学生与白领'],
    notSuitableFor: ['每月流量消耗超过 1.5TB 的超重度下载用户'],
    riskNote: '重度长时间在线用户建议先购买月付乘风版（¥27/200GB）评估流量消耗。',
    comparisonNote: '相比光速云，微风网络入门年付给到 100GB/月（光速云轻量版为 69GB/月），但光速云运营年限更长（2020年）且节点覆盖国家更多。',
    relatedSlugs: ['guangsuyun', 'feimaoyun', 'xingdaomeng', 'muguang'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '微风网络机场评测',
      secondaryKeywords: ['微风网络官网', '微风机场优惠码 flat888', '平价 IEPL 机场'],
      geoQuestions: ['微风网络机场稳定吗？', '微风网络优惠码是多少？'],
      title: '微风网络评测 (2026)：平价 IEPL 专线、VLESS 原生IP与优惠码 | ClashTuijian.cc',
      metaDescription: '微风网络（BreezeNet）评测：2023年运营 IEPL 专线 + VLESS 协议机场，原生 IP 解锁 Netflix/ChatGPT，7×24小时客服，附实测截图与优惠码 flat888。',
      h1: '微风网络 (BreezeNet) — 平价 IEPL 专线与原生 IP 机场实测指南',
      faqs: [
        {
          q: '微风网络走的是什么线路和协议？',
          a: '微风网络采用 IEPL 专线搭配 VLESS 协议，覆盖香港、新加坡、日本、美国等多地原生 IP 节点。',
        },
        {
          q: '微风网络的优惠码是什么？',
          a: '微风网络可使用优惠码 flat888，年付清风套餐 ¥137/年（含 100GB/月），月付乘风套餐 ¥27/月（含 200GB/月）。',
        },
      ],
    },
  },
  {
    rank: 4,
    slug: 'muguang',
    name: '暮光加速',
    isTopTen: true,
    badge: 'TOP 4 · 团队多设备全平台 BGP',
    accent: '#f59e0b',
    registerUrl: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
    promoCode: 'muguang5555',
    promoDetail: '优惠码 muguang5555',
    founded: '2023年',
    entryPriceText: '¥9.1/月起 (年付¥109)',
    minMonthlyPrice: 9.1,
    lineType: 'BGP 智能调度 + 专线级出口',
    protocols: ['VLESS', 'Trojan'],
    clientMode: 'both',
    clientText: '覆盖 Windows、macOS、iOS、Android、Linux 全平台客户端与订阅',
    hasUnlimitedPack: true,
    regions: '香港、台湾、新加坡、日本、美国等主流核心区域',
    highlights: [
      'BGP 智能调度搭配专线级出口，主打跨平台低延迟与多设备同时在线',
      '完整覆盖 Windows、macOS、iOS、Android、Linux 五大操作系统',
      '流量档位跨度大（70GB/月 至 1500GB/月），并提供 150G/400G/800G 三档不限时包',
      '官方宣称提供 7×24 小时真人客服，适合个人多端与远程协作团队',
    ],
    plans: [
      { name: '【暮光·年付轻量版】', cycle: '年付', price: '¥109', traffic: '70GB', period: '每月' },
      { name: '【暮光·基础版】', cycle: '月付', price: '¥20', traffic: '120GB', period: '每月' },
      { name: '【暮光·标准版】', cycle: '月付', price: '¥40', traffic: '240GB', period: '每月' },
      { name: '【暮光·旗舰版】', cycle: '月付', price: '¥100', traffic: '700GB', period: '每月' },
      { name: '【暮光·至尊版】', cycle: '月付', price: '¥180', traffic: '1500GB', period: '每月' },
      { name: '【暮光·不限时轻量包】', cycle: '一次性付费', price: '¥219', traffic: '150GB', period: '一次性' },
      { name: '【暮光·不限时标准包】', cycle: '一次性付费', price: '¥529', traffic: '400GB', period: '一次性' },
      { name: '【暮光·不限时大容量包】', cycle: '一次性付费', price: '¥959', traffic: '800GB', period: '一次性' },
      { name: '独享私人定制节点', cycle: '月付', price: '¥600', traffic: '500GB', period: '每月' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '26ms', download: '509Mbps' },
      { node: '台湾', latency: '40ms', download: '107Mbps' },
      { node: '新加坡', latency: '43ms', download: '419Mbps' },
      { node: '日本', latency: '53ms', download: '150Mbps' },
      { node: '美国', latency: '160ms', download: '19Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/muguang-20260811.png',
      testedAt: '2026-08-11 CST',
      protocolDisplayed: 'Shadowsocks / VLESS',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      dateConfidence: 'visible-in-image',
      note: '测试批次：2026-08-11（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。',
    },
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '支持主流 AI 办公工具与 Netflix、Disney+、HBO 等流媒体解锁。',
    summary:
      '暮光加速（2023年运营）主打 BGP 智能调度与全平台（Win/Mac/iOS/Android/Linux）多设备同时在线，月付 20 元/120GB 起，年付轻量版 ¥109/年，适合多设备个人与远程办公团队。',
    description:
      '暮光加速面向个人多终端与团队跨平台办公场景，提供从 70GB 到 1500GB 的丰富月流量阶梯，并配备 150GB/400GB/800GB 不限时流量包。官方宣称支持 7×24 小时真人客服，对跨境协作团队具有较强实用性。',
    pros: [
      '全平台覆盖（含 Linux），多设备同时在线友好',
      '最高可选 1500GB/月大流量档位与 800GB 不限时包',
      '具备 2026-08-11 实测截图归档，日本与新加坡速率表现稳健',
    ],
    cons: [
      '不限时包单价（¥219/150GB）相比光速云 147元/247GB 永久包略高',
    ],
    suitableFor: ['同时拥有电脑、手机、平板及 Linux 工作站的多设备用户', '跨境远程办公与小微团队'],
    notSuitableFor: ['仅寻找百元内大容量一次性永久包的低预算用户'],
    riskNote: '下单前建议在官网核对当前优惠码 muguang5555 的适用档位。',
    comparisonNote: '相比光速云，暮光加速的大流量月付档（最高1500GB）跨度更大，但一次性永久包的性价比不如光速云（147元/247GB）。',
    relatedSlugs: ['guangsuyun', 'weifeng', 'xingdaomeng', 'ermaoyun'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '暮光加速机场评测',
      secondaryKeywords: ['暮光加速官网', '暮光加速优惠码', '多设备机场推荐', 'BGP专线机场'],
      geoQuestions: ['暮光加速机场支持多少设备同时在线？', '暮光加速怎么样？'],
      title: '暮光加速机场评测 (2026)：BGP智能调度、全平台多设备与套餐价格表 | ClashTuijian.cc',
      metaDescription: '暮光加速（Twilight）深度评测：2023年运营 BGP 智能调度专线机场，支持 Win/Mac/iOS/Android/Linux 多设备同时在线，附实测数据与优惠码 muguang5555。',
      h1: '暮光加速 (Twilight) — 全平台多设备 BGP 专线机场实测与选型指南',
      faqs: [
        {
          q: '暮光加速适合哪些操作系统使用？',
          a: '暮光加速完整支持 Windows、macOS、iOS、Android 与 Linux 全平台，适合多设备同时在线。',
        },
        {
          q: '暮光加速的入门价格是多少？',
          a: '年付轻量版为 109 元/年（每月 70GB，折合月均约 9.1 元），月付基础版为 20 元/月（含 120GB/月）。',
        },
      ],
    },
  },
  {
    rank: 5,
    slug: 'dalaoyun',
    name: '大佬云',
    isTopTen: true,
    badge: 'TOP 5 · ¥5.6/月极限平价 IEPL',
    accent: '#a855f7',
    registerUrl: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN',
    promoCode: 'dly888',
    promoDetail: '优惠码 dly888；季付及以上享 7 折',
    founded: '2024年',
    entryPriceText: '¥5.6/月起 (年付折算)',
    minMonthlyPrice: 5.6,
    lineType: 'IEPL 专线',
    protocols: ['VLESS'],
    clientMode: 'both',
    clientText: '提供自研客户端 + 支持 Clash / Shadowrocket 第三方订阅导入',
    hasUnlimitedPack: false,
    regions: '主流亚太与欧美常见节点（具体以面板为准）',
    highlights: [
      '¥5.6/月（每月 60GB）极限平价档位的标准 IEPL + VLESS 方案',
      '同时支持自研客户端一键登录与第三方 Clash 订阅链接导入',
      '季付及以上周期提供 7 折优惠',
    ],
    plans: [
      { name: '年付轻量档 (折算)', cycle: '年付', price: '约¥67/年 (¥5.6/月)', traffic: '60GB', period: '每月' },
    ],
    speedDataStatus: 'unverified',
    speedDateText: '暂无独立逐地区实测表（以实际测试为准）',
    speeds: [],
    unlockSupported: ['日常网页与主流流媒体基础访问（以实测为准）'],
    unlockPartial: ['AI 工具视节点而定'],
    unlockNote: '品牌资料未提供逐项流媒体实测矩阵，建议先小额测试。',
    summary:
      '大佬云（2024年运营）是 5.6 元/月（60GB/月）极限平价档的 IEPL + VLESS 标准方案，支持自研客户端与第三方订阅导入，适合预算极其有限或寻找低成本备用线路的用户。',
    description:
      '大佬云主打 5.6 元/月（年付折算，每月 60GB）的超低门槛 IEPL + VLESS 组合，同时提供自研客户端与第三方订阅导入。需要注意它与同价位的闪电鼠、云界线、榴莲云、环球梯规格高度相近，建议作为平价备用或先小额验证。',
    pros: [
      '年付折算仅约 ¥5.6/月（60GB/月），价格门槛极低',
      '明确标注 IEPL 专线 + VLESS 协议，且支持第三方订阅导入',
    ],
    cons: [
      '与闪电鼠、云界线等 5.6 元档品牌同质化较高，缺少独立实测速度表',
    ],
    suitableFor: ['预算极低的学生党', '需要低成本 IEPL 备用订阅的 Clash 用户'],
    notSuitableFor: ['追求独享高带宽或完备实测证据的重度办公用户'],
    riskNote: '5.6 元档同规格品牌较多，建议优先考虑运营更久的主力品牌（如光速云）或仅将其作为备用。',
    comparisonNote: '与闪电鼠、云界线、榴莲云、环球梯同属 5.6 元/60GB 标准方案；相比协议未明的榴莲云和链接格式特殊的云界线/环球梯，大佬云与闪电鼠的链接与协议信息更规范。',
    relatedSlugs: ['shandianshu', 'yunjiexian', 'guangsuyun', 'weifeng'],
    dataStatus: 'vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '大佬云机场评测',
      secondaryKeywords: ['大佬云官网', '大佬云优惠码 dly888', '5元便宜机场推荐'],
      geoQuestions: ['大佬云机场怎么样？', '大佬云和闪电鼠有什么区别？'],
      title: '大佬云评测 (2026)：5.6元平价 IEPL+VLESS 方案与优惠码 | ClashTuijian.cc',
      metaDescription: '大佬云（DaLaoYun）评测：2024年运营 5.6元/月（60GB）极限平价 IEPL 专线 + VLESS 机场，支持自研客户端与第三方 Clash 订阅导入，附优惠码 dly888。',
      h1: '大佬云 (DaLaoYun) — 5.6元档平价 IEPL + VLESS 机场评测与对比',
      faqs: [
        {
          q: '大佬云和闪电鼠、云界线有什么区别？',
          a: '三者均属于年付折算约 5.6 元/月（60GB/月）的 IEPL + VLESS 方案，规格几乎一致，大佬云与闪电鼠的推广注册链接格式标准且明确标注 VLESS 协议。',
        },
      ],
    },
  },
  {
    rank: 6,
    slug: 'xingdaomeng',
    name: '星岛梦',
    isTopTen: true,
    badge: 'TOP 6 · 2020老牌 · 不限设备+永久包',
    accent: '#ec4899',
    registerUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    promoCode: 'nmw888',
    promoDetail: '专属优惠码 nmw888',
    founded: '2020年',
    entryPriceText: '¥8.0/月起 (年付¥96)',
    minMonthlyPrice: 8.0,
    lineType: 'IEPL 专线（1倍流量不限设备）',
    protocols: ['Trojan'],
    clientMode: 'clash-sub',
    clientText: '支持 Clash Verge Rev、Shadowrocket 等主流第三方客户端订阅导入',
    hasUnlimitedPack: true,
    regions: '香港、台湾、日本、美国、新加坡及韩国、东南亚等地区',
    highlights: [
      '2020 年起运营的老牌 IEPL 专线机场，全节点 1 倍流量且不限设备连接数',
      '节点除港台日新美外，还延伸覆盖韩国与东南亚地区',
      '提供 ¥100/100GB、¥300/300GB、¥600/1TB 三档永久不限时流量包',
      '支持 Netflix、Disney+、YouTube Premium、TikTok 跨区及 ChatGPT/Gemini',
    ],
    plans: [
      { name: '星岛梦·贴心小包', cycle: '年付', price: '¥96', traffic: '60GB', period: '每月' },
      { name: '星岛梦·超量150G', cycle: '月付', price: '¥25', traffic: '150GB', period: '每月' },
      { name: '星岛梦·进阶300G', cycle: '月付', price: '¥50', traffic: '300GB', period: '每月' },
      { name: '星岛梦·闪光500G', cycle: '月付', price: '¥70', traffic: '500GB', period: '每月' },
      { name: '星岛梦·旗舰1T版', cycle: '月付', price: '¥130', traffic: '1000GB', period: '每月' },
      { name: '星岛梦·永久不限时100', cycle: '一次性付费', price: '¥100', traffic: '100GB', period: '一次性' },
      { name: '星岛梦·永久不限时300', cycle: '一次性付费', price: '¥300', traffic: '300GB', period: '一次性' },
      { name: '星岛梦·永久不限时1TB', cycle: '一次性付费', price: '¥600', traffic: '1000GB', period: '一次性' },
      { name: '星岛梦·定制套餐', cycle: '月付', price: '¥680', traffic: '500GB', period: '每月' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '27ms', download: '504Mbps' },
      { node: '台湾', latency: '41ms', download: '103Mbps' },
      { node: '新加坡', latency: '44ms', download: '411Mbps' },
      { node: '日本', latency: '57ms', download: '136Mbps' },
      { node: '美国', latency: '177ms', download: '18Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/xingdaomeng-20260811.png',
      testedAt: '2026-08-11 01:48:13 CST',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)',
      dateConfidence: 'visible-in-image',
      note: '测试时间：2026-08-11 01:48:13（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。',
    },
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '流媒体与 AI 解锁覆盖完整，支持 TikTok 跨区使用。',
    summary:
      '星岛梦（2020年运营）是与光速云同批开业的老牌 IEPL 专线机场，采用 Trojan 协议，1 倍流量不限设备，年付 ¥96/年（8元/月），并提供 ¥100/100GB 起的永久不限时套餐。',
    description:
      '星岛梦走 IEPL 专线 + Trojan 协议路线，1 倍流量不限设备数，适合多设备家庭或小团队共用。节点除港台日新美外还拓展了韩国与东南亚。96 元/年的贴心小包折合每月仅 8 元，且拥有 100GB/300GB/1TB 三档永久不限时包，综合实力稳居第一梯队。',
    pros: [
      '2020年老牌运营，IEPL 专线 1 倍率且不限设备连接数',
      '年付 96 元（8元/月）+ 100元/100GB 永久不限时包，价格亲民',
      '附带 2026-08-11 实测截图归档，含韩国与东南亚节点覆盖',
    ],
    cons: [
      '月付进阶档（300GB/¥50）单价略高于部分新晋卷王机场',
    ],
    suitableFor: ['多设备家庭共享或小团队用户', '偏爱老牌运营与永久不限时流量包的用户'],
    notSuitableFor: ['只使用专属傻瓜式客户端、完全不会导入订阅的纯小白'],
    riskNote: '具体地区线路表现建议先结合自身宽带运营商实测。',
    comparisonNote: '与同为 2020 年老牌的光速云相比，星岛梦入门永久包门槛更低（100元/100GB），而光速云的 147元/247GB 永久包每 GB 单价更划算且多了 VLESS 与自研客户端。',
    relatedSlugs: ['guangsuyun', 'weituyun', 'ermaoyun', 'weifeng'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '星岛梦机场评测',
      secondaryKeywords: ['星岛梦官网', '星岛梦优惠码 nmw888', '不限时流量包机场推荐'],
      geoQuestions: ['星岛梦机场怎么样？', '星岛梦永久不限时套餐值得买吗？'],
      title: '星岛梦机场评测 (2026)：2020老牌 IEPL 专线、不限设备与永久套餐 | ClashTuijian.cc',
      metaDescription: '星岛梦（XingDaoMeng）评测：2020年运营老牌 IEPL 专线机场，不限设备数，年付96元起、永久不限时包100元起（优惠码 nmw888），附 2026-08-11 实测图。',
      h1: '星岛梦 (XingDaoMeng) — 2020老牌不限设备 IEPL 专线机场实测指南',
      faqs: [
        {
          q: '星岛梦限制同时在线的设备数量吗？',
          a: '不限制。品牌资料明确说明星岛梦全线 1 倍流量且不限设备连接数，适合多设备家庭或小团队。',
        },
        {
          q: '星岛梦有哪些永久不限时套餐？',
          a: '提供三档一次性付费永久不限时流量包：100元/100GB、300元/300GB、600元/1000GB。',
        },
      ],
    },
  },
  {
    rank: 7,
    slug: 'ermaoyun',
    name: '二猫云',
    isTopTen: true,
    badge: 'TOP 7 · 全线 IEPL · 不限设备',
    accent: '#06b6d4',
    registerUrl: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    promoCode: 'ermao5555',
    promoDetail: '专属优惠码 ermao5555',
    founded: '2023年',
    entryPriceText: '¥7.4/月起 (年付¥89)',
    minMonthlyPrice: 7.4,
    lineType: '全线 IEPL 专线',
    protocols: ['VLESS'],
    clientMode: 'both',
    clientText: '配备独家定制客户端 + 支持订阅导入',
    hasUnlimitedPack: true,
    regions: '香港、台湾、日本、新加坡、美国等地区',
    highlights: [
      '全线 IEPL 专线 + VLESS 协议，官方强调长期稳定运营而非低价跑路模式',
      '账号不限设备连接数，多端同时在线无压力',
      '年付小包 ¥89/年（60GB/月），另有 ¥99/100GB 一次性不限时套餐',
      '海外技术团队主理，配备定制客户端',
    ],
    plans: [
      { name: '二猫年付小包', cycle: '年付', price: '¥89', traffic: '60GB', period: '每月' },
      { name: '二猫云·不限时套餐', cycle: '一次性付费', price: '¥99', traffic: '100GB', period: '一次性' },
      { name: '二猫云·白猫套餐', cycle: '月付', price: '¥20', traffic: '130GB', period: '每月' },
      { name: '二猫云·橘猫畅玩版', cycle: '月付', price: '¥40', traffic: '230GB', period: '每月' },
      { name: '二猫云·牛奶猫尊享版', cycle: '月付', price: '¥80', traffic: '430GB', period: '每月' },
      { name: '二猫云·黑猫重度用户版', cycle: '月付', price: '¥160', traffic: '850GB', period: '每月' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '22ms', download: '481Mbps' },
      { node: '台湾', latency: '41ms', download: '118Mbps' },
      { node: '新加坡', latency: '46ms', download: '407Mbps' },
      { node: '日本', latency: '53ms', download: '143Mbps' },
      { node: '美国', latency: '134ms', download: '17Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/ermaoyun-20260811.png',
      testedAt: '2026-08-11 10:45:27 CST',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)',
      dateConfidence: 'visible-in-image',
      note: '测试时间：2026-08-11 10:45:27（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。',
    },
    unlockSupported: ['ChatGPT', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Claude (视节点而定)', 'Gemini (视节点而定)'],
    unlockNote: 'Netflix、YouTube、ChatGPT 均支持；Claude 与 Gemini 建议实测对应节点。',
    summary:
      '二猫云（2023年运营）主打全线 IEPL 专线与不限设备连接数，提供 ¥89/年小包、¥99/100GB 不限时套餐及 ¥20/130GB 月付白猫套餐，配备定制客户端。',
    description:
      '二猫云采用 IEPL 专线与 VLESS 协议，强调长期稳定而非低价走量。账号不限制设备同时在线数量，且有 99 元 100GB 的一次性不限时包与 89 元/年的轻量包，适合看重多端共享与稳定性的用户。',
    pros: [
      '全线 IEPL 专线，账号不限设备连接数',
      '提供 ¥99/100GB 不限时流量包与 ¥89/年入门包',
      '具备 2026-08-11 实测截图归档',
    ],
    cons: [
      'Claude 与 Gemini 官方未做绝对承诺，需按节点实测',
    ],
    suitableFor: ['多设备同时在线用户', '偏好长期稳定 IEPL 专线的用户'],
    notSuitableFor: ['重度依赖 Claude 且不愿手动切换节点的用户'],
    riskNote: '月付主力档从 20 元/130GB 起，建议先用月付或小包验证本地体验。',
    comparisonNote: '与星岛梦同样提供百元内 100GB 不限时套餐（二猫云 ¥99 vs 星岛梦 ¥100），但星岛梦运营年份更早（2020年）。',
    relatedSlugs: ['xingdaomeng', 'guangsuyun', 'weituyun', 'yifanyun'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '二猫云机场评测',
      secondaryKeywords: ['二猫云官网', '二猫云优惠码 ermao5555', '二猫云不限时套餐'],
      geoQuestions: ['二猫云机场怎么样？', '二猫云限制设备数吗？'],
      title: '二猫云机场评测 (2026)：全线 IEPL 专线、99元不限时包与优惠码 | ClashTuijian.cc',
      metaDescription: '二猫云（ErMaoYun）深度评测：2023年运营 IEPL 专线 + VLESS 机场，账号不限设备数，年付89元起、不限时套餐99元/100GB（优惠码 ermao5555），附实测图。',
      h1: '二猫云 (ErMaoYun) — 全线 IEPL 专线与不限设备机场评测指南',
      faqs: [
        {
          q: '二猫云的优惠码是多少？',
          a: '二猫云优惠码为 ermao5555，提供 89 元/年（60GB/月）、99 元/100GB 不限时套餐及 20 元/月（130GB）白猫套餐。',
        },
      ],
    },
  },
  {
    rank: 8,
    slug: 'wuyoulianjie',
    name: '无忧链接',
    isTopTen: true,
    badge: 'TOP 8 · ¥6.6/月跨境TikTok友好',
    accent: '#22c55e',
    registerUrl: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    promoCode: 'wuyou666',
    promoDetail: '专属优惠码 wuyou666',
    founded: '2025年',
    entryPriceText: '¥6.6/月起 (年付¥79)',
    minMonthlyPrice: 6.6,
    lineType: '高速无倍率线路 · TikTok 跨区直连',
    protocols: ['VLESS', '专属协议'],
    clientMode: 'custom-only',
    clientText: '官方专属客户端下载登录即用（免配订阅）',
    hasUnlimitedPack: true,
    regions: '香港、台湾、新加坡、日本、美国',
    highlights: [
      '年付 MINI 链接仅 ¥79/年（折合 ¥6.6/月，含 40GB/月），入门门槛极低',
      '全线节点 1 倍率、不限速、不限设备数量，支持 TikTok 跨区直连与直播场景',
      '2026年10月起全面采用官方专属客户端，下载登录即用免配置',
      '提供 108元/100GB 与 298元/300GB 两档永久不限时流量包',
    ],
    plans: [
      { name: 'MINI链接', cycle: '年付', price: '¥79', traffic: '40GB', period: '每月' },
      { name: '舒心链接', cycle: '月付', price: '¥19', traffic: '100GB', period: '每月' },
      { name: '省心链接', cycle: '月付', price: '¥33', traffic: '200GB', period: '每月' },
      { name: '随心链接', cycle: '月付', price: '¥77', traffic: '500GB', period: '每月' },
      { name: '忘忧链接', cycle: '月付', price: '¥117', traffic: '1000GB', period: '每月' },
      { name: '100G永久不限时 无忧链接', cycle: '一次性付费', price: '¥108', traffic: '100GB', period: '一次性' },
      { name: '300G永久不限时 无忧链接', cycle: '一次性付费', price: '¥298', traffic: '300GB', period: '一次性' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '23ms', download: '531Mbps' },
      { node: '台湾', latency: '41ms', download: '107Mbps' },
      { node: '新加坡', latency: '42ms', download: '418Mbps' },
      { node: '日本', latency: '55ms', download: '147Mbps' },
      { node: '美国', latency: '145ms', download: '17Mbps' },
    ],
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '主打 TikTok 跨区直连与跨境电商轻度运营场景。',
    summary:
      '无忧链接（2025年运营）面向轻度用户与跨境电商 TikTok 场景，年付 MINI 档仅 ¥79/年（约 ¥6.6/月），采用免配置专属客户端且不限设备数。',
    description:
      '无忧链接是榜单中入门门槛最低的品牌之一（年付79元，折合每月约6.6元），支持 TikTok 跨区直连、ChatGPT、Claude 及 Netflix/Disney+。采用官方专属客户端下载登录即用，并配备 7×24 小时在线客服（夜间 AI 值守）。由于入门档月流量为 40GB，更适合轻度使用或作为跨境电商辅助/备用工具。',
    pros: [
      '年付 ¥79（约 ¥6.6/月）门槛极低，另有 ¥108/100GB 永久不限时包',
      '专属客户端免折腾配置，不限设备数量，支持 TikTok 跨区直连',
    ],
    cons: [
      '2025年上线的新品牌，运营周期较短',
      '入门年付档流量仅 40GB/月，不适合重度高清视频消耗',
    ],
    suitableFor: ['轻度上网与 TikTok 跨区运营用户', '需要超低成本备用客户端的新手'],
    notSuitableFor: ['需要导入软路由或 Clash 通用订阅的用户', '重度流量消耗用户'],
    riskNote: '2025 年新品牌，建议按需从小额套餐或月付舒心链接（¥19/100GB）开始体验。',
    comparisonNote: '与飞猫云同样采用专属客户端免配模式，无忧链接年付总价更低（79元 vs 84元），但飞猫云多给 10GB/月且成立更早（2023年）。',
    relatedSlugs: ['feimaoyun', 'lingmao', 'guangsuyun'],
    dataStatus: 'vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '无忧链接机场评测',
      secondaryKeywords: ['无忧链接官网', '无忧链接优惠码 wuyou666', 'TikTok 跨境电商机场'],
      geoQuestions: ['无忧链接机场怎么样？', '无忧链接支持 TikTok 直播吗？'],
      title: '无忧链接机场评测 (2026)：6.6元/月免配客户端、TikTok直连与优惠码 | ClashTuijian.cc',
      metaDescription: '无忧链接（WorryFree）评测：年付79元起（6.6元/月）超低门槛机场，专属客户端登录即用，支持 TikTok 跨区直连、ChatGPT 与流媒体，优惠码 wuyou666。',
      h1: '无忧链接 (WorryFree) — 跨境电商 TikTok 友好型免配机场评测',
      faqs: [
        {
          q: '无忧链接适合什么人群？',
          a: '适合预算敏感的轻度用户、不想配置 Clash 订阅的新手，以及有 TikTok 跨区访问需求的跨境电商辅助场景。',
        },
      ],
    },
  },
  {
    rank: 9,
    slug: 'weituyun',
    name: '唯兔云',
    isTopTen: true,
    badge: 'TOP 9 · IPLC 专线 · 14.9元月付',
    accent: '#8b5cf6',
    registerUrl: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    promoCode: 'weitu666',
    promoDetail: '专属优惠码 weitu666',
    founded: '2023年',
    entryPriceText: '¥6.7/月起 (年付¥79.9)',
    minMonthlyPrice: 6.7,
    lineType: 'IPLC 专线（三网优化 + 智能负载均衡）',
    protocols: ['Trojan'],
    clientMode: 'clash-sub',
    clientText: '支持 Clash Verge Rev、Shadowrocket 等主流客户端导入',
    hasUnlimitedPack: true,
    regions: '香港、台湾、新加坡、日本、美国等 60+ 节点',
    highlights: [
      'IPLC 专线 + Trojan 协议，1 倍流量、不限速、不限设备连接',
      '年付限量款低至 ¥79.9/年（45GB/月），节假日月付 ¥14.9/100GB',
      '提供 ¥100/100GB、¥160/200GB、¥340/500GB 三档永久不限时包',
      '支持 ChatGPT、Gemini、Claude 及 Netflix、Disney+、YouTube、TikTok',
    ],
    plans: [
      { name: '唯兔云·年付版限量款', cycle: '年付', price: '¥79.90', traffic: '45GB', period: '每月' },
      { name: '唯兔云·年付加强专线', cycle: '年付', price: '¥120', traffic: '75GB', period: '每月' },
      { name: '唯兔云·节假日限时月付', cycle: '月付', price: '¥14.90', traffic: '100GB', period: '每月' },
      { name: '唯兔云·普通版', cycle: '月付', price: '¥19.90', traffic: '150GB', period: '每月' },
      { name: '唯兔云·进阶版', cycle: '月付', price: '¥29.90', traffic: '200GB', period: '每月' },
      { name: '唯兔云·专业版', cycle: '月付', price: '¥59.90', traffic: '500GB', period: '每月' },
      { name: '唯兔云·至尊版', cycle: '月付', price: '¥119.90', traffic: '1000GB', period: '每月' },
      { name: '唯兔云·永久不限时 100G', cycle: '一次性付费', price: '¥100', traffic: '100GB', period: '一次性' },
      { name: '唯兔云·永久不限时 200G', cycle: '一次性付费', price: '¥160', traffic: '200GB', period: '一次性' },
      { name: '唯兔云·永久不限时 500G', cycle: '一次性付费', price: '¥340', traffic: '500GB', period: '一次性' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '27ms', download: '500Mbps' },
      { node: '台湾', latency: '37ms', download: '100Mbps' },
      { node: '新加坡', latency: '44ms', download: '414Mbps' },
      { node: '日本', latency: '56ms', download: '147Mbps' },
      { node: '美国', latency: '179ms', download: '17Mbps' },
    ],
    measuredPng: {
      src: '/media/speedtests/weituyun-20260811.png',
      testedAt: '2026-08-11 13:55:08 CST',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)',
      dateConfidence: 'visible-in-image',
      note: '测试时间：2026-08-11 13:55:08（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。',
    },
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '全面覆盖 AI 办公与海外流媒体解锁需求。',
    summary:
      '唯兔云（2023年运营）走 IPLC 专线 + Trojan 协议，主打 1 倍流量、不限速、不限设备连接，月付低至 14.9~19.9 元，200GB 永久不限时包仅 160 元。',
    description:
      '唯兔云属于 IPLC 专线机场中档位设置极为灵活的代表：既有 79.9 元/年的限量小包，也有 14.9 元/100GB 和 19.9 元/150GB 的亲民月付档，同时其 200GB 永久不限时包仅售 160 元（每 GB 仅 0.8 元），非常适合个人与家庭多设备共享。',
    pros: [
      'IPLC 专线 + 不限设备连接，月付门槛低（¥14.9~¥19.9）',
      '200GB 永久不限时包仅 ¥160，性价比突出',
      '具备 2026-08-11 实测截图归档',
    ],
    cons: [
      '14.9 元档为节假日限时开启，日常月付以 19.9 元/150GB 为主',
    ],
    suitableFor: ['倾向于按月付费（15~20元档）的 IPLC 专线用户', '寻找高性价比 200GB/500GB 永久流量包的用户'],
    notSuitableFor: ['需要专属免配置客户端的纯小白用户'],
    riskNote: '限时套餐库存与价格可能随活动调整，下单前请以官网实时显示为准。',
    comparisonNote: '相比星岛梦（300GB永久包300元），唯兔云的 200GB 永久包（160元）与 500GB 永久包（340元）单价更低；但光速云的 147元/247GB 永久包兼具 2020 老牌背书。',
    relatedSlugs: ['guangsuyun', 'xingdaomeng', 'ermaoyun', 'firefly'],
    dataStatus: 'measured-plus-vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: '唯兔云机场评测',
      secondaryKeywords: ['唯兔云官网', '唯兔云优惠码 weitu666', 'IPLC 专线机场推荐'],
      geoQuestions: ['唯兔云机场怎么样？', '唯兔云永久不限时套餐多少钱？'],
      title: '唯兔云机场评测 (2026)：IPLC 专线、14.9元月付、永久包与优惠码 | ClashTuijian.cc',
      metaDescription: '唯兔云（V2Yun）深度评测：2023年运营 IPLC 专线 + Trojan 机场，不限设备数，月付14.9元起、永久包100元起（优惠码 weitu666），附 2026-08-11 实测图。',
      h1: '唯兔云 (WeiTuYun) — 高性价比 IPLC 专线与永久流量包实测指南',
      faqs: [
        {
          q: '唯兔云的永久不限时套餐有哪几档？',
          a: '唯兔云提供 100元/100GB、160元/200GB、340元/500GB 三档一次性付费永久不限时套餐。',
        },
      ],
    },
  },
  {
    rank: 10,
    slug: 'firefly',
    name: 'Firefly (萤火虫)',
    isTopTen: true,
    badge: 'TOP 10 · IPLC 原生IP · 专属客户端',
    accent: '#eab308',
    registerUrl: 'https://vip02.fireflyaff.com/#/?code=2n7VURre',
    promoCode: 'firefly',
    promoDetail: '优惠码 firefly 享 8 折（年付版不适用）',
    founded: '2023年 (资料称8年团队)',
    entryPriceText: '¥8.0/月起 (年付¥96)',
    minMonthlyPrice: 8.0,
    lineType: 'IPLC 专线接入 · 原生 IP',
    protocols: ['VLESS'],
    clientMode: 'custom-only',
    clientText: '官方专属客户端下载登录即用（不提供第三方订阅链接）',
    hasUnlimitedPack: true,
    regions: '香港、台湾、新加坡、日本、美国',
    highlights: [
      'IPLC 专线接入 + VLESS 协议，主打晚高峰低延迟与高稳定性',
      '品牌资料显示全节点不限速、不限客户端及设备数量',
      '配备香港、新加坡、日本、美国原生 IP 节点，流媒体与 ChatGPT 解锁稳定',
      '2026年10月起直接采用官方专属客户端登录即连，并提供 ¥100/100GB 不限时包',
    ],
    plans: [
      { name: 'Firefly 年付版', cycle: '年付', price: '¥96', traffic: '60GB', period: '每月' },
      { name: 'Firefly Lite', cycle: '月付', price: '¥25', traffic: '150GB', period: '每月' },
      { name: 'Firefly Plus', cycle: '月付', price: '¥45', traffic: '300GB', period: '每月' },
      { name: 'Firefly Blaze', cycle: '月付', price: '¥85', traffic: '600GB', period: '每月' },
      { name: 'Firefly Nova', cycle: '月付', price: '¥150', traffic: '1000GB', period: '每月' },
      { name: 'Firefly 不限时', cycle: '一次性付费', price: '¥100', traffic: '100GB', period: '一次性' },
    ],
    speedDataStatus: 'vendor',
    speedDateText: '2026-10-19 原文标注（非晚高峰）',
    speeds: [
      { node: '香港', latency: '27ms', download: '547Mbps' },
      { node: '台湾', latency: '39ms', download: '135Mbps' },
      { node: '新加坡', latency: '42ms', download: '445Mbps' },
      { node: '日本', latency: '57ms', download: '147Mbps' },
      { node: '美国', latency: '143ms', download: '30Mbps' },
    ],
    unlockSupported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
    unlockPartial: ['Gemini (视节点而定)'],
    unlockNote: '原生 IP 节点对 Netflix、Disney+ 及高频 AI 办公工具解锁友好。',
    summary:
      'Firefly（萤火虫）采用 IPLC 专线 + VLESS 协议与原生 IP 节点，使用专属客户端登录即连，不限设备数量，年付 ¥96/年（8元/月），月付可享 8 折优惠码 firefly。',
    description:
      'Firefly 主打晚高峰 IPLC 专线稳定性与原生 IP 解锁，适合每天需要使用 ChatGPT/Claude 办公或深夜追 4K 剧集的用户。2026 年 10 月起全面启用官方专属客户端，无需手动配置订阅链接，且不限制家庭多设备同时使用。',
    pros: [
      'IPLC 专线 + 原生 IP，晚高峰稳定性与流媒体解锁表现突出',
      '专属客户端免配置，不限设备数量，月付档可用 8 折码 firefly',
    ],
    cons: [
      '不提供通用 Clash 订阅链接，无法导入软路由或第三方客户端',
    ],
    suitableFor: ['看重 IPLC 晚高峰稳定且喜欢一键客户端的用户', '多设备家庭流媒体与 AI 办公用户'],
    notSuitableFor: ['需要 Clash 订阅链接或软路由配置的用户'],
    riskNote: '品牌资料显示与微风、飞鸟等存在同系运营背景；不支持第三方订阅导入。',
    comparisonNote: '与飞猫云同为专属客户端模式，但 Firefly 明确采用 IPLC 专线且提供 ¥100/100GB 小额不限时包；若需 Clash 订阅则选光速云。',
    relatedSlugs: ['guangsuyun', 'feimaoyun', 'shanyue', 'weifeng'],
    dataStatus: 'vendor',
    verifiedDate: '2026-10-19',
    updatedDate: '2026-10-29',
    seo: {
      primaryKeyword: 'Firefly机场评测',
      secondaryKeywords: ['Firefly萤火虫机场官网', 'Firefly优惠码', 'IPLC原生IP机场'],
      geoQuestions: ['Firefly 萤火虫机场怎么样？', 'Firefly 提供 Clash 订阅链接吗？'],
      title: 'Firefly 萤火虫评测 (2026)：IPLC 原生IP与专属客户端 | ClashTuijian.cc',
      metaDescription: 'Firefly 萤火虫机场评测：IPLC 专线 + VLESS 原生 IP 节点，专属客户端登录即用不限设备，年付96元起，月付8折优惠码 firefly。',
      h1: 'Firefly (萤火虫) — IPLC 专线原生 IP 专属客户端机场评测',
      faqs: [
        {
          q: 'Firefly 机场可以用 Clash 或 Shadowrocket 吗？',
          a: '不可以。Firefly 采用官方专属客户端模式，下载登录即用，不提供第三方订阅链接。如需导入 Clash 请选择光速云或星岛梦。',
        },
      ],
    },
  },
].concat([

  {
    "rank": 11,
    "slug": "yuzhouyun",
    "name": "宇宙云",
    "badge": "VLESS · 三网优化 + 实测归档",
    "accent": "#6366f1",
    "registerUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "promoCode": "YUZHOU553",
    "promoDetail": "历史资料称新用户优惠码 YUZHOU553 享 8 折（下单前请核实）",
    "founded": "待核实",
    "entryPriceText": "¥8.0/月起 (年付¥96)",
    "minMonthlyPrice": 8,
    "lineType": "IEPL 专线 / 三网优化 + 智能负载均衡",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "unverified",
    "clientText": "待核实（历史资料记载支持自研客户端，具体订阅方式以官网为准）",
    "hasUnlimitedPack": false,
    "regions": "60+ 节点（具体地区分布待补充核实）",
    "highlights": [
      "历史品牌资料显示具备 60+ 节点、三网优化与智能负载均衡",
      "起步价约 ¥96/年（具体当期月流量档位待补充核实）",
      "包含 2026-08-11 21:04:24 CST 晚间时段 VLESS 真实测速截图归档"
    ],
    "plans": [
      {
        "name": "年付入门档 (历史记录)",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "待核实",
        "period": "待核实"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "2026-08-11 晚间实测截图归档",
    "speeds": [],
    "measuredPng": {
      "src": "/media/speedtests/yuzhouyun-20260811.png",
      "testedAt": "2026-08-11 21:04:24 CST",
      "protocolDisplayed": "VLESS",
      "toolFamily": "主端 4.3.3 (696) / 喵速 4.7.0 (珠海联通 9Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 21:04:24（CST）。本图记录当次晚间测试环境下的 VLESS 节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "待核实（以官网及实测为准）"
    ],
    "unlockPartial": [
      "AI 与流媒体解锁待当期复核"
    ],
    "unlockNote": "完整套餐表与流媒体逐项解锁状态有待补充，当前以 2026-08-11 VLESS 测速截图作为参考证据。",
    "summary": "宇宙云采用 VLESS 协议，历史资料显示具备 60+ 节点与三网优化，年付起价约 96 元，拥有 2026-08-11 晚高峰 21:04 的真实测速截图归档。",
    "description": "宇宙云保留了 2026-08-11 21:04:24 CST 在珠海联通 9Gbps 环境下的 VLESS 节点测速截图。由于当期完整套餐明细与流媒体解锁矩阵尚待补充，本站严格按实事求是原则标注为“待核实”，建议注册后在面板核对最新套餐。",
    "comparisonNote": "与同为 96 元/年档的星岛梦、Firefly 相比，宇宙云公开的套餐明细较少，如追求透明完整的套餐表建议优先选光速云或星岛梦。",
    "relatedSlugs": [
      "guangsuyun",
      "xingdaomeng",
      "u1s1"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "历史品牌资料显示具备 60+ 节点、三网优化与智能负载均衡",
      "起步价约 ¥96/年（具体当期月流量档位待补充核实）",
      "包含 2026-08-11 21:04:24 CST 晚间时段 VLESS 真实测速截图归档"
    ],
    "cons": [
      "宇宙云当前以周期订阅为主（起价 ¥8.0/月起 (年付¥96)），暂未单独设立永久不过期流量包",
      "虽附带 2026-08-11 21:04:24 CST 测速图，但不同省份宽带至「IEPL 专线 / 三网优化 + 智能负载均衡」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥8.0/月起 (年付¥96) 区间、关注「VLESS · 三网优化 + 实测归档」定位与 60+ 节点（具体地区分布待补充核实） 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 VLESS 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付入门档 (历史记录) (¥96 / 待核实) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 宇宙云 测速图采样于 2026-08-11 21:04:24 CST（主端 4.3.3 (696) / 喵速 4.7.0 (珠海联通 9Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 年付入门档 (历史记录) (¥96 / 待核实) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "宇宙云评测",
      "secondaryKeywords": [
        "宇宙云官网",
        "宇宙云优惠码",
        "宇宙云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "宇宙云怎么样？",
        "宇宙云套餐价格是多少？",
        "宇宙云支持Clash导入吗？"
      ],
      "title": "宇宙云评测 (2026)：2026测速原图与8元起套餐 | ClashTuijian.cc",
      "metaDescription": "宇宙云 (待核实) 深度档案：主打IEPL 专线 / 三网优化 + 智能负载均衡，支持 VLESS 协议，起步价 ¥8.0/月起 (年付¥96)。汇总 1 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "宇宙云 2026 实测评测：VLESS 专线吞吐快照与套餐选型",
      "faqs": [
        {
          "q": "宇宙云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "宇宙云的折算入门参考价为 ¥8.0/月起 (年付¥96)，目前收录有 1 个档位（从入门 年付入门档 (历史记录) (¥96 / 待核实) 到高阶 年付入门档 (历史记录) (¥96 / 待核实)）。宇宙云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "宇宙云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "宇宙云接入说明为「待核实（历史资料记载支持自研客户端，具体订阅方式以官网为准）」，底层协议涉及 VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "宇宙云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "宇宙云定位为「IEPL 专线 / 三网优化 + 智能负载均衡」，本站收录了其 2026-08-11 21:04:24 CST 的 VLESS 节点实测原图。与同为 96 元/年档的星岛梦、Firefly 相比，宇宙云公开的套餐明细较少，如追求透明完整的套餐表建议优先选光速云或星岛梦。"
        }
      ]
    }
  },
  {
    "rank": 12,
    "slug": "u1s1",
    "name": "U1S1",
    "badge": "IPLC 专线 · 2000Mbps 峰值带宽",
    "accent": "#3b82f6",
    "registerUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "promoCode": "akaka",
    "promoDetail": "专属优惠码 akaka",
    "founded": "2025年",
    "entryPriceText": "¥8.0/月起 (年付¥96)",
    "minMonthlyPrice": 8,
    "lineType": "IPLC 专线（官方称 2000Mbps 带宽）",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持主流客户端订阅导入，不限设备同时连接",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国",
    "highlights": [
      "2025 年上线的 IPLC 专线机场，品牌资料宣称 2000Mbps 高速带宽且晚高峰不限速",
      "全套餐不限设备同时连接，涵盖 ¥96/年（60GB/月）至 ¥180/月（1500GB/月）",
      "包含 2026-08-11 22:33:29 CST 晚高峰时段真实测速截图归档"
    ],
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "vendor",
    "speedDateText": "2026-10-19 原文标注（非晚高峰）",
    "speeds": [
      {
        "node": "香港",
        "latency": "24ms",
        "download": "538Mbps"
      },
      {
        "node": "台湾",
        "latency": "39ms",
        "download": "107Mbps"
      },
      {
        "node": "新加坡",
        "latency": "46ms",
        "download": "414Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "133Mbps"
      },
      {
        "node": "美国",
        "latency": "134ms",
        "download": "20Mbps"
      }
    ],
    "measuredPng": {
      "src": "/media/speedtests/u1s1-20260811.png",
      "testedAt": "2026-08-11 22:33:29 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 22:33:29（CST 晚高峰时段）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "ChatGPT",
      "Claude",
      "Netflix",
      "Disney+",
      "YouTube",
      "HBO Max",
      "TikTok",
      "Spotify"
    ],
    "unlockPartial": [
      "Gemini (视节点而定)"
    ],
    "unlockNote": "支持主流流媒体与 ChatGPT/Claude 访问。",
    "summary": "U1S1（2025年运营）采用 IPLC 专线，官方宣称 2000Mbps 带宽且不限设备数，年付 96 元起、月付 20 元/120GB 起，具备 2026-08-11 22:33 晚间实测截图。",
    "description": "U1S1 主打高带宽 IPLC 专线与不限设备连接，香港（538Mbps）与新加坡（414Mbps）吞吐表现亮眼。因 2025 年才上线，建议新用户先从 20 元月付包测试，勿盲目直接年付。",
    "comparisonNote": "与同为 20 元/120GB 档的暮光加速、全球云相比，U1S1 拥有 22:33 晚间时段的实测 PNG 截图，但运营年限不如 2020 年老牌光速云。",
    "relatedSlugs": [
      "guangsuyun",
      "muguang",
      "quanqiuyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "2025 年上线的 IPLC 专线机场，品牌资料宣称 2000Mbps 高速带宽且晚高峰不限速",
      "全套餐不限设备同时连接，涵盖 ¥96/年（60GB/月）至 ¥180/月（1500GB/月）",
      "包含 2026-08-11 22:33:29 CST 晚高峰时段真实测速截图归档"
    ],
    "cons": [
      "U1S1当前以周期订阅为主（起价 ¥8.0/月起 (年付¥96)），暂未单独设立永久不过期流量包",
      "虽附带 2026-08-11 22:33:29 CST 测速图，但不同省份宽带至「IPLC 专线」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥8.0/月起 (年付¥96) 区间、关注「IPLC 专线 · 2000Mbps 峰值带宽」定位与 香港、台湾、新加坡、日本、美国 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Shadowsocks / VLESS 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 u1s1·就是好用包 (¥96 / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 U1S1 测速图采样于 2026-08-11 22:33:29 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 u1s1·就是好用包 (¥96 / 60GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "U1S1评测",
      "secondaryKeywords": [
        "U1S1官网",
        "U1S1优惠码",
        "U1S1套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "U1S1怎么样？",
        "U1S1套餐价格是多少？",
        "U1S1支持Clash导入吗？"
      ],
      "title": "U1S1评测 (2026)：2026测速原图与8元起套餐 | ClashTuijian.cc",
      "metaDescription": "U1S1 (2025年) 深度档案：主打IPLC 专线（官方称 2000Mbps 带宽），支持 Shadowsocks / VLESS 协议，起步价 ¥8.0/月起 (年付¥96)。汇总 5 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "U1S1 深度档案：2026 节点测速原图、¥8.0/月起 (年付¥96)资费与优缺点",
      "faqs": [
        {
          "q": "U1S1在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "U1S1的折算入门参考价为 ¥8.0/月起 (年付¥96)，目前收录有 5 个档位（从入门 u1s1·就是好用包 (¥96 / 60GB) 到高阶 u1s1·我全都要包 (¥180)）。U1S1目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "U1S1支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "U1S1接入说明为「支持主流客户端订阅导入，不限设备同时连接」，底层协议涉及 Shadowsocks / VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "U1S1的线路架构与同价位机场相比值得作为主力吗？",
          "a": "U1S1定位为「IPLC 专线（官方称 2000Mbps 带宽）」，本站收录了其 2026-08-11 22:33:29 CST 的 Shadowsocks 节点实测原图。与同为 20 元/120GB 档的暮光加速、全球云相比，U1S1 拥有 22:33 晚间时段的实测 PNG 截图，但运营年限不如 2020 年老牌光速云。"
        }
      ]
    }
  },
  {
    "rank": 13,
    "slug": "lingmao",
    "name": "灵猫网络",
    "badge": "1倍流量不限设备 · 专属客户端",
    "accent": "#14b8a6",
    "registerUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "promoCode": "lmao888",
    "promoDetail": "优惠码 lmao888 / lingmao 享 8 折（年付小包不适用）",
    "founded": "2025年",
    "entryPriceText": "¥7.1/月起 (年付¥85)",
    "minMonthlyPrice": 7.1,
    "lineType": "中转优化线路（1倍流量不限速不限设备）",
    "protocols": [
      "Shadowsocks"
    ],
    "clientMode": "custom-only",
    "clientText": "官方专属客户端下载登录即用（不提供订阅链接）",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
    "highlights": [
      "年付小包 ¥85/年（折合 ¥7.1/月，45GB/月），全节点 1 倍流量不限设备",
      "2026年10月起采用官方专属客户端，下载登录即连免配置",
      "包含 2026-08-11 18:45:40 CST 傍晚时段真实测速截图归档"
    ],
    "plans": [
      {
        "name": "灵猫·年付小包",
        "cycle": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "cycle": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "cycle": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "cycle": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "vendor",
    "speedDateText": "2026-10-19 原文标注（非晚高峰）",
    "speeds": [
      {
        "node": "香港",
        "latency": "22ms",
        "download": "492Mbps"
      },
      {
        "node": "台湾",
        "latency": "40ms",
        "download": "109Mbps"
      },
      {
        "node": "新加坡",
        "latency": "46ms",
        "download": "409Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "node": "美国",
        "latency": "164ms",
        "download": "19Mbps"
      }
    ],
    "measuredPng": {
      "src": "/media/speedtests/lingmao-20260811.png",
      "testedAt": "2026-08-11 18:45:40 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 18:45:40（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "ChatGPT",
      "Claude",
      "Netflix",
      "Disney+",
      "YouTube",
      "HBO Max",
      "TikTok",
      "Spotify"
    ],
    "unlockPartial": [
      "Gemini (视节点而定)"
    ],
    "unlockNote": "支持主流流媒体与 AI 访问。",
    "summary": "灵猫网络（2025年运营）走中转优化线路，主打 7.1 元/月起、不限设备与专属客户端免配置，附带 2026-08-11 18:45 真实测速截图。",
    "description": "灵猫网络适合多台设备同时使用且不想折腾订阅配置的用户，月付 25 元/150GB 可用 8 折码，建议先月付实测晚高峰表现。",
    "comparisonNote": "与飞猫云（¥84/年 50GB）价格极为接近，但飞猫云成立更早（2023年）。",
    "relatedSlugs": [
      "feimaoyun",
      "wuyoulianjie",
      "guangsuyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "年付小包 ¥85/年（折合 ¥7.1/月，45GB/月），全节点 1 倍流量不限设备",
      "2026年10月起采用官方专属客户端，下载登录即连免配置",
      "包含 2026-08-11 18:45:40 CST 傍晚时段真实测速截图归档"
    ],
    "cons": [
      "灵猫网络仅开放官方专属客户端登录，不提供明文 Clash / V2Ray 订阅链接，无法部署在 OpenWrt 软路由或 Apple TV 网关",
      "套餐均为周期计费（无永久不限时包），跨运营商晚高峰表现建议先通过最低档（灵猫·年付小包 (¥85 / 45GB)）实测"
    ],
    "suitableFor": [
      "月均预算在 ¥7.1/月起 (年付¥85) 区间、关注「1倍流量不限设备 · 专属客户端」定位与 香港、台湾、日本、美国、新加坡等亚洲及欧美节 节点覆盖的人群",
      "不想研究 YAML 规则、希望下载 灵猫网络 官方客户端直接登录账号一键连接的新手用户"
    ],
    "notSuitableFor": [
      "需要在 OpenClash / PassWall2 软路由网关、NAS 或 Linux 服务器上导入通用订阅链接的进阶玩家",
      "未经小额套餐测试本地宽带晚高峰便盲目囤购两三年超长周期的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 灵猫网络 测速图采样于 2026-08-11 18:45:40 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 灵猫·年付小包 (¥85 / 45GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "灵猫网络评测",
      "secondaryKeywords": [
        "灵猫网络官网",
        "灵猫网络优惠码",
        "灵猫网络套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "灵猫网络怎么样？",
        "灵猫网络套餐价格是多少？",
        "灵猫网络支持Clash导入吗？"
      ],
      "title": "灵猫网络评测 (2026)：2026测速原图与7.1元起套餐 | ClashTuijian.cc",
      "metaDescription": "灵猫网络 (2025年) 深度档案：主打中转优化线路（1倍流量不限速不限设备），支持 Shadowsocks 协议，起步价 ¥7.1/月起 (年付¥85)。汇总 6 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "灵猫网络 机场怎么样？中转优化线路实测表现与价格表",
      "faqs": [
        {
          "q": "灵猫网络在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "灵猫网络的折算入门参考价为 ¥7.1/月起 (年付¥85)，目前收录有 6 个档位（从入门 灵猫·年付小包 (¥85 / 45GB) 到高阶 灵猫·月付Big (¥45)）。灵猫网络目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "灵猫网络支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "不支持第三方通用订阅。灵猫网络采用「官方专属客户端下载登录即用（不提供订阅链接）」策略，仅限登录其官方专属客户端一键使用，因此无法导入 Clash Verge Rev 或 OpenWrt 软路由。"
        },
        {
          "q": "灵猫网络的线路架构与同价位机场相比值得作为主力吗？",
          "a": "灵猫网络定位为「中转优化线路（1倍流量不限速不限设备）」，本站收录了其 2026-08-11 18:45:40 CST 的 Shadowsocks 节点实测原图。与飞猫云（¥84/年 50GB）价格极为接近，但飞猫云成立更早（2023年）。"
        }
      ]
    }
  },
  {
    "rank": 14,
    "slug": "jilianyun",
    "name": "极连云",
    "badge": "¥18/月 IEPL 专线 · AI 办公覆盖",
    "accent": "#0ea5e9",
    "registerUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "promoCode": "ji8888",
    "promoDetail": "专属优惠码 ji8888",
    "founded": "2024年",
    "entryPriceText": "¥18.0/月起 (100GB/月)",
    "minMonthlyPrice": 18,
    "lineType": "IEPL 专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "提供自研客户端 + 支持 Clash / Shadowrocket 等第三方客户端",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国等常见地区",
    "highlights": [
      "18 元/月（100GB）IEPL 专线方案，兼顾自研客户端与第三方订阅导入",
      "品牌资料明确强调“覆盖常见 AI 工具使用场景”",
      "包含 2026-08-11 22:46:50 CST 深夜晚高峰真实测速截图归档"
    ],
    "plans": [
      {
        "name": "标准月付方案",
        "cycle": "月付",
        "price": "¥18",
        "traffic": "100GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "2026-08-11 22:46 实测截图归档",
    "speeds": [],
    "measuredPng": {
      "src": "/media/speedtests/jilianyun-20260811.png",
      "testedAt": "2026-08-11 22:46:50 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 22:46:50（CST 晚高峰时段）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "常见 AI 工具与日常流媒体（品牌资料声明）"
    ],
    "unlockPartial": [
      "具体平台视节点而定"
    ],
    "unlockNote": "品牌资料明确提及覆盖常见 AI 工具场景。",
    "summary": "极连云（2024年运营）是 18 元/月（100GB）的 IEPL 专线方案，支持自研客户端与第三方订阅导入，并具备 2026-08-11 22:46 晚高峰实测图。",
    "description": "极连云定位 18 元档 IEPL 专线，同时支持自研客户端与 Clash 等第三方客户端，主要面向日常 AI 工具访问与网页浏览用户。",
    "comparisonNote": "与同为 18 元档的光年梯（110GB）相比，极连云少 10GB 流量，但极连云成立于 2024 年（比 2025 年成立的光年梯早一年）。",
    "relatedSlugs": [
      "guangnianti",
      "guangsuyun",
      "sujie"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "18 元/月（100GB）IEPL 专线方案，兼顾自研客户端与第三方订阅导入",
      "品牌资料明确强调“覆盖常见 AI 工具使用场景”",
      "包含 2026-08-11 22:46:50 CST 深夜晚高峰真实测速截图归档"
    ],
    "cons": [
      "极连云当前以周期订阅为主（起价 ¥18.0/月起 (100GB/月)），暂未单独设立永久不过期流量包",
      "虽附带 2026-08-11 22:46:50 CST 测速图，但不同省份宽带至「IEPL 专线」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥18.0/月起 (100GB/月) 区间、关注「¥18/月 IEPL 专线 · AI 办公覆盖」定位与 香港、台湾、新加坡、日本、美国等常见地区 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 Shadowsocks / VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 标准月付方案 (¥18 / 100GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 极连云 测速图采样于 2026-08-11 22:46:50 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 标准月付方案 (¥18 / 100GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "极连云评测",
      "secondaryKeywords": [
        "极连云官网",
        "极连云优惠码",
        "极连云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "极连云怎么样？",
        "极连云套餐价格是多少？",
        "极连云支持Clash导入吗？"
      ],
      "title": "极连云评测 (2026)：2026测速原图与18元起套餐 | ClashTuijian.cc",
      "metaDescription": "极连云 (2024年) 深度档案：主打IEPL 专线，支持 Shadowsocks / VLESS 协议，起步价 ¥18.0/月起 (100GB/月)。汇总 1 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "极连云 客观评测报告：Shadowsocks / VLESS 协议架构、套餐明细与横向对比",
      "faqs": [
        {
          "q": "极连云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "极连云的折算入门参考价为 ¥18.0/月起 (100GB/月)，目前收录有 1 个档位（从入门 标准月付方案 (¥18 / 100GB) 到高阶 标准月付方案 (¥18 / 100GB)）。极连云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "极连云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "极连云接入说明为「提供自研客户端 + 支持 Clash / Shadowrocket 等第三方客户端」，底层协议涉及 Shadowsocks / VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "极连云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "极连云定位为「IEPL 专线」，本站收录了其 2026-08-11 22:46:50 CST 的 Shadowsocks 节点实测原图。与同为 18 元档的光年梯（110GB）相比，极连云少 10GB 流量，但极连云成立于 2024 年（比 2025 年成立的光年梯早一年）。"
        }
      ]
    }
  },
  {
    "rank": 15,
    "slug": "guangnianti",
    "name": "光年梯",
    "badge": "¥18/月 110GB · IEPL + VLESS",
    "accent": "#f43f5e",
    "registerUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "promoCode": "gnt6666",
    "promoDetail": "专属优惠码 gnt6666",
    "founded": "2025年",
    "entryPriceText": "¥18.0/月起 (110GB/月)",
    "minMonthlyPrice": 18,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientMode": "both",
    "clientText": "提供自研客户端 + 第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国等地区",
    "highlights": [
      "18 元/月提供 110GB 流量（比同档极连云多 10GB）",
      "IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入",
      "包含 2026-08-11 14:38:04 CST 真实测速截图归档"
    ],
    "plans": [
      {
        "name": "标准月付方案",
        "cycle": "月付",
        "price": "¥18",
        "traffic": "110GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "2026-08-11 14:38 实测截图归档",
    "speeds": [],
    "measuredPng": {
      "src": "/media/speedtests/guangnianti-20260811.png",
      "testedAt": "2026-08-11 14:38:04 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 14:38:04（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "主流流媒体与常见 AI 工具（品牌资料声明）"
    ],
    "unlockPartial": [
      "视节点而定"
    ],
    "unlockNote": "品牌资料明确标注支持常见 AI 工具与主流流媒体场景。",
    "summary": "光年梯（2025年运营）是 18 元/月（110GB）的 IEPL + VLESS 机场，支持自研客户端与第三方订阅导入，附有 2026-08-11 实测截图。",
    "description": "光年梯定位介于低价入门包与高阶专线套餐之间，18 元/月给到 110GB 流量。作为 2025 年新品牌，建议按月订阅体验。",
    "comparisonNote": "与极连云同为 18 元档 IEPL 方案，光年梯多 10GB 流量（110GB vs 100GB）。",
    "relatedSlugs": [
      "jilianyun",
      "guangsuyun",
      "weifeng"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "18 元/月提供 110GB 流量（比同档极连云多 10GB）",
      "IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入",
      "包含 2026-08-11 14:38:04 CST 真实测速截图归档"
    ],
    "cons": [
      "光年梯当前以周期订阅为主（起价 ¥18.0/月起 (110GB/月)），暂未单独设立永久不过期流量包",
      "虽附带 2026-08-11 14:38:04 CST 测速图，但不同省份宽带至「IEPL 专线」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥18.0/月起 (110GB/月) 区间、关注「¥18/月 110GB · IEPL + VLESS」定位与 香港、台湾、新加坡、日本、美国等地区 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS / Shadowsocks 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 标准月付方案 (¥18 / 110GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 光年梯 测速图采样于 2026-08-11 14:38:04 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 标准月付方案 (¥18 / 110GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "光年梯评测",
      "secondaryKeywords": [
        "光年梯官网",
        "光年梯优惠码",
        "光年梯套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "光年梯怎么样？",
        "光年梯套餐价格是多少？",
        "光年梯支持Clash导入吗？"
      ],
      "title": "光年梯评测 (2026)：2026测速原图与18元起套餐 | ClashTuijian.cc",
      "metaDescription": "光年梯 (2025年) 深度档案：主打IEPL 专线，支持 VLESS / Shadowsocks 协议，起步价 ¥18.0/月起 (110GB/月)。汇总 1 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "光年梯 专线测速与订阅指南：¥18.0/月起 (110GB/月)档位性价比核验",
      "faqs": [
        {
          "q": "光年梯在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "光年梯的折算入门参考价为 ¥18.0/月起 (110GB/月)，目前收录有 1 个档位（从入门 标准月付方案 (¥18 / 110GB) 到高阶 标准月付方案 (¥18 / 110GB)）。光年梯目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "光年梯支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "光年梯接入说明为「提供自研客户端 + 第三方订阅导入」，底层协议涉及 VLESS / Shadowsocks。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "光年梯的线路架构与同价位机场相比值得作为主力吗？",
          "a": "光年梯定位为「IEPL 专线」，本站收录了其 2026-08-11 14:38:04 CST 的 Shadowsocks 节点实测原图。与极连云同为 18 元档 IEPL 方案，光年梯多 10GB 流量（110GB vs 100GB）。"
        }
      ]
    }
  },
  {
    "rank": 16,
    "slug": "yifanyun",
    "name": "一翻云",
    "badge": "IEPL 物理专线 + Hysteria2/Reality",
    "accent": "#10b981",
    "registerUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "promoCode": "yfy6666",
    "promoDetail": "优惠码 yfy6666 / 1FLYYUN 享 9 折",
    "founded": "2025年",
    "entryPriceText": "¥8.2/月起 (年付¥98)",
    "minMonthlyPrice": 8.2,
    "lineType": "全节点 IEPL 物理专线 + 原生住宅 IP",
    "protocols": [
      "Hysteria 2",
      "VLESS-Reality",
      "Shadowsocks"
    ],
    "clientMode": "clash-sub",
    "clientText": "三协议可选，广泛兼容 Clash Verge Rev、Shadowrocket、v2rayN 等第三方客户端",
    "hasUnlimitedPack": true,
    "regions": "香港、日本、美国、新加坡、台湾五地核心节点",
    "highlights": [
      "全节点 IEPL 物理专线搭配原生住宅 IP，官方称单节点 2Gbps 大带宽",
      "同时支持 Hysteria 2、VLESS-Reality 与 Shadowsocks 三大现代协议",
      "不限速、不限设备数，并提供 ¥100/100GB、¥200/250GB、¥400/500GB 永久不限时包",
      "包含 2026-08-11 00:21:30 CST 真实测速截图归档"
    ],
    "plans": [
      {
        "name": "98¥·年付小包",
        "cycle": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "轻享版",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "舒享版",
        "cycle": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "尊享版",
        "cycle": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "极致版",
        "cycle": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "period": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "cycle": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedDataStatus": "vendor",
    "speedDateText": "2026-10-19 原文标注（非晚高峰）",
    "speeds": [
      {
        "node": "香港",
        "latency": "23ms",
        "download": "477Mbps"
      },
      {
        "node": "台湾",
        "latency": "40ms",
        "download": "117Mbps"
      },
      {
        "node": "新加坡",
        "latency": "42ms",
        "download": "390Mbps"
      },
      {
        "node": "日本",
        "latency": "53ms",
        "download": "136Mbps"
      },
      {
        "node": "美国",
        "latency": "180ms",
        "download": "20Mbps"
      }
    ],
    "measuredPng": {
      "src": "/media/speedtests/yifanyun-20260811.png",
      "testedAt": "2026-08-11 00:21:30 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 00:21:30（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "ChatGPT",
      "Claude",
      "Netflix",
      "Disney+",
      "YouTube",
      "HBO Max",
      "TikTok",
      "Spotify"
    ],
    "unlockPartial": [
      "Gemini (视节点而定)"
    ],
    "unlockNote": "原生住宅 IP 对流媒体与 ChatGPT/Claude 解锁友好。",
    "summary": "一翻云（2025年运营）主打 IEPL 物理专线 + 原生住宅 IP，罕见同时提供 Hysteria 2 / VLESS-Reality / Shadowsocks 三协议与不限时流量包。",
    "description": "一翻云对进阶协议玩家非常友好，提供 Hysteria 2 与 VLESS-Reality 协议，兼容各类第三方客户端且不限设备数。年付小包 98 元/年，月付 20 元/150GB 起，另有三档永久不过期流量包。",
    "comparisonNote": "相比仅提供单一协议的同价位机场，一翻云的三协议支持（含 Hysteria 2）更丰富，但成立于 2025 年，资历浅于光速云（2020年）。",
    "relatedSlugs": [
      "guangsuyun",
      "xingdaomeng",
      "ermaoyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "全节点 IEPL 物理专线搭配原生住宅 IP，官方称单节点 2Gbps 大带宽",
      "同时支持 Hysteria 2、VLESS-Reality 与 Shadowsocks 三大现代协议",
      "不限速、不限设备数，并提供 ¥100/100GB、¥200/250GB、¥400/500GB 永久不限时包",
      "包含 2026-08-11 00:21:30 CST 真实测速截图归档"
    ],
    "cons": [
      "入门档 98¥·年付小包 (¥98 / 60GB) 适合轻量尝鲜，重度 4K 流媒体需升级高阶档位",
      "虽附带 2026-08-11 00:21:30 CST 测速图，但不同省份宽带至「全节点 IEPL 物理专线 + 原生住宅 IP」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥8.2/月起 (年付¥98) 区间、关注「IEPL 物理专线 + Hysteria2/Reality」定位与 香港、日本、美国、新加坡、台湾五地核心节点 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Hysteria 2 / VLESS-Reality / Shadowsocks 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 98¥·年付小包 (¥98 / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 一翻云 测速图采样于 2026-08-11 00:21:30 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 98¥·年付小包 (¥98 / 60GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "一翻云评测",
      "secondaryKeywords": [
        "一翻云官网",
        "一翻云优惠码",
        "一翻云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "一翻云怎么样？",
        "一翻云套餐价格是多少？",
        "一翻云支持Clash导入吗？"
      ],
      "title": "一翻云评测 (2026)：2026测速原图与8.2元起套餐 | ClashTuijian.cc",
      "metaDescription": "一翻云 (2025年) 深度档案：主打全节点 IEPL 物理专线 + 原生住宅 IP，支持 Hysteria 2 / VLESS-Reality / Shadowsocks 协议，起步价 ¥8.2/月起 (年付¥98)。汇总 8 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "一翻云 2026 实测评测：Hysteria 2 / VLESS-Reality / Shadowsocks 专线吞吐快照与套餐选型",
      "faqs": [
        {
          "q": "一翻云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "一翻云的折算入门参考价为 ¥8.2/月起 (年付¥98)，目前收录有 8 个档位（从入门 98¥·年付小包 (¥98 / 60GB) 到高阶 尊享版·不限时包 (¥400)）。一翻云提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "一翻云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "一翻云接入说明为「三协议可选，广泛兼容 Clash Verge Rev、Shadowrocket、v2rayN 等第三方客户端」，底层协议涉及 Hysteria 2 / VLESS-Reality / Shadowsocks。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "一翻云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "一翻云定位为「全节点 IEPL 物理专线 + 原生住宅 IP」，本站收录了其 2026-08-11 00:21:30 CST 的 Shadowsocks 节点实测原图。相比仅提供单一协议的同价位机场，一翻云的三协议支持（含 Hysteria 2）更丰富，但成立于 2025 年，资历浅于光速云（2020年）。"
        }
      ]
    }
  },
  {
    "rank": 17,
    "slug": "sogoyun",
    "name": "SOGO 云",
    "badge": "15国节点覆盖 · IEPL + 专属客户端",
    "accent": "#f59e0b",
    "registerUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "promoCode": "SOGO10000",
    "promoDetail": "优惠码 SOGO10000 / sss777 享 9 折",
    "founded": "2025-2026年",
    "entryPriceText": "¥8.2/月起 (年付¥98)",
    "minMonthlyPrice": 8.2,
    "lineType": "全线 IEPL 专线接入 + 三网 BGP 优化",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientMode": "custom-only",
    "clientText": "自研专属客户端下载登录即用（不提供第三方订阅链接）",
    "hasUnlimitedPack": true,
    "regions": "覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区",
    "highlights": [
      "全线 IEPL 专线接入 + 三网 BGP 优化，覆盖 15 个国家和地区",
      "不限速、不限设备数量，提供 120GB 至 1.0TB 四档不限时套餐",
      "包含 2026-08-11 18:57:59 CST 傍晚高峰时段真实测速截图归档"
    ],
    "plans": [
      {
        "name": "小包-年付版",
        "cycle": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "基础版",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "优选版",
        "cycle": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "强化版",
        "cycle": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "period": "每月"
      },
      {
        "name": "顶配版",
        "cycle": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "period": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "cycle": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "period": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "cycle": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "cycle": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "period": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "cycle": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedDataStatus": "vendor",
    "speedDateText": "2026-10-19 原文标注（非晚高峰）",
    "speeds": [
      {
        "node": "香港",
        "latency": "26ms",
        "download": "488Mbps"
      },
      {
        "node": "台湾",
        "latency": "39ms",
        "download": "118Mbps"
      },
      {
        "node": "新加坡",
        "latency": "43ms",
        "download": "401Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "137Mbps"
      },
      {
        "node": "美国",
        "latency": "140ms",
        "download": "17Mbps"
      }
    ],
    "measuredPng": {
      "src": "/media/speedtests/sogoyun-20260811.png",
      "testedAt": "2026-08-11 18:57:59 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 18:57:59（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "ChatGPT",
      "Netflix",
      "Disney+",
      "YouTube",
      "TikTok"
    ],
    "unlockPartial": [
      "Claude (视节点而定)",
      "Gemini (视节点而定)",
      "HBO Max",
      "Spotify"
    ],
    "unlockNote": "支持 ChatGPT 与主流视频平台，Claude/Gemini 视节点而定。",
    "summary": "SOGO 云采用全线 IEPL 专线与三网 BGP 优化，节点覆盖 15 个国家和地区，仅限自研客户端使用，年付 98 元起，附 2026-08-11 实测截图。",
    "description": "SOGO 云覆盖 15 个国家地区，不限速不限设备，但仅能通过自研客户端连接，不支持导入 Clash 或 Shadowrocket 第三方客户端。",
    "comparisonNote": "与同样覆盖 12+ 国家地区的光速云相比，光速云同时支持 Clash 订阅与自研客户端，通用性更强。",
    "relatedSlugs": [
      "guangsuyun",
      "feimaoyun",
      "kexinyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "全线 IEPL 专线接入 + 三网 BGP 优化，覆盖 15 个国家和地区",
      "不限速、不限设备数量，提供 120GB 至 1.0TB 四档不限时套餐",
      "包含 2026-08-11 18:57:59 CST 傍晚高峰时段真实测速截图归档"
    ],
    "cons": [
      "SOGO 云仅开放官方专属客户端登录，不提供明文 Clash / V2Ray 订阅链接，无法部署在 OpenWrt 软路由或 Apple TV 网关",
      "虽有按量包，但跨运营商晚高峰表现建议先通过最低档（小包-年付版 (¥98 / 60GB)）实测"
    ],
    "suitableFor": [
      "月均预算在 ¥8.2/月起 (年付¥98) 区间、关注「15国节点覆盖 · IEPL + 专属客户端」定位与 覆盖香港、台湾、日本、新加坡、美国、韩国等  节点覆盖的人群",
      "不想研究 YAML 规则、希望下载 SOGO 云 官方客户端直接登录账号一键连接的新手用户"
    ],
    "notSuitableFor": [
      "需要在 OpenClash / PassWall2 软路由网关、NAS 或 Linux 服务器上导入通用订阅链接的进阶玩家",
      "未经小额套餐测试本地宽带晚高峰便盲目囤购两三年超长周期的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 SOGO 云 测速图采样于 2026-08-11 18:57:59 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 小包-年付版 (¥98 / 60GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "SOGO 云评测",
      "secondaryKeywords": [
        "SOGO 云官网",
        "SOGO 云优惠码",
        "SOGO 云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "SOGO 云怎么样？",
        "SOGO 云套餐价格是多少？",
        "SOGO 云支持Clash导入吗？"
      ],
      "title": "SOGO 云评测 (2026)：2026测速原图与8.2元起套餐 | ClashTuijian.cc",
      "metaDescription": "SOGO 云 (2025-2026年) 深度档案：主打全线 IEPL 专线接入 + 三网 BGP 优化，支持 VLESS / Shadowsocks 协议，起步价 ¥8.2/月起 (年付¥98)。汇总 9 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "SOGO 云 深度档案：2026 节点测速原图、¥8.2/月起 (年付¥98)资费与优缺点",
      "faqs": [
        {
          "q": "SOGO 云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "SOGO 云的折算入门参考价为 ¥8.2/月起 (年付¥98)，目前收录有 9 个档位（从入门 小包-年付版 (¥98 / 60GB) 到高阶 SOGO至尊餐不限时版 (¥850)）。SOGO 云提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "SOGO 云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "不支持第三方通用订阅。SOGO 云采用「自研专属客户端下载登录即用（不提供第三方订阅链接）」策略，仅限登录其官方专属客户端一键使用，因此无法导入 Clash Verge Rev 或 OpenWrt 软路由。"
        },
        {
          "q": "SOGO 云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "SOGO 云定位为「全线 IEPL 专线接入 + 三网 BGP 优化」，本站收录了其 2026-08-11 18:57:59 CST 的 Shadowsocks 节点实测原图。与同样覆盖 12+ 国家地区的光速云相比，光速云同时支持 Clash 订阅与自研客户端，通用性更强。"
        }
      ]
    }
  },
  {
    "rank": 18,
    "slug": "kexinyun",
    "name": "可信云",
    "badge": "¥25/月 IEPL+VLESS · 诚实透明披露",
    "accent": "#64748b",
    "registerUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "promoCode": "kkk333",
    "promoDetail": "专属优惠码 kkk333",
    "founded": "2024年",
    "entryPriceText": "¥25.0/月起 (150GB/月)",
    "minMonthlyPrice": 25,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 Clash Verge Rev、Shadowrocket 等第三方客户端导入",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国等主流地区",
    "highlights": [
      "IEPL 专线 + VLESS 协议，25 元/月提供 150GB 流量",
      "支持第三方客户端订阅导入",
      "品牌资料主动诚实披露“AI 与流媒体目前缺乏统一实测数据”，不虚假夸大",
      "包含 2026-08-11 15:32:35 CST 批次测速截图归档"
    ],
    "plans": [
      {
        "name": "标准月付套餐",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "2026-08-11 15:32 实测截图归档",
    "speeds": [],
    "measuredPng": {
      "src": "/media/speedtests/kexinyun-20260811.png",
      "testedAt": "2026-08-11 15:32:35 CST (批次日期)",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "date-inferred-from-batch-time-visible-in-image",
      "note": "测试时间：15:32:35 CST（按压缩包批次记为 2026-08-11）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "日常网页与基础海外访问"
    ],
    "unlockPartial": [
      "AI 与流媒体缺乏统一实测数据（以实际节点测试为准）"
    ],
    "unlockNote": "品牌方坦诚标注 AI 与流媒体不做过度承诺，透明度高。",
    "summary": "可信云（2024年运营）是 25 元/150GB 档的 IEPL + VLESS 机场，支持第三方客户端，以诚实披露数据边界著称，附 2026-08-11 测速截图。",
    "description": "可信云规格与同属 25 元/150GB 档的速界相近，但其最大特点是在官方资料中坦诚说明“AI 与流媒体缺乏统一实测数据”，不做夸大宣传。",
    "comparisonNote": "同为 25 元/150GB 档，若重度使用 AI 工具可选速界；若追求更高性价比（25元得168GB且2020老牌）首选光速云极速版。",
    "relatedSlugs": [
      "sujie",
      "guangsuyun",
      "sogoyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "IEPL 专线 + VLESS 协议，25 元/月提供 150GB 流量",
      "支持第三方客户端订阅导入",
      "品牌资料主动诚实披露“AI 与流媒体目前缺乏统一实测数据”，不虚假夸大",
      "包含 2026-08-11 15:32:35 CST 批次测速截图归档"
    ],
    "cons": [
      "可信云当前以周期订阅为主（起价 ¥25.0/月起 (150GB/月)），暂未单独设立永久不过期流量包",
      "虽附带 2026-08-11 15:32:35 CST (批次日期) 测速图，但不同省份宽带至「IEPL 专线」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥25.0/月起 (150GB/月) 区间、关注「¥25/月 IEPL+VLESS · 诚实透明披露」定位与 香港、台湾、新加坡、日本、美国等主流地区 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 VLESS / Shadowsocks 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 标准月付套餐 (¥25 / 150GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 可信云 测速图采样于 2026-08-11 15:32:35 CST (批次日期)（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 标准月付套餐 (¥25 / 150GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "可信云评测",
      "secondaryKeywords": [
        "可信云官网",
        "可信云优惠码",
        "可信云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "可信云怎么样？",
        "可信云套餐价格是多少？",
        "可信云支持Clash导入吗？"
      ],
      "title": "可信云评测 (2026)：2026测速原图与25元起套餐 | ClashTuijian.cc",
      "metaDescription": "可信云 (2024年) 深度档案：主打IEPL 专线，支持 VLESS / Shadowsocks 协议，起步价 ¥25.0/月起 (150GB/月)。汇总 1 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "可信云 机场怎么样？IEPL 专线实测表现与价格表",
      "faqs": [
        {
          "q": "可信云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "可信云的折算入门参考价为 ¥25.0/月起 (150GB/月)，目前收录有 1 个档位（从入门 标准月付套餐 (¥25 / 150GB) 到高阶 标准月付套餐 (¥25 / 150GB)）。可信云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "可信云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "可信云接入说明为「支持 Clash Verge Rev、Shadowrocket 等第三方客户端导入」，底层协议涉及 VLESS / Shadowsocks。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "可信云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "可信云定位为「IEPL 专线」，本站收录了其 2026-08-11 15:32:35 CST (批次日期) 的 Shadowsocks 节点实测原图。同为 25 元/150GB 档，若重度使用 AI 工具可选速界；若追求更高性价比（25元得168GB且2020老牌）首选光速云极速版。"
        }
      ]
    }
  },
  {
    "rank": 19,
    "slug": "sujie",
    "name": "速界",
    "badge": "¥25/月 IEPL · 主打 AI 生产力工具",
    "accent": "#8b5cf6",
    "registerUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "promoCode": "sss1111",
    "promoDetail": "专属优惠码 sss1111",
    "founded": "2024年",
    "entryPriceText": "¥25.0/月起 (150GB/月)",
    "minMonthlyPrice": 25,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientMode": "both",
    "clientText": "提供自研客户端 + 支持第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国等主流地区",
    "highlights": [
      "25 元档唯一明确强调 ChatGPT、Claude、Gemini 等 AI 工具访问场景的品牌",
      "IEPL 专线 + VLESS 协议，同时支持自研客户端与第三方订阅导入",
      "客观提示 AI 可用性受平台风控影响，并提供 2026-08-11 15:39 实测截图"
    ],
    "plans": [
      {
        "name": "标准月付套餐",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "2026-08-11 15:39 实测截图归档",
    "speeds": [],
    "measuredPng": {
      "src": "/media/speedtests/sujie-20260811.png",
      "testedAt": "2026-08-11 15:39:36 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 15:39:36（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "ChatGPT",
      "Claude",
      "Gemini (品牌重点优化场景)"
    ],
    "unlockPartial": [
      "受平台 IP 风控策略动态影响"
    ],
    "unlockNote": "品牌资料重点突出 ChatGPT、Claude、Gemini 等 AI 使用场景。",
    "summary": "速界（2024年运营）是 25 元/150GB 档主打 ChatGPT、Claude、Gemini 等 AI 生产力场景的 IEPL + VLESS 机场，支持自研端与第三方订阅。",
    "description": "速界针对高频使用 ChatGPT、Claude、Gemini 的开发者与办公人群做了重点定位，同时保留了客观的平台规则风险提示与 2026-08-11 实测截图。",
    "comparisonNote": "相比同价位可信云，速界更突出 AI 工具访问；相比光速云极速版（25元/168GB），光速云流量略多 18GB 且有 99 元年付档。",
    "relatedSlugs": [
      "kexinyun",
      "guangsuyun",
      "jilianyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "25 元档唯一明确强调 ChatGPT、Claude、Gemini 等 AI 工具访问场景的品牌",
      "IEPL 专线 + VLESS 协议，同时支持自研客户端与第三方订阅导入",
      "客观提示 AI 可用性受平台风控影响，并提供 2026-08-11 15:39 实测截图"
    ],
    "cons": [
      "速界当前以周期订阅为主（起价 ¥25.0/月起 (150GB/月)），暂未单独设立永久不过期流量包",
      "虽附带 2026-08-11 15:39:36 CST 测速图，但不同省份宽带至「IEPL 专线」入口路由仍有差异"
    ],
    "suitableFor": [
      "月均预算在 ¥25.0/月起 (150GB/月) 区间、关注「¥25/月 IEPL · 主打 AI 生产力工具」定位与 香港、台湾、新加坡、日本、美国等主流地区 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS / Shadowsocks 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 标准月付套餐 (¥25 / 150GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 速界 测速图采样于 2026-08-11 15:39:36 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 标准月付套餐 (¥25 / 150GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "速界评测",
      "secondaryKeywords": [
        "速界官网",
        "速界优惠码",
        "速界套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "速界怎么样？",
        "速界套餐价格是多少？",
        "速界支持Clash导入吗？"
      ],
      "title": "速界评测 (2026)：2026测速原图与25元起套餐 | ClashTuijian.cc",
      "metaDescription": "速界 (2024年) 深度档案：主打IEPL 专线，支持 VLESS / Shadowsocks 协议，起步价 ¥25.0/月起 (150GB/月)。汇总 1 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "速界 客观评测报告：VLESS / Shadowsocks 协议架构、套餐明细与横向对比",
      "faqs": [
        {
          "q": "速界在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "速界的折算入门参考价为 ¥25.0/月起 (150GB/月)，目前收录有 1 个档位（从入门 标准月付套餐 (¥25 / 150GB) 到高阶 标准月付套餐 (¥25 / 150GB)）。速界目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "速界支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "速界接入说明为「提供自研客户端 + 支持第三方订阅导入」，底层协议涉及 VLESS / Shadowsocks。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "速界的线路架构与同价位机场相比值得作为主力吗？",
          "a": "速界定位为「IEPL 专线」，本站收录了其 2026-08-11 15:39:36 CST 的 Shadowsocks 节点实测原图。相比同价位可信云，速界更突出 AI 工具访问；相比光速云极速版（25元/168GB），光速云流量略多 18GB 且有 99 元年付档。"
        }
      ]
    }
  },
  {
    "rank": 20,
    "slug": "shanyue",
    "name": "闪跃",
    "badge": "纯 IPLC 骨干网 · 原生 IP 专属端",
    "accent": "#ec4899",
    "registerUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "promoCode": "shanyue",
    "promoDetail": "优惠码 shanyue 享 8 折（仅限月付闪动/飞跃/瞬移/跃迁，年付不适用）",
    "founded": "2024年",
    "entryPriceText": "¥8.0/月起 (年付¥96)",
    "minMonthlyPrice": 8,
    "lineType": "纯 IPLC 专线 + 骨干网接入",
    "protocols": [
      "专属协议"
    ],
    "clientMode": "custom-only",
    "clientText": "官方专属客户端下载登录即用（不提供订阅链接）",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国原生 IP 节点",
    "highlights": [
      "纯 IPLC 专线接入，主打晚高峰低延迟与不掉速",
      "原生 IP 节点解锁 Netflix、Disney+、HBO Max 及 ChatGPT/Claude",
      "年付 ¥96/年（60GB/月），月付 ¥24/150GB 起（可用 8 折码 shanyue）"
    ],
    "plans": [
      {
        "name": "闪跃年付版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "cycle": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "cycle": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "cycle": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "cycle": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "vendor",
    "speedDateText": "2026-10-19 原文标注（非晚高峰）",
    "speeds": [
      {
        "node": "香港",
        "latency": "23ms",
        "download": "548Mbps"
      },
      {
        "node": "台湾",
        "latency": "38ms",
        "download": "110Mbps"
      },
      {
        "node": "新加坡",
        "latency": "44ms",
        "download": "383Mbps"
      },
      {
        "node": "日本",
        "latency": "53ms",
        "download": "144Mbps"
      },
      {
        "node": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlockSupported": [
      "ChatGPT",
      "Claude",
      "Netflix",
      "Disney+",
      "YouTube",
      "HBO Max",
      "TikTok",
      "Spotify"
    ],
    "unlockPartial": [
      "Gemini (视节点而定)"
    ],
    "unlockNote": "原生 IP 全解锁主流流媒体与 AI 办公。",
    "summary": "闪跃主打纯 IPLC 专线与原生 IP，采用专属客户端登录即用，年付 96 元/年（8元/月），月付可享 8 折优惠码 shanyue。",
    "description": "闪跃与 Firefly 定位相近，均走 IPLC 专线 + 专属客户端模式，适合高频 AI 办公与深夜 4K 追剧用户，但不支持第三方 Clash 订阅导入。",
    "comparisonNote": "与 Firefly 规格接近，但 Firefly 额外提供 100元/100GB 一次性不限时套餐。",
    "relatedSlugs": [
      "firefly",
      "feimaoyun",
      "guangsuyun"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "纯 IPLC 专线接入，主打晚高峰低延迟与不掉速",
      "原生 IP 节点解锁 Netflix、Disney+、HBO Max 及 ChatGPT/Claude",
      "年付 ¥96/年（60GB/月），月付 ¥24/150GB 起（可用 8 折码 shanyue）"
    ],
    "cons": [
      "闪跃仅开放官方专属客户端登录，不提供明文 Clash / V2Ray 订阅链接，无法部署在 OpenWrt 软路由或 Apple TV 网关",
      "套餐均为周期计费（无永久不限时包），跨运营商晚高峰表现建议先通过最低档（闪跃年付版 (¥96 / 60GB)）实测"
    ],
    "suitableFor": [
      "月均预算在 ¥8.0/月起 (年付¥96) 区间、关注「纯 IPLC 骨干网 · 原生 IP 专属端」定位与 香港、台湾、新加坡、日本、美国原生 IP 节 节点覆盖的人群",
      "不想研究 YAML 规则、希望下载 闪跃 官方客户端直接登录账号一键连接的新手用户"
    ],
    "notSuitableFor": [
      "需要在 OpenClash / PassWall2 软路由网关、NAS 或 Linux 服务器上导入通用订阅链接的进阶玩家",
      "未经小额套餐测试本地宽带晚高峰便盲目囤购两三年超长周期的用户"
    ],
    "riskNote": "选型风控建议：闪跃 套餐资费（¥8.0/月起 (年付¥96)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "闪跃评测",
      "secondaryKeywords": [
        "闪跃官网",
        "闪跃优惠码",
        "闪跃套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "闪跃怎么样？",
        "闪跃套餐价格是多少？",
        "闪跃支持Clash导入吗？"
      ],
      "title": "闪跃评测 (2026)：专属协议线路架构与8元起套餐 | ClashTuijian.cc",
      "metaDescription": "闪跃 (2024年) 深度档案：主打纯 IPLC 专线 + 骨干网接入，支持 专属协议 协议，起步价 ¥8.0/月起 (年付¥96)。汇总 5 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "闪跃 评测与排雷参考：¥8.0/月起 (年付¥96)方案详情及连接限制说明",
      "faqs": [
        {
          "q": "闪跃在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "闪跃的折算入门参考价为 ¥8.0/月起 (年付¥96)，目前收录有 5 个档位（从入门 闪跃年付版 (¥96 / 60GB) 到高阶 跃迁 (Warp) (¥134)）。闪跃目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "闪跃支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "不支持第三方通用订阅。闪跃采用「官方专属客户端下载登录即用（不提供订阅链接）」策略，仅限登录其官方专属客户端一键使用，因此无法导入 Clash Verge Rev 或 OpenWrt 软路由。"
        },
        {
          "q": "闪跃的线路架构与同价位机场相比值得作为主力吗？",
          "a": "闪跃定位为「纯 IPLC 专线 + 骨干网接入」（数据状态：官方公开参数核验）。与 Firefly 规格接近，但 Firefly 额外提供 100元/100GB 一次性不限时套餐。"
        }
      ]
    }
  },
  {
    "rank": 21,
    "slug": "quanqiuyun",
    "name": "全球云",
    "badge": "60+ 全球节点 · IPLC/IEPL + 双协议",
    "accent": "#0284c7",
    "registerUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "promoCode": "qq88",
    "promoDetail": "优惠码 qq88 / qqy7777 享 8 折",
    "founded": "2025-2026年",
    "entryPriceText": "¥8.2/月起 (年付¥99)",
    "minMonthlyPrice": 8.2,
    "lineType": "IPLC / IEPL 专线中转 + BGP 智能优化",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clientMode": "custom-only",
    "clientText": "官方专属客户端下载登录即用（不提供订阅链接）",
    "hasUnlimitedPack": true,
    "regions": "覆盖全球 60+ 节点（港、台、新、日、美等）",
    "highlights": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点与 2Gbps+ 带宽资源",
      "提供 100GB（¥100）、400GB（¥360）、800GB（¥700）三档不限时流量包",
      "包含 2026-08-11 15:50:43 CST 真实测速截图归档"
    ],
    "plans": [
      {
        "name": "轻量版",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "cycle": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "cycle": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "cycle": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "cycle": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·不限时轻量包",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "cycle": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "cycle": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "独享私人专线节点",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "vendor",
    "speedDateText": "2026-10-19 原文标注（非晚高峰）",
    "speeds": [
      {
        "node": "香港",
        "latency": "25ms",
        "download": "489Mbps"
      },
      {
        "node": "台湾",
        "latency": "37ms",
        "download": "117Mbps"
      },
      {
        "node": "新加坡",
        "latency": "45ms",
        "download": "430Mbps"
      },
      {
        "node": "日本",
        "latency": "55ms",
        "download": "133Mbps"
      },
      {
        "node": "美国",
        "latency": "138ms",
        "download": "18Mbps"
      }
    ],
    "measuredPng": {
      "src": "/media/speedtests/quanqiuyun-20260811.png",
      "testedAt": "2026-08-11 15:50:43 CST",
      "protocolDisplayed": "Shadowsocks",
      "toolFamily": "MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)",
      "dateConfidence": "visible-in-image",
      "note": "测试时间：2026-08-11 15:50:43（CST）。本图记录当次测试环境下的节点延迟与吞吐结果。"
    },
    "unlockSupported": [
      "ChatGPT",
      "Claude",
      "Netflix",
      "Disney+",
      "YouTube",
      "HBO Max",
      "TikTok",
      "Spotify"
    ],
    "unlockPartial": [
      "Gemini (视节点而定)"
    ],
    "unlockNote": "60+ 节点支持主流流媒体与 AI 解锁。",
    "summary": "全球云主打 60+ 全球节点与 IPLC/IEPL 专线中转，采用专属客户端模式，提供年付 99 元及三档不限时流量包，附 2026-08-11 实测截图。",
    "description": "全球云套餐结构完整，覆盖年付、月付、不限时包与 680 元独享节点，适合看重节点规模且习惯使用专属客户端的用户。",
    "comparisonNote": "与暮光加速套餐档位接近，但全球云仅限专属客户端，若需导入 Clash 请选择光速云或暮光加速。",
    "relatedSlugs": [
      "guangsuyun",
      "muguang",
      "sogoyun"
    ],
    "dataStatus": "measured-plus-vendor",
    "isTopTen": false,
    "pros": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点与 2Gbps+ 带宽资源",
      "提供 100GB（¥100）、400GB（¥360）、800GB（¥700）三档不限时流量包",
      "包含 2026-08-11 15:50:43 CST 真实测速截图归档"
    ],
    "cons": [
      "全球云仅开放官方专属客户端登录，不提供明文 Clash / V2Ray 订阅链接，无法部署在 OpenWrt 软路由或 Apple TV 网关",
      "虽有按量包，但跨运营商晚高峰表现建议先通过最低档（轻量版 (¥99 / 59GB)）实测"
    ],
    "suitableFor": [
      "月均预算在 ¥8.2/月起 (年付¥99) 区间、关注「60+ 全球节点 · IPLC/IEPL + 双协议」定位与 覆盖全球 60+ 节点（港、台、新、日、美等 节点覆盖的人群",
      "不想研究 YAML 规则、希望下载 全球云 官方客户端直接登录账号一键连接的新手用户"
    ],
    "notSuitableFor": [
      "需要在 OpenClash / PassWall2 软路由网关、NAS 或 Linux 服务器上导入通用订阅链接的进阶玩家",
      "未经小额套餐测试本地宽带晚高峰便盲目囤购两三年超长周期的用户"
    ],
    "riskNote": "实测快照声明：本页公示的 全球云 测速图采样于 2026-08-11 15:50:43 CST（MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps / 32线程)），仅反映当次测试链路吞吐；建议新用户先购入 轻量版 (¥99 / 59GB) 实测本地晚高峰。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "全球云评测",
      "secondaryKeywords": [
        "全球云官网",
        "全球云优惠码",
        "全球云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "全球云怎么样？",
        "全球云套餐价格是多少？",
        "全球云支持Clash导入吗？"
      ],
      "title": "全球云评测 (2026)：2026测速原图与8.2元起套餐 | ClashTuijian.cc",
      "metaDescription": "全球云 (2025-2026年) 深度档案：主打IPLC / IEPL 专线中转 + BGP 智能优化，支持 Trojan / Shadowsocks 协议，起步价 ¥8.2/月起 (年付¥99)。汇总 9 档套餐价格、2026-08-11 真实测速快照、客户端接入方式与同价位专线对比。",
      "h1": "全球云 2026 实测评测：Trojan / Shadowsocks 专线吞吐快照与套餐选型",
      "faqs": [
        {
          "q": "全球云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "全球云的折算入门参考价为 ¥8.2/月起 (年付¥99)，目前收录有 9 个档位（从入门 轻量版 (¥99 / 59GB) 到高阶 独享私人专线节点 (¥680)）。全球云提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "全球云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "不支持第三方通用订阅。全球云采用「官方专属客户端下载登录即用（不提供订阅链接）」策略，仅限登录其官方专属客户端一键使用，因此无法导入 Clash Verge Rev 或 OpenWrt 软路由。"
        },
        {
          "q": "全球云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "全球云定位为「IPLC / IEPL 专线中转 + BGP 智能优化」，本站收录了其 2026-08-11 15:50:43 CST 的 Shadowsocks 节点实测原图。与暮光加速套餐档位接近，但全球云仅限专属客户端，若需导入 Clash 请选择光速云或暮光加速。"
        }
      ]
    }
  },
  {
    "rank": 22,
    "slug": "shandianshu",
    "name": "闪电鼠",
    "badge": "¥5.6/月极限平价 · IEPL + VLESS",
    "accent": "#eab308",
    "registerUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "promoCode": "sd88",
    "promoDetail": "优惠码 sd88；季付及以上享 7 折",
    "founded": "2024年",
    "entryPriceText": "¥5.6/月起 (年付折算)",
    "minMonthlyPrice": 5.6,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "自研客户端 + 支持第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流亚太与欧美节点",
    "highlights": [
      "5.6 元/月（60GB/月）极限平价区间代表品牌之一",
      "明确采用 IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入",
      "季付及以上周期享 7 折优惠"
    ],
    "plans": [
      {
        "name": "年付轻量档 (折算)",
        "cycle": "年付",
        "price": "约¥67/年 (¥5.6/月)",
        "traffic": "60GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "暂无独立逐地区实测表",
    "speeds": [],
    "unlockSupported": [
      "基础网页与常规流媒体（以实测为准）"
    ],
    "unlockPartial": [
      "AI 工具视节点而定"
    ],
    "unlockNote": "建议小额实测验证。",
    "summary": "闪电鼠（2024年运营）是 5.6 元/月（60GB/月）极限平价档的 IEPL + VLESS 方案，支持自研端与第三方 Clash 订阅导入。",
    "description": "闪电鼠与大佬云同属 5.6 元/月极限平价档中协议标注明确（VLESS）且推广链接格式规范的选择，适合超低预算用户当作备用机场。",
    "comparisonNote": "与大佬云规格一致；比协议未明的榴莲云更透明。",
    "relatedSlugs": [
      "dalaoyun",
      "yunjiexian",
      "shenxing",
      "guangsuyun"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "5.6 元/月（60GB/月）极限平价区间代表品牌之一",
      "明确采用 IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入",
      "季付及以上周期享 7 折优惠"
    ],
    "cons": [
      "闪电鼠当前以周期订阅为主（起价 ¥5.6/月起 (年付折算)），暂未单独设立永久不过期流量包",
      "当前参数基于 2026-10-19 官方公开资料，尚未补充同批次实验室多线程测速 PNG"
    ],
    "suitableFor": [
      "月均预算在 ¥5.6/月起 (年付折算) 区间、关注「¥5.6/月极限平价 · IEPL + VLESS」定位与 主流亚太与欧美节点 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "选型风控建议：闪电鼠 套餐资费（¥5.6/月起 (年付折算)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "闪电鼠评测",
      "secondaryKeywords": [
        "闪电鼠官网",
        "闪电鼠优惠码",
        "闪电鼠套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "闪电鼠怎么样？",
        "闪电鼠套餐价格是多少？",
        "闪电鼠支持Clash导入吗？"
      ],
      "title": "闪电鼠评测 (2026)：VLESS线路架构与5.6元起套餐 | ClashTuijian.cc",
      "metaDescription": "闪电鼠 (2024年) 深度档案：主打IEPL 专线，支持 VLESS 协议，起步价 ¥5.6/月起 (年付折算)。汇总 1 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "闪电鼠 机场选购档案：IEPL 专线参数、客户端模式与对比",
      "faqs": [
        {
          "q": "闪电鼠在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "闪电鼠的折算入门参考价为 ¥5.6/月起 (年付折算)，目前收录有 1 个档位（从入门 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 到高阶 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB)）。闪电鼠目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "闪电鼠支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "闪电鼠接入说明为「自研客户端 + 支持第三方订阅导入」，底层协议涉及 VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "闪电鼠的线路架构与同价位机场相比值得作为主力吗？",
          "a": "闪电鼠定位为「IEPL 专线」（数据状态：官方公开参数核验）。与大佬云规格一致；比协议未明的榴莲云更透明。"
        }
      ]
    }
  },
  {
    "rank": 23,
    "slug": "yunjiexian",
    "name": "云界线",
    "badge": "¥5.6/月平价 IEPL · 链接格式需留意",
    "accent": "#64748b",
    "registerUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "linkNotice": "注意：该品牌官方链接不含 # 号路由，访问前请确认页面加载正常",
    "promoCode": "yjx888",
    "promoDetail": "优惠码 yjx888；季付及以上 7 折",
    "founded": "2024年",
    "entryPriceText": "¥5.6/月起 (年付折算)",
    "minMonthlyPrice": 5.6,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "自研客户端 + 第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流亚太与欧美节点",
    "highlights": [
      "5.6 元/月（60GB/月）IEPL + VLESS 平价方案",
      "支持自研客户端与第三方订阅导入，季付及以上 7 折"
    ],
    "plans": [
      {
        "name": "年付轻量档 (折算)",
        "cycle": "年付",
        "price": "约¥67/年 (¥5.6/月)",
        "traffic": "60GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "暂无独立逐地区实测表",
    "speeds": [],
    "unlockSupported": [
      "日常基础访问（以实测为准）"
    ],
    "unlockPartial": [
      "视节点而定"
    ],
    "unlockNote": "同属 5.6 元平价档。",
    "summary": "云界线（2024年运营）是 5.6 元/月（60GB）的 IEPL + VLESS 方案，规格与大佬云、闪电鼠一致，但需留意其注册链接格式不含 # 号。",
    "description": "云界线提供 5.6 元/月档位的 IEPL + VLESS 服务，由于链接格式与其他同系品牌略有差异，若打不开可优先选择同规格的大佬云或闪电鼠。",
    "comparisonNote": "与大佬云、闪电鼠同规格，建议优先选链接更稳定的大佬云或主力品牌光速云。",
    "relatedSlugs": [
      "dalaoyun",
      "shandianshu",
      "huanqiuti"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "5.6 元/月（60GB/月）IEPL + VLESS 平价方案",
      "支持自研客户端与第三方订阅导入，季付及以上 7 折"
    ],
    "cons": [
      "云界线当前以周期订阅为主（起价 ¥5.6/月起 (年付折算)），暂未单独设立永久不过期流量包",
      "当前参数基于 2026-10-19 官方公开资料，尚未补充同批次实验室多线程测速 PNG"
    ],
    "suitableFor": [
      "月均预算在 ¥5.6/月起 (年付折算) 区间、关注「¥5.6/月平价 IEPL · 链接格式需留意」定位与 主流亚太与欧美节点 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "选型风控建议：云界线 套餐资费（¥5.6/月起 (年付折算)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "云界线评测",
      "secondaryKeywords": [
        "云界线官网",
        "云界线优惠码",
        "云界线套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "云界线怎么样？",
        "云界线套餐价格是多少？",
        "云界线支持Clash导入吗？"
      ],
      "title": "云界线评测 (2026)：VLESS线路架构与5.6元起套餐 | ClashTuijian.cc",
      "metaDescription": "云界线 (2024年) 深度档案：主打IEPL 专线，支持 VLESS 协议，起步价 ¥5.6/月起 (年付折算)。汇总 1 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "云界线 深度解析：VLESS 节点覆盖、套餐价格表与适用场景",
      "faqs": [
        {
          "q": "云界线在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "云界线的折算入门参考价为 ¥5.6/月起 (年付折算)，目前收录有 1 个档位（从入门 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 到高阶 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB)）。云界线目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "云界线支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "云界线接入说明为「自研客户端 + 第三方订阅导入」，底层协议涉及 VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "云界线的线路架构与同价位机场相比值得作为主力吗？",
          "a": "云界线定位为「IEPL 专线」（数据状态：官方公开参数核验）。与大佬云、闪电鼠同规格，建议优先选链接更稳定的大佬云或主力品牌光速云。"
        }
      ]
    }
  },
  {
    "rank": 24,
    "slug": "liulianyun",
    "name": "榴莲云",
    "badge": "¥5.6/月平价 IEPL · 协议未明确标注",
    "accent": "#84cc16",
    "registerUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "promoCode": "ll88",
    "promoDetail": "优惠码 ll88；季付及以上 7 折",
    "founded": "2024年",
    "entryPriceText": "¥5.6/月起 (年付折算)",
    "minMonthlyPrice": 5.6,
    "lineType": "IEPL 专线",
    "protocols": [
      "待核实"
    ],
    "clientMode": "both",
    "clientText": "自研客户端 + 第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流亚太与欧美节点",
    "highlights": [
      "5.6 元/月（60GB/月）平价 IEPL 方案",
      "支持自研客户端与第三方订阅导入，季付及以上 7 折"
    ],
    "plans": [
      {
        "name": "年付轻量档 (折算)",
        "cycle": "年付",
        "price": "约¥67/年 (¥5.6/月)",
        "traffic": "60GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "暂无独立逐地区实测表",
    "speeds": [],
    "unlockSupported": [
      "日常基础访问（以实测为准）"
    ],
    "unlockPartial": [
      "视节点而定"
    ],
    "unlockNote": "品牌资料未明确统一标注底层协议类型。",
    "summary": "榴莲云（2024年运营）属于 5.6 元/月（60GB）IEPL 平价档，但品牌资料未明确标注协议类型，如需明确 VLESS 协议建议选大佬云或闪电鼠。",
    "description": "榴莲云提供年付折算约 5.6 元/月的 IEPL 套餐，支持自研端与第三方订阅。因协议字段未明确公示，仅推荐给不在意协议细节的极低预算用户。",
    "comparisonNote": "同为 5.6 元档，大佬云与闪电鼠已明确标注 VLESS 协议，透明度更高。",
    "relatedSlugs": [
      "dalaoyun",
      "shandianshu",
      "yunjiexian"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "5.6 元/月（60GB/月）平价 IEPL 方案",
      "支持自研客户端与第三方订阅导入，季付及以上 7 折"
    ],
    "cons": [
      "榴莲云当前以周期订阅为主（起价 ¥5.6/月起 (年付折算)），暂未单独设立永久不过期流量包",
      "当前参数基于 2026-10-19 官方公开资料，尚未补充同批次实验室多线程测速 PNG"
    ],
    "suitableFor": [
      "月均预算在 ¥5.6/月起 (年付折算) 区间、关注「¥5.6/月平价 IEPL · 协议未明确标注」定位与 主流亚太与欧美节点 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 待核实 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "选型风控建议：榴莲云 套餐资费（¥5.6/月起 (年付折算)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "榴莲云评测",
      "secondaryKeywords": [
        "榴莲云官网",
        "榴莲云优惠码",
        "榴莲云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "榴莲云怎么样？",
        "榴莲云套餐价格是多少？",
        "榴莲云支持Clash导入吗？"
      ],
      "title": "榴莲云评测 (2026)：待核实线路架构与5.6元起套餐 | ClashTuijian.cc",
      "metaDescription": "榴莲云 (2024年) 深度档案：主打IEPL 专线，支持 待核实 协议，起步价 ¥5.6/月起 (年付折算)。汇总 1 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "榴莲云 客观参数汇编：2024年背景、资费梯度与替代方案评估",
      "faqs": [
        {
          "q": "榴莲云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "榴莲云的折算入门参考价为 ¥5.6/月起 (年付折算)，目前收录有 1 个档位（从入门 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 到高阶 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB)）。榴莲云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "榴莲云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "榴莲云接入说明为「自研客户端 + 第三方订阅导入」，底层协议涉及 待核实。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "榴莲云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "榴莲云定位为「IEPL 专线」（数据状态：官方公开参数核验）。同为 5.6 元档，大佬云与闪电鼠已明确标注 VLESS 协议，透明度更高。"
        }
      ]
    }
  },
  {
    "rank": 25,
    "slug": "shenxing",
    "name": "神行加速",
    "badge": "¥14/月 120GB · 新用户 7 折 IEPL",
    "accent": "#06b6d4",
    "registerUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "promoCode": "xs0077",
    "promoDetail": "优惠码 xs0077；新用户享 7 折",
    "founded": "2024年",
    "entryPriceText": "¥14.0/月起 (年付折算 120GB/月)",
    "minMonthlyPrice": 14,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "自研客户端 + 第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流亚太与欧美节点",
    "highlights": [
      "年付折算约 14 元/月，每月提供 120GB 流量（是 5.6 元档 60GB 的整整两倍）",
      "IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入",
      "新用户可使用优惠码 xs0077 享 7 折"
    ],
    "plans": [
      {
        "name": "年付中量档 (折算)",
        "cycle": "年付",
        "price": "约¥168/年 (¥14/月)",
        "traffic": "120GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "暂无独立逐地区实测表",
    "speeds": [],
    "unlockSupported": [
      "日常网页与主流流媒体（以实测为准）"
    ],
    "unlockPartial": [
      "AI 工具视节点而定"
    ],
    "unlockNote": "适合需要 120GB 中等月流量的年付用户。",
    "summary": "神行加速（2024年运营）定位 14 元/月（120GB/月）中档 IEPL + VLESS 方案，流量是 5.6 元档的两倍，新用户享 7 折优惠。",
    "description": "神行加速填补了 5.6 元（60GB）与 20 元（150GB）之间的空白档位，适合觉得 60GB 不够用、但又想控制在 15 元/月以内的用户。",
    "comparisonNote": "相比闪电鼠/大佬云（60GB），神行加速提供双倍流量（120GB）；若追求老牌实测保障也可看光速云或微风网络。",
    "relatedSlugs": [
      "dalaoyun",
      "shandianshu",
      "weifeng",
      "guangsuyun"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "年付折算约 14 元/月，每月提供 120GB 流量（是 5.6 元档 60GB 的整整两倍）",
      "IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入",
      "新用户可使用优惠码 xs0077 享 7 折"
    ],
    "cons": [
      "神行加速当前以周期订阅为主（起价 ¥14.0/月起 (年付折算 120GB/月)），暂未单独设立永久不过期流量包",
      "当前参数基于 2026-10-19 官方公开资料，尚未补充同批次实验室多线程测速 PNG"
    ],
    "suitableFor": [
      "月均预算在 ¥14.0/月起 (年付折算 120GB/月) 区间、关注「¥14/月 120GB · 新用户 7 折 IEPL」定位与 主流亚太与欧美节点 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付中量档 (折算) (约¥168/年 (¥14/月) / 120GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "选型风控建议：神行加速 套餐资费（¥14.0/月起 (年付折算 120GB/月)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "神行加速评测",
      "secondaryKeywords": [
        "神行加速官网",
        "神行加速优惠码",
        "神行加速套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "神行加速怎么样？",
        "神行加速套餐价格是多少？",
        "神行加速支持Clash导入吗？"
      ],
      "title": "神行加速评测 (2026)：VLESS线路架构与14元起套餐 | ClashTuijian.cc",
      "metaDescription": "神行加速 (2024年) 深度档案：主打IEPL 专线，支持 VLESS 协议，起步价 ¥14.0/月起 (年付折算 120GB/月)。汇总 1 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "神行加速 评测与排雷参考：¥14.0/月起 (年付折算 120GB/月)方案详情及连接限制说明",
      "faqs": [
        {
          "q": "神行加速在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "神行加速的折算入门参考价为 ¥14.0/月起 (年付折算 120GB/月)，目前收录有 1 个档位（从入门 年付中量档 (折算) (约¥168/年 (¥14/月) / 120GB) 到高阶 年付中量档 (折算) (约¥168/年 (¥14/月) / 120GB)）。神行加速目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "神行加速支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "神行加速接入说明为「自研客户端 + 第三方订阅导入」，底层协议涉及 VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "神行加速的线路架构与同价位机场相比值得作为主力吗？",
          "a": "神行加速定位为「IEPL 专线」（数据状态：官方公开参数核验）。相比闪电鼠/大佬云（60GB），神行加速提供双倍流量（120GB）；若追求老牌实测保障也可看光速云或微风网络。"
        }
      ]
    }
  },
  {
    "rank": 26,
    "slug": "huanqiuti",
    "name": "环球梯",
    "badge": "¥5.6/月平价 IEPL · 备用档",
    "accent": "#64748b",
    "registerUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "linkNotice": "注意：该品牌推广链接不含 # 号，访问前请确认页面正常打开",
    "promoCode": "HQ66",
    "promoDetail": "优惠码 HQ66；季付及以上 7 折",
    "founded": "2024年",
    "entryPriceText": "¥5.6/月起 (年付折算)",
    "minMonthlyPrice": 5.6,
    "lineType": "IEPL 专线",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "自研客户端 + 第三方订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流亚太与欧美节点",
    "highlights": [
      "5.6 元/月（60GB/月）IEPL + VLESS 方案",
      "支持自研客户端与第三方订阅导入，季付及以上 7 折"
    ],
    "plans": [
      {
        "name": "年付轻量档 (折算)",
        "cycle": "年付",
        "price": "约¥67/年 (¥5.6/月)",
        "traffic": "60GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "暂无独立逐地区实测表",
    "speeds": [],
    "unlockSupported": [
      "日常基础访问（以实测为准）"
    ],
    "unlockPartial": [
      "视节点而定"
    ],
    "unlockNote": "同属 5.6 元平价档。",
    "summary": "环球梯（2024年运营）是 5.6 元/月（60GB）的 IEPL + VLESS 方案，与云界线同样存在链接格式缺少 # 号的情况，注册前需确认链接可用。",
    "description": "环球梯规格与大佬云、闪电鼠相同，适合低成本备用，若注重链接与售后规范性建议优先选择光速云或大佬云。",
    "comparisonNote": "与云界线类似，链接格式较特殊，同价位优先选大佬云或闪电鼠。",
    "relatedSlugs": [
      "dalaoyun",
      "shandianshu",
      "yunjiexian"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "5.6 元/月（60GB/月）IEPL + VLESS 方案",
      "支持自研客户端与第三方订阅导入，季付及以上 7 折"
    ],
    "cons": [
      "环球梯当前以周期订阅为主（起价 ¥5.6/月起 (年付折算)），暂未单独设立永久不过期流量包",
      "当前参数基于 2026-10-19 官方公开资料，尚未补充同批次实验室多线程测速 PNG"
    ],
    "suitableFor": [
      "月均预算在 ¥5.6/月起 (年付折算) 区间、关注「¥5.6/月平价 IEPL · 备用档」定位与 主流亚太与欧美节点 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "选型风控建议：环球梯 套餐资费（¥5.6/月起 (年付折算)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "环球梯评测",
      "secondaryKeywords": [
        "环球梯官网",
        "环球梯优惠码",
        "环球梯套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "环球梯怎么样？",
        "环球梯套餐价格是多少？",
        "环球梯支持Clash导入吗？"
      ],
      "title": "环球梯评测 (2026)：VLESS线路架构与5.6元起套餐 | ClashTuijian.cc",
      "metaDescription": "环球梯 (2024年) 深度档案：主打IEPL 专线，支持 VLESS 协议，起步价 ¥5.6/月起 (年付折算)。汇总 1 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "环球梯 2026 套餐与线路核验：¥5.6/月起 (年付折算)资费及 VLESS 兼容性",
      "faqs": [
        {
          "q": "环球梯在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "环球梯的折算入门参考价为 ¥5.6/月起 (年付折算)，目前收录有 1 个档位（从入门 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB) 到高阶 年付轻量档 (折算) (约¥67/年 (¥5.6/月) / 60GB)）。环球梯目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "环球梯支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "环球梯接入说明为「自研客户端 + 第三方订阅导入」，底层协议涉及 VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "环球梯的线路架构与同价位机场相比值得作为主力吗？",
          "a": "环球梯定位为「IEPL 专线」（数据状态：官方公开参数核验）。与云界线类似，链接格式较特殊，同价位优先选大佬云或闪电鼠。"
        }
      ]
    }
  },
  {
    "rank": 27,
    "slug": "yinxingren",
    "name": "隐形人",
    "badge": "企业级 IPLC · 专属客户端",
    "accent": "#a855f7",
    "registerUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "promoCode": "moon80",
    "promoDetail": "优惠码 moon80 / yxr888 享 8 折",
    "founded": "2024年",
    "entryPriceText": "¥9.1/月起 (年付¥109)",
    "minMonthlyPrice": 9.1,
    "lineType": "企业级 IPLC 专线直连（品牌资料显示）",
    "protocols": [
      "专属协议"
    ],
    "clientMode": "custom-only",
    "clientText": "仅限自带客户端，不提供第三方 Clash / Shadowrocket 订阅链接",
    "hasUnlimitedPack": true,
    "regions": "香港、日本、美国、新加坡、台湾等 60+ 节点",
    "highlights": [
      "品牌资料显示采用企业级 IPLC 专线直连，涵盖 60+ 节点清单",
      "年付星耀风暴 ¥109/年（80GB/月），并提供 160GB/420GB/1.0TB 一次性流量包",
      "自带全平台一键客户端（注意：不支持导入第三方订阅）"
    ],
    "plans": [
      {
        "name": "星耀风暴 365天不熄",
        "cycle": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "隐形人 白银纪元",
        "cycle": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "period": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "cycle": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "period": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "cycle": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "cycle": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "period": "每月"
      },
      {
        "name": "一次性小流量",
        "cycle": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "period": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "cycle": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "period": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "cycle": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "period": "一次性"
      },
      {
        "name": "王者定制版",
        "cycle": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "2026-10-19 暂无逐地区实测数值",
    "speeds": [],
    "unlockSupported": [
      "ChatGPT",
      "Netflix",
      "Disney+",
      "YouTube",
      "HBO Max",
      "Spotify"
    ],
    "unlockPartial": [
      "Claude (视节点而定)",
      "Gemini (视节点而定)",
      "TikTok (视节点而定)"
    ],
    "unlockNote": "以上解锁声明源自品牌方资料（dataStatus: vendor），暂无本站独立测速图。",
    "summary": "隐形人（2024年运营）品牌资料显示采用企业级 IPLC 专线，年付 109 元（80GB/月），仅支持自带客户端且不提供第三方订阅链接。",
    "description": "隐形人套餐线与暮光加速接近，但需要注意两点：一是目前缺乏独立逐地区测速表，二是仅支持自带客户端，若需要通用订阅建议选择梯子云或光速云。",
    "comparisonNote": "相比规格相近的梯子云，隐形人不支持第三方通用订阅且月付定价偏高（24元 vs 梯子云年付7.4元/月）。",
    "relatedSlugs": [
      "tiziyun",
      "muguang",
      "guangsuyun"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "品牌资料显示采用企业级 IPLC 专线直连，涵盖 60+ 节点清单",
      "年付星耀风暴 ¥109/年（80GB/月），并提供 160GB/420GB/1.0TB 一次性流量包",
      "自带全平台一键客户端（注意：不支持导入第三方订阅）"
    ],
    "cons": [
      "隐形人仅开放官方专属客户端登录，不提供明文 Clash / V2Ray 订阅链接，无法部署在 OpenWrt 软路由或 Apple TV 网关",
      "虽有按量包，但跨运营商晚高峰表现建议先通过最低档（星耀风暴 365天不熄 (¥109 / 80GB)）实测"
    ],
    "suitableFor": [
      "月均预算在 ¥9.1/月起 (年付¥109) 区间、关注「企业级 IPLC · 专属客户端」定位与 香港、日本、美国、新加坡、台湾等 60+ 节 节点覆盖的人群",
      "不想研究 YAML 规则、希望下载 隐形人 官方客户端直接登录账号一键连接的新手用户"
    ],
    "notSuitableFor": [
      "需要在 OpenClash / PassWall2 软路由网关、NAS 或 Linux 服务器上导入通用订阅链接的进阶玩家",
      "未经小额套餐测试本地宽带晚高峰便盲目囤购两三年超长周期的用户"
    ],
    "riskNote": "选型风控建议：隐形人 套餐资费（¥9.1/月起 (年付¥109)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "隐形人评测",
      "secondaryKeywords": [
        "隐形人官网",
        "隐形人优惠码",
        "隐形人套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "隐形人怎么样？",
        "隐形人套餐价格是多少？",
        "隐形人支持Clash导入吗？"
      ],
      "title": "隐形人评测 (2026)：专属协议线路架构与9.1元起套餐 | ClashTuijian.cc",
      "metaDescription": "隐形人 (2024年) 深度档案：主打企业级 IPLC 专线直连（品牌资料显示），支持 专属协议 协议，起步价 ¥9.1/月起 (年付¥109)。汇总 9 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "隐形人 机场选购档案：企业级 IPLC 专线直连参数、客户端模式与对比",
      "faqs": [
        {
          "q": "隐形人在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "隐形人的折算入门参考价为 ¥9.1/月起 (年付¥109)，目前收录有 9 个档位（从入门 星耀风暴 365天不熄 (¥109 / 80GB) 到高阶 王者定制版 (¥680)）。隐形人提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "隐形人支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "不支持第三方通用订阅。隐形人采用「仅限自带客户端，不提供第三方 Clash / Shadowrocket 订阅链接」策略，仅限登录其官方专属客户端一键使用，因此无法导入 Clash Verge Rev 或 OpenWrt 软路由。"
        },
        {
          "q": "隐形人的线路架构与同价位机场相比值得作为主力吗？",
          "a": "隐形人定位为「企业级 IPLC 专线直连（品牌资料显示）」（数据状态：官方公开参数核验）。相比规格相近的梯子云，隐形人不支持第三方通用订阅且月付定价偏高（24元 vs 梯子云年付7.4元/月）。"
        }
      ]
    }
  },
  {
    "rank": 28,
    "slug": "tiziyun",
    "name": "梯子云",
    "badge": "自研客户端 + 通用订阅双支持",
    "accent": "#10b981",
    "registerUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "promoCode": "tiziyun",
    "promoDetail": "专属优惠码 tiziyun",
    "founded": "2025年",
    "entryPriceText": "¥7.4/月起 (年付折算 60GB/月)",
    "minMonthlyPrice": 7.4,
    "lineType": "IEPL 专线（品牌资料称 2Gbps+ 带宽含 500Mbps 高峰冗余）",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "自研全平台一键客户端 + 支持 Clash / Shadowrocket 通用订阅导入",
    "hasUnlimitedPack": false,
    "regions": "香港、日本、新加坡、美国、台湾等 60+ 节点",
    "highlights": [
      "兼具“小白一键登录自研客户端”与“第三方 Clash 通用订阅导入”双模式",
      "品牌资料显示配备 IEPL 专线 + VLESS 协议、60+ 节点与 2Gbps+ 带宽",
      "年付折算约 ¥7.4/月（60GB/月），兼顾易用性与客户端自由度"
    ],
    "plans": [
      {
        "name": "年付入门档 (折算)",
        "cycle": "年付",
        "price": "约¥89/年 (¥7.4/月)",
        "traffic": "60GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "暂无独立逐地区实测表（dataStatus: vendor）",
    "speeds": [],
    "unlockSupported": [
      "Netflix",
      "Disney+",
      "TikTok",
      "ChatGPT",
      "Claude (品牌资料声明)"
    ],
    "unlockPartial": [
      "实际可用性以节点测试为准"
    ],
    "unlockNote": "品牌资料宣称解锁主流流媒体与 AI 工具（dataStatus: vendor）。",
    "summary": "梯子云（2025年运营）主打“自研全平台客户端 + 通用订阅双支持”，采用 IEPL + VLESS，年付折算约 7.4 元/月（60GB/月）。",
    "description": "梯子云既解决了新手不会配 Clash 的痛点，又保留了老手导入通用订阅的自由度，比仅限自带客户端的隐形人更灵活。",
    "comparisonNote": "与第一主推光速云同样支持“自研端 + 通用订阅”，但光速云运营年限更长（2020年 vs 2025年）且拥有真实测速截图归档。",
    "relatedSlugs": [
      "guangsuyun",
      "feimaoyun",
      "yinxingren"
    ],
    "dataStatus": "vendor",
    "isTopTen": false,
    "pros": [
      "兼具“小白一键登录自研客户端”与“第三方 Clash 通用订阅导入”双模式",
      "品牌资料显示配备 IEPL 专线 + VLESS 协议、60+ 节点与 2Gbps+ 带宽",
      "年付折算约 ¥7.4/月（60GB/月），兼顾易用性与客户端自由度"
    ],
    "cons": [
      "梯子云当前以周期订阅为主（起价 ¥7.4/月起 (年付折算 60GB/月)），暂未单独设立永久不过期流量包",
      "当前参数基于 2026-10-19 官方公开资料，尚未补充同批次实验室多线程测速 PNG"
    ],
    "suitableFor": [
      "月均预算在 ¥7.4/月起 (年付折算 60GB/月) 区间、关注「自研客户端 + 通用订阅双支持」定位与 香港、日本、新加坡、美国、台湾等 60+ 节 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "仍在运行已停更旧版 Clash for Windows 原版内核且不愿升级 Mihomo / sing-box 客户端的用户",
      "未先通过 年付入门档 (折算) (约¥89/年 (¥7.4/月) / 60GB) 验证本地运营商晚高峰延迟就盲目年付囤货的用户"
    ],
    "riskNote": "选型风控建议：梯子云 套餐资费（¥7.4/月起 (年付折算 60GB/月)）核验于 2026-10-19；鉴于跨境专线受本地宽带出口影响较大，请遵循“先月付/小包测试，后按需续费”的防踩坑准则。",
    "verifiedDate": "2026-10-19",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "梯子云评测",
      "secondaryKeywords": [
        "梯子云官网",
        "梯子云优惠码",
        "梯子云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "梯子云怎么样？",
        "梯子云套餐价格是多少？",
        "梯子云支持Clash导入吗？"
      ],
      "title": "梯子云评测 (2026)：VLESS线路架构与7.4元起套餐 | ClashTuijian.cc",
      "metaDescription": "梯子云 (2025年) 深度档案：主打IEPL 专线（品牌资料称 2Gbps+ 带宽含 500Mbps 高峰冗余），支持 VLESS 协议，起步价 ¥7.4/月起 (年付折算 60GB/月)。汇总 1 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "梯子云 深度解析：VLESS 节点覆盖、套餐价格表与适用场景",
      "faqs": [
        {
          "q": "梯子云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "梯子云的折算入门参考价为 ¥7.4/月起 (年付折算 60GB/月)，目前收录有 1 个档位（从入门 年付入门档 (折算) (约¥89/年 (¥7.4/月) / 60GB) 到高阶 年付入门档 (折算) (约¥89/年 (¥7.4/月) / 60GB)）。梯子云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "梯子云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "梯子云接入说明为「自研全平台一键客户端 + 支持 Clash / Shadowrocket 通用订阅导入」，底层协议涉及 VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "梯子云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "梯子云定位为「IEPL 专线（品牌资料称 2Gbps+ 带宽含 500Mbps 高峰冗余）」（数据状态：官方公开参数核验）。与第一主推光速云同样支持“自研端 + 通用订阅”，但光速云运营年限更长（2020年 vs 2025年）且拥有真实测速截图归档。"
        }
      ]
    }
  },
  {
    "rank": 29,
    "slug": "wgetcloud",
    "name": "WgetCloud (全球加速)",
    "badge": "历史实测归档 · 季付专线",
    "accent": "#38bdf8",
    "registerUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "promoCode": "待核实",
    "promoDetail": "当前优惠码与直接月付报价待核实",
    "founded": "2021年 (历史记录)",
    "entryPriceText": "¥99.0/月起 (季付¥297)",
    "minMonthlyPrice": 99,
    "lineType": "精品专线服务",
    "protocols": [
      "Trojan"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 Clash / Shadowrocket 等标准订阅",
    "hasUnlimitedPack": false,
    "regions": "香港、台湾、新加坡、日本、美国、韩、马、泰、菲、印尼、印、澳、加、巴、英（15地区历史记录）",
    "highlights": [
      "2026-05-02 历史实测覆盖 59 个节点全部取得非零速度，五地区平均下载均超 50 MB/s（400Mbps+）",
      "香港平均 TLS RTT 25.9ms、台湾 41.3ms，亚洲近端延迟表现优异",
      "提供季付基础/优质/精品三档专线服务（¥297~¥357/季）"
    ],
    "plans": [
      {
        "name": "基础专线服务",
        "cycle": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "period": "每月"
      },
      {
        "name": "优质专线服务",
        "cycle": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "period": "每月"
      },
      {
        "name": "精品专线服务",
        "cycle": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "period": "每月"
      }
    ],
    "speedDataStatus": "historical",
    "speedDateText": "2026-05-02 历史地区统计值（非实时速度）",
    "speeds": [
      {
        "node": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps",
        "date": "2026-05-02"
      },
      {
        "node": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps",
        "date": "2026-05-02"
      },
      {
        "node": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps",
        "date": "2026-05-02"
      },
      {
        "node": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps",
        "date": "2026-05-02"
      },
      {
        "node": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps",
        "date": "2026-05-02"
      }
    ],
    "unlockSupported": [
      "ChatGPT (部分节点·2026-05)",
      "Gemini (部分节点·2026-05)",
      "Netflix / Disney+ / YouTube (部分节点·2026-05)"
    ],
    "unlockPartial": [
      "仅反映 2026-05-02 当次历史测试结果"
    ],
    "unlockNote": "历史测试结果不代表现时实时可用性，下单前请在官网复核。",
    "summary": "WgetCloud 采用 Trojan 协议，2026-05-02 历史实测 59 个节点吞吐强劲（日/美/港/新/台均超 400Mbps），目前记录以季付 ¥297 起为主。",
    "description": "WgetCloud 定位高端季付专线，历史测速数据优秀，但单次季付门槛（¥297）较高，且无直接低价月付记录，下单前需核实最新官网套餐。",
    "comparisonNote": "若预算在百元/年或 25 元/月以内，建议优先选择当期核实的 #1 光速云。",
    "relatedSlugs": [
      "guangsuyun",
      "qingyunti",
      "flyingbird"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "2026-05-02 历史实测覆盖 59 个节点全部取得非零速度，五地区平均下载均超 50 MB/s（400Mbps+）",
      "香港平均 TLS RTT 25.9ms、台湾 41.3ms，亚洲近端延迟表现优异",
      "提供季付基础/优质/精品三档专线服务（¥297~¥357/季）"
    ],
    "cons": [
      "WgetCloud (全球加速)当前归入 2026-08 历史观察档案（排名 #29），官网活动与优惠码 待核实 需下单前二次核实",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，仅记录周期套餐且缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥99.0/月起 (季付¥297) 区间、关注「历史实测归档 · 季付专线」定位与 香港、台湾、新加坡、日本、美国、韩、马、泰、 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Trojan 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：WgetCloud (全球加速)（本站编号 #29）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "WgetCloud (全球加速)评测",
      "secondaryKeywords": [
        "WgetCloud (全球加速)官网",
        "WgetCloud (全球加速)优惠码",
        "WgetCloud (全球加速)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "WgetCloud (全球加速)怎么样？",
        "WgetCloud (全球加速)套餐价格是多少？",
        "WgetCloud (全球加速)支持Clash导入吗？"
      ],
      "title": "WgetCloud (全球加速)评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "WgetCloud (全球加速) (2021年 (历史记录)) 深度档案：主打精品专线服务，支持 Trojan 协议，起步价 ¥99.0/月起 (季付¥297)。汇总 3 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "WgetCloud (全球加速) 客观历史对照：过往节点规格、资费结构与前十主力对比",
      "faqs": [
        {
          "q": "WgetCloud (全球加速)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "WgetCloud (全球加速)的折算入门参考价为 ¥99.0/月起 (季付¥297)，目前收录有 3 个档位（从入门 基础专线服务 (¥297 / 230GB/月) 到高阶 精品专线服务 (¥357)）。WgetCloud (全球加速)目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "WgetCloud (全球加速)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "WgetCloud (全球加速)接入说明为「支持 Clash / Shadowrocket 等标准订阅」，底层协议涉及 Trojan。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "WgetCloud (全球加速)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "WgetCloud (全球加速)定位为「精品专线服务」（数据状态：2026-08 历史归档）。若预算在百元/年或 25 元/月以内，建议优先选择当期核实的 #1 光速云。"
        }
      ]
    }
  },
  {
    "rank": 30,
    "slug": "baiyueguang",
    "name": "白月光",
    "badge": "历史实测归档 · 季付 ¥66 起",
    "accent": "#94a3b8",
    "registerUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "promoCode": "待核实",
    "promoDetail": "当前优惠码待核实",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥22.0/月起 (季付¥66)",
    "minMonthlyPrice": 22,
    "lineType": "多地区节点网络",
    "protocols": [
      "Shadowsocks"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 Shadowsocks 兼容客户端订阅导入",
    "hasUnlimitedPack": false,
    "regions": "2026-07-17 历史测速涉及香港、美、日、台、新及东南亚等 79 个地区名目（108节点）",
    "highlights": [
      "季付小包 ¥66/季（每月 100GB，折合 ¥22/月），一次性支出门槛较低",
      "2026-07-17 历史测速覆盖 108 个节点，香港 10 个节点平均下载 114.94Mbps"
    ],
    "plans": [
      {
        "name": "小包",
        "cycle": "季付",
        "price": "¥66",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "中包",
        "cycle": "季付",
        "price": "¥126",
        "traffic": "250GB",
        "period": "每月"
      },
      {
        "name": "大包",
        "cycle": "季付",
        "price": "¥156",
        "traffic": "400GB",
        "period": "每月"
      },
      {
        "name": "超大包",
        "cycle": "季付",
        "price": "¥216",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "不差钱",
        "cycle": "季付",
        "price": "¥231",
        "traffic": "900GB",
        "period": "每月"
      },
      {
        "name": "旗舰包",
        "cycle": "年付",
        "price": "¥2500",
        "traffic": "2500GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "historical",
    "speedDateText": "2026-07-17 历史地区统计值",
    "speeds": [
      {
        "node": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps",
        "date": "2026-07-17"
      },
      {
        "node": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps",
        "date": "2026-07-17"
      },
      {
        "node": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps",
        "date": "2026-07-17"
      },
      {
        "node": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps",
        "date": "2026-07-17"
      }
    ],
    "unlockSupported": [
      "ChatGPT (部分·2026-07)",
      "Netflix / YouTube / Disney+ / TikTok (部分·2026-07)"
    ],
    "unlockPartial": [
      "Spotify 当次测试失败 (2026-07-17)"
    ],
    "unlockNote": "仅反映 2026-07-17 历史测试，平均 TLS RTT 偏高（香港 160.7ms）。",
    "summary": "白月光采用 Shadowsocks 协议，季付入门 66 元（每月 100GB），节点地区名目多，保留有 2026-07-17 历史测速档案。",
    "description": "白月光适合需要冷门东南亚地区节点的用户，但历史测速中 TLS RTT 延迟偏高，若追求 20ms 级低延迟 IEPL 专线建议选光速云或星岛梦。",
    "comparisonNote": "相比 Top 10 的 IEPL 专线（香港 ~22ms），白月光历史香港延迟为 160.7ms。",
    "relatedSlugs": [
      "guangsuyun",
      "sogoyun",
      "shanshuiyun"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "季付小包 ¥66/季（每月 100GB，折合 ¥22/月），一次性支出门槛较低",
      "2026-07-17 历史测速覆盖 108 个节点，香港 10 个节点平均下载 114.94Mbps"
    ],
    "cons": [
      "处于历史归档梯队（#30），相比前十名附带实测 PNG 的活跃专线，白月光近期公开运维动态较少",
      "产品线未提供一次性永久不过期流量包，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥22.0/月起 (季付¥66) 区间、关注「历史实测归档 · 季付 ¥66 起」定位与 2026-07-17 历史测速涉及香港、美、 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Shadowsocks 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：白月光（本站编号 #30）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "白月光评测",
      "secondaryKeywords": [
        "白月光官网",
        "白月光优惠码",
        "白月光套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "白月光怎么样？",
        "白月光套餐价格是多少？",
        "白月光支持Clash导入吗？"
      ],
      "title": "白月光评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "白月光 (历史归档 (2026-08记录)) 深度档案：主打多地区节点网络，支持 Shadowsocks 协议，起步价 ¥22.0/月起 (季付¥66)。汇总 6 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "白月光 评测归档记录：Shadowsocks 线路历史参数与防踩坑选型建议",
      "faqs": [
        {
          "q": "白月光在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "白月光的折算入门参考价为 ¥22.0/月起 (季付¥66)，目前收录有 6 个档位（从入门 小包 (¥66 / 100GB) 到高阶 旗舰包 (¥2500)）。白月光目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "白月光支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "白月光接入说明为「支持 Shadowsocks 兼容客户端订阅导入」，底层协议涉及 Shadowsocks。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "白月光的线路架构与同价位机场相比值得作为主力吗？",
          "a": "白月光定位为「多地区节点网络」（数据状态：2026-08 历史归档）。相比 Top 10 的 IEPL 专线（香港 ~22ms），白月光历史香港延迟为 160.7ms。"
        }
      ]
    }
  },
  {
    "rank": 31,
    "slug": "flyingbird",
    "name": "FlyingBird (飞鸟机场)",
    "badge": "历史档案 · 全专线 IPLC + SS",
    "accent": "#64748b",
    "registerUrl": "",
    "linkNotice": "当前资料未提供独立有效推广入口，建议参考同规格 IPLC/IEPL 主推品牌",
    "promoCode": "theo / year85",
    "promoDetail": "历史记录：theo (9折) / year85 (年付85折)，当前有效性待核实",
    "founded": "老牌衍生 (2026-08记录)",
    "entryPriceText": "¥12.0/月起 (年付¥144)",
    "minMonthlyPrice": 12,
    "lineType": "全专线 IPLC（无倍率不限速）",
    "protocols": [
      "Shadowsocks"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 Clash / Shadowrocket 等标准订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流专线节点（具体近30日列表待核实）",
    "highlights": [
      "历史资料显示为全专线 IPLC + Shadowsocks 定位，无倍率不限速",
      "青铜/白银/黄金/钻石四档套餐（月付 ¥15/100GB 至 ¥150/1000GB）"
    ],
    "plans": [
      {
        "name": "青铜套餐",
        "cycle": "月付 / 年付",
        "price": "¥15/月 | ¥144/年",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "cycle": "月付 / 年付",
        "price": "¥30/月 | ¥288/年",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "cycle": "月付 / 年付",
        "price": "¥75/月 | ¥720/年",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "cycle": "月付 / 年付",
        "price": "¥150/月 | ¥1440/年",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据（2026-08-09 历史记录）",
    "speeds": [],
    "unlockSupported": [
      "待核实（无独立逐项实测记录）"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "历史资料显示与一云梯/龙猫云属同源站群体系。",
    "summary": "FlyingBird（飞鸟机场）历史定位为 Shadowsocks + 全专线 IPLC，月付 15 元/100GB 起，当前未提供独立有效入口，仅作品牌库档案收录。",
    "description": "飞鸟机场是老牌同源站群代表之一，因当前资料未附有效独立入口与近 30 日实测，建议直接选择同为专线且有最新实测的光速云或唯兔云。",
    "comparisonNote": "与龙猫云套餐结构高度相似，现阶段优先推荐入口有效且实测完备的光速云。",
    "relatedSlugs": [
      "longmaoyun",
      "guangsuyun",
      "weituyun"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "历史资料显示为全专线 IPLC + Shadowsocks 定位，无倍率不限速",
      "青铜/白银/黄金/钻石四档套餐（月付 ¥15/100GB 至 ¥150/1000GB）"
    ],
    "cons": [
      "FlyingBird (飞鸟机场)当前归入 2026-08 历史观察档案（排名 #31），目前缺乏公开核验的独立有效注册入口",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，仅记录周期套餐且缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥12.0/月起 (年付¥144) 区间、关注「历史档案 · 全专线 IPLC + SS」定位与 主流专线节点（具体近30日列表待核实） 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Shadowsocks 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：FlyingBird (飞鸟机场)（本站编号 #31）当前展示为 2026-08-24 归档参数，暂未收录有效公开直达链接；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "FlyingBird (飞鸟机场)评测",
      "secondaryKeywords": [
        "FlyingBird (飞鸟机场)官网",
        "FlyingBird (飞鸟机场)优惠码",
        "FlyingBird (飞鸟机场)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "FlyingBird (飞鸟机场)怎么样？",
        "FlyingBird (飞鸟机场)套餐价格是多少？",
        "FlyingBird (飞鸟机场)支持Clash导入吗？"
      ],
      "title": "FlyingBird (飞鸟机场)评测 (2026)：套餐价格与线路档案 | ClashTuijian.cc",
      "metaDescription": "FlyingBird (飞鸟机场) (老牌衍生 (2026-08记录)) 深度档案：主打全专线 IPLC（无倍率不限速），支持 Shadowsocks 协议，起步价 ¥12.0/月起 (年付¥144)。汇总 4 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "FlyingBird (飞鸟机场) 历史归档档案：全专线 IPLC记录、原资费表与当期平替",
      "faqs": [
        {
          "q": "FlyingBird (飞鸟机场)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "FlyingBird (飞鸟机场)的折算入门参考价为 ¥12.0/月起 (年付¥144)，目前收录有 4 个档位（从入门 青铜套餐 (¥15/月 | ¥144/年 / 100GB) 到高阶 钻石套餐 (¥150/月 | ¥1440/年)）。FlyingBird (飞鸟机场)目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "FlyingBird (飞鸟机场)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "FlyingBird (飞鸟机场)接入说明为「支持 Clash / Shadowrocket 等标准订阅导入」，底层协议涉及 Shadowsocks。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "FlyingBird (飞鸟机场)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "FlyingBird (飞鸟机场)定位为「全专线 IPLC（无倍率不限速）」（数据状态：2026-08 历史归档）。与龙猫云套餐结构高度相似，现阶段优先推荐入口有效且实测完备的光速云。"
        }
      ]
    }
  },
  {
    "rank": 32,
    "slug": "cyberguard",
    "name": "CyberGuard",
    "badge": "历史实测归档 · 半年付 ¥95",
    "accent": "#38bdf8",
    "registerUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "promoCode": "待核实",
    "promoDetail": "当前优惠码待核实",
    "founded": "历史归档 (2025-2026记录)",
    "entryPriceText": "¥15.8/月起 (半年付¥95)",
    "minMonthlyPrice": 15.8,
    "lineType": "多地区混合线路",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 Trojan / VLESS 兼容客户端",
    "hasUnlimitedPack": true,
    "regions": "日、美、澳、韩、德、法、阿联酋、英、印、台、港、新（12地区历史记录）",
    "highlights": [
      "半年付轻量套餐 ¥95（150GB/月，折合 ¥15.83/月），月付标准套餐 ¥32/350GB",
      "提供 ¥79/220GB 与 ¥188/840GB 两档一次性不限时流量包（具体有效期待核实）"
    ],
    "plans": [
      {
        "name": "150G｜轻量套餐",
        "cycle": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "period": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "cycle": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "period": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "cycle": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "period": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "cycle": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "period": "一次性(待核实)"
      },
      {
        "name": "840G流量包｜不限时",
        "cycle": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "period": "一次性(待核实)"
      },
      {
        "name": "2050G｜企业套餐",
        "cycle": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "period": "每月"
      }
    ],
    "speedDataStatus": "historical",
    "speedDateText": "2025-06-21 历史地区统计值",
    "speeds": [
      {
        "node": "日本",
        "latency": "123.8ms",
        "download": "488.83Mbps",
        "date": "2025-06-21"
      },
      {
        "node": "阿联酋",
        "latency": "345ms",
        "download": "342.76Mbps",
        "date": "2025-06-21"
      },
      {
        "node": "澳大利亚",
        "latency": "277ms",
        "download": "279.64Mbps",
        "date": "2025-06-21"
      },
      {
        "node": "美国",
        "latency": "614ms",
        "download": "245.6Mbps",
        "date": "2025-06-21"
      }
    ],
    "unlockSupported": [
      "ChatGPT / Claude / Gemini (2025-06测试)",
      "Netflix / Disney+ / HBO / TikTok (2025-06测试)"
    ],
    "unlockPartial": [
      "仅反映 2025-06-21 历史单次结果"
    ],
    "unlockNote": "测速记录时间较早（2025-06），下单前请务必核实当前运营与线路状态。",
    "summary": "CyberGuard 采用 Trojan/VLESS 协议，提供半年付 95 元（150GB/月）与 79元/220GB 不限时包，保留有 2025-06 历史测速记录。",
    "description": "CyberGuard 的流量单价在历史档案中较低，但因测速记录距今较久且延迟偏高，建议优先选择 2026 年最新实测的 Top 10 品牌。",
    "comparisonNote": "如需最新核实的不限时永久流量包，优先推荐光速云（147元/247GB）或唯兔云（160元/200GB）。",
    "relatedSlugs": [
      "guangsuyun",
      "weituyun",
      "xingdaomeng"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "半年付轻量套餐 ¥95（150GB/月，折合 ¥15.83/月），月付标准套餐 ¥32/350GB",
      "提供 ¥79/220GB 与 ¥188/840GB 两档一次性不限时流量包（具体有效期待核实）"
    ],
    "cons": [
      "处于历史归档梯队（#32），相比前十名附带实测 PNG 的活跃专线，CyberGuard近期公开运维动态较少",
      "不限时流量包当期库存状态待确认，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥15.8/月起 (半年付¥95) 区间、关注「历史实测归档 · 半年付 ¥95」定位与 日、美、澳、韩、德、法、阿联酋、英、印、台、 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Trojan / VLESS 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：CyberGuard（本站编号 #32）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "CyberGuard评测",
      "secondaryKeywords": [
        "CyberGuard官网",
        "CyberGuard优惠码",
        "CyberGuard套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "CyberGuard怎么样？",
        "CyberGuard套餐价格是多少？",
        "CyberGuard支持Clash导入吗？"
      ],
      "title": "CyberGuard评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "CyberGuard (历史归档 (2025-2026记录)) 深度档案：主打多地区混合线路，支持 Trojan / VLESS 协议，起步价 ¥15.8/月起 (半年付¥95)。汇总 6 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "CyberGuard 2026 状态核查：历史 Trojan / VLESS 套餐参数与稳健替代机场对比",
      "faqs": [
        {
          "q": "CyberGuard在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "CyberGuard的折算入门参考价为 ¥15.8/月起 (半年付¥95)，目前收录有 6 个档位（从入门 150G｜轻量套餐 (¥95 / 150GB/月) 到高阶 2050G｜企业套餐 (¥200)）。CyberGuard提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "CyberGuard支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "CyberGuard接入说明为「支持 Trojan / VLESS 兼容客户端」，底层协议涉及 Trojan / VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "CyberGuard的线路架构与同价位机场相比值得作为主力吗？",
          "a": "CyberGuard定位为「多地区混合线路」（数据状态：2026-08 历史归档）。如需最新核实的不限时永久流量包，优先推荐光速云（147元/247GB）或唯兔云（160元/200GB）。"
        }
      ]
    }
  },
  {
    "rank": 33,
    "slug": "longmaoyun",
    "name": "龙猫云",
    "badge": "历史档案 · SS + IPLC 全专线",
    "accent": "#64748b",
    "registerUrl": "",
    "linkNotice": "当前资料未提供独立有效入口，仅作同源站群历史档案参考",
    "promoCode": "无 (周期折扣)",
    "promoDetail": "历史记录：季9/半85/年8/三年6折，当前有效性待核实",
    "founded": "老牌同源 (2026-08记录)",
    "entryPriceText": "¥12.0/月起 (年付¥144)",
    "minMonthlyPrice": 12,
    "lineType": "SS + IPLC 全专线（历史资料称最高 2000Mbps）",
    "protocols": [
      "Shadowsocks"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持标准 Clash / Shadowrocket 订阅导入",
    "hasUnlimitedPack": false,
    "regions": "主流专线节点（待核实）",
    "highlights": [
      "历史资料显示为 SS + IPLC 全专线定位，与飞鸟/一云梯同源",
      "VIP1 至 VIP4 四档套餐（月付 ¥15/100GB 至 ¥120/1000GB）"
    ],
    "plans": [
      {
        "name": "VIP1",
        "cycle": "月付 / 年付",
        "price": "¥15/月 | ¥144/年",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "cycle": "月付 / 年付",
        "price": "¥30/月 | ¥288/年",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "cycle": "月付 / 年付",
        "price": "¥60/月 | ¥576/年",
        "traffic": "400GB",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "cycle": "月付 / 年付",
        "price": "¥120/月 | ¥1152/年",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "未提供独立逐项测试结果。",
    "summary": "龙猫云历史定位为 SS + IPLC 全专线，月付 15 元/100GB 起，属飞鸟同源站群成员，当前未提供独立有效入口。",
    "description": "作为历史品牌库归档条目，龙猫云当前缺少独立入口与近 30 日实测，建议选择同价位且入口有效、实测完备的光速云或唯兔云。",
    "comparisonNote": "同属 15 元/100GB 级 IPLC 定位，唯兔云（14.9元/100GB）与光速云均具备最新有效入口与 2026-08-11 实测图。",
    "relatedSlugs": [
      "flyingbird",
      "weituyun",
      "guangsuyun"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "历史资料显示为 SS + IPLC 全专线定位，与飞鸟/一云梯同源",
      "VIP1 至 VIP4 四档套餐（月付 ¥15/100GB 至 ¥120/1000GB）"
    ],
    "cons": [
      "龙猫云当前归入 2026-08 历史观察档案（排名 #33），目前缺乏公开核验的独立有效注册入口",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，仅记录周期套餐且缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥12.0/月起 (年付¥144) 区间、关注「历史档案 · SS + IPLC 全专线」定位与 主流专线节点（待核实） 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Shadowsocks 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：龙猫云（本站编号 #33）当前展示为 2026-08-24 归档参数，暂未收录有效公开直达链接；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "龙猫云评测",
      "secondaryKeywords": [
        "龙猫云官网",
        "龙猫云优惠码",
        "龙猫云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "龙猫云怎么样？",
        "龙猫云套餐价格是多少？",
        "龙猫云支持Clash导入吗？"
      ],
      "title": "龙猫云评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "龙猫云 (老牌同源 (2026-08记录)) 深度档案：主打SS + IPLC 全专线（历史资料称最高 2000Mbps），支持 Shadowsocks 协议，起步价 ¥12.0/月起 (年付¥144)。汇总 4 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "龙猫云 资料库记录：¥12.0/月起 (年付¥144)历史档位、运营背景与选型风险提示",
      "faqs": [
        {
          "q": "龙猫云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "龙猫云的折算入门参考价为 ¥12.0/月起 (年付¥144)，目前收录有 4 个档位（从入门 VIP1 (¥15/月 | ¥144/年 / 100GB) 到高阶 VIP4 (¥120/月 | ¥1152/年)）。龙猫云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "龙猫云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "龙猫云接入说明为「支持标准 Clash / Shadowrocket 订阅导入」，底层协议涉及 Shadowsocks。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "龙猫云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "龙猫云定位为「SS + IPLC 全专线（历史资料称最高 2000Mbps）」（数据状态：2026-08 历史归档）。同属 15 元/100GB 级 IPLC 定位，唯兔云（14.9元/100GB）与光速云均具备最新有效入口与 2026-08-11 实测图。"
        }
      ]
    }
  },
  {
    "rank": 34,
    "slug": "fatcat",
    "name": "FATCAT (肥猫云)",
    "badge": "历史档案 · 企业级 IEPL/IPLC",
    "accent": "#64748b",
    "registerUrl": "",
    "linkNotice": "当前资料未提供独立有效入口，仅作历史档案参考",
    "promoCode": "无 (周期折扣)",
    "promoDetail": "历史记录：季9/半85/年8折",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥8.0/月起 (年付¥96)",
    "minMonthlyPrice": 8,
    "lineType": "企业级 IEPL / IPLC 内网专线",
    "protocols": [
      "待核实"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持主流客户端订阅（待核实）",
    "hasUnlimitedPack": false,
    "regions": "主流专线地区（待核实）",
    "highlights": [
      "历史定位企业级 IEPL/IPLC 内网专线，包含 ¥96/年（60GB/月）年付加强版",
      "常规月付从 ¥20/120GB 基础套餐至 ¥180/1500GB 企业套餐"
    ],
    "plans": [
      {
        "name": "年付加强版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "cycle": "月付 / 年付",
        "price": "¥20/月 | ¥192/年",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "cycle": "月付 / 年付",
        "price": "¥40/月 | ¥384/年",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "cycle": "月付 / 年付",
        "price": "¥100/月 | ¥960/年",
        "traffic": "700GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "缺乏当期独立实测。",
    "summary": "FATCAT（肥猫云）历史定位为 IEPL/IPLC 内网专线，年付 96 元起，当前无有效独立入口，建议优先选择名称相近且有实测的飞猫云或光速云。",
    "description": "肥猫云（FATCAT）为 2026-08 历史归档记录，因无当前有效入口与实测数据，请注意不要与 Top 2 的「飞猫云」混淆。",
    "comparisonNote": "如需正常运营且有 2026-08-11 实测图的品牌，请选 #1 光速云或 #2 飞猫云。",
    "relatedSlugs": [
      "feimaoyun",
      "guangsuyun",
      "u1s1"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "历史定位企业级 IEPL/IPLC 内网专线，包含 ¥96/年（60GB/月）年付加强版",
      "常规月付从 ¥20/120GB 基础套餐至 ¥180/1500GB 企业套餐"
    ],
    "cons": [
      "处于历史归档梯队（#34），相比前十名附带实测 PNG 的活跃专线，FATCAT (肥猫云)近期公开运维动态较少",
      "产品线未提供一次性永久不过期流量包，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥8.0/月起 (年付¥96) 区间、关注「历史档案 · 企业级 IEPL/IPLC」定位与 主流专线地区（待核实） 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 待核实 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：FATCAT (肥猫云)（本站编号 #34）当前展示为 2026-08-24 归档参数，暂未收录有效公开直达链接；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "FATCAT (肥猫云)评测",
      "secondaryKeywords": [
        "FATCAT (肥猫云)官网",
        "FATCAT (肥猫云)优惠码",
        "FATCAT (肥猫云)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "FATCAT (肥猫云)怎么样？",
        "FATCAT (肥猫云)套餐价格是多少？",
        "FATCAT (肥猫云)支持Clash导入吗？"
      ],
      "title": "FATCAT (肥猫云)评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "FATCAT (肥猫云) (历史归档 (2026-08记录)) 深度档案：主打企业级 IEPL / IPLC 内网专线，支持 待核实 协议，起步价 ¥8.0/月起 (年付¥96)。汇总 4 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "FATCAT (肥猫云) 客观历史对照：过往节点规格、资费结构与前十主力对比",
      "faqs": [
        {
          "q": "FATCAT (肥猫云)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "FATCAT (肥猫云)的折算入门参考价为 ¥8.0/月起 (年付¥96)，目前收录有 4 个档位（从入门 年付加强版 (¥96 / 60GB) 到高阶 旗舰套餐 (¥100/月 | ¥960/年)）。FATCAT (肥猫云)目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "FATCAT (肥猫云)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "FATCAT (肥猫云)接入说明为「支持主流客户端订阅（待核实）」，底层协议涉及 待核实。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "FATCAT (肥猫云)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "FATCAT (肥猫云)定位为「企业级 IEPL / IPLC 内网专线」（数据状态：2026-08 历史归档）。如需正常运营且有 2026-08-11 实测图的品牌，请选 #1 光速云或 #2 飞猫云。"
        }
      ]
    }
  },
  {
    "rank": 35,
    "slug": "tntcloud",
    "name": "TNTCloud (原 3A 加速器)",
    "badge": "历史档案 · 季付 ¥30 轻量包",
    "accent": "#64748b",
    "registerUrl": "",
    "linkNotice": "当前资料未提供独立有效入口，仅作历史档案参考",
    "promoCode": "TNT85",
    "promoDetail": "历史记录：优惠码 TNT85 享 85 折（轻量包不支持）",
    "founded": "老牌分站 (2026-08记录)",
    "entryPriceText": "¥8.2/月起 (年付¥98 / 季付¥30)",
    "minMonthlyPrice": 8.2,
    "lineType": "IPLC 内网专线（曾用名 3A 加速器）",
    "protocols": [
      "待核实"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持主流订阅客户端（待核实）",
    "hasUnlimitedPack": false,
    "regions": "主流专线节点（支持跨境电商/TikTok定制）",
    "highlights": [
      "曾用名 3A 加速器 / AAA Speed，主打 IPLC 内网专线与季付 ¥30（60GB/月）轻量包",
      "VIP1 至 VIP4 覆盖 110GB 至 1100GB 月流量"
    ],
    "plans": [
      {
        "name": "轻量包",
        "cycle": "季付 / 年付",
        "price": "¥30/季 | ¥98/年",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "cycle": "月付 / 年付",
        "price": "¥20/月 | ¥192/年",
        "traffic": "110GB",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "cycle": "月付 / 年付",
        "price": "¥40/月 | ¥336/年",
        "traffic": "220GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "缺乏当期独立实测。",
    "summary": "TNTCloud（曾用名 3A 加速器）历史定位 IPLC 内网专线与季付 30 元轻量包，当前未提供独立有效入口。",
    "description": "TNTCloud 属于历史归档品牌，若需要当前可用的 TikTok 直播与跨境电商专线，建议选择 #1 光速云或 #8 无忧链接。",
    "comparisonNote": "跨境电商与 TikTok 场景现可直接选光速云（IEPL+内网专线）或无忧链接。",
    "relatedSlugs": [
      "guangsuyun",
      "wuyoulianjie",
      "qingyunti"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "曾用名 3A 加速器 / AAA Speed，主打 IPLC 内网专线与季付 ¥30（60GB/月）轻量包",
      "VIP1 至 VIP4 覆盖 110GB 至 1100GB 月流量"
    ],
    "cons": [
      "TNTCloud (原 3A 加速器)当前归入 2026-08 历史观察档案（排名 #35），目前缺乏公开核验的独立有效注册入口",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，仅记录周期套餐且缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥8.2/月起 (年付¥98 / 季付¥30) 区间、关注「历史档案 · 季付 ¥30 轻量包」定位与 主流专线节点（支持跨境电商/TikTok定制 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 待核实 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：TNTCloud (原 3A 加速器)（本站编号 #35）当前展示为 2026-08-24 归档参数，暂未收录有效公开直达链接；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "TNTCloud (原 3A 加速器)评测",
      "secondaryKeywords": [
        "TNTCloud (原 3A 加速器)官网",
        "TNTCloud (原 3A 加速器)优惠码",
        "TNTCloud (原 3A 加速器)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "TNTCloud (原 3A 加速器)怎么样？",
        "TNTCloud (原 3A 加速器)套餐价格是多少？",
        "TNTCloud (原 3A 加速器)支持Clash导入吗？"
      ],
      "title": "TNTCloud (原 3A 加速器)评测 (2026)：套餐价格与线路档案 | ClashTuijian.cc",
      "metaDescription": "TNTCloud (原 3A 加速器) (老牌分站 (2026-08记录)) 深度档案：主打IPLC 内网专线（曾用名 3A 加速器），支持 待核实 协议，起步价 ¥8.2/月起 (年付¥98 / 季付¥30)。汇总 3 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "TNTCloud (原 3A 加速器) 评测归档记录：待核实 线路历史参数与防踩坑选型建议",
      "faqs": [
        {
          "q": "TNTCloud (原 3A 加速器)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "TNTCloud (原 3A 加速器)的折算入门参考价为 ¥8.2/月起 (年付¥98 / 季付¥30)，目前收录有 3 个档位（从入门 轻量包 (¥30/季 | ¥98/年 / 60GB) 到高阶 VIP2 (¥40/月 | ¥336/年)）。TNTCloud (原 3A 加速器)目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "TNTCloud (原 3A 加速器)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "TNTCloud (原 3A 加速器)接入说明为「支持主流订阅客户端（待核实）」，底层协议涉及 待核实。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "TNTCloud (原 3A 加速器)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "TNTCloud (原 3A 加速器)定位为「IPLC 内网专线（曾用名 3A 加速器）」（数据状态：2026-08 历史归档）。跨境电商与 TikTok 场景现可直接选光速云（IEPL+内网专线）或无忧链接。"
        }
      ]
    }
  },
  {
    "rank": 36,
    "slug": "qingyunti",
    "name": "青云梯 (原 V4Speed)",
    "badge": "历史档案 · 6年老牌企业级 IPLC",
    "accent": "#64748b",
    "registerUrl": "",
    "linkNotice": "当前资料未提供独立有效入口，仅作历史档案参考",
    "promoCode": "qyt85 / qyt80",
    "promoDetail": "历史记录：qyt85 (85折) / qyt80 (8折)，年付小包不支持",
    "founded": "2020年前后 (运营6年+)",
    "entryPriceText": "¥8.0/月起 (年付¥96)",
    "minMonthlyPrice": 8,
    "lineType": "SS + 企业级 IPLC（三网优化 + 负载均衡）",
    "protocols": [
      "Shadowsocks"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 Clash / Shadowrocket 等标准订阅导入",
    "hasUnlimitedPack": false,
    "regions": "历史记录 10+ 地区 80+ 节点",
    "highlights": [
      "运营 6 年以上成熟品牌（曾用名 V4Speed），采用 SS + 企业级 IPLC",
      "年付小包 ¥96/年（60GB/月），VIP1 至 VIP4 覆盖 150GB 至 1000GB/月"
    ],
    "plans": [
      {
        "name": "年付小包",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "cycle": "月付 / 年付",
        "price": "¥25/月 | ¥240/年",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "cycle": "月付 / 年付",
        "price": "¥45/月 | ¥432/年",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "cycle": "月付 / 年付",
        "price": "¥85/月 | ¥816/年",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "cycle": "月付 / 年付",
        "price": "¥150/月 | ¥1360/年",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "缺乏当期独立实测。",
    "summary": "青云梯（曾用名 V4Speed）是运营 6 年以上的企业级 IPLC 老牌，年付 96 元起，但当前资料未附独立有效入口。",
    "description": "如果你青睐 2020 年前后成立的 6 年老牌专线机场，目前拥有有效官方入口与最新实测图的 #1 光速云和 #6 星岛梦是最佳直接替代方案。",
    "comparisonNote": "与光速云、星岛梦同属 2020 年代老牌专线，当前优先推荐入口正常且实测完整的光速云。",
    "relatedSlugs": [
      "guangsuyun",
      "xingdaomeng",
      "flyingbird"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "运营 6 年以上成熟品牌（曾用名 V4Speed），采用 SS + 企业级 IPLC",
      "年付小包 ¥96/年（60GB/月），VIP1 至 VIP4 覆盖 150GB 至 1000GB/月"
    ],
    "cons": [
      "处于历史归档梯队（#36），相比前十名附带实测 PNG 的活跃专线，青云梯 (原 V4Speed)近期公开运维动态较少",
      "产品线未提供一次性永久不过期流量包，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥8.0/月起 (年付¥96) 区间、关注「历史档案 · 6年老牌企业级 IPLC」定位与 历史记录 10+ 地区 80+ 节点 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 Shadowsocks 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：青云梯 (原 V4Speed)（本站编号 #36）当前展示为 2026-08-24 归档参数，暂未收录有效公开直达链接；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "青云梯 (原 V4Speed)评测",
      "secondaryKeywords": [
        "青云梯 (原 V4Speed)官网",
        "青云梯 (原 V4Speed)优惠码",
        "青云梯 (原 V4Speed)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "青云梯 (原 V4Speed)怎么样？",
        "青云梯 (原 V4Speed)套餐价格是多少？",
        "青云梯 (原 V4Speed)支持Clash导入吗？"
      ],
      "title": "青云梯 (原 V4Speed)评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "青云梯 (原 V4Speed) (2020年前后 (运营6年+)) 深度档案：主打SS + 企业级 IPLC（三网优化 + 负载均衡），支持 Shadowsocks 协议，起步价 ¥8.0/月起 (年付¥96)。汇总 5 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "青云梯 (原 V4Speed) 历史归档档案：SS + 企业级 IPLC记录、原资费表与当期平替",
      "faqs": [
        {
          "q": "青云梯 (原 V4Speed)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "青云梯 (原 V4Speed)的折算入门参考价为 ¥8.0/月起 (年付¥96)，目前收录有 5 个档位（从入门 年付小包 (¥96 / 60GB) 到高阶 VIP4 (¥150/月 | ¥1360/年)）。青云梯 (原 V4Speed)目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "青云梯 (原 V4Speed)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "青云梯 (原 V4Speed)接入说明为「支持 Clash / Shadowrocket 等标准订阅导入」，底层协议涉及 Shadowsocks。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "青云梯 (原 V4Speed)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "青云梯 (原 V4Speed)定位为「SS + 企业级 IPLC（三网优化 + 负载均衡）」（数据状态：2026-08 历史归档）。与光速云、星岛梦同属 2020 年代老牌专线，当前优先推荐入口正常且实测完整的光速云。"
        }
      ]
    }
  },
  {
    "rank": 37,
    "slug": "shanshuiyun",
    "name": "山水云",
    "badge": "历史实测归档 · 年付 ¥88 起",
    "accent": "#14b8a6",
    "registerUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "promoCode": "待核实",
    "promoDetail": "当前优惠码待核实",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥7.3/月起 (年付¥88)",
    "minMonthlyPrice": 7.3,
    "lineType": "多地区节点线路",
    "protocols": [
      "待核实"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持常规订阅客户端（具体协议待核实）",
    "hasUnlimitedPack": false,
    "regions": "港、日、新、美、台、越、泰、英、印尼、法、德、加（12地区历史记录）",
    "highlights": [
      "64GB 轻量套餐年付 ¥88（折合 ¥7.33/月），月付琴/棋/书三档（¥15/¥25/¥50）梯度清晰",
      "保留有 2026-06-29 覆盖 12 个地区、27 个节点的历史测速记录"
    ],
    "plans": [
      {
        "name": "64G/轻量套餐",
        "cycle": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "period": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "cycle": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "period": "每月"
      },
      {
        "name": "100G/月-琴",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "period": "每月"
      },
      {
        "name": "200G/月-棋",
        "cycle": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "period": "每月"
      },
      {
        "name": "500G/月-书",
        "cycle": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "period": "每月"
      }
    ],
    "speedDataStatus": "historical",
    "speedDateText": "2026-06-29 历史地区统计值",
    "speeds": [
      {
        "node": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps",
        "date": "2026-06-29"
      },
      {
        "node": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps",
        "date": "2026-06-29"
      },
      {
        "node": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps",
        "date": "2026-06-29"
      },
      {
        "node": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps",
        "date": "2026-06-29"
      }
    ],
    "unlockSupported": [
      "ChatGPT / Claude / Gemini (2026-06测试)",
      "Netflix / Disney+ / HBO / TikTok (2026-06测试)"
    ],
    "unlockPartial": [
      "仅反映 2026-06-29 当次历史测试结果"
    ],
    "unlockNote": "历史测试中 AI 与流媒体解锁表现不错，但香港延迟（151ms）高于 IEPL 专线。",
    "summary": "山水云提供年付 88 元（64GB/月）与月付 15 元（100GB/月）亲民套餐，保留有 2026-06-29 历史测速与 AI/流媒体全解锁记录。",
    "description": "山水云的价格梯度清晰且门槛低，但历史测速延迟属于普通中转水平（香港 151ms），若对低延迟有要求建议选 IEPL 专线品牌。",
    "comparisonNote": "同为 15 元月付档，唯兔云（¥14.9/100GB）采用 IPLC 专线，香港延迟（27ms）显著更低。",
    "relatedSlugs": [
      "weituyun",
      "weifeng",
      "guangsuyun"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "64GB 轻量套餐年付 ¥88（折合 ¥7.33/月），月付琴/棋/书三档（¥15/¥25/¥50）梯度清晰",
      "保留有 2026-06-29 覆盖 12 个地区、27 个节点的历史测速记录"
    ],
    "cons": [
      "山水云当前归入 2026-08 历史观察档案（排名 #37），官网活动与优惠码 待核实 需下单前二次核实",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，仅记录周期套餐且缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥7.3/月起 (年付¥88) 区间、关注「历史实测归档 · 年付 ¥88 起」定位与 港、日、新、美、台、越、泰、英、印尼、法、德 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 待核实 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：山水云（本站编号 #37）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "山水云评测",
      "secondaryKeywords": [
        "山水云官网",
        "山水云优惠码",
        "山水云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "山水云怎么样？",
        "山水云套餐价格是多少？",
        "山水云支持Clash导入吗？"
      ],
      "title": "山水云评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "山水云 (历史归档 (2026-08记录)) 深度档案：主打多地区节点线路，支持 待核实 协议，起步价 ¥7.3/月起 (年付¥88)。汇总 5 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "山水云 2026 状态核查：历史 待核实 套餐参数与稳健替代机场对比",
      "faqs": [
        {
          "q": "山水云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "山水云的折算入门参考价为 ¥7.3/月起 (年付¥88)，目前收录有 5 个档位（从入门 64G/轻量套餐 (¥88 / 64GB/月) 到高阶 500G/月-书 (¥50)）。山水云目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "山水云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "山水云接入说明为「支持常规订阅客户端（具体协议待核实）」，底层协议涉及 待核实。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "山水云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "山水云定位为「多地区节点线路」（数据状态：2026-08 历史归档）。同为 15 元月付档，唯兔云（¥14.9/100GB）采用 IPLC 专线，香港延迟（27ms）显著更低。"
        }
      ]
    }
  },
  {
    "rank": 38,
    "slug": "lingdongyun",
    "name": "灵动云",
    "badge": "历史实测归档 · IEPL + VLESS",
    "accent": "#8b5cf6",
    "registerUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "promoCode": "待核实",
    "promoDetail": "当前优惠码待核实",
    "founded": "2025年",
    "entryPriceText": "¥8.2/月起 (年付¥99)",
    "minMonthlyPrice": 8.2,
    "lineType": "IEPL 专线（不限速不限设备）",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持 VLESS / Trojan 订阅客户端",
    "hasUnlimitedPack": true,
    "regions": "香港、台湾、新加坡、日本、美国等地区",
    "highlights": [
      "2025 年开业 IEPL 专线机场，提供 ¥99/年（70GB/月）穿云包及 100G~1.5T 周期档",
      "提供 150GB（¥199）、400GB（¥499）、800GB（¥899）一次性流量包",
      "2026-07-20/21 珠海联通 9Gbps 实测显示 OpenAI 各地区基本全解锁"
    ],
    "plans": [
      {
        "name": "灵动·穿云",
        "cycle": "年付",
        "price": "¥99",
        "traffic": "70GB/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "cycle": "月付 / 年付",
        "price": "¥20/月 | ¥204/年",
        "traffic": "100GB/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "cycle": "月付 / 年付",
        "price": "¥50/月 | ¥510/年",
        "traffic": "300GB/月",
        "period": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "cycle": "一次性付费",
        "price": "¥199",
        "traffic": "150GB",
        "period": "一次性"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "cycle": "一次性付费",
        "price": "¥499",
        "traffic": "400GB",
        "period": "一次性"
      }
    ],
    "speedDataStatus": "historical",
    "speedDateText": "2026-07-20/21 珠海联通 9Gbps 实测摘要",
    "speeds": [
      {
        "node": "多地区综合 (60节点)",
        "latency": "HTTPS延迟偏高",
        "download": "20–80 MB/s (160–640Mbps)",
        "date": "2026-07-21"
      }
    ],
    "unlockSupported": [
      "OpenAI / ChatGPT (各地区基本全解锁·2026-07实测)"
    ],
    "unlockPartial": [
      "TikTok 多节点失败 · 新/台 YouTube 送中 · 台湾 NF/D+ 识别偏欧 (2026-07实测)"
    ],
    "unlockNote": "2026-07 实测优缺点非常鲜明：OpenAI 解锁好，但 TikTok 与部分地区流媒体定位存在瑕疵。",
    "summary": "灵动云（2025年运营）采用 IEPL + VLESS，年付 99 元（70GB/月），2026-07 实测显示 OpenAI 解锁优异，但 TikTok 与部分流媒体地区识别有瑕疵。",
    "description": "灵动云套餐结构与暮光加速高度相似，实测下载速度够用（20~80MB/s）且 OpenAI 解锁表现亮眼，但若需要稳定的 TikTok 运营或精准港台流媒体定位，建议优先选光速云或暮光加速。",
    "comparisonNote": "与同系面板风格的暮光加速相比，暮光加速在 2026-08-11 批次测试与流媒体表现上更均衡。",
    "relatedSlugs": [
      "muguang",
      "guangsuyun",
      "langwang"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "2025 年开业 IEPL 专线机场，提供 ¥99/年（70GB/月）穿云包及 100G~1.5T 周期档",
      "提供 150GB（¥199）、400GB（¥499）、800GB（¥899）一次性流量包",
      "2026-07-20/21 珠海联通 9Gbps 实测显示 OpenAI 各地区基本全解锁"
    ],
    "cons": [
      "处于历史归档梯队（#38），相比前十名附带实测 PNG 的活跃专线，灵动云近期公开运维动态较少",
      "不限时流量包当期库存状态待确认，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥8.2/月起 (年付¥99) 区间、关注「历史实测归档 · IEPL + VLESS」定位与 香港、台湾、新加坡、日本、美国等地区 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 VLESS / Trojan 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：灵动云（本站编号 #38）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "灵动云评测",
      "secondaryKeywords": [
        "灵动云官网",
        "灵动云优惠码",
        "灵动云套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "灵动云怎么样？",
        "灵动云套餐价格是多少？",
        "灵动云支持Clash导入吗？"
      ],
      "title": "灵动云评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "灵动云 (2025年) 深度档案：主打IEPL 专线（不限速不限设备），支持 VLESS / Trojan 协议，起步价 ¥8.2/月起 (年付¥99)。汇总 5 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "灵动云 资料库记录：¥8.2/月起 (年付¥99)历史档位、运营背景与选型风险提示",
      "faqs": [
        {
          "q": "灵动云在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "灵动云的折算入门参考价为 ¥8.2/月起 (年付¥99)，目前收录有 5 个档位（从入门 灵动·穿云 (¥99 / 70GB/月) 到高阶 灵动·惊云（标准流量包） (¥499)）。灵动云提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "灵动云支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "灵动云接入说明为「支持 VLESS / Trojan 订阅客户端」，底层协议涉及 VLESS / Trojan。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "灵动云的线路架构与同价位机场相比值得作为主力吗？",
          "a": "灵动云定位为「IEPL 专线（不限速不限设备）」（数据状态：2026-08 历史归档）。与同系面板风格的暮光加速相比，暮光加速在 2026-08-11 批次测试与流媒体表现上更均衡。"
        }
      ]
    }
  },
  {
    "rank": 39,
    "slug": "langwang",
    "name": "浪网",
    "badge": "历史档案 · IEPL 多层级套餐",
    "accent": "#64748b",
    "registerUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "promoCode": "待核实",
    "promoDetail": "当前优惠码待核实",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥9.9/月起 (年付¥119)",
    "minMonthlyPrice": 9.9,
    "lineType": "IEPL 专线",
    "protocols": [
      "待核实"
    ],
    "clientMode": "unverified",
    "clientText": "客户端与订阅支持方式待核实",
    "hasUnlimitedPack": true,
    "regions": "待核实",
    "highlights": [
      "提供年付标准版 ¥119/年（80GB/月）及入门/进阶/高端/商业多档周期套餐",
      "包含 180GB（¥239）、450GB（¥569）、900GB（¥1099）三档一次性流量包"
    ],
    "plans": [
      {
        "name": "浪网 年付标准",
        "cycle": "年付",
        "price": "¥119",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "cycle": "月付 / 年付",
        "price": "¥30/月 | ¥306/年",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "cycle": "月付 / 年付",
        "price": "¥70/月 | ¥714/年",
        "traffic": "450GB",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "cycle": "月付 / 年付",
        "price": "¥120/月 | ¥1224/年",
        "traffic": "800GB",
        "period": "每月"
      },
      {
        "name": "浪网 小流量包",
        "cycle": "一次性付费",
        "price": "¥239",
        "traffic": "180GB",
        "period": "一次性"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "原资料标注未实测",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "缺乏速度与解锁实测记录。",
    "summary": "浪网标注采用 IEPL 专线，年付 119 元（80GB/月）、月付 30 元（150GB/月）起，但目前缺乏协议、节点与实测数据，仅作归档参考。",
    "description": "浪网属于历史记录中信息缺口较多的品牌，同价位下建议直接选择资料透明、实测完整的光速云（99元/年或25元/月）或暮光加速。",
    "comparisonNote": "相比浪网（30元/150GB 且无实测），光速云极速版（25元/168GB）价格更低、流量更多且有实测保障。",
    "relatedSlugs": [
      "guangsuyun",
      "muguang",
      "lingdongyun"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "提供年付标准版 ¥119/年（80GB/月）及入门/进阶/高端/商业多档周期套餐",
      "包含 180GB（¥239）、450GB（¥569）、900GB（¥1099）三档一次性流量包"
    ],
    "cons": [
      "浪网当前归入 2026-08 历史观察档案（排名 #39），官网活动与优惠码 待核实 需下单前二次核实",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，虽曾记录不限时包但缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥9.9/月起 (年付¥119) 区间、关注「历史档案 · IEPL 多层级套餐」定位与 待核实 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 待核实 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：浪网（本站编号 #39）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "浪网评测",
      "secondaryKeywords": [
        "浪网官网",
        "浪网优惠码",
        "浪网套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "浪网怎么样？",
        "浪网套餐价格是多少？",
        "浪网支持Clash导入吗？"
      ],
      "title": "浪网评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "浪网 (历史归档 (2026-08记录)) 深度档案：主打IEPL 专线，支持 待核实 协议，起步价 ¥9.9/月起 (年付¥119)。汇总 5 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "浪网 客观历史对照：过往节点规格、资费结构与前十主力对比",
      "faqs": [
        {
          "q": "浪网在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "浪网的折算入门参考价为 ¥9.9/月起 (年付¥119)，目前收录有 5 个档位（从入门 浪网 年付标准 (¥119 / 80GB) 到高阶 浪网 小流量包 (¥239)）。浪网提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "浪网支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "浪网接入说明为「客户端与订阅支持方式待核实」，底层协议涉及 待核实。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "浪网的线路架构与同价位机场相比值得作为主力吗？",
          "a": "浪网定位为「IEPL 专线」（数据状态：2026-08 历史归档）。相比浪网（30元/150GB 且无实测），光速云极速版（25元/168GB）价格更低、流量更多且有实测保障。"
        }
      ]
    }
  },
  {
    "rank": 40,
    "slug": "edgenova",
    "name": "EdgeNova (极界)",
    "badge": "历史档案 · IPLC 多线路自动分配",
    "accent": "#0ea5e9",
    "registerUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "promoCode": "TH888",
    "promoDetail": "历史记录：优惠码 TH888 享 8 折",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥9.0/月起 (年付¥108)",
    "minMonthlyPrice": 9,
    "lineType": "高速直连 / IPLC（多线路自动分配）",
    "protocols": [
      "待核实"
    ],
    "clientMode": "clash-sub",
    "clientText": "支持主流客户端订阅（待核实）",
    "hasUnlimitedPack": false,
    "regions": "待核实",
    "highlights": [
      "限时月付 ¥15/72GB、限时年付 ¥108/年（45GB/月）",
      "常规极界标准/进阶/高级/极限四档覆盖 120GB 至 1000GB/月，支持支付宝/微信/USDT"
    ],
    "plans": [
      {
        "name": "限时年付",
        "cycle": "年付",
        "price": "¥108",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "限时月付",
        "cycle": "月付",
        "price": "¥15",
        "traffic": "72GB",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "cycle": "月付 / 年付",
        "price": "¥25/月 | ¥270/年",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "cycle": "月付 / 年付",
        "price": "¥50/月 | ¥570/年",
        "traffic": "250GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "缺乏当期独立实测数据。",
    "summary": "EdgeNova（极界）定位高速直连与 IPLC 多线路自动分配，限时月付 15 元/72GB 起，附历史 8 折码 TH888，当前缺乏实测数据。",
    "description": "EdgeNova 提供 15 元/72GB 的低门槛月付试水档，但因缺乏近 30 日实测与节点详情，建议优先参考 Top 10 实测品牌。",
    "comparisonNote": "同为 15 元月付档，唯兔云（14.9元/100GB）流量更多且有 2026-08-11 实测图。",
    "relatedSlugs": [
      "weituyun",
      "guangsuyun",
      "weifeng"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "限时月付 ¥15/72GB、限时年付 ¥108/年（45GB/月）",
      "常规极界标准/进阶/高级/极限四档覆盖 120GB 至 1000GB/月，支持支付宝/微信/USDT"
    ],
    "cons": [
      "处于历史归档梯队（#40），相比前十名附带实测 PNG 的活跃专线，EdgeNova (极界)近期公开运维动态较少",
      "产品线未提供一次性永久不过期流量包，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥9.0/月起 (年付¥108) 区间、关注「历史档案 · IPLC 多线路自动分配」定位与 待核实 节点覆盖的人群",
      "熟悉 Clash Verge Rev、Shadowrocket 或 FlClash，需要导入 待核实 协议订阅的多设备用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：EdgeNova (极界)（本站编号 #40）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "EdgeNova (极界)评测",
      "secondaryKeywords": [
        "EdgeNova (极界)官网",
        "EdgeNova (极界)优惠码",
        "EdgeNova (极界)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "EdgeNova (极界)怎么样？",
        "EdgeNova (极界)套餐价格是多少？",
        "EdgeNova (极界)支持Clash导入吗？"
      ],
      "title": "EdgeNova (极界)评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "EdgeNova (极界) (历史归档 (2026-08记录)) 深度档案：主打高速直连 / IPLC（多线路自动分配），支持 待核实 协议，起步价 ¥9.0/月起 (年付¥108)。汇总 4 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "EdgeNova (极界) 评测归档记录：待核实 线路历史参数与防踩坑选型建议",
      "faqs": [
        {
          "q": "EdgeNova (极界)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "EdgeNova (极界)的折算入门参考价为 ¥9.0/月起 (年付¥108)，目前收录有 4 个档位（从入门 限时年付 (¥108 / 45GB) 到高阶 极界·进阶 (¥50/月 | ¥570/年)）。EdgeNova (极界)目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "EdgeNova (极界)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "EdgeNova (极界)接入说明为「支持主流客户端订阅（待核实）」，底层协议涉及 待核实。主流 Clash Verge Rev、Shadowrocket、Stash 及 OpenClash 均可正常解析导入。"
        },
        {
          "q": "EdgeNova (极界)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "EdgeNova (极界)定位为「高速直连 / IPLC（多线路自动分配）」（数据状态：2026-08 历史归档）。同为 15 元月付档，唯兔云（14.9元/100GB）流量更多且有 2026-08-11 实测图。"
        }
      ]
    }
  },
  {
    "rank": 41,
    "slug": "yinghuochong",
    "name": "萤火虫 (历史归档入口)",
    "badge": "历史档案 · IPLC + VLESS 同源记录",
    "accent": "#eab308",
    "registerUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "promoCode": "firefly",
    "promoDetail": "历史记录：新用户优惠码 firefly 享 8 折",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥8.0/月起 (年付¥96)",
    "minMonthlyPrice": 8,
    "lineType": "IPLC + VLESS（原生 IP）",
    "protocols": [
      "VLESS"
    ],
    "clientMode": "custom-only",
    "clientText": "与 #10 Firefly 同源，当前以官方专属客户端为准",
    "hasUnlimitedPack": true,
    "regions": "香港、新加坡、日本、美国等原生 IP 节点",
    "highlights": [
      "与第 10 名 Firefly 属同一品牌的早期归档记录（展开了季付/半年付/两年付/三年付完整周期表）",
      "提供 ¥96/年（60GB/月）、Lite/Plus/Blaze/Nova 多周期档及 ¥100/100GB 不限时包"
    ],
    "plans": [
      {
        "name": "Firefly年付版",
        "cycle": "年付",
        "price": "¥96",
        "traffic": "60GB/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "cycle": "月/季/半/年/2年/3年",
        "price": "¥25/月 | ¥67/季 | ¥240/年",
        "traffic": "150GB/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "cycle": "月/季/半/年/2年/3年",
        "price": "¥45/月 | ¥121/季 | ¥432/年",
        "traffic": "300GB/月",
        "period": "每月"
      },
      {
        "name": "Firefly不限时",
        "cycle": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "请直接参考 #10 Firefly 最新 2026-10-19 测速数据",
    "speeds": [],
    "unlockSupported": [
      "ChatGPT",
      "Gemini",
      "Meta AI (历史资料记录)"
    ],
    "unlockPartial": [
      "详见 #10 Firefly 主词条"
    ],
    "unlockNote": "本条目保留了该品牌多周期（季付/半年/两年/三年）的历史价格展开表。",
    "summary": "本条目为 Firefly（萤火虫）的 2026-08 历史多周期价格档案，完整保留了季付、半年付、两年付及三年付价格记录。",
    "description": "如需查看 Firefly 的最新 2026-10 测速与主力介绍，请直接访问第 10 名「Firefly」主评测页；本页主要供核对长期跨年周期历史定价使用。",
    "comparisonNote": "与 #10 Firefly 为同一品牌的不同时期资料归档。",
    "relatedSlugs": [
      "firefly",
      "weifeng",
      "flyingbird"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "与第 10 名 Firefly 属同一品牌的早期归档记录（展开了季付/半年付/两年付/三年付完整周期表）",
      "提供 ¥96/年（60GB/月）、Lite/Plus/Blaze/Nova 多周期档及 ¥100/100GB 不限时包"
    ],
    "cons": [
      "萤火虫 (历史归档入口)当前归入 2026-08 历史观察档案（排名 #41），官网活动与优惠码 firefly 需下单前二次核实",
      "未纳入 2026-10 最新批次的晚高峰连续追踪样本，虽曾记录不限时包但缺少近 30 日流媒体逐项复测"
    ],
    "suitableFor": [
      "月均预算在 ¥8.0/月起 (年付¥96) 区间、关注「历史档案 · IPLC + VLESS 同源记录」定位与 香港、新加坡、日本、美国等原生 IP 节点 节点覆盖的人群",
      "不想研究 YAML 规则、希望下载 萤火虫 (历史归档入口) 官方客户端直接登录账号一键连接的新手用户"
    ],
    "notSuitableFor": [
      "需要在 OpenClash / PassWall2 软路由网关、NAS 或 Linux 服务器上导入通用订阅链接的进阶玩家",
      "未经小额套餐测试本地宽带晚高峰便盲目囤购两三年超长周期的用户"
    ],
    "riskNote": "档案状态声明：萤火虫 (历史归档入口)（本站编号 #41）当前展示为 2026-08-24 归档参数，历史优惠码与套餐余量可能随时间调整；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "萤火虫 (历史归档入口)评测",
      "secondaryKeywords": [
        "萤火虫 (历史归档入口)官网",
        "萤火虫 (历史归档入口)优惠码",
        "萤火虫 (历史归档入口)套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "萤火虫 (历史归档入口)怎么样？",
        "萤火虫 (历史归档入口)套餐价格是多少？",
        "萤火虫 (历史归档入口)支持Clash导入吗？"
      ],
      "title": "萤火虫 (历史归档入口)评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "萤火虫 (历史归档入口) (历史归档 (2026-08记录)) 深度档案：主打IPLC + VLESS（原生 IP），支持 VLESS 协议，起步价 ¥8.0/月起 (年付¥96)。汇总 4 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "萤火虫 (历史归档入口) 历史归档档案：IPLC + VLESS记录、原资费表与当期平替",
      "faqs": [
        {
          "q": "萤火虫 (历史归档入口)在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "萤火虫 (历史归档入口)的折算入门参考价为 ¥8.0/月起 (年付¥96)，目前收录有 4 个档位（从入门 Firefly年付版 (¥96 / 60GB/月) 到高阶 Firefly不限时 (¥100)）。萤火虫 (历史归档入口)提供按量计费的不限时流量包选项，适合流量消耗不规律或作为备用容灾节点。"
        },
        {
          "q": "萤火虫 (历史归档入口)支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "不支持第三方通用订阅。萤火虫 (历史归档入口)采用「与 #10 Firefly 同源，当前以官方专属客户端为准」策略，仅限登录其官方专属客户端一键使用，因此无法导入 Clash Verge Rev 或 OpenWrt 软路由。"
        },
        {
          "q": "萤火虫 (历史归档入口)的线路架构与同价位机场相比值得作为主力吗？",
          "a": "萤火虫 (历史归档入口)定位为「IPLC + VLESS（原生 IP）」（数据状态：2026-08 历史归档）。与 #10 Firefly 为同一品牌的不同时期资料归档。"
        }
      ]
    }
  },
  {
    "rank": 42,
    "slug": "sslar",
    "name": "SSLAR",
    "badge": "历史档案 · 企业级 IEPL + 远程协助",
    "accent": "#64748b",
    "registerUrl": "",
    "linkNotice": "当前资料未提供独立有效入口，仅作历史档案参考",
    "promoCode": "ko3eTt0w",
    "promoDetail": "历史记录：优惠码 ko3eTt0w 享 8 折（当前有效性待核实）",
    "founded": "历史归档 (2026-08记录)",
    "entryPriceText": "¥13.6/月起 (年付¥163)",
    "minMonthlyPrice": 13.6,
    "lineType": "企业级 IEPL + 多线 BGP（Eons/Akari/DO 机房记录）",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientMode": "both",
    "clientText": "自研客户端（Win/Mac/Android）+ 多协议兼容",
    "hasUnlimitedPack": false,
    "regions": "主流专线节点（待核实）",
    "highlights": [
      "历史定位企业级 IEPL + 多线 BGP，支持 SS/VLESS 协议自适应",
      "特色提供远程桌面协助服务，Basic/Standard/Premium 三档月付 ¥17/¥28/¥36"
    ],
    "plans": [
      {
        "name": "Basic",
        "cycle": "月付 / 年付",
        "price": "¥17/月 | ¥163/年",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "Standard",
        "cycle": "月付 / 年付",
        "price": "¥28/月 | ¥268/年",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "Premium",
        "cycle": "月付 / 年付",
        "price": "¥36/月 | ¥345/年",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "speedDataStatus": "unverified",
    "speedDateText": "未提供逐地区实测数据",
    "speeds": [],
    "unlockSupported": [
      "待核实"
    ],
    "unlockPartial": [
      "待核实"
    ],
    "unlockNote": "缺乏当期独立实测数据。",
    "summary": "SSLAR 历史定位企业级 IEPL + 多线 BGP 并支持远程桌面协助，月付 17 元/100GB 起，当前未提供独立有效入口。",
    "description": "SSLAR 曾以提供远程桌面协助服务面向商务新手用户，因当前缺少有效独立入口与近 30 日实测，建议选择配备 7×24 小时在线客服的 #3 微风网络或 #1 光速云。",
    "comparisonNote": "如需实时客服与商务级 IEPL 稳定性，现阶段优先推荐 #1 光速云或 #3 微风网络。",
    "relatedSlugs": [
      "guangsuyun",
      "weifeng",
      "muguang"
    ],
    "dataStatus": "historical",
    "isTopTen": false,
    "pros": [
      "历史定位企业级 IEPL + 多线 BGP，支持 SS/VLESS 协议自适应",
      "特色提供远程桌面协助服务，Basic/Standard/Premium 三档月付 ¥17/¥28/¥36"
    ],
    "cons": [
      "处于历史归档梯队（#42），相比前十名附带实测 PNG 的活跃专线，SSLAR近期公开运维动态较少",
      "产品线未提供一次性永久不过期流量包，不建议未经测试直接购入长周期方案"
    ],
    "suitableFor": [
      "月均预算在 ¥13.6/月起 (年付¥163) 区间、关注「历史档案 · 企业级 IEPL + 远程协助」定位与 主流专线节点（待核实） 节点覆盖的人群",
      "既需要官方一键客户端省心连接，又希望保留 Shadowsocks / VLESS 通用订阅导入桌面或软路由的跨端用户"
    ],
    "notSuitableFor": [
      "追求即买即用、需要 2026 当期实测截图背书与 7×24 小时活跃工单保障的主力办公用户（建议改选 #1 光速云或 #3 微风网络）",
      "未核实当前入口有效性便打算一次性充值年付大额套餐的用户"
    ],
    "riskNote": "档案状态声明：SSLAR（本站编号 #42）当前展示为 2026-08-24 归档参数，暂未收录有效公开直达链接；日常主力使用建议优先比对 #1 光速云（2020老牌双线）等 Tier S/A 实测品牌。",
    "verifiedDate": "2026-08-24",
    "updatedDate": "2026-10-29",
    "seo": {
      "primaryKeyword": "SSLAR评测",
      "secondaryKeywords": [
        "SSLAR官网",
        "SSLAR优惠码",
        "SSLAR套餐价格",
        "Clash机场推荐"
      ],
      "geoQuestions": [
        "SSLAR怎么样？",
        "SSLAR套餐价格是多少？",
        "SSLAR支持Clash导入吗？"
      ],
      "title": "SSLAR评测 (2026)：历史线路档案、原价格表与平替对比 | ClashTuijian.cc",
      "metaDescription": "SSLAR (历史归档 (2026-08记录)) 深度档案：主打企业级 IEPL + 多线 BGP（Eons/Akari/DO 机房记录），支持 Shadowsocks / VLESS 协议，起步价 ¥13.6/月起 (年付¥163)。汇总 3 档套餐价格、客户端接入方式与同价位专线对比。",
      "h1": "SSLAR 2026 状态核查：历史 Shadowsocks / VLESS 套餐参数与稳健替代机场对比",
      "faqs": [
        {
          "q": "SSLAR在 2026 年的套餐起步价格是多少？有永久不限时流量包吗？",
          "a": "SSLAR的折算入门参考价为 ¥13.6/月起 (年付¥163)，目前收录有 3 个档位（从入门 Basic (¥17/月 | ¥163/年 / 100GB) 到高阶 Premium (¥36/月 | ¥345/年)）。SSLAR目前全部为按周期重置流量的订阅套餐，未设立永久不限时流量包；若您需要永久备用包可参考 #1 光速云（¥147/247GB）或 #6 星岛梦。"
        },
        {
          "q": "SSLAR支持导入 Clash Verge Rev、小火箭 (Shadowrocket) 或软路由吗？",
          "a": "SSLAR接入说明为「自研客户端（Win/Mac/Android）+ 多协议兼容」，底层协议涉及 Shadowsocks / VLESS。由于包含新一代传输协议，桌面端请使用搭载 Mihomo 内核的 Clash Verge Rev 或 FlClash，软路由请确保 OpenClash 切换至 Meta 内核。"
        },
        {
          "q": "SSLAR的线路架构与同价位机场相比值得作为主力吗？",
          "a": "SSLAR定位为「企业级 IEPL + 多线 BGP（Eons/Akari/DO 机房记录）」（数据状态：2026-08 历史归档）。如需实时客服与商务级 IEPL 稳定性，现阶段优先推荐 #1 光速云或 #3 微风网络。"
        }
      ]
    }
  }

] as BrandItem[]);

export const brands: BrandItem[] = rawBrands;
export const topTenBrands = brands.filter((b) => b.isTopTen);
export const topFiveBrands = [brands[1], brands[2], brands[0], brands[3], brands[5]]; // 飞猫, 微风, 光速云(C位), 暮光, 星岛梦
export const getBrandBySlug = (slug: string): BrandItem | undefined => brands.find((b) => b.slug === slug);
