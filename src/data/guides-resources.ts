export interface FreeOptionRow {
  method: string;
  cost: string;
  speedPeak: string;
  securityLevel: string;
  aiStreamingUnlock: string;
  bestFor: string;
  recommendation: string;
}

export interface RuleRepoItem {
  name: string;
  maintainer: string;
  coreSupport: string;
  repoUrl: string;
  cdnExample: string;
  keyFragments: string[];
  description: string;
  useCase: string;
}

export interface DiagnosticToolItem {
  category: string;
  name: string;
  url: string;
  metrics: string;
  howToRead: string;
}

export interface ResourceFaqItem {
  q: string;
  a: string;
}

export const freeComparisonMatrix: FreeOptionRow[] = [
  {
    method: '公开抓取型免费节点池 (TG频道 / GitHub 爬虫池)',
    cost: '¥0 (表面免费)',
    speedPeak: '极差 (晚高峰丢包率 75%~95%，频繁断流)',
    securityLevel: '高危 (存在中间人嗅探、DNS投毒与流量劫持风险)',
    aiStreamingUnlock: '基本不可用 (万人共用IP，触发 Google/ChatGPT 验证码与封号)',
    bestFor: '仅限临时几分钟下载开源客户端安装包，严禁登录任何账号',
    recommendation: '不建议日常使用',
  },
  {
    method: 'Cloudflare WARP / 1.1.1.1 (优选 IP 模式)',
    cost: '¥0 (官方免费)',
    speedPeak: '中等 (取决于本地运营商与优选 Endpoint IP 连通性)',
    securityLevel: '高 (Cloudflare 跨国骨干网官方加密隧道)',
    aiStreamingUnlock: '支持解锁部分 OpenAI/Claude (提供洁净 Cloudflare Anycast IP)',
    bestFor: '技术爱好者应急备用，或作为 Clash 链式代理落地层洗白 IP',
    recommendation: '优秀免费技术方案',
  },
  {
    method: '自建海外 VPS 节点 (VLESS-Reality / Hysteria 2)',
    cost: '$10~$40 / 年 (约 ¥70~¥280/年)',
    speedPeak: '视线路而定 (普通美西线路晚高峰易拥塞，CN2 GIA 成本高昂)',
    securityLevel: '极高 (独享服务器与私有密钥，无第三方经手)',
    aiStreamingUnlock: '单一地区 IP (仅有购买机房所在地 IP，无法切换全球多国节点)',
    bestFor: '熟悉 Linux 命令行、需要固定独享 IP 运维开发的工程师',
    recommendation: '适合进阶技术玩家',
  },
  {
    method: '一次性永久不限时流量包 (如光速云 147 永久包 / 星岛梦)',
    cost: '¥99~¥147 / 一次性买断 (流量永不过期)',
    speedPeak: '极佳 (IEPL 物理内网专线，晚高峰 22ms~46ms 满速稳定)',
    securityLevel: '高 (企业级内网专线 + VLESS/Trojan 加密传输)',
    aiStreamingUnlock: '全解锁 (香港/新加坡/日本/台湾/美国多地区原生与专线节点)',
    bestFor: '轻中度日常使用、不想按月续费或需要高可靠主力/备用的用户',
    recommendation: '★ 长期折算性价比之王',
  },
  {
    method: '极限平价年付机场 (如大佬云 / 闪电鼠 / 云界线)',
    cost: '¥5.6~¥6.5 / 月 (年付约 ¥67~¥78)',
    speedPeak: '良好 (提供 60GB~100GB/月，日常网页、1080P/4K 视频流畅)',
    securityLevel: '中高 (标准 Trojan / Shadowsocks / VLESS 协议)',
    aiStreamingUnlock: '支持主流流媒体与 AI 访问',
    bestFor: '预算极其有限的学生党、轻度查阅资料或作为第二家备用订阅',
    recommendation: '★ 平价替代免费节点首选',
  },
  {
    method: '年度主力双专线机场 (光速云 / 飞猫云 / 微风网络)',
    cost: '¥7.0~¥11.4 / 月起 (年付折算)',
    speedPeak: '旗舰级 (单节点峰值高达 500Mbps~2.5Gbps，晚高峰零感秒开)',
    securityLevel: '高 (2020/2023 老牌运营，IEPL + 企业级内网双线冗余)',
    aiStreamingUnlock: '满血解锁 ChatGPT / Claude / Gemini / Netflix / Disney+ / TikTok',
    bestFor: '全天候办公生产力、AI 重度用户、4K 影音与多设备/软路由家庭网关',
    recommendation: '★★ 主力一步到位首选',
  },
];

