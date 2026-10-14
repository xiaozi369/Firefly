import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "欢迎来到晓子ya的小屋",

	// 公告内容
	content:
		"很高兴在这里遇见你 ✨ 这里记录我的技术折腾与生活碎片，愿你能找到有用的东西。慢慢逛，随便坐～",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "认识一下",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
