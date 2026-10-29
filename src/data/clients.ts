export interface ClientApp {
  name: string;
  core: string;
  features: string;
  sourceType: 'GitHub 开源' | 'App Store' | '官方文档' | '官方网站';
  downloadUrl: string;
  downloadLabel: string;
  recommended: boolean;
}

export interface ClientPlatform {
  id: string;
  platform: string;
  badge: string;
  seoKeywords: string[];
  notice: string;
  clients: ClientApp[];
}

export interface GalleryClientRow {
  name: string;
  desc: string;
  badge: string;
  href: string;
}

export interface GalleryShowcase {
  id: string;
  kicker: string;
  title: string;
  statusText: string;
  accent: string;
  rows: GalleryClientRow[];
}

export const galleryShowcases: Record<string, GalleryShowcase> = {
  'client-desktop': {
    id: 'client-desktop',
    kicker: 'DESKTOP 01 // MIHOMO & SING-BOX CORES',
    title: 'Windows & macOS 开源客户端直达下载',
    statusText: '● GITHUB RELEASES (点击即可下载)',
    accent: '#b5abfc',
    rows: [
      {
        name: 'Clash Verge Rev',
        desc: 'Mihomo 内核 · 订阅分流 · TUN 虚拟网卡模式（Win / macOS 首选）',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
      },
      {
        name: 'FlClash',
        desc: 'Mihomo 内核 · Material 3 多端统一界面 · 支持 Intel 与 Apple Silicon',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/chen08209/FlClash/releases',
      },
      {
        name: 'v2rayN',
        desc: 'Xray / sing-box 双核心 · 支持 VLESS-Reality / Trojan / Hysteria 2',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/2dust/v2rayN/releases',
      },
      {
        name: 'Clash Nyanpasu',
        desc: 'Mihomo 多内核切换 · 增强型配置覆写与 YAML 脚本管理',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/libnyanpasu/clash-nyanpasu/releases',
      },
      {
        name: 'Hiddify / Karing',
        desc: 'sing-box 跨平台客户端 · 自动节点测速容灾与新手一键导入',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/hiddify/hiddify-app/releases',
      },
    ],
  },
  'client-mobile': {
    id: 'client-mobile',
    kicker: 'MOBILE 02 // APP STORE & ANDROID APK',
    title: 'iOS 小火箭 & Android 开源客户端下载',
    statusText: '● OFFICIAL CHANNELS (点击直达)',
    accent: '#38bdf8',
    rows: [
      {
        name: 'Shadowrocket (小火箭 · iOS)',
        desc: '美区/外区 App Store 必备 · 全协议兼容 VLESS / Trojan / Clash 订阅',
        badge: 'App Store ↗',
        href: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
      },
      {
        name: 'FlClash (Android 开源 APK)',
        desc: '安卓开源 Mihomo 内核 · 支持分应用代理与自动测速选点',
        badge: 'GitHub APK ↗',
        href: 'https://github.com/chen08209/FlClash/releases',
      },
      {
        name: 'v2rayNG (Android 开源 APK)',
        desc: '安卓高兼容 Xray 客户端 · 完美适配 VLESS / Trojan / VMess 订阅',
        badge: 'GitHub APK ↗',
        href: 'https://github.com/2dust/v2rayNG/releases',
      },
      {
        name: 'Clash Meta for Android',
        desc: 'Mihomo 系安卓规则代理 · 完整兼容 Clash YAML 策略组配置',
        badge: 'GitHub APK ↗',
        href: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases',
      },
      {
        name: 'Stash / Quantumult X (iOS)',
        desc: 'iOS 进阶规则分流与重写工具 · 原生支持 Clash 策略组与分流脚本',
        badge: 'App Store ↗',
        href: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349',
      },
      {
        name: 'sing-box (SFI / SFA 官方客户端)',
        desc: 'iOS 与 Android 跨平台下一代通用核心 · 低内存占用高性能',
        badge: '官方下载 ↗',
        href: 'https://sing-box.sagernet.org/clients/',
      },
    ],
  },
  'client-router': {
    id: 'client-router',
    kicker: 'ROUTER 03 // LINUX & OPENWRT GATEWAY',
    title: 'Linux 桌面与 OpenWrt 软路由开源插件下载',
    statusText: '● OPEN-SOURCE REPOS (点击直达)',
    accent: '#10b981',
    rows: [
      {
        name: 'OpenClash (OpenWrt 软路由)',
        desc: '软路由全家桶透明代理网关 · Apple TV / 游戏机 / 智能家居免配共享专线',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/vernesong/OpenClash/releases',
      },
      {
        name: 'PassWall2 (OpenWrt 软路由)',
        desc: '基于 Xray / sing-box 的轻量高效软路由透明代理与分流插件',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/xiaorouji/openwrt-passwall2/releases',
      },
      {
        name: 'Nikki (OpenWrt 24.10+)',
        desc: '新一代 nftables 架构 Mihomo 透明代理插件 · 配置简洁资源占用低',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/nikkinikki-org/OpenWrt-nikki/releases',
      },
      {
        name: 'v2rayA (Linux Web 透明代理)',
        desc: 'Web 浏览器控制台管理 · 适合 Linux 桌面、Ubuntu 服务器与旁路由网关',
        badge: 'GitHub 下载 ↗',
        href: 'https://github.com/v2rayA/v2rayA/releases',
      },
    ],
  },
};