export const ruleRepositories: RuleRepoItem[] = [
  {
    name: 'MetaCubeX / meta-rules-dat (Mihomo 官方规则与 Geo 数据库)',
    maintainer: 'MetaCubeX (Mihomo 核心团队)',
    coreSupport: 'Clash Verge Rev / FlClash / Mihomo Party / OpenClash / Nikki',
    repoUrl: 'https://github.com/MetaCubeX/meta-rules-dat',
    cdnExample: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/',
    keyFragments: [
      'geoip.dat / geoip.metadb (全球 IP 归属地高精数据库)',
      'geosite.dat (域名分类库：openai, anthropic, netflix, disney, google, cn, geolocation-!cn)',
      'country.mmdb / ASN.mmdb (自治系统号与运营商识别库)',
    ],
    description:
      'Mihomo (原 Clash.Meta) 官方维护的规则数据仓库。许多用户在 Clash Verge Rev 或 OpenClash 中遇到“GeoIP/GeoSite 更新失败”导致无法启动，只需将 Geo 下载源切换至该仓库的 jsDelivr 或 GitHub Mirror 地址即可秒级修复。',
    useCase: '所有 Mihomo 内核客户端必配底层数据库，支持直接用 GEOSITE,openai,Proxy 语法精准分流 AI 流量。',
  },
  {
    name: 'Loyalsoldier / clash-rules (经典高精域名与 IP 分流集)',
    maintainer: 'Loyalsoldier',
    coreSupport: 'Clash 全系客户端 / Stash / Surge / OpenClash',
    repoUrl: 'https://github.com/Loyalsoldier/clash-rules',
    cdnExample: 'https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/',
    keyFragments: [
      'direct.txt (中国大陆直连域名白名单，防国内网站误走代理变慢)',
      'proxy.txt (需要走代理的海外常见域名集合)',
      'reject.txt (常见广告与追踪域名拦截列表)',
      'cncidr.txt / telegramcidr.txt (中国大陆 IP 段与 Telegram 专用 IP 段)',
      'icloud.txt / apple.txt (苹果服务精细分流，保障 App Store 与 iCloud 满速)',
    ],
    description:
      '每日自动构建更新的高准确度 Rule Providers 集合。最大的优势是颗粒度清晰、误杀率极低，非常适合在 Clash Verge Rev 的“全局扩展覆写配置（Merge）”中按需引用，彻底解决国内银行/政务网站打不开的问题。',
    useCase: '适合希望保持配置轻量、同时确保国内直连百分百准确的桌面与软路由用户。',
  },
  {
    name: 'ACL4SSR / ACL4SSR (全功能策略组与流媒体分流模板)',
    maintainer: 'ACL4SSR 开源社区',
    coreSupport: 'Subconverter 订阅转换后端 / Clash 全系 / Shadowrocket',
    repoUrl: 'https://github.com/ACL4SSR/ACL4SSR',
    cdnExample: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini',
    keyFragments: [
      'ACL4SSR_Online_Full.ini (全分组版：含自动测速、故障转移、Netflix/Disney+/YouTube/OpenAI 独立分组)',
      'ACL4SSR_Online_Mini.ini (精简版：适合软路由或低内存设备，保留核心分流与去广告)',
      'ACL4SSR_Online_NoAuto.ini (无自动测速版：避免客户端后台频繁发送测速请求消耗流量)',
      'BanAD.list / BanProgramAD.list (去广告与弹窗屏蔽规则碎片)',
    ],
    description:
      '中文代理生态中使用最广泛的远程配置模板库。各大机场后端与 Sub-Store / Subconverter 默认集成的分流策略大多源自 ACL4SSR，能够将香港、日本、新加坡、美国节点自动拆分为独立地区策略组。',
    useCase: '适合需要将单一订阅拆分为“AI 专用组”、“奈飞组”、“电报组”、“苹果服务组”的多场景用户。',
  },
  {
    name: 'blackmatrix7 / ios_rule_script (全平台最全分流规则百科库)',
    maintainer: 'blackmatrix7',
    coreSupport: 'Clash / Shadowrocket / Quantumult X / Surge / Loon / sing-box',
    repoUrl: 'https://github.com/blackmatrix7/ios_rule_script',
    cdnExample: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/',
    keyFragments: [
      'OpenAI / Claude / Gemini / Copilot (AI 生产力工具全域名与 API 规则)',
      'TikTok / Netflix / Disney / Bahamut / BiliBiliIntl (跨区流媒体独立规则)',
      'Steam / Epic / PlayStation / Nintendo / Xbox (游戏平台下载直连与联机加速分离)',
      'PayPal / Wise / Binance / Stripe (跨境支付与金融风控敏感域名规则)',
    ],
    description:
      '细分程度最高的规则宝库，涵盖超过 600 个独立服务与平台的规则列表，并同时编译输出 Clash、Quantumult X、Surge、Loon、sing-box 五种格式，方便用户为特定应用单独指定落地节点。',
    useCase: '当你需要“让 ChatGPT 固定走美国节点、Netflix 固定走新加坡节点、Steam 下载走国内直连”时的终极武器库。',
  },
];

