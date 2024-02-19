import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_DE_oLKV-.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { b as $$Hero, a as $$BaseLayout } from './404_BRa7SVhx.mjs';
import { $ as $$ContactCTA } from './__Dim1t6aX.mjs';
/* empty css                          */

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

export { $$About as default, $$file as file, $$url as url };
