export interface FaqCategory {
  id: 'protocol' | 'client' | 'unlock' | 'router' | 'billing' | 'speedtest';
  badge: string;
  title: string;
  summary: string;
  items: {
    id: string;
    q: string;
    shortAnswer: string;
    detail: string;
    tags: string[];
    codeSnippet?: string;
    recommendedBrands?: { name: string; slug: string; reason: string }[];
  }[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'protocol',
    badge: '01 · 专线架构与协议原理',
    title: 'IEPL / IPLC 专线架构与 VLESS / Trojan / Hysteria 2 协议百科',
    summary:
      '深入拆解机场底层传输链路（IEPL 内网专线 vs IPLC vs BGP 中转 vs 公网直连）与新一代加密协议的抗封锁、低延迟及倍率计费机制。',
    items: [
      {
        id: 'iepl-vs-iplc-vs-bgp',
        q: '什么是 IEPL 专线、IPLC 专线与三网 BGP 中转？它们和普通公网直连机场有什么本质区别？',
        shortAnswer:
          'IEPL（以太网国际专线）与 IPLC（国际私有租用线路）是在物理层/数据链路层建立的点对点内网跨境通道，流量不过公网国际出口防火墙（GFW），因此晚高峰不丢包、特殊时期极少被封；而公网直连直接暴露在国际出口拥塞与 QoS 限速之下。',
        detail:
          '机场的传输链路决定了 80% 的晚高峰体验：1）普通公网直连：你的设备直接连接海外服务器 IP，经过运营商国际出口与 GFW 审查，晚高峰（20:00–23:00）丢包率常高达 30%~70%，且 IP 极易被封；2）国内 BGP 中转（隧道中转）：设备先连接国内广州/上海/北京的多线 BGP 入口服务器，再由中转机通过公网转发至海外，解决了国内跨网延迟问题，但过境段仍走公网；3）IPLC / IEPL 内网物理专线：国内入口（如深港、沪日、广新）与海外落地机房之间通过运营商内网专线（MPLS / SDH / 以太网二层专线）直连，完全绕开公网出口拥塞与协议特征审查，延迟稳定在香港 15~25ms、新加坡 40~48ms、日本 45~58ms。',
        tags: ['IEPL专线', 'IPLC专线', 'BGP中转', '晚高峰防丢包'],
        recommendedBrands: [
          { name: '光速云', slug: 'guangsuyun', reason: '2020老牌 IEPL + 企业级内网双专线冗余' },
          { name: '微风网络', slug: 'weifeng', reason: '平价高口碑 IEPL 专线 + VLESS 原生 IP' },
          { name: '星岛梦', slug: 'xingdaomeng', reason: '2020老牌 IEPL 专线，1倍流量不限设备' },
        ],
      },
      {
        id: 'vless-trojan-hysteria2-ss',
        q: 'VLESS、Trojan、Hysteria 2、Shadowsocks (SS) 与 VMess 协议各自有什么优缺点？2026 年首选哪种？',
        shortAnswer:
          '2026 年主力首选 VLESS（配合 Reality/XTLS 或专线传输）与 Trojan，兼顾低握手延迟与高抗封锁能力；而在劣质宽带或高丢包无线网络下，基于 QUIC (UDP) 的 Hysteria 2 能发挥暴力吞吐优势。',
        detail:
          '各主流代理协议技术对比：1）VLESS：轻量化无状态传输协议，去除了 VMess 冗余加密开销，配合 XTLS Vision 或专线内网传输时 CPU 占用极低、并发吞吐最高，是目前光速云、微风网络、星岛梦等一线机场的主力协议；2）Trojan：将代理流量完美伪装成标准 HTTPS (TLS) 网站流量，抗 DPI（深度包检测）能力极强，兼容性极佳；3）Hysteria 2（歇斯底里）：基于改良版 QUIC (UDP) 协议，内置自研拥塞控制算法，在晚高峰存在轻微丢包或跨太平洋长距离（如美西/欧洲）链路上能跑满带宽，但需注意部分地区宽带会对大流量 UDP 进行 QoS 限速；4）Shadowsocks (SS)：在中转与 IEPL 专线内部（无需过公网墙）依然因极致的加解密效率被广泛采用，适合软路由弱 CPU 设备。',
        tags: ['VLESS', 'Trojan', 'Hysteria 2', 'Shadowsocks', '协议对比'],
      },
      {
        id: 'node-multiplier-explained',
        q: '机场节点名称后面的「0.5x / 1x / 1.5x / 2x 倍率」是什么意思？如何避免高倍率节点偷跑流量？',
        shortAnswer:
          '倍率代表流量扣费系数：使用 1x（1倍）节点下载 1GB 文件扣除 1GB 套餐流量；使用 2x 节点下载 1GB 则扣除 2GB 流量；使用 0.5x 节点下载 1GB 仅扣 0.5GB。',
        detail:
          '由于深港 IEPL 专线、原生住宅 IP 或高防定制节点的上游带宽成本远高于普通节点，部分机场会将稀缺专线设为 1.5x~3x 倍率。避坑建议：第一，优先选择像「星岛梦」、「光速云」、「飞猫云」这样全线主力节点均为 1 倍率（或明确标注倍率）的透明品牌；第二，在 Clash 客户端进行 Speedtest 测速或下载 Steam 大型游戏、系统更新前，务必检查当前选中的节点是否带有 2x/5x 标记，避免几次测速就耗尽数十 GB 流量。',
        tags: ['节点倍率', '流量计费', '1倍流量', '防跑流量'],
        recommendedBrands: [
          { name: '星岛梦', slug: 'xingdaomeng', reason: '全线 IEPL 专线 1 倍率计费，无隐藏高倍率套路' },
          { name: '光速云', slug: 'guangsuyun', reason: '账单明细透明，提供 147 元 247GB 永久不限时包' },
        ],
      },
      {
        id: 'native-ip-vs-broadcast-ip',
        q: '什么是「原生 IP (Native IP)」与「广播 IP (Broadcast IP)」？对看流媒体和用 AI 有多大影响？',
        shortAnswer:
          '原生 IP 指该 IP 地址在 WHOIS 注册局的注册国家与机房物理所在地完全一致；广播 IP 则是将其他国家的 IP 段通过 BGP 宣告广播到当前机房使用。',
        detail:
          '举例说明：某台服务器物理位置在香港，但使用的是从美国 ARIN 注册局租用并广播到香港的 IP。日常浏览网页、刷 YouTube 时两者速度毫无区别（都享受香港 20ms 低延迟）；但在访问对 IP 属地校验极其严格的平台（如台湾巴哈姆特动画疯、日本 AbemaTV / DMM、港区/美区特定版权 Netflix 剧集、TikTok 区域定向流）时，只有真正的原生 IP（或配备 DNS 解锁机的专线）才能完美通过区域校验。您可以在连接节点后打开 ping0.cc 一键核验当前节点是否为原生 IP。',
        tags: ['原生IP', '广播IP', '流媒体解锁', 'BGP宣告'],
        recommendedBrands: [
          { name: '微风网络', slug: 'weifeng', reason: '主打多地区原生 IP 落地，AI 与流媒体兼容性好' },
          { name: 'Firefly (萤火虫)', slug: 'firefly', reason: '全节点 IPLC 专线配合原生 IP 解锁' },
        ],
      },
      {
        id: 'peak-bandwidth-vs-local-isp',
        q: '机场宣传“单节点峰值 2.5Gbps (2500Mbps)”，为什么我自己测速只有 300Mbps~500Mbps？',
        shortAnswer:
          '2.5Gbps 指机场在机房母鸡端接入的总端口带宽上限（确保几百个用户晚高峰同时看 4K 也不会挤爆端口），而单用户的实际测速受限于你家里的宽带签约速率、光猫/路由器千兆网口上限及 Wi-Fi 衰减。',
        detail:
          '网络传输遵循“木桶效应”：1）如果你办理的是家庭 300M 或 500M 宽带，那么物理极限下载速度就是 35MB/s~60MB/s（即 300Mbps~500Mbps），不可能突破运营商给你家光猫设定的模板上限；2）即使你办理了 1000M（千兆）宽带，普通千兆网口扣除以太网帧头开销后的极限速度约为 940Mbps，若使用 5GHz Wi-Fi 隔墙连接，通常在 400Mbps~650Mbps 之间；3）机场具备 2.5Gbps 甚至 5Gbps 冗余带宽的核心价值在于“高并发富余度”——当晚上 9 点所有人同时刷视频时，端口仍有充足余量，不会出现延迟暴涨或断流。',
        tags: ['带宽峰值', '2.5Gbps', '木桶效应', '家庭千兆宽带'],
      },
      {
        id: 'udp-quic-gaming-support',
        q: '玩外服联机游戏（APEX / 使命召唤 / 瓦罗兰特）、打 Discord 语音或微信视频需要关注什么指标？',
        shortAnswer:
          '实时语音与联机游戏对峰值带宽要求极低（通常仅需 1~5Mbps），但对「UDP 转发支持度」、「RTT 延迟稳定性（Jitter 抖动 < 5ms）」和「0% 丢包率」要求极高。',
        detail:
          '许多廉价中转机场为了节省成本会禁用 UDP 转发或对 UDP 限速，导致 Discord 语音断断续续、游戏无法匹配。如果您有外服游戏或实时音视频会议（Zoom / Teams / Google Meet）需求，请务必选择支持 Full-Cone NAT（全锥形 UDP 转发）的 IEPL 专线机场（如光速云、微风网络、暮光加速），并在 Clash Verge Rev 中开启「TUN 虚拟网卡模式」以完整接管非 HTTP 的 UDP 进程流量。',
        tags: ['UDP转发', '外服游戏加速', '网络抖动Jitter', 'TUN模式'],
      },
    ],
  },
  {
    id: 'client',
    badge: '02 · 客户端报错与排障',
    title: 'Clash Verge Rev / Shadowrocket / v2rayN 常见报错与一键修复指南',
    summary:
      '针对订阅拉取失败、开启代理后无法上网、国内网站变慢、TUN 模式启动报错、macOS 损坏提示等高频故障提供分步排查方案。',
    items: [
      {
        id: 'subscription-import-failed',
        q: '导入机场订阅链接时提示「Network Error / 403 Forbidden / YAML syntax error」怎么办？',
        shortAnswer:
          '按四步排查：1）先关闭当前系统代理再拉取订阅；2）检查是否把官网注册页链接误当成订阅链接；3）在订阅设置中将 User-Agent 改为 Clash.Meta 或 clash-verge/v1.7.0；4）同步电脑系统时间。',
        detail:
          '95% 的订阅导入失败都属于以下四种原因之一：\n1）旧代理死循环：你电脑上开着已过期的旧机场代理，导致请求新机场订阅服务器时无法连通——请先关闭“系统代理”和“TUN模式”，用国内直连网络拉取订阅；\n2）链接格式错误：如果您导入的是普通节点池而客户端使用的是 Clash，请确保复制的是机场后台的「Clash (Mihomo) 专用订阅链接」或「通用订阅链接」，不要直接把浏览器地址栏的网址填进去；\n3）User-Agent (UA) 拦截：部分机场防火墙会拦截空 UA，在 Clash Verge Rev 右键该订阅 -> 编辑信息 -> 将 User-Agent 填写为 `clash-verge/v2.0.0` 或 `ClashforWindows/0.20.39`；\n4）本地 DNS 污染：将电脑网卡 DNS 临时改为 `223.5.5.5`（阿里 DNS）或 `119.29.29.29`（腾讯 DNS）后重试。',
        tags: ['订阅导入失败', 'Network Error', 'YAML报错', 'User-Agent'],
      },
      {
        id: 'proxy-connected-but-no-internet',
        q: '客户端显示节点延迟全部正常（绿色 ms），但浏览器打不开任何海外网页是怎么回事？',
        shortAnswer:
          '最常见原因是：1）未打开客户端里的「系统代理 (System Proxy)」开关；2）电脑系统时间与标准北京时间误差超过 60 秒；3）浏览器安装了其他代理插件（如 SwitchyOmega）发生冲突。',
        detail:
          '请按顺序核对：\n第一步：看 Clash Verge Rev 左侧或主界面「系统代理 (System Proxy)」开关是否点亮为开启状态，且代理模式选在「规则 (Rule)」而非「直连 (Direct)」；\n第二步：校准系统时间！TLS / VLESS / Trojan / VMess 协议对时间戳校验极严，如果电脑主板电池没电或未开启自动对时，导致时间快慢超过 90 秒，节点虽然能 Ping 通 TCP 端口，但加密握手会 100% 被服务器拒绝（打开 Windows 设置 -> 时间和语言 -> 立即同步）；\n第三步：按 Ctrl+Shift+N 打开浏览器无痕窗口测试，若无痕窗口能正常打开 Google，说明是您浏览器里的某款 VPN/代理扩展插件接管并阻塞了浏览器流量，禁用该插件即可。',
        tags: ['连上无法上网', '系统时间同步', '系统代理开关', '浏览器插件冲突'],
      },
      {
        id: 'domestic-sites-slow-or-broken',
        q: '开启 Clash 代理后，国内网页（淘宝/B站/微信电脑版/网银）变慢甚至打不开怎么解决？',
        shortAnswer:
          '请确认客户端处于「规则模式 (Rule)」而非「全局模式 (Global)」，并在设置中配置跳过本地局域网与大陆地址（Bypass）或启用本站提供的 Fake-IP 防泄露覆写规则。',
        detail:
          '很多新手误把代理模式切到了「全局 (Global)」，导致访问淘宝、京东、微信文件传输全都绕道香港或美国节点再折返回国，不仅速度慢、消耗宝贵的机场流量，还会触发国内银行与支付平台异地登录风控。正确设置：1）日常永远保持「规则 (Rule)」模式；2）如果规则模式下仍有别国内小众网站走了代理，可在 `/guides/resources` 页面复制本站提供的「Mihomo 标准防泄露覆写配置（含 `GEOSITE,cn,DIRECT` 与 `GEOIP,cn,DIRECT`）」，即可确保国内流量 100% 毫秒级直连。',
        tags: ['国内网站变慢', '规则模式Rule', '全局模式Global', '微信断连'],
      },
      {
        id: 'no-internet-after-closing-clash',
        q: '直接关掉电脑或强行退出代理软件后，连百度和国内网站也全部打不开（显示代理服务器拒绝连接）怎么办？',
        shortAnswer:
          '这是因为软件非正常退出时未能自动清理 Windows 系统注册表中的本地代理端口（127.0.0.1:7897），重新打开 Clash 再正常关闭一次「系统代理」开关即可恢复。',
        detail:
          '三种 10 秒恢复方法：\n方法一（最快）：重新启动 Clash Verge Rev / v2rayN，将「系统代理」开关打开再手动关掉，然后正常退出软件；\n方法二（系统设置）：打开 Windows「设置 -> 网络和 Internet -> 代理 -> 使用代理服务器」，点击「编辑」将其切换为「关闭」并保存；\n方法三（彻底预防）：在 Clash Verge Rev 设置中开启「退出时自动关闭系统代理」与「开机自启」，避免直接拔电源或用任务管理器强杀进程。',
        tags: ['关闭代理后断网', '代理服务器拒绝连接', 'Windows代理残留'],
      },
      {
        id: 'tun-mode-service-install-error',
        q: 'Clash Verge Rev 开启「TUN 虚拟网卡模式」时提示无权限或 Service Mode 未安装怎么处理？',
        shortAnswer:
          'TUN 模式需要创建系统级虚拟网卡驱动（wintun / sing-tun），必须在设置中点击「服务模式 (Service Mode) -> 安装 (Install)」，或在桌面右键以管理员身份运行客户端。',
        detail:
          '什么时候需要开启 TUN 模式？普通的「系统代理」仅接管遵循系统 HTTP/SOCKS 代理环境变量的浏览器与应用；而命令行终端（Git / npm / Docker）、部分桌面端 AI 软件（Cursor / Claude Desktop）、Telegram 桌面端以及外服 PC 游戏不会读取系统代理设置。此时只需在 Clash Verge Rev「设置 -> 服务模式」旁边点击小盾牌图标完成安装（弹窗选“是”授予管理员权限），重启客户端后即可随时一键开启「TUN 模式」接管全机所有 TCP/UDP 流量。',
        tags: ['TUN模式', '虚拟网卡', 'Service Mode服务模式', '管理员权限'],
      },
      {
        id: 'macos-damaged-app-gatekeeper',
        q: 'macOS 安装 Clash Verge Rev 或 FlClash 后弹窗提示「应用已损坏，无法打开，你应该将它移到废纸篓」怎么修复？',
        shortAnswer:
          '并非安装包损坏，而是苹果 macOS Gatekeeper 对未缴纳苹果开发者年费签名的开源软件进行了隔离拦截，在终端执行一行 `sudo xattr -r -d com.apple.quarantine` 命令即可放行。',
        detail:
          '修复步骤（仅需 15 秒）：\n1）先将下载的 `.dmg` 中的应用图标拖入「应用程序 (Applications)」文件夹；\n2）打开 Mac 自带的「终端 (Terminal)」，粘贴以下命令并回车（注意末尾保留一个空格，或直接按下方路径执行），输入开机密码（输入时屏幕不显示星号，输完直接按回车）即可永久正常打开：',
        tags: ['macOS已损坏', 'Apple Silicon', 'Gatekeeper隔离', '终端修复命令'],
        codeSnippet: `# 修复 Clash Verge Rev 提示已损坏：
sudo xattr -r -d com.apple.quarantine "/Applications/Clash Verge.app"

# 修复 FlClash 提示已损坏：
sudo xattr -r -d com.apple.quarantine "/Applications/FlClash.app"`,
      },
    ],
  },
  {
    id: 'unlock',
    badge: '03 · AI 与流媒体解锁',
    title: 'ChatGPT / Claude / Gemini 与 Netflix / Disney+ / TikTok 解锁排障指南',
    summary:
      '彻底解决“节点能翻墙但 ChatGPT 报错 Access Denied”、“Claude 封号”、“Google 自动送中”、“Netflix 只有自制剧”与“TikTok 黑屏”五大核心痛点。',
    items: [
      {
        id: 'chatgpt-access-denied-fix',
        q: '为什么连上代理能正常打开 Google 和 YouTube，但打开 ChatGPT 却提示「Access Denied / Unable to load site」？',
        shortAnswer:
          '两大原因：1）你当前选中的是香港节点（OpenAI 官方不支持香港地区访问，除非机场在后端做了香港节点的 DNS 跨区分流解锁）；2）当前节点 IP 欺诈值过高被 Cloudflare 拦截。',
        detail:
          '100% 解决步骤：\n1）切换落地地区：在客户端策略组中，将代理节点从「香港」切换为「美国」、「新加坡」、「日本」或「台湾」节点（或者选择像光速云、微风网络、飞猫云这样已在专线后端内置 OpenAI 自动分流解锁的品牌）；\n2）检查分流规则：确保 `openai.com`、`chatgpt.com`、`oaistatic.com`、`oaiusercontent.com` 以及 `auth0.com` 均命中代理规则而非直连；\n3）清理浏览器 Cookie 或开启无痕窗口重试，若遇到顽固 Cloudflare 验证码，可切换至带“原生/家宽/AI专用”标记的节点。',
        tags: ['ChatGPT解锁', 'Access Denied', 'OpenAI地区限制', 'AI专用节点'],
        recommendedBrands: [
          { name: '光速云', slug: 'guangsuyun', reason: '新加坡/日本/美国多节点支持 ChatGPT 与 Claude 稳定访问' },
          { name: '飞猫云', slug: 'feimaoyun', reason: '专属客户端内置智能 AI 分流，免折腾规则' },
          { name: '速界', slug: 'sujie', reason: '针对跨境办公与 AI 工具优化的专线节点' },
        ],
      },
      {
        id: 'claude-account-ban-prevention',
        q: '使用 Anthropic Claude 3.5 / 3.7 时为什么容易被封号（Account Disabled）？如何保护账号安全？',
        shortAnswer:
          'Anthropic 的风控系统对「节点国家频繁跳变（上午日本、下午美国、晚上新加坡）」和「高风险机房万人骑 IP」极其敏感，固定使用单一地区的低欺诈值原生节点是防封关键。',
        detail:
          'Claude 防封三大铁律：\n1）禁止开启“自动测速选点 (URL-Test)”跑 Claude：自动测速组会每隔几分钟根据几毫秒的延迟波动自动切换你的出口 IP，导致你的 Claude 会话在 10 分钟内跨越三个国家，必触发安全封禁；\n2）在 Clash 中建立独立的「AI 固定组」：手动锁定 1~2 个经过 Scamalytics 检测 Fraud Score 低于 25 分的美国或新加坡原生节点，长期固定使用；\n3）桌面端 Claude App 需开启客户端「TUN 模式」，防止 WebRTC 或系统底层请求绕过系统代理直接暴露中国大陆真实 IP。',
        tags: ['Claude防封号', '固定节点', 'IP纯净度', '禁止自动切换'],
      },
      {
        id: 'netflix-originals-only-issue',
        q: '为什么登录 Netflix（奈飞）后只能搜到《怪奇物语》《鱿鱼游戏》等自制剧，搜不到第三方电影与动漫？',
        shortAnswer:
          '当 Netflix 检测到你使用的代理 IP 属于商业数据中心（IDC 机房 IP）而非当地住宅/原生解锁 IP 时，不会直接报错阻断，而是静默隐藏所有非 Netflix 自制版权剧集（俗称“仅解锁自制剧”）。',
        detail:
          '如何恢复完整片库（非自制剧全解锁）：\n1）切换至机场节点列表中标注有「原生」、「NF」、「流媒体解锁」或「新加坡/台湾/香港 IEPL」的节点（本站 Top 10 机场如光速云、飞猫云、微风网络、暮光加速、星岛梦均支持全解锁）；\n2）排查 DNS 抢答：在客户端开启 `Fake-IP` 模式，避免本地运营商 DNS 将 `fast.com` 与 `netflix.com` 解析到错误的 CDN 边缘服务器；\n3）切换节点后需彻底关闭 Netflix App 或刷新浏览器缓存再重新搜索片名（如搜索《甄嬛传》或《哈利波特》验证是否已解锁非自制剧）。',
        tags: ['Netflix非自制剧', '奈飞4K解锁', 'Disney+', '流媒体DNS解锁'],
      },
      {
        id: 'tiktok-black-screen-solution',
        q: '手机上安装了国际版 TikTok 并连上了机场节点，为什么打开依然黑屏提示“无网络连接”？',
        shortAnswer:
          'TikTok App 会优先读取手机硬件卡槽中的 SIM 卡运营商代码（MCC/MNC：中国移动 460-00、联通 460-01、电信 460-03），一旦识别到国内 SIM 卡即在本地直接阻断网络请求。',
        detail:
          '2026 年免拔卡/免越狱流畅刷 TikTok 的三种标准方案：\n1）最稳妥硬件法：使用一台不插国内手机卡的备用 iPhone / iPad 或拔出国内 SIM 卡（或使用海外 eSIM 卡），将手机系统语言与地区设为台湾/日本/美国，配合支持 TikTok 解锁的机场节点即可直接正常使用；\n2）iOS 进阶重写方案：在 Shadowrocket / Quantumult X / Stash 中启用 TikTok 区域重写模块（MitM + Rewrite，将请求参数中的 `CN` 重写为 `TW` / `JP` / `KR`）；\n3）电脑网页端免折腾方案：直接在电脑浏览器打开 `www.tiktok.com`，只要机场节点支持 TikTok 解锁（如光速云、星岛梦、无忧链接），网页版完全不检测 SIM 卡，高清秒播。',
        tags: ['TikTok黑屏', 'SIM卡锁区', '免拔卡方案', '跨境电商直播'],
      },
    ],
  },
  {
    id: 'router',
    badge: '04 · 软路由与局域网共享',
    title: 'OpenWrt 软路由 (OpenClash / PassWall2 / Nikki) 与全屋透明代理指南',
    summary:
      '涵盖软路由插件选型、Fake-IP 与内网 NAS 端口冲突修复、防国内 BT/视频偷跑机场流量，以及零硬件成本的电脑局域网共享给 PS5/Switch/Apple TV 教程。',
    items: [
      {
        id: 'openclash-vs-passwall2-vs-nikki',
        q: 'OpenWrt 软路由上安装 OpenClash、PassWall2 还是 Nikki？它们各自适合什么硬件？',
        shortAnswer:
          'x86 软路由（N100 / N5105）或高性能 ARM 路由首选功能最全的「OpenClash」或架构最新的「Nikki（需 OpenWrt 24.10+ nftables）」；而内存较小的硬路由改刷机建议选轻量级「PassWall2」。',
        detail:
          '三大软路由透明代理方案深度对比：\n1）OpenClash：生态最成熟、图形化覆写功能极其强大，支持直接导入机场标准 Clash 订阅，适合喜欢可视化管理策略组的进阶玩家；\n2）Nikki（原 MihomoTProxy）：专门针对新版 OpenWrt（基于 `fw4 / nftables` 防火墙）重构的现代 Mihomo 透明代理插件，彻底抛弃了老旧繁琐的 iptables 转换层，内存占用更低、转发效率极高；\n3）PassWall2：基于 Xray / sing-box 分流，对多节点并发负载均衡支持极佳。\n重要提醒：软路由无法运行机场的闭源专属客户端（如飞猫云、Firefly），软路由用户请务必选择提供标准通用订阅链接的 **光速云**、**微风网络**、**星岛梦** 或 **暮光加速**。',
        tags: ['OpenClash', 'PassWall2', 'Nikki', 'OpenWrt软路由'],
        recommendedBrands: [
          { name: '光速云', slug: 'guangsuyun', reason: '原生兼容 OpenClash / Nikki / PassWall2 软路由订阅导入' },
          { name: '星岛梦', slug: 'xingdaomeng', reason: '不限制同时在线设备数，极度契合全屋软路由共享' },
          { name: '暮光加速', slug: 'muguang', reason: '多设备高并发 BGP 专线，支持 Linux 与路由器部署' },
        ],
      },
      {
        id: 'router-prevent-traffic-leak',
        q: '软路由开启全屋透明代理后，如何防止家里电视看爱奇艺、电脑下迅雷/PT 跑光机场套餐流量？',
        shortAnswer:
          '必须开启「绕过中国大陆 IP (China IP Bypass)」、「仅代理常用端口（80/443 等 Web 端口，屏蔽高危 BT 端口）」并为国内下载机/智能电视设置 MAC 地址直连白名单。',
        detail:
          '软路由防跑流量三道防线：\n第一道防线（大陆白名单）：在 OpenClash「模式设置」中勾选「绕过中国大陆 IP」，并开启定时自动更新大陆 IP 段路由表（chnroute）；\n第二道防线（端口过滤）：P2P / 迅雷 / BT 种子下载会随机使用 10000~65535 的高位端口连接全球 Peer，若不限制端口，挂一晚上 PT 就能跑掉几百 GB 专线流量。在插件中开启「仅代理常用端口（Common Ports Only：21, 22, 80, 443, 8080, 8443 等）」，即可将 BT 流量强制阻断在代理隧道之外；\n第三道防线（设备分流）：在「访问控制 (ACL)」中，将群晖 NAS、国产智能电视、扫地机器人的局域网 IP 或 MAC 地址设为「不走代理 (Direct)」。',
        tags: ['软路由防跑流量', '绕过大陆IP', '屏蔽BT端口', 'NAS分流'],
      },
      {
        id: 'share-clash-to-ps5-switch-appletv',
        q: '家里没有软路由，如何用一台开着 Clash Verge Rev 的电脑给同局域网的 PS5、Switch 或 Apple TV 共享加速？',
        shortAnswer:
          '只需在电脑 Clash Verge Rev 中打开「允许局域网连接 (Allow LAN)」，查看电脑的局域网 IP（如 192.168.1.100）和混合端口（如 7897），然后在游戏机/手机 Wi-Fi 代理设置中手动填入该 IP 和端口即可。',
        detail:
          '零成本局域网共享 3 步实操：\n1）在电脑端打开 Clash Verge Rev，开启「允许局域网 (Allow LAN)」，并记下混合端口（Mixed Port，通常为 `7897` 或 `7890`）；\n2）鼠标悬停在允许局域网图标上（或在终端输入 `ipconfig` / `ifconfig`）查看电脑当前的内网 IPv4 地址（例如 `192.168.31.88`），同时确认 Windows 防火墙已允许 `verge-mihomo` 通过专用与公用网络；\n3）打开 Switch / PS5 / 手机 / Apple TV 的「无线网络设置 -> 高级 -> 代理服务器 -> 手动」，将服务器地址填为 `192.168.31.88`，端口填为 `7897`，保存后即可直接享受电脑上的 IEPL 专线高速网络！',
        tags: ['允许局域网Allow LAN', 'PS5加速', 'Switch下载加速', 'Apple TV共享'],
      },
    ],
  },
  {
    id: 'billing',
    badge: '05 · 套餐计费与选购避坑',
    title: '月付 / 年付 / 永久不限时流量包精算模型与选购防坑指南',
    summary:
      '科学测算个人与团队每月真实流量消耗，对比周期性套餐与一次性永久流量包的回本周期，避开超低价传销盘套路。',
    items: [
      {
        id: 'monthly-vs-annual-vs-unlimited-pack',
        q: '机场的「月付套餐」、「年付折扣套餐」和「一次性永久不限时流量包」到底怎么搭配最省钱、最安全？',
        shortAnswer:
          '最科学的黄金组合是：新接触一家机场先买 1 个月或最小档测试本地晚高峰；确认稳定后，高频大流量用户用 8 折优惠码转年付，中低频用户直接买「一次性永久不限时流量包」，彻底告别月底流量清零浪费。',
        detail:
          '不同人群的最优财务模型：\n1）每月流量 < 30GB 的轻中度用户（主要查资料、用 ChatGPT/Claude、刷推特和少量视频）：如果买传统月付（¥15~20/月），一年要花 ¥180~240，且每月底用不完的流量全部作废。此时直接买 **光速云「致敬斯诺克 147 永久套餐」（¥147 一次性获得 247GB 永不过期）** 或 **星岛梦（¥100 / 100GB 永久包）**，可以用上 1~2 年，折合每月不到 6 元！\n2）每月流量 60GB~200GB 的日常主力用户：选择 **光速云轻量版（折后年付 ¥99，每月 69GB，折合 ¥8.2/月）** 或 **飞猫云学生版（年付 ¥84，每月 50GB，折合 ¥7.0/月）**，性价比远超单月续费。',
        tags: ['永久不限时流量包', '月付vs年付', '光速云147套餐', '省钱攻略'],
        recommendedBrands: [
          { name: '光速云', slug: 'guangsuyun', reason: '同时提供 ¥99/年轻量版与 ¥147/247GB 永久不限时包，优惠码 80' },
          { name: '星岛梦', slug: 'xingdaomeng', reason: '提供 ¥100/100GB 永久不限时流量包与 ¥96/年周期套餐' },
          { name: '二猫云', slug: 'ermaoyun', reason: '提供 ¥99/100GB 至 ¥699/1000GB 多档位不限时流量包' },
        ],
      },
      {
        id: 'how-much-traffic-do-i-need',
        q: '普通用户一个月到底需要多少 GB 代理流量？50GB / 100GB / 300GB 分别能干什么？',
        shortAnswer:
          '纯文字与 AI 对话（ChatGPT/Claude/网页/Telegram）每月仅耗 5GB~15GB；每天刷 1 小时 1080P YouTube 约耗 45GB/月；若每天看 2 小时 4K 高码率视频或频繁拉取大体积容器镜像，建议选 150GB~300GB/月档位。',
        detail:
          '典型场景流量消耗量化参考表：\n• 网页浏览 / Google 学术检索 / 收发邮件：约 30MB~80MB / 小时；\n• ChatGPT / Claude / Cursor AI 编程辅助：约 20MB~50MB / 小时（10GB 流量足够高强度对话一整月）；\n• 社交媒体（Twitter/X、Instagram、TikTok 短视频）：约 500MB~900MB / 小时；\n• YouTube / Netflix 1080P 高清视频：约 1.2GB~1.8GB / 小时；\n• YouTube / Netflix 4K 60fps HDR 视频：约 5GB~8GB / 小时。\n只要确保客户端开启了「规则模式 (Rule)」让国内B站、抖音、Steam国区下载走直连，绝大多数办公与娱乐用户每月 60GB~168GB 绰绰有余。',
        tags: ['流量消耗测算', '50GB够用吗', '4K视频流量', 'AI办公流量'],
      },
    ],
  },
  {
    id: 'speedtest',
    badge: '06 · 测速方法论与真实性',
    title: '网络可观测性标准：如何看懂机场测速图并在本地宽带科学自测',
    summary:
      '解释 TCP Ping、HTTP URL-Test 与真实带宽压测的差异，说明本站 17 份 2026-08-11 原始测速图的技术口径与客观边界。',
    items: [
      {
        id: 'url-test-latency-vs-real-speed',
        q: '为什么客户端里点「一键测延迟」显示只有 25ms，但看 4K 视频却卡顿？延迟低等于速度快吗？',
        shortAnswer:
          '延迟（Latency / RTT，单位 ms）代表数据包往返一趟的时间（决定网页打开反应快慢）；而带宽吞吐（Throughput，单位 Mbps）代表管道粗细（决定 4K 视频和下载快慢），两者是完全独立的物理维度。',
        detail:
          '打个通俗比方：延迟就像高速公路的限速（120km/h），而带宽就像高速公路有几条车道。一条只有单车道的乡间小路，半夜没车时你也能开到 100km/h（延迟 25ms），但一旦同时开上来 50 辆大货车（晚高峰看 4K 视频），立刻堵死（带宽耗尽、丢包重传）。这也是为什么我们在每个品牌评测页中不仅展示延迟（ms），还同时公示多地区节点的峰值下载速率（Mbps）与 2026-08-11 原始拓扑测速图。',
        tags: ['延迟vs速度', 'RTT往返时间', '峰值吞吐Mbps', '晚高峰拥塞'],
      },
      {
        id: 'measured-png-vs-vendor-data',
        q: '本站评测页里标注的「Measured (2026-08-11 实测原图)」与「Vendor Data (官方公开参数)」有什么区别？',
        shortAnswer:
          'Measured 代表我们完整归档的 17 张 2026-08-11 真实节点拓扑测速 PNG 原始截图；Vendor Data 代表从品牌公开资料核验的套餐价格、流量与线路参数；任何无可靠依据的字段均如实标注为「待核实」。',
        detail:
          '许多机场推广站习惯把所有机场都吹嘘成“万兆专线、永不掉线”，甚至伪造测速图。ClashTuijian.cc 坚持可观测性实验室原则：1）所有 17 张 2026-08-11 测速原图均保持原始未裁剪状态，并明确标注测试日期、客户端协议类型与测速工具家族；2）我们主动向读者声明：任何单次测速截图仅反映当次测试时间点与测试网络条件下的快照表现，不能替代您本地宽带在晚高峰的实测体验。',
        tags: ['Measured实测图', 'Vendor官方数据', '客观评测准则', '2026-08-11归档'],
      },
    ],
  },
];

export const allGuideFaqs = faqCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    categoryTitle: cat.title,
    ...item,
  }))
);