export const diagnosticTools: DiagnosticToolItem[] = [
  {
    category: '01 · IP 纯净度与风控欺诈值检测',
    name: 'Scamalytics IP Fraud Risk Lookup',
    url: 'https://scamalytics.com/ip',
    metrics: 'Fraud Score (0~100 欺诈风险评分) · ISP 属性 · 代理/VPN 标记',
    howToRead:
      '打开网页即可看到当前代理落地 IP 的 Fraud Score。0~25 分（绿色 Low Risk）代表 IP 极度纯净，访问 ChatGPT、Claude、跨区 PayPal 几乎不会触发风控验证码；若高于 75 分（High Risk）则说明该节点共享人数过多或曾被滥用，建议在客户端切换其他节点。',
  },
  {
    category: '01 · IP 纯净度与风控欺诈值检测',
    name: 'Ping0.cc 综合 IP 画像与原生检测',
    url: 'https://ping0.cc/',
    metrics: 'IP 类型（家庭宽带 ISP vs 机房 Hosting） · 原生 IP / 广播 IP 鉴别 · 共享人数估算',
    howToRead:
      '重点查看「IP 类型」与「原生/广播」两栏：若显示“原生 IP”意味着该 IP 的注册局归属国与机房物理所在地完全一致，能完美解锁当地限定流媒体（如日本 AbemaTV、台湾动画疯、美区 Netflix）；而“广播 IP”虽能日常上网，但在部分严苛区域限制平台可能受限。',
  },
  {
    category: '01 · IP 纯净度与风控欺诈值检测',
    name: 'IPInfo.io 官方 ASN 与自治系统查询',
    url: 'https://ipinfo.io/',
    metrics: 'ASN 编号 · 物理机房运营商 · Privacy Detection (VPN/Proxy/Tor/Relay)',
    howToRead:
      '全球各大互联网公司（包括 OpenAI 与 Cloudflare）广泛采用的基础设施数据库。通过查看 `asn.type` 是 `isp`（运营商）还是 `hosting`（数据中心），可提前预判该节点在注册海外高风控账号时的通过率。',
  },
  {
    category: '02 · DNS 泄露与 WebRTC 真实 IP 暴露检测',
    name: 'BrowserLeaks (WebRTC & DNS Leak Test)',
    url: 'https://browserleaks.com/webrtc',
    metrics: 'WebRTC Local/Public IP 暴露状态 · DNS 解析服务器归属国',
    howToRead:
      '许多用户虽然开启了系统代理，但浏览器通过 WebRTC 协议直接暴露了国内宽带真实公网 IP，或 DNS 请求仍然发往国内运营商 DNS（导致污染与抢答）。若检测页面出现中国大陆 IP，请在 Clash Verge Rev 中开启「TUN 模式」并将 DNS 设置为 `fake-ip` 模式。',
  },
  {
    category: '02 · DNS 泄露与 WebRTC 真实 IP 暴露检测',
    name: 'IPLeak.net 全方位隧道密封性检测',
    url: 'https://ipleak.net/',
    metrics: 'IPv4 / IPv6 双栈泄露检测 · 种子下载 IP 暴露测试 · DNS 服务器列表',
    howToRead:
      '如果您的本地宽带开启了 IPv6，而代理客户端未接管 IPv6 流量，海外网站可能会优先通过直连 IPv6 访问从而导致代理失效或位置暴露。若发现 IPv6 泄露，可在客户端开启 IPv6 代理接管，或在路由器/网卡中临时关闭 IPv6。',
  },
  {
    category: '03 · 流媒体真实吞吐与端到端延迟压测',
    name: 'Fast.com (Netflix 官方 OCA 测速节点)',
    url: 'https://fast.com/',
    metrics: 'Netflix 视频流真实下载速率 (Mbps) · Unloaded/Loaded 延迟抖动',
    howToRead:
      '相比普通测速站，Fast.com 直接连接 Netflix 的 Open Connect 视频分发服务器。若测速达到 40Mbps 以上即可秒开 4K HDR 视频；点击“显示更多信息”查看 Loaded Latency（负载延迟），数值越低说明 IEPL 专线抗拥塞能力越强。',
  },
  {
    category: '03 · 流媒体真实吞吐与端到端延迟压测',
    name: 'Cloudflare Speed Test (全球边缘网络压测)',
    url: 'https://speed.cloudflare.com/',
    metrics: '100kB/1MB/10MB/25MB 分段吞吐 · Jitter (网络抖动) · Packet Loss (丢包率)',
    howToRead:
      '提供极其详尽的网络可观测性指标。由于超过 30% 的海外网站（含 AI 平台）托管在 Cloudflare CDN 后方，该测试能直接反映您当前机场节点访问海外主流网站与 API 的真实响应速度与零丢包表现。',
  },
  {
    category: '03 · 流媒体真实吞吐与端到端延迟压测',
    name: 'Speedtest.net by Ookla (国际标准单线程/多线程测速)',
    url: 'https://www.speedtest.net/',
    metrics: '多线程峰值带宽 (Multi) vs 单线程真实带宽 (Single)',
    howToRead:
      '测速黄金准则：除了看默认的多线程（Multi）峰值外，建议切换为「单线程（Single）」测试香港或新加坡节点。单线程依然能跑上 100Mbps~300Mbps 的机场（如光速云、飞猫云、微风网络），在晚高峰刷 4K 视频和下载大文件时才不会断流。',
  },
];

