import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DE_oLKV-.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du projet</h2>\n<blockquote>\n<p>Application de recettes en ligne.</p>\n</blockquote>\n<p>LaBase Food est une application web de recettes, permettant à un utilisateur donné de créer ses propres menus et recettes afin d’en garder une trace (avec les différentes étapes, instructions et ingrédients).</p>\n<h3 id=\"stack\">Stack</h3>\n<ul>\n<li>Ruby</li>\n<li>Rails</li>\n<li>PostgreSQL</li>\n<li>JavaScript</li>\n</ul>";

				const frontmatter = {"title":"LaBase Food","publishDate":"2024-03-02T00:00:00.000Z","img":"/assets/labasefood.png","img_alt":"LaBase Food Landing Page","description":"Développement d'une application web de recettes\n","tags":["Ruby On Rails","JavaScript","PostgreSQL"]};
				const file = "/home/parallels/Portfolio/src/content/work/nested/duvet-genius.md";
				const url = undefined;
				function rawContent() {
					return "\n## Présentation du projet\n\n> Application de recettes en ligne.\n\nLaBase Food</a> est une application web de recettes, permettant à un utilisateur donné de créer ses propres menus et recettes afin d'en garder une trace (avec les différentes étapes, instructions et ingrédients).\n\n\n### Stack\n\n* Ruby \n* Rails\n* PostgreSQL\n* JavaScript \n";
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
