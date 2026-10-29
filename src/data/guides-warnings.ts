import { brands, type BrandItem } from './brands';

export interface WarningSignal {
  code: string;
  severity: 'CRITICAL' | 'HIGH' | 'ELEVATED';
  title: string;
  symptom: string;
  underlyingCause: string;
  howToVerify: string;
  defenseAction: string;
}

export interface RedundancyCombo {
  title: string;
  badge: string;
  primaryBrand: { name: string; slug: string; plan: string; role: string };
  backupBrand: { name: string; slug: string; plan: string; role: string };
  annualizedCost: string;
  whyItWorks: string;
}

export const warningSignals: WarningSignal[] = [
  {
    code: 'SIGNAL-01',
    severity: 'CRITICAL',
    title: '违背物理专线成本的「超长周期骨折倾销（买1年送2年 / 39元终身无限流量）」',
    symptom:
      '平时月付 20~30 元的中小机场，突然在非节假日或临近月底密集推送“3 折包三年”、“66 元终身无限流量不限速”等极端低价长周期套餐，且仅限新付或长周期充值。',
    underlyingCause:
      '深港/沪日 IEPL 内网专线与 BGP 入口带宽属于上游运营商按月硬性结算的重资产（每百兆专线月租高达数千至上万元）。当一家机场现金流枯竭无力支付下月机房账单时，最常见的套现手法就是用“三年付骨折价”在最后 7~15 天内迅速收割一波预付款，随后直接关停面板失联。',
    howToVerify:
      '核算其折算月均价是否低于正常专线硬件成本线（IEPL 专线正常可持续月均价在 ¥7~¥25/月区间，且有明确的月度流量配额或按量计费如 ¥100~¥147/100G~247G）。凡宣称“几十元包终身无限流量”的专线机场，100% 违背通信经济学规律。',
    defenseAction:
      '严守铁律：任何运营不满 2 年的新机场只买月付或季付；即使是老牌机场，最长周期也建议控制在年付或定量永久流量包（如光速云 147 元 247GB 永久包），绝不触碰任何“三年付/五年付”锁死资金的促销。',
  },
  {
    code: 'SIGNAL-02',
    severity: 'CRITICAL',
    title: '核心专线静默降级：宣传 IEPL 内网专线，实际偷换为高丢包公网直连',
    symptom:
      '刚买第一个月时香港延迟 22ms、晚高峰 4K 秒开；使用两个月后，节点名称虽然还叫“香港 IEPL 专线 01”，但延迟暴涨至 80ms~160ms，每逢晚上 20:00~23:00 丢包率飙升至 50% 以上，且持续两周不修复。',
    underlyingCause:
      '部分不良服务商在退租昂贵的深港/广港 IEPL 物理内网专线后，保留原有的节点名字，但在后端偷偷将国内 BGP 中转入口撤掉，直接解析到廉价的海外公网直连机房（甚至套用免费 Cloudflare CDN 节点），企图蒙混过关节省上游成本。',
    howToVerify:
      '在电脑终端对订阅节点中的入口域名/IP 进行路由追踪（traceroute / mtr）：真正的 IEPL/IPLC 专线入口一定是国内阿里云/腾讯云/华为云/移动联通多线 BGP 机房 IP（延迟通常在 5ms~30ms 内）；若直接解析到海外 IP，则说明并非中转或专线。',
    defenseAction:
      '立即停止续费该品牌，切换至在本站拥有 2026-08-11 真实测速原图与多年专线口碑的主力品牌（如 #1 光速云、#3 微风网络、#6 星岛梦）。',
  },
  {
    code: 'SIGNAL-03',
    severity: 'HIGH',
    title: '社群全体禁言、公告停更与工单超过 7 天零响应',
    symptom:
      '机场官方 Telegram 交流群突然开启长期全体禁言（Mute），官方频道超过 1 个月无任何节点维护公告，网页后台提交的故障工单连续 7 天以上处于“待处理”无人回复状态。',
    underlyingCause:
      '正规机场即使遇到上游机房光缆割接或入口 DDOS 攻击，也会第一时间在公告栏同步预计恢复时间并补偿时长。一旦出现“装死式失联”但充值接口依然开启，通常意味着运维团队已经解散或正在准备弃盘。',
    howToVerify:
      '续费前先去机场面板看一眼「最新公告日期」，或发一条普通咨询工单测试客服响应速度。像微风网络、光速云等主力品牌均保持活跃的在线客服与工单响应机制。',
    defenseAction:
      '对于工单超过 72 小时无响应的品牌，切勿开启自动续费，在剩余套餐用完前提前配置好第二家备用机场订阅。',
  },
  {
    code: 'SIGNAL-04',
    severity: 'HIGH',
    title: '基础设施失序：SSL 证书过期不续、订阅域名污染不换、节点红一片超 72 小时',
    symptom:
      '打开机场官网浏览器弹出红色「您的连接不是私密连接 (SSL Certificate Expired)」，或者 Clash 客户端连续三天无法更新订阅，且节点列表中 80% 以上的香港/新加坡/日本主力节点全部显示 Timeout 超时。',
    underlyingCause:
      'Let’s Encrypt 等 SSL 证书续期本是自动化运维的基本功，连面板证书过期和订阅域名被墙都无人处理的机场，说明后端服务器已处于无人看管的“僵尸状态”，随时可能因为机房账单到期直接被拔线清空数据。',
    howToVerify:
      '在 Clash Verge Rev 中点击更新订阅，观察是否能正常返回最新的剩余流量与到期时间响应头（Subscription-Userinfo）。',
    defenseAction:
      '立即导出并备份自己常用的分流规则，趁还能登录或直接通过本站 `/brands` 品牌库切换至同价位当期核验正常的替代机场。',
  },
  {
    code: 'SIGNAL-05',
    severity: 'ELEVATED',
    title: '合租拼车与二手转卖账号陷阱：异常并发触发秒封无售后',
    symptom:
      '在闲鱼、贴吧或电报群向个人卖家低价购买所谓“大机场年付合租号/内部转手号”，使用不到三天订阅链接即失效，登录后台提示 Account Banned（账号被封禁）。',
    underlyingCause:
      '一手卖家往往将同一条订阅链接同时倒卖给 20~50 个人，导致同一秒内出现来自全国十几个省份宽带的并发连接，瞬间触发机场后端的审计风控策略直接永久封号；更有甚者原号主在收款后直接点击后台“重置订阅链接 (Reset UUID)”将买踢下线。',
    howToVerify:
      '永远只通过机场官方注册通道用自己的邮箱独立注册账号，切勿购买任何他人转手的二手号或合租订阅。',
    defenseAction:
      '其实现在正规专线机场门槛极低（如飞猫云年付 ¥84 折合 ¥7/月、光速云轻量版折后 ¥99/年折合 ¥8.2/月、大佬云仅 ¥5.6/月），独立拥有一手官方账号既安全又比买黑号划算。',
  },
  {
    code: 'SIGNAL-06',
    severity: 'ELEVATED',
    title: '历史归档品牌入口变更或停止公开注册（需区分“换域名防墙”与“停运”）',
    symptom:
      '部分早年知名或历史评测中的机场，旧网址突然无法打开，或者关闭了新用户公开注册通道（仅限老用户登录）。',
    underlyingCause:
      '机场行业经常面临域名被 DNS 污染的情况。成熟品牌会及时发布最新防失联地址，而部分历史归档品牌（如本站品牌库第 29~42 名的历史记录）可能已收缩业务、更换域名或暂未提供当期公开有效入口。',
    howToVerify:
      '查阅本站下方的「42 家品牌风险分层与档案状态总表」，优先选择标注为 `2026-10 活跃核验 + 含 2026-08-11 实测原图` 的 Tier S 与 Tier A 梯队品牌。',
    defenseAction:
      '将本站 `https://clashtuijian.cc/guides/warnings` 与 `/brands` 加入浏览器书签，随时获取最新核验有效的官方注册通道。',
  },
];

