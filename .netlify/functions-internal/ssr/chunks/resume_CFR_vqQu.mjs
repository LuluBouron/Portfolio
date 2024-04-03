import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DCpfEMFm.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du <a href=\"https://github.com/LuluBouron/resume\">projet</a></h2>\n<p><em>Resume</em> est une une version “web” de mon CV, en utilisant le standard JsonResume,\nafin de rendre un CV facilement modifiable et maintenable.</p>\n<h3 id=\"stack\">Stack</h3>\n<ul>\n<li>Symfony</li>\n<li>Tailwind CSS</li>\n<li>HyperUI / AlpineJS</li>\n</ul>";

				const frontmatter = {"title":"Web Resume","publishDate":"2024-01-19T00:00:00.000Z","img":"/assets/cv.png","img_alt":"Resume Landing Page.","description":"Création d'une version \"web\" de mon CV, en utilisant le standard JsonResume.\n","tags":["Symfony","JSON","Tailwind CSS"]};
				const file = "/home/parallels/Portfolio/src/content/work/resume.md";
				const url = undefined;
				function rawContent() {
					return "\n## Présentation du [projet](https://github.com/LuluBouron/resume)\n\n\n_Resume_ est une une version \"web\" de mon CV, en utilisant le standard JsonResume,\nafin de rendre un CV facilement modifiable et maintenable.\n\n### Stack\n\n* Symfony \n* Tailwind CSS\n* HyperUI / AlpineJS\n\n\n\n\n";
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
