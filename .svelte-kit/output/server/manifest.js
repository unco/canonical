export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carbon_fibre.webp","css/base.css","curvature-image.png","ep_naturalblack.png","fabric_1.webp","favicon.png","paper.png","so-white.png","textured_paper.png"]),
	mimeTypes: {".webp":"image/webp",".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6e744b31.js","app":"_app/immutable/entry/app.14104ae3.js","imports":["_app/immutable/entry/start.6e744b31.js","_app/immutable/chunks/index.797063e1.js","_app/immutable/chunks/singletons.62e32381.js","_app/immutable/chunks/index.019425cd.js","_app/immutable/entry/app.14104ae3.js","_app/immutable/chunks/index.797063e1.js"],"stylesheets":[],"fonts":[]},
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