export interface RiskTierGroup {
  tier: 'S' | 'A' | 'B' | 'C';
  badge: string;
  title: string;
  riskLevel: string;
  billingAdvice: string;
  description: string;
  items: BrandItem[];
}

export const riskTierGroups: RiskTierGroup[] = [
  {
    tier: 'S',
    badge: 'TIER S · 2020老牌稳健专线池',
    title: '运营 ≥ 5 年老牌 IEPL 双专线旗舰（最低风险 · 主力年付/永久包首选）',
    riskLevel: '极低风险 (Verified Since 2020)',
    billingAdvice: '支持放心选购年付折扣套餐或一次性永久不限时流量包',
    description:
      '历经 2020–2026 多年行业周期考验，拥有成熟的 IEPL/IPLC 物理专线架构、充足的单节点带宽冗余（高达 2.5Gbps）以及本站归档的 2026-08-11 真实测速原图，是全天候办公、AI 生产力与家庭软路由的定海神针。',
    items: brands.filter((b) => b.slug === 'guangsuyun' || b.slug === 'xingdaomeng'),
  },
  {
    tier: 'A',
    badge: 'TIER A · 2026实测活跃主力池',
    title: '当期活跃核验 + 附 2026-08-11 实测图或高口碑专线池（中低风险 · 主力优选）',
    riskLevel: '低风险 (2026 Active & Measured)',
    billingAdvice: '建议先月付或季付体验，满意后使用优惠码转年付或购买不限时流量包',
    description:
      '均具备 2026 年当期核验有效的官方入口、透明的套餐价格体系，绝大多数附带 2026-08-11 真实节点拓扑测速 PNG 截图，涵盖新手免配客户端（飞猫云/无忧链接）、平价 IEPL（微风网络）与多设备 BGP 专线（暮光加速/二猫云/唯途云等）。',
    items: brands.filter(
      (b) =>
        b.rank <= 21 &&
        b.slug !== 'guangsuyun' &&
        b.slug !== 'xingdaomeng' &&
        b.slug !== 'dalaoyun' &&
        b.slug !== 'shanyue' &&
        Boolean(b.registerUrl)
    ),
  },
  {
    tier: 'B',
    badge: 'TIER B · 极限平价与月付观察池',
    title: '¥5.6~¥15 平价入门与新兴专线池（中等风险 · 建议月付/小额备用，勿盲目锁多年）',
    riskLevel: '中等观察 (Budget & Entry Tier)',
    billingAdvice: '适合小额月付尝鲜或年付 ¥67~¥78 极低成本做第二备用，不建议一次性充值大额长周期',
    description:
      '主打极致性价比（如大佬云、闪电鼠、云界线年付仅 67~69 元折合 ¥5.6/月）或特定细分场景。虽然当期入口均有效，但受限于极低的客单价，晚高峰抗拥塞冗余度不如 Tier S 旗舰，非常适合学生党或作为主力机场之外的第二条低成本备用链路。',
    items: brands.filter(
      (b) =>
        (b.slug === 'dalaoyun' || b.slug === 'shanyue' || (b.rank >= 22 && b.rank <= 28)) &&
        Boolean(b.registerUrl)
    ),
  },
  {
    tier: 'C',
    badge: 'TIER C · 历史归档与待核实预警池',
    title: '2026-08 历史评测归档或暂缺独立公开入口池（审慎观察 · 优先选前十替代）',
    riskLevel: '审慎核实 (Historical Archive / Unverified Entry)',
    billingAdvice: '仅作历史价格与技术参数参考，新用户请优先选择上方 Tier S / Tier A 主力品牌',
    description:
      '包含两类情况：一是如灵猫（#13）、极连云（#14）虽有 2026-08-11 测速截图但源资料暂缺独立公开注册链接；二是排名 #29（WgetCloud）至 #42（SSLAR）的历史评测归档品牌。遵循零编造原则，我们完整保留其历史档案供老用户对比查询，同时提醒新用户直接选择当期核验活跃的前十名品牌。',
    items: brands.filter((b) => !b.registerUrl || b.rank >= 29),
  },
];

