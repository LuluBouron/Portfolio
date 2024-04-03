import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { g as getCollection, $ as $$Grid, a as $$PortfolioPreview } from './index_oLVD5jkN.mjs';
import { a as $$Hero, b as $$BaseLayout } from './404_D7Hj1ufZ.mjs';
import { a as $$ContactCTA } from './about_fDzBt4o4.mjs';

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
