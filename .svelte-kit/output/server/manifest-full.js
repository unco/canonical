export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carbon_fibre.webp","css/base.css","curvature-image.png","ep_naturalblack.png","fabric_1.webp","fake-header.png","favicon.png","glyphs/1.svg","glyphs/10.svg","glyphs/11.svg","glyphs/12.svg","glyphs/13.svg","glyphs/14.svg","glyphs/15.svg","glyphs/16.svg","glyphs/17.svg","glyphs/18.svg","glyphs/19.svg","glyphs/2.svg","glyphs/20.svg","glyphs/21.svg","glyphs/22.svg","glyphs/23.svg","glyphs/24.svg","glyphs/25.svg","glyphs/26.svg","glyphs/27.svg","glyphs/28.svg","glyphs/29.svg","glyphs/3.svg","glyphs/30.svg","glyphs/31.svg","glyphs/32.svg","glyphs/33.svg","glyphs/34.svg","glyphs/35.svg","glyphs/36.svg","glyphs/37.svg","glyphs/38.svg","glyphs/39.svg","glyphs/4.svg","glyphs/40.svg","glyphs/41.svg","glyphs/42.svg","glyphs/43.svg","glyphs/44.svg","glyphs/45.svg","glyphs/5.svg","glyphs/6.svg","glyphs/7.svg","glyphs/8.svg","glyphs/9.svg","levelup_ur.png","levelup_ux.png","levelup_vd.png","paper.png","so-white.png","textured_paper.png"]),
	mimeTypes: {".webp":"image/webp",".css":"text/css",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.a33a872a.js","app":"_app/immutable/entry/app.7b569c55.js","imports":["_app/immutable/entry/start.a33a872a.js","_app/immutable/chunks/index.7a29442e.js","_app/immutable/chunks/singletons.4819d713.js","_app/immutable/chunks/index.c6e5d921.js","_app/immutable/entry/app.7b569c55.js","_app/immutable/chunks/index.7a29442e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/leveling",
				pattern: /^\/leveling\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/toys",
				pattern: /^\/toys\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/toys/[toy]",
				pattern: /^\/toys\/([^/]+?)\/?$/,
				params: [{"name":"toy","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