export const redundancyCombos: RedundancyCombo[] = [
  {
    title: '方案 A · 全能商务与 AI 生产力「双老牌」零断联组合',
    badge: '最稳健 · 两个 2020 老牌 IEPL 互为热备',
    primaryBrand: {
      name: '#1 光速云',
      slug: 'guangsuyun',
      plan: '轻量版 ¥99/年 (69G/月) 或 极速版 ¥25/月 (168G/月)',
      role: '日常全天候主力：承担 95% 的办公、ChatGPT/Claude 与 4K 流媒体流量',
    },
    backupBrand: {
      name: '#6 星岛梦 或 #7 二猫云',
      slug: 'xingdaomeng',
      plan: '永久不限时流量包 ¥100 / 100GB (一次付费永不过期)',
      role: '异地专线热备：平时零月租躺平，一旦主力机房光缆维护，1秒无缝接管',
    },
    annualizedCost: '年均总成本约 ¥130~¥150 (折合每天仅 ¥0.38)',
    whyItWorks:
      '即使最顶级的专线机房，每年也可能遇到 1~2 次上游运营商海底光缆割接或入口维护。如果手里只有一家机场，一旦断网连查找新机场或打开 GitHub 都寸步难行；配置一个“永不过期”的不限时流量包作为第二订阅，平时不花一分钱月租，关键时刻就是不断网的救命稻草。',
  },
  {
    title: '方案 B · 新手零门槛「免配客户端 + 斯诺克 147 永久包」组合',
    badge: '最省心 · 专属 App 与 Clash 通用订阅双栖',
    primaryBrand: {
      name: '#2 飞猫云',
      slug: 'feimaoyun',
      plan: '学生版 ¥84/年 (50G/月) 或 畅享版 ¥15/月 (100G/月)',
      role: '新手日常主力：官方专属客户端登录账号即连，完全不用折腾订阅配置',
    },
    backupBrand: {
      name: '#1 光速云',
      slug: 'guangsuyun',
      plan: '致敬斯诺克 147 永久套餐 (¥147 / 247GB 永久不过期)',
      role: '通用订阅旗舰备份：保存在 Clash Verge Rev / 小火箭中，兼顾软路由与长期冗余',
    },
    annualizedCost: '首年投入 ¥84 + ¥147 (247GB 可用数年)，次年起仅需 ¥84/年',
    whyItWorks:
      '兼顾了“官方一键客户端的极简体验”与“标准 Clash 通用订阅的高自由度”，无论哪个客户端更新或维护，都有另一套完全不同技术栈的通道随时可用。',
  },
  {
    title: '方案 C · 学生党与极限预算「平价双专线」组合',
    badge: '极致低成本 · 月均仅十余元',
    primaryBrand: {
      name: '#3 微风网络',
      slug: 'weifeng',
      plan: '清风版 ¥137/年 (100G/月，约 ¥11.4/月) · IEPL 专线 + VLESS',
      role: '高性价比 IEPL 专线主力：7×24h 在线客服，满足日常高清视频与 AI 检索',
    },
    backupBrand: {
      name: '#5 大佬云 或 #22 闪电鼠',
      slug: 'dalaoyun',
      plan: '特惠轻量档 ¥67.2/年 (60G/月，折合仅 ¥5.6/月)',
      role: '白菜价冗余订阅：每天不到 2 毛钱，彻底消除单点故障风险',
    },
    annualizedCost: '两家合计年付约 ¥204 (折合每月 ¥17 拥有两套独立机场订阅)',
    whyItWorks:
      '用原本一家普通机场月付的价格，同时拥有了「IEPL 内网专线主力」+「独立平价备用机场」，在预算极其紧凑的前提下实现了双机房冗余。',
  },
];

