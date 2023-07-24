export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carbon_fibre.webp","css/base.css","curvature-image.png","ep_naturalblack.png","fabric_1.webp","fake-header.png","favicon.png","levelup_ur.png","levelup_ux.png","levelup_vd.png","paper.png","so-white.png","textured_paper.png"]),
	mimeTypes: {".webp":"image/webp",".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.59020c65.js","app":"_app/immutable/entry/app.f5308c97.js","imports":["_app/immutable/entry/start.59020c65.js","_app/immutable/chunks/index.7a29442e.js","_app/immutable/chunks/singletons.07159359.js","_app/immutable/chunks/index.c6e5d921.js","_app/immutable/entry/app.f5308c97.js","_app/immutable/chunks/index.7a29442e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
