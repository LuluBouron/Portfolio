import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6zb_5IeZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_pM2TeB3B.mjs');
const _page1 = () => import('./chunks/index_CfdLPgzb.mjs');
const _page2 = () => import('./chunks/404_DdbYu2fg.mjs');
const _page3 = () => import('./chunks/about_CHWzEX_e.mjs');
const _page4 = () => import('./chunks/work_BmkAs3E8.mjs');
const _page5 = () => import('./chunks/_.._3OxDatoX.mjs');
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
    "middlewareSecret": "13c10961-fe6f-41de-928e-895187bedff6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
