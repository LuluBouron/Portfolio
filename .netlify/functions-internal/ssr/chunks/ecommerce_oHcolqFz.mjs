import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du <a href=\"https://github.com/LuluBouron/ecommerce\">projet</a></h2>\n<p>Création d’un site e-commerce complet en Symfony avec backoffice et plusieurs moyens de paiement (Carte CB, paypal …)</p>\n<h3 id=\"stack\">Stack</h3>\n<ul>\n<li>Symfony 6</li>\n<li>SQLite 3</li>\n<li>Bootstrap</li>\n<li>Javascript</li>\n</ul>";

				const frontmatter = {"title":"JStore","publishDate":"2024-03-03T00:00:00.000Z","img":"/assets/jstore.png","img_alt":"Jstore Landing Page","description":"Création d'un site e-commerce complet en Symfony avec backoffice et plusieurs moyens de paiement (Carte CB, paypal ...)\n","tags":["Symfony","Javascript","Back Office"]};
				const file = "/home/parallels/Portfolio/src/content/work/ecommerce.md";
				const url = undefined;
				function rawContent() {
					return "\n\n\n## Présentation du [projet](https://github.com/LuluBouron/ecommerce)\n\nCréation d'un site e-commerce complet en Symfony avec backoffice et plusieurs moyens de paiement (Carte CB, paypal ...)\n\n\n### Stack\n\n* Symfony 6\n* SQLite 3\n* Bootstrap\n* Javascript\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"présentation-du-projet","text":"Présentation du projet"},{"depth":3,"slug":"stack","text":"Stack"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