export const mihomoOverrideYaml = `# ClashTuijian.cc 实验室标准 Mihomo (Clash Verge Rev) 全局扩展覆写配置
# 用途：1) 防 DNS 污染与 WebRTC 泄露；2) 将 OpenAI/Claude/Gemini 与 Netflix 自动分流；3) 国内域名 100% 直连加速
# 使用方法：在 Clash Verge Rev -> 订阅 (Profiles) -> 全局扩展覆写配置 (Global Extend Config) 中粘贴启用

dns:
  enable: true
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "*.local"
    - "+.msftconnecttest.com"
    - "+.msftncsi.com"
    - "time.*.com"
    - "ntp.*.com"
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  fallback:
    - https://1.1.1.1/dns-query
    - https://dns.google/dns-query
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4

sniffer:
  enable: true
  force-dns-mapping: true
  parse-pure-ip: true
  override-destination: false
  sniff:
    HTTP:
      ports: [80, 8080-8880]
      override-destination: true
    TLS:
      ports: [443, 8443]
    QUIC:
      ports: [443, 8443]

prepend-rules:
  # 局域网与私有地址强制直连
  - GEOSITE,private,DIRECT
  - GEOIP,private,DIRECT,no-resolve
  # AI 生产力工具（建议在策略组中指向新加坡/美国/日本纯净节点）
  - GEOSITE,openai,PROXY
  - GEOSITE,anthropic,PROXY
  - GEOSITE,google-gemini,PROXY
  # 主流国际流媒体
  - GEOSITE,netflix,PROXY
  - GEOSITE,disney,PROXY
  - GEOSITE,youtube,PROXY
  - GEOSITE,tiktok,PROXY
  # Apple 与 Microsoft 国内 CDN 直连提速
  - GEOSITE,apple-cn,DIRECT
  - GEOSITE,microsoft@cn,DIRECT
  - GEOSITE,steam@cn,DIRECT
  # 中国大陆域名与 IP 强制直连（防跑流量、保障网银与微信流畅）
  - GEOSITE,cn,DIRECT
  - GEOIP,cn,DIRECT,no-resolve`;