export const warningFaqs = [
  {
    q: '怎么判断一家机场是真的在维护升级，还是已经准备跑路了？',
    a: '核心看三点：1）信息透明度：正常机房维护会在网站首页弹窗或 Telegram 频道提前发布公告，明确说明“哪条线路受上游割接影响、预计几号恢复”，且其他非故障地区的节点（如日本、美国）仍可正常连接；而跑路往往是全节点瞬间归零、官网与订阅地址同时无法解析且无任何公告；2）工单响应：维护期间工单虽慢但会有统一回复，跑路则是连续 7 天以上彻底失联；3）促销异常：若故障前夕刚搞完“充一年送两年、3折终身包”圈钱活动，则跑路概率极高。',
  },
  {
    q: '如果我之前买的某家小机场突然跑路连不上了，第一时间应该怎么自救止损？',
    a: '请按以下 5 步快速处理：1）立即关闭代理客户端中的「系统代理」与「TUN 模式」，恢复电脑/手机的国内正常直连网络（防止因死节点阻塞导致国内网站也打不开）；2）如果当时是通过 PayPal 或信用卡订阅制付款，立即登录支付平台取消自动扣款授权（Cancel Automatic Payments）；3）在客户端中删除已失效的旧订阅配置；4）打开已收藏的 ClashTuijian.cc，从 Tier S（光速云/星岛梦）或 Tier A（飞猫云/微风网络）中选择一家老牌机场先开月付或永久包恢复工作网络；5）如果使用的是相同邮箱和密码注册的野鸡小机场，建议顺手修改其他网站的重要通用密码。',
  },
  {
    q: '为什么你们把第 29~42 名的品牌（如 WgetCloud、青云梯、飞鸟云等）归入 Tier C 观察池？它们跑路了吗？',
    a: '并非代表它们跑路！将其归入 Tier C 是因为在本站最后一次全量核验（2026-10）时，这些品牌采用的是 2026-08 批次的历史评测归档数据（标注为 Historical Archive），或者当期未提供经过实验室实测核验的统一最新活动入口。为了对读者资金负责，我们严格区分「当期实测活跃（Tier S / Tier A）」与「历史归档参考（Tier C）」，绝不把未经当期复核的旧数据包装成最新推荐。',
  },
  {
    q: '买「一次性永久不限时流量包」会不会比买年付更容易遇到跑路风险？',
    a: '这完全取决于您选择的是哪一家品牌！如果在刚成立三个月的无名小机场买“永久包”，风险确实很高；但如果您在 **2020 年起稳定运营至今的老牌专线机场（如 #1 光速云的 ¥147/247GB 永久套餐、#6 星岛梦的 ¥100/100GB 永久包）** 购买，由于其主力营收来自庞大的政企与高阶月付/年付用户群，不限时流量包是其正规产品线的一部分，长期稳定性甚至远超普通小机场的月付套餐。',
  },
  {
    q: '如何在 Clash Verge Rev 中把“主力机场”和“备用机场”合并成一个自动故障转移（Fallback）配置？',
    a: '有两种简单方法：方法一（最稳妥）：将主力机场（如光速云）和备用机场（如星岛梦不限时包）同时导入 Clash Verge Rev 的「订阅 (Profiles)」列表，平时激活主力订阅，一旦遇到极端断网，只需鼠标点击一下备用订阅卡片，0.5 秒即可完成整机切换；方法二（高阶自动化）：使用本地开源的 Sub-Store 订阅管理插件，将两家机场的订阅合并为一个组合订阅，并创建一个 `fallback` 类型的策略组，当主力节点健康检查超时后，内核会自动无感切入备用机场节点。',
  },
];
