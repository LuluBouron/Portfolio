import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_DE_oLKV-.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { g as getCollection, $ as $$ContactCTA } from './__Dim1t6aX.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404_BRa7SVhx.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index_CBEs_BOf.mjs';

const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mes projets | LBDev", "description": "D\xE9couvrez les derniers projets sur lesquels j'ai pu travailler" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes projets ", "tagline": "D\xE9couvrez les derniers sur lesquels j'ai pu travailler.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/parallels/Portfolio/src/pages/work.astro", void 0);

const $$file = "/home/parallels/Portfolio/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
