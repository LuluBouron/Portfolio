import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, f as renderComponent } from '../astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { $ as $$Icon, a as $$Hero, b as $$BaseLayout } from './404_BIDYy_rn.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/home/parallels/Portfolio/src/components/CallToAction.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Envie de travailler ensemble ?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:lucilebouron.dev@gmail.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Ecrivez-moi !
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "/home/parallels/Portfolio/src/components/ContactCTA.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "A propos | LBdev", "description": "A propos de Lucile Bouron LBDEV", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "\xC0 propos", "tagline": "", "data-astro-cid-kh7btl4r": true })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Parcours</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
En quelques mots, j’ai fait des études littéraires
						et internationales, puis je me suis orientée dans le monde
						de l’édition où j’ai ensuite travaillé au département des droits
						étrangers aux Editions Albin Michel Jeunesse puis aux
						Editions Gallimard à Paris pendant deux ans. <br data-astro-cid-kh7btl4r>
Après ces expériences et suite à un changement de vie, 
						j'ai décidé de m’orienter vers le métier
						passionnant de développeur web. <br data-astro-cid-kh7btl4r> </p> <p data-astro-cid-kh7btl4r>
J'ai fait une
						pause dans ma carrière professionnelle afin de m'occuper
						de mon enfant, période pendant laquelle j'ai maintenu et
						affiné mes compétences techniques tout en restant à
						l'affût des dernières tendances du secteur.
						Je suis à la recherche d'une opportunité de développeur
						back-end junior, offrant un engagement pour l'excellence
						et une capacité à collaborer au sein d'équipes orientées
						vers la réalisation d'objectifs communs.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Formation</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Développement web et web mobile (Ecole O'Clock)</p> <p data-astro-cid-kh7btl4r>Master Commercialisation du Livre (Paris XIII)</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>Curieuse, Autonome, Polyvalente, Organisée</p> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "/home/parallels/Portfolio/src/pages/about.astro", void 0);

const $$file = "/home/parallels/Portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CallToAction as $, $$ContactCTA as a, about as b };
