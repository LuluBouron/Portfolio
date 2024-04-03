import { A as AstroError, l as UnknownContentCollectionError, d as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, f as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, e as addAttribute, h as renderSlot } from '../astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Icon, a as $$Hero, b as $$BaseLayout } from './404_D7Hj1ufZ.mjs';
import { $ as $$CallToAction, a as $$ContactCTA } from './about_fDzBt4o4.mjs';
/* empty css                          */
/* empty css                          */
/* empty css                          */

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/ecommerce.md": () => import('../ecommerce_DMJTP9iN.mjs'),"/src/content/work/freereads.md": () => import('../freereads_BgyAdJby.mjs'),"/src/content/work/jobboard.md": () => import('../jobboard_Wa1tVj8_.mjs'),"/src/content/work/maestra.md": () => import('../maestra_COSmDvqT.mjs'),"/src/content/work/nested/labasefood.md": () => import('../labasefood_C39mHi8N.mjs'),"/src/content/work/oflix.md": () => import('../oflix_DqKp3KYi.mjs'),"/src/content/work/resume.md": () => import('../resume_BK1qoU1n.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"ecommerce":"/src/content/work/ecommerce.md","freereads":"/src/content/work/freereads.md","jobboard":"/src/content/work/jobboard.md","maestra":"/src/content/work/maestra.md","oflix":"/src/content/work/oflix.md","resume":"/src/content/work/resume.md","nested/labasefood":"/src/content/work/nested/labasefood.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/ecommerce.md": () => import('../ecommerce_3uBF1XGf.mjs'),"/src/content/work/freereads.md": () => import('../freereads_kJGP4LTo.mjs'),"/src/content/work/jobboard.md": () => import('../jobboard_CwaPqjw2.mjs'),"/src/content/work/maestra.md": () => import('../maestra_DLoYo8K-.mjs'),"/src/content/work/nested/labasefood.md": () => import('../labasefood_hHNWeJLC.mjs'),"/src/content/work/oflix.md": () => import('../oflix_3u2NoT2P.mjs'),"/src/content/work/resume.md": () => import('../resume_BieiRpXy.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$5 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/home/parallels/Portfolio/src/components/Grid.astro", void 0);

const $$Astro$4 = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-2qeywk4b>${renderSlot($$result, $$slots["default"])}</div> `;
}, "/home/parallels/Portfolio/src/components/Pill.astro", void 0);

const $$Astro$3 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "/home/parallels/Portfolio/src/components/PortfolioPreview.astro", void 0);

const $$Astro$2 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Backend</h2> <p data-astro-cid-ab4ihpzs> <img src="/assets/logos/php.png" alt="logo php" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/symfony.png" alt="logo symfony" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/rails.png" alt="logo rails" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/ruby.png" alt="logo ruby" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/laravel.png" alt="logo laravel" width="45" height="45" data-astro-cid-ab4ihpzs> </p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "code-block", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Frontend</h2> <p data-astro-cid-ab4ihpzs> <img src="/assets/logos/tailwind.png" alt="logo tailwind" width="50" height="50" data-astro-cid-ab4ihpzs> <img src="/assets/logos/javascript.png" alt="logo js" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/typescript.png" alt="logo typescript" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/angular.png" alt="logo angular" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/react.png" alt="logo react" width="45" height="45" data-astro-cid-ab4ihpzs> </p> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": "database", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>Cloud, CI/CD & Database</h2> <p data-astro-cid-ab4ihpzs> <img src="/assets/logos/sql.png" alt="logo sql" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/mysql.png" alt="logo mysql" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/postgresql.png" alt="logo postgresql" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/aws.png" alt="logo aws" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/docker.png" alt="logo docker" width="45" height="45" data-astro-cid-ab4ihpzs> <img src="/assets/logos/git.png" alt="logo git" width="45" height="45" data-astro-cid-ab4ihpzs> </p> </div> </section> `;
}, "/home/parallels/Portfolio/src/components/Skills.astro", void 0);

const $$Astro$1 = createAstro();
const $$SoftSkills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SoftSkills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-2lkzageo> <div class="stack gap-2 lg:gap-4" data-astro-cid-2lkzageo> ${renderComponent($$result, "Icon", $$Icon, { "icon": "stack", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-2lkzageo": true })} <h2 data-astro-cid-2lkzageo>Full Stack</h2> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-2lkzageo> ${renderComponent($$result, "Icon", $$Icon, { "icon": "hand-heart", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-2lkzageo": true })} <h2 data-astro-cid-2lkzageo>Team Player</h2> </div> <div class="stack gap-2 lg:gap-4" data-astro-cid-2lkzageo> ${renderComponent($$result, "Icon", $$Icon, { "icon": "clipboard-text", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-2lkzageo": true })} <h2 data-astro-cid-2lkzageo>Organisation & autonomie</h2> <p data-astro-cid-2lkzageo></p> </div> </section> `;
}, "/home/parallels/Portfolio/src/components/SoftSkills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Lucile Bouron", "tagline": "D\xE9veloppeuse back-end", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} PHP ` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Symfony ` })} </div> <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "icon": "read-cv-logo", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} <a class="resume" href="/assets/CV_LB_2023_FR.pdf" style="text-decoration: none; 
							" data-astro-cid-j7pv25f6>
Télécharger mon CV
</a> ` })} </div> ` })} <img alt="Lucile Bouron photo portrait" src="/assets/lulu3.png" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "SoftSkills", $$SoftSkills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Projets</h3> <p data-astro-cid-j7pv25f6></p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Tout voir
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "/home/parallels/Portfolio/src/pages/index.astro", void 0);

const $$file = "/home/parallels/Portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, $$Pill as b, getCollection as g, index as i };
