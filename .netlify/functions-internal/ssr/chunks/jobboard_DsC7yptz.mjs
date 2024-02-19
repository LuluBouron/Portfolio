import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du projet</h2>\n<blockquote>\n<p>’I do believe something magical can happen when you read a good book.’ <em>J.K Rowling</em></p>\n</blockquote>\n<p><em>Job Board</em> est une application de type job board permettant de publier des offres d’emploi avec les notions suivantes:</p>\n<ul>\n<li>Le titre de l’offre</li>\n<li>La description de l’offre</li>\n<li>Le salaire</li>\n<li>Le nom du service</li>\n<li>Une liste de compétences (sous forme de tags)</li>\n</ul>\n<h3 id=\"stack\">Stack</h3>\n<ul>\n<li>Symfony</li>\n<li>MySQL</li>\n<li>Tailwind CSS</li>\n</ul>";

				const frontmatter = {"title":"Job Board","publishDate":"2019-10-02T00:00:00.000Z","img":"/assets/jobboard.png","img_alt":"Job Board Landing Page.","description":"Application de type job board permettant de publier des offres d’emploi\n","tags":["Symfony","MySQL","Tailwind CSS"]};
				const file = "/home/parallels/Portfolio/src/content/work/jobboard.md";
				const url = undefined;
				function rawContent() {
					return "\n## Présentation du projet\n\n> 'I do believe something magical can happen when you read a good book.' *J.K Rowling*\n\n_Job Board_ est une application de type job board permettant de publier des offres d’emploi avec les notions suivantes:\n* Le titre de l’offre\n* La description de l’offre\n* Le salaire\n* Le nom du service\n* Une liste de compétences (sous forme de tags)\n\n### Stack\n\n* Symfony \n* MySQL\n* Tailwind CSS\n\n\n\n\n";
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
