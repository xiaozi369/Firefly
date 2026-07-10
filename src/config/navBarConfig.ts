import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
	];

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			// 归档
			LinkPresets.Archive,

			// 分类
			LinkPresets.Categories,

			// 标签
			LinkPresets.Tags,
		],
	});

	// 友链
	links.push(LinkPresets.Friends);

	// 留言板
	links.push(LinkPresets.Guestbook);

	// 我的及其子菜单
	links.push({
		name: "我的",
		url: "#",
		icon: "material-symbols:person",
		children: [
			// 相册
			LinkPresets.Gallery,

			// 追番
			LinkPresets.Anime,

			// 番组计划
			LinkPresets.Bangumi,
		],
	});

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		children: [
			// 打赏
			LinkPresets.Sponsor,

			// 关于页面
			LinkPresets.About,
		],
	});

	// 自定义导航栏链接
	links.push({
		name: "链接",
		url: "#",
		icon: "material-symbols:link",
		// 子菜单
		children: [
			{
			     name: "GitHub",
			     url: "https://github.com/xiaozi369",
			     external: true,
			     icon: "fa7-brands:github",
			    },
			{
			         name: "QQ交流群",
			         url: "https://qun.qq.com/universal-share/share?ac=1&authKey=jBJhaO8p7H0NutTLekK5OpF8flArbZO1WBbV9/zyw6d3lc1TEgjV6IH14Ssd3vCp&busi_data=eyJncm91cENvZGUiOiI5MzkyMjY1OTUiLCJ0b2tlbiI6InlXN1UvbzNzR25NZHA1ZHVLV1BaMUNGdlhkMk4wWmlpMWdRSVBndTMySXB0eFR3REpYR0VFdUdCcmtheWxSVDgiLCJ1aW4iOiIxNDE0ODcxNTY5In0=&data=hZ9woQKpf-e-f8zhqKdKEthDm4887gUPOTVp4WuYfYEGWzLFSTH9Y_imfkm8EaNOUISIRTBDRckbyt5yDY1pPg&svctype=4&tempid=h5_group_info",
			         external: true,
			         icon: "fa7-brands:qq",
			        },
			    {
			         name: "QQ交流2群",
			         url: "https://qun.qq.com/universal-share/share?ac=1&authKey=smyJq32pfsd%2BD8ahqD4gS3sbVkD5EWjiakBe0lCnaCr30RVUmcDwzf5RB3uQi6MO&busi_data=eyJncm91cENvZGUiOiIxMDc2NjczODk3IiwidG9rZW4iOiJFK0NxeitIZzhtWmhwaDRtR05mKzBnQTBWT2hCOTRQWmtaZm9BYzVPc2xnc1ZUNFdyYVpTS0w5WS9JMS91WUY3IiwidWluIjoiMTQxNDg3MTU2OSJ9&data=RRXd8tZgGWgxa_kRQIcazJhQAqCc-X4SRq9fnSJdkJ-iukLX9Xcez35uR3nqFD22F_2QE85sECLzSc0kHt_Ttw&svctype=4&tempid=h5_group_info",
			         external: true,
			         icon: "fa7-brands:qq",
			        },
			   ],
	});

	// 文档链接
	// links.push({
	// 	name: "文档",
	// 	url: "https://docs-firefly.cuteleaf.cn",
	// 	external: true,
	// 	icon: "material-symbols:docs",
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:group",
		pageKey: "friends",
	},
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Anime: {
		name: "追番",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
