import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du projet</h2>\n<blockquote>\n<p>’I do believe something magical can happen when you read a good book.’ <em>J.K Rowling</em></p>\n</blockquote>\n<p>FreeReads est une application open source alternative pour GoodReads, permettant à un utilisateur de partager sa liste de lecture avec d’autres utilisateurs.</p>\n<h3 id=\"stack\">Stack</h3>\n<ul>\n<li>Symfony</li>\n<li>PostgreSQL</li>\n<li>Tailwind UI</li>\n<li>API Google Books</li>\n<li>Pipeline CI/CD</li>\n</ul>";

				const frontmatter = {"title":"FreeReads","publishDate":"2024-10-02T00:00:00.000Z","img":"/assets/freereads.png","img_alt":"FreeReads Landing Page","description":"Application open Source alternative pour GoodReads\n","tags":["Symfony","API"]};
				const file = "/home/parallels/Portfolio/src/content/work/freereads.md";
				const url = undefined;
				function rawContent() {
					return "\n  \n\n## Présentation du projet\n\n> 'I do believe something magical can happen when you read a good book.' *J.K Rowling*\n\nFreeReads est une application open source alternative pour GoodReads, permettant à un utilisateur de partager sa liste de lecture avec d'autres utilisateurs.\n\n\n### Stack\n\n* Symfony \n* PostgreSQL\n* Tailwind UI\n* API Google Books\n* Pipeline CI/CD\n\n";
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
