export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carbon_fibre.webp","css/base.css","curvature-image.png","ep_naturalblack.png","fabric_1.webp","fake-header.png","favicon.png","paper.png","so-white.png","textured_paper.png"]),
	mimeTypes: {".webp":"image/webp",".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.993226b0.js","app":"_app/immutable/entry/app.593fa18f.js","imports":["_app/immutable/entry/start.993226b0.js","_app/immutable/chunks/index.e9210eac.js","_app/immutable/chunks/singletons.c935fc09.js","_app/immutable/chunks/index.db4b0d72.js","_app/immutable/entry/app.593fa18f.js","_app/immutable/chunks/index.e9210eac.js"],"stylesheets":[],"fonts":[]},
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