export const resourceFaqs: ResourceFaqItem[] = [
  {
    q: '网上搜到的“每日免费更新 Clash 订阅链接 / 免费节点池”能直接用来办公或登录 ChatGPT 吗？',
    a: '强烈不建议用于登录任何重要账号。公开免费节点池通常由自动化爬虫从互联网抓取未设密码的代理端口，或由不明来源搭建：第一，单个节点往往有数千人同时挤占，晚高峰丢包率超过 85%，连基本网页都难以打开；第二，由于 IP 被严重滥用，访问 Google 会无限弹人机验证码，登录 ChatGPT 或 Claude 极易触发风控直接封号；第三，部分恶意免费节点会進行 HTTP/TLS 流量嗅探或劫持剪贴板。若预算有限，建议选择年付仅 67 元（折合 ¥5.6/月）的大佬云、闪电鼠，或光速云 ¥147/247GB 永久不限时包。',
  },
  {
    q: '如何免费获取一个纯净度极高、能解锁 ChatGPT 与 Claude 的落地 IP？',
    a: '最安全可靠的免费方案是利用 Cloudflare 官方出品的「Cloudflare WARP」。您可以下载官方 1.1.1.1 客户端或提取 WireGuard 配置文件，配合开源优选 IP 工具挑选延迟最低的 Anycast Endpoint，亦可将 WARP 作为 Clash Verge Rev（Mihomo 内核）的后置链式代理（dialer-proxy）：让您的机场 IEPL 专线负责高速跨境传输，最后一步通过 Cloudflare WARP 落地，即可零成本获得受 Cloudflare 信任的高纯净度原生体验。',
  },
  {
    q: '为什么不能随便使用百度或谷歌搜出来的“在线 Clash 订阅转换网站”？',
    a: '机场的订阅链接（Subscription URL）中包含了您的专属 UUID、密码令牌（Token）以及全部节点地址。如果您将原始订阅链接粘贴到来历不明的第三方公共 Subconverter 网站并点击转换，网站后台日志会直接记录您的订阅链接，极易导致订阅被挂到免费节点池公开共享，几天之内跑光您整月的流量甚至导致机场账号因异常并发被封。正确做法是使用客户端内置的本地覆写功能（Merge / Script），或使用本地部署的开源 Sub-Store。',
  },
  {
    q: 'Clash for Windows (CFW) 还能继续下载使用吗？哪里有安全的开源替代品？',
    a: '原版 Clash for Windows 已于 2023 年底正式停更归档，目前搜索引擎竞价广告中排在前面的所谓“Clash 中文官网”99% 是捆绑了推广木马或收费套壳的仿冒钓鱼站。2026 年最权威、持续开源维护的替代品是「Clash Verge Rev」与「FlClash」（均基于新一代 Mihomo 内核），您可在本页上方的开源客户端直达表中一键跳转至 GitHub 官方 Releases 免费下载。',
  },
  {
    q: '没有美区 Apple ID 怎么免费下载 iOS 端代理客户端？',
    a: 'iOS 国区 App Store 已下架所有网络代理工具。您可以完全免费自行注册一个美区 Apple ID（只需准备一个未注册过 Apple ID 的邮箱，在苹果官网 account.apple.com 将国家/地区设为美国，无需绑定信用卡即可激活），随后在 App Store 登录该账号即可免费下载 Karing、Streisand、Clash Mi 或 sing-box，亦可购买充值卡兑换下载 Shadowrocket（小火箭）与 Stash。切勿在淘宝或拼多多租用他人共享的 Apple ID 登录手机「设置 -> iCloud」，以免遭遇远程锁机勒索！',
  },
  {
    q: 'Clash Verge Rev 提示 GeoIP.dat 或 GeoSite.dat 下载超时失败怎么办？',
    a: '这是因为默认的 GitHub Raw 地址在国内直连环境下偶发连接重置。打开 Clash Verge Rev 的「设置 -> 外部控制 / Mihomo 设置 -> Geo 数据更新源」，将更新地址修改为 jsDelivr 或 FastGit 等 CDN 镜像源（例如 MetaCubeX 官方仓库提供的 testingcf.jsdelivr.net 镜像地址），或者先开启系统代理再点击“更新 Geo 数据库”即可瞬间完成下载。',
  },
];
