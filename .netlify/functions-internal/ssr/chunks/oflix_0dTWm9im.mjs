import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du projet</h2>\n<blockquote>\n<p>’Le cinéma est un mélange parfait de vérité et de spectable’. <em>F. Truffaut</em></p>\n</blockquote>\n<p>O’Flix est un service dérivé de Netflix permettant de voir des vidéos, des séries à la demande.</p>\n<h3 id=\"stack\">Stack</h3>\n<ul>\n<li>Symfony</li>\n<li>MySQL</li>\n</ul>";

				const frontmatter = {"title":"O'Flix","publishDate":"2022-12-02T00:00:00.000Z","img":"/assets/oflix.png","img_alt":"OFlix Landing Page","description":"Séries TV et bien plus dans cette application dérivée de Netflix.\n","tags":["Symfony","Back-Office","Backend"]};
				const file = "/home/parallels/Portfolio/src/content/work/oflix.md";
				const url = undefined;
				function rawContent() {
					return "\n\n## Présentation du projet\n\n> 'Le cinéma est un mélange parfait de vérité et de spectable'. *F. Truffaut*\n\nO'Flix</a> est un service dérivé de Netflix permettant de voir des vidéos, des séries à la demande.  \n\n### Stack\n\n* Symfony \n* MySQL\n\n\n\n\n\n";
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
