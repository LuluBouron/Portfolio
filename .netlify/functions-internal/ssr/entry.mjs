import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DQnz-TbH.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_pM2TeB3B.mjs');
const _page1 = () => import('./chunks/index_W2moCYx2.mjs');
const _page2 = () => import('./chunks/404_C7vnQunT.mjs');
const _page3 = () => import('./chunks/about_DJgS4IDi.mjs');
const _page4 = () => import('./chunks/work_Bd9ZmuEg.mjs');
const _page5 = () => import('./chunks/_.._D5dXeRD9.mjs');
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
    "middlewareSecret": "0c9d2d6b-9095-4be3-8238-b8038d727099"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