export const clientPlatforms: ClientPlatform[] = [
  {
    id: 'windows',
    platform: 'Windows 电脑客户端',
    badge: '桌面主力 · GitHub 开源免费下载',
    seoKeywords: [
      'Clash for Windows 替代',
      'Clash Verge Rev 下载',
      'v2rayN 下载',
      'Windows 机场客户端',
      'Mihomo 客户端',
      'VLESS Windows 客户端',
    ],
    notice:
      'Clash Verge Rev、v2rayN、FlClash、Hiddify、Karing 与 Clash Mi 均提供官方 GitHub 开源安装包（Windows 推荐下载 x64-setup.exe）。导入光速云、微风网络、星岛梦等通用订阅时优先推荐 Clash Verge Rev 并开启 TUN 模式。',
    clients: [
      {
        name: 'Clash Verge Rev',
        core: 'Mihomo (Clash.Meta)',
        features: '订阅管理、YAML 规则分流、TUN 虚拟网卡模式，兼顾新手一键导入与进阶自定义规则',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: true,
      },
      {
        name: 'FlClash',
        core: 'Mihomo 内核',
        features: 'Material 3 现代化简洁界面、多端操作逻辑一致、支持智能策略组与规则分流',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: true,
      },
      {
        name: 'v2rayN',
        core: 'Xray / sing-box 多核心',
        features: '支持 VLESS-Reality、Trojan、Shadowsocks、Hysteria 2 等全协议管理与批量测速',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/2dust/v2rayN/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: true,
      },
      {
        name: 'Clash Nyanpasu',
        core: 'Mihomo / 多内核切换',
        features: '现代图形界面、配置增强脚本与覆写管理，适合需要深度定制分流策略的用户',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/libnyanpasu/clash-nyanpasu/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
      {
        name: 'Hiddify',
        core: 'sing-box 核心',
        features: '多协议兼容、自动节点延迟优选、远程订阅配置，界面直观适合新手',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
      {
        name: 'Karing',
        core: 'sing-box 核心',
        features: '跨平台统一客户端，支持多机场订阅聚合管理与新手向导配置',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/KaringX/karing/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
      {
        name: 'Clash Mi',
        core: 'Mihomo 内核',
        features: '轻量跨平台 Mihomo 图形界面，原生支持 Clash YAML 订阅与分流策略',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/KaringX/clashmi/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
    ],
  },
  {
    id: 'macos',
    platform: 'macOS 苹果电脑客户端',
    badge: 'Apple Silicon (M1-M4) & Intel 双架构',
    seoKeywords: [
      'Mac Clash 客户端',
      'Clash Verge Rev Mac',
      'Apple Silicon 代理软件',
      'Surge Mac',
      'FlClash macOS',
    ],
    notice:
      'macOS 下载安装时请区分 Apple Silicon（aarch64 / arm64，适用于 M1/M2/M3/M4 芯片）与 Intel（x64）版本 .dmg 安装包，避免架构不匹配。',
    clients: [
      {
        name: 'Clash Verge Rev (macOS)',
        core: 'Mihomo 内核',
        features: '原生提供 aarch64 (M系列芯片) 与 x64 (Intel) 双架构 DMG 安装包，内置系统代理与增强 TUN 模式',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        downloadLabel: '下载 macOS 版 (.dmg) ↗',
        recommended: true,
      },
      {
        name: 'FlClash (macOS)',
        core: 'Mihomo 内核',
        features: '轻量化桌面体验，支持一键导入机场 Clash 订阅链接与自动延迟测速',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        downloadLabel: '下载 macOS 版 (.dmg) ↗',
        recommended: true,
      },
      {
        name: 'Clash Nyanpasu (macOS)',
        core: 'Mihomo 多内核',
        features: '支持 macOS 双架构图形化分流管理与自定义规则覆写',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/libnyanpasu/clash-nyanpasu/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
      {
        name: 'Hiddify / Karing (macOS)',
        core: 'sing-box 核心',
        features: '提供 macOS 图形化安装包，适合多协议混合订阅管理',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
      {
        name: 'Surge Mac',
        core: '自研高性能网络引擎',
        features: '专业级网络代理、MITM 抓包分析、增强模式与精细化规则控制（商业买断制软件）',
        sourceType: '官方网站',
        downloadUrl: 'https://nssurge.com/',
        downloadLabel: '访问 Surge 官网 ↗',
        recommended: false,
      },
      {
        name: 'sing-box for macOS (SFM)',
        core: '官方 sing-box',
        features: '官方原生客户端，适合使用标准 sing-box 配置体系的用户',
        sourceType: '官方文档',
        downloadUrl: 'https://sing-box.sagernet.org/clients/apple/',
        downloadLabel: '官方下载指南 ↗',
        recommended: false,
      },
    ],
  },
  {
    id: 'ios',
    platform: 'iPhone / iPad (iOS / iPadOS) 客户端',
    badge: '需非国区 Apple ID 登录 App Store 获取',
    seoKeywords: [
      'Shadowrocket 小火箭下载',
      'Stash iOS',
      'Quantumult X 圈X',
      'iPhone 机场订阅导入',
      'iOS VLESS 客户端',
    ],
    notice:
      'Shadowrocket、Stash、Quantumult X 等主流 iOS 客户端需使用美区或港区 Apple ID 登录 App Store 下载（部分为付费应用，实际售价以对应地区 App Store 为准）。',
    clients: [
      {
        name: 'Shadowrocket (小火箭)',
        core: '多协议规则引擎',
        features: 'iOS 普及率最高的代理工具，完整支持 VLESS、Trojan、Shadowsocks、Hysteria 2 及一键导入机场订阅',
        sourceType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
        downloadLabel: 'App Store 获取 ↗',
        recommended: true,
      },
      {
        name: 'Stash (iOS Clash)',
        core: 'Clash 兼容引擎',
        features: 'iOS 端原生 Clash 风格客户端，直接复用 Clash YAML 规则、策略组与覆写功能',
        sourceType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349',
        downloadLabel: 'App Store 获取 ↗',
        recommended: true,
      },
      {
        name: 'Quantumult X (圈 X)',
        core: '自研分流与重写引擎',
        features: '强大的分流策略、请求重写、自定义脚本与 DNS 分流能力',
        sourceType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/quantumult-x/id1443988620',
        downloadLabel: 'App Store 获取 ↗',
        recommended: false,
      },
      {
        name: 'Karing / Clash Mi (iOS)',
        core: 'sing-box / Mihomo',
        features: '外区 App Store 免费客户端，支持 Clash YAML 与多协议订阅一键导入',
        sourceType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/karing/id6472431552',
        downloadLabel: 'App Store 免费获取 ↗',
        recommended: true,
      },
      {
        name: 'Streisand',
        core: '多协议免费客户端',
        features: '支持 VLESS、VMess、Trojan、Hysteria 2 等主流协议与订阅链接',
        sourceType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/streisand/id6450534064',
        downloadLabel: 'App Store 获取 ↗',
        recommended: false,
      },
      {
        name: 'Surge iOS 5',
        core: '企业级网络调试内核',
        features: '顶级网络性能与流量分析工具，支持模块扩展与多策略组（含内购）',
        sourceType: 'App Store',
        downloadUrl: 'https://apps.apple.com/us/app/surge-5/id1442620678',
        downloadLabel: 'App Store 获取 ↗',
        recommended: false,
      },
    ],
  },
  {
    id: 'android',
    platform: 'Android 安卓手机 / 平板客户端',
    badge: 'GitHub 开源 APK · 支持分应用代理',
    seoKeywords: [
      'Clash Meta for Android',
      'FlClash 安卓下载',
      'v2rayNG 下载',
      '安卓机场客户端',
      'Hiddify Android',
    ],
    notice:
      '安全提醒：请直接点击下方按钮从 GitHub 官方 Release 页面下载安卓 .apk 安装包（主流手机选 arm64-v8a.apk）。NekoBox 官方已特别警告切勿下载 Google Play 上被第三方控制的同名版本。',
    clients: [
      {
        name: 'FlClash (Android)',
        core: 'Mihomo 内核',
        features: '界面清爽、完美兼容 Clash 订阅配置、支持分应用代理（Per-App Proxy）与自动测速',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        downloadLabel: '下载开源 APK ↗',
        recommended: true,
      },
      {
        name: 'v2rayNG',
        core: 'Xray 核心',
        features: '老牌轻量级安卓客户端，支持 VLESS、Trojan、VMess、Shadowsocks 订阅与二维码导入',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
        downloadLabel: '下载开源 APK ↗',
        recommended: true,
      },
      {
        name: 'Clash Meta for Android (CMFA)',
        core: 'Mihomo 系规则代理',
        features: '延续经典 Clash for Android 交互逻辑，支持 VLESS 与完整 Mihomo 分流规则',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases',
        downloadLabel: '下载开源 APK ↗',
        recommended: true,
      },
      {
        name: 'Hiddify (Android)',
        core: 'sing-box 核心',
        features: '一键自动连接、支持多种订阅格式转换，适合不熟悉规则配置的新手',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/hiddify/hiddify-app/releases',
        downloadLabel: '下载开源 APK ↗',
        recommended: false,
      },
      {
        name: 'NekoBox for Android',
        core: 'sing-box 核心',
        features: '多协议模块化安卓客户端（仅认准 GitHub 官方仓库，勿下 Google Play 同名版）',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases',
        downloadLabel: 'GitHub 官方仓库 ↗',
        recommended: false,
      },
      {
        name: 'sing-box for Android (SFA)',
        core: '官方 sing-box',
        features: '官方原生安卓客户端，适合原生 sing-box 协议与配置体系',
        sourceType: '官方文档',
        downloadUrl: 'https://github.com/SagerNet/sing-box/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
    ],
  },
  {
    id: 'linux-router',
    platform: 'Linux 桌面 & OpenWrt 软路由网关',
    badge: '透明代理 · 全屋设备免配置共享',
    seoKeywords: [
      'OpenClash 教程',
      'PassWall2 软路由',
      'Nikki OpenWrt',
      'Linux Clash Verge',
      'v2rayA 透明代理',
    ],
    notice:
      '软路由安装前需确认 OpenWrt 版本、CPU 架构及防火墙依赖（如 Nikki 明确要求 OpenWrt 24.10+）。注意：仅提供专属客户端的机场（如飞猫云、Firefly）不支持导入软路由，软路由用户请优先选择光速云、微风网络、星岛梦等支持通用订阅的品牌。',
    clients: [
      {
        name: 'OpenClash (OpenWrt)',
        core: 'Mihomo (Clash.Meta)',
        features: '软路由最主流的规则透明代理插件，支持 Fake-IP / Redir-Host、多订阅合并与覆写控制',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/vernesong/OpenClash/releases',
        downloadLabel: 'GitHub 开源下载 (.ipk) ↗',
        recommended: true,
      },
      {
        name: 'PassWall2',
        core: 'Xray / sing-box',
        features: '轻量高效透明代理方案，支持按域名/IP 精细分流与多节点负载均衡',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/xiaorouji/openwrt-passwall2/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: true,
      },
      {
        name: 'Nikki (OpenWrt 24.10+)',
        core: 'Mihomo 内核',
        features: '新一代 OpenWrt nftables 透明代理插件，配置现代简洁、资源占用低',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/nikkinikki-org/OpenWrt-nikki/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: true,
      },
      {
        name: 'Clash Verge Rev / FlClash (Linux)',
        core: 'Mihomo 内核',
        features: '提供 DEB / RPM / AppImage 桌面安装包，适配 Ubuntu、Debian、Arch 等主流发行版',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        downloadLabel: '下载 Linux 安装包 ↗',
        recommended: true,
      },
      {
        name: 'v2rayA',
        core: 'Xray / V2Ray Web GUI',
        features: '基于 Web 浏览器管理界面的透明代理工具，适合无桌面环境的 Linux 主机或旁路由',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/v2rayA/v2rayA/releases',
        downloadLabel: 'GitHub 开源下载 ↗',
        recommended: false,
      },
      {
        name: 'HomeProxy',
        core: 'ImmortalWrt sing-box',
        features: '基于 sing-box 的现代 OpenWrt 路由代理管理插件',
        sourceType: 'GitHub 开源',
        downloadUrl: 'https://github.com/immortalwrt/homeproxy',
        downloadLabel: 'GitHub 项目仓库 ↗',
        recommended: false,
      },
    ],
  },
];
