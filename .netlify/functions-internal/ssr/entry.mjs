import { renderers } from './renderers.mjs';
<<<<<<< HEAD
import { manifest } from './manifest_6zb_5IeZ.mjs';
=======
import { manifest } from './manifest_CIIwROV0.mjs';
>>>>>>> 9b60b30acdc97c64b7197a5c6ac3e88b864d672c
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_pM2TeB3B.mjs');
<<<<<<< HEAD
const _page1 = () => import('./chunks/index_CfdLPgzb.mjs');
const _page2 = () => import('./chunks/404_DdbYu2fg.mjs');
const _page3 = () => import('./chunks/about_CHWzEX_e.mjs');
const _page4 = () => import('./chunks/work_BmkAs3E8.mjs');
const _page5 = () => import('./chunks/_.._3OxDatoX.mjs');
=======
const _page1 = () => import('./chunks/index_FIYrDoRL.mjs');
const _page2 = () => import('./chunks/404_C7vnQunT.mjs');
const _page3 = () => import('./chunks/about_DJgS4IDi.mjs');
const _page4 = () => import('./chunks/work_DglljH-J.mjs');
const _page5 = () => import('./chunks/_.._DpvO0uF2.mjs');
>>>>>>> 9b60b30acdc97c64b7197a5c6ac3e88b864d672c
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/work.astro", _page4],
    ["src/pages/work/[...slug].astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
<<<<<<< HEAD
    "middlewareSecret": "13c10961-fe6f-41de-928e-895187bedff6"
=======
    "middlewareSecret": "e4a0d158-2062-4ee4-9188-72e575e21143"
>>>>>>> 9b60b30acdc97c64b7197a5c6ac3e88b864d672c
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
