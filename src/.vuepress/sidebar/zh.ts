import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	"/": [
		  "",
		// "intro",
		// "slides",
		// {
		// 	text: "如何使用",
		// 	icon: "creative",
		// 	prefix: "demo/",
		// 	link: "demo/",
		// 	children: "structure",
		// },
		// {
		// 	text: "文章",
		// 	icon: "note",
		// 	prefix: "posts/",
		// 	children: "structure",
		// },
		{
			text: "随笔",
			icon: "note",
			prefix: "note/",
			children: "structure",
		},
	],
});