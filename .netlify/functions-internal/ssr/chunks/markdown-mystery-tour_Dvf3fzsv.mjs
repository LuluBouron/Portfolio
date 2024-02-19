import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DE_oLKV-.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h2 id=\"présentation-du-projet\">Présentation du projet</h2>\n<blockquote>\n<p>La contraception est l’affaire de tous.</p>\n</blockquote>\n<p><a href=\"https://maestra.surge.sh/\">Maestra</a> est un projet qui a pour but d’avoir des retours réels et authentiques de la part d’utilisatrices/eurs sur les différents moyens de contraception, en particularité la pilule contraceptive. Afin de simplifier l’expèrience utilisateur et d’informer une communauté, ce site permet de chercher et trier les pilules en fonction de critères prédéfinis, lire des avis/retours, ou encore d’ajouter son propre avis.</p>\n<h3 id=\"stack\">Stack</h3>\n<p>Pour le FrontOffice :</p>\n<ul>\n<li>React</li>\n<li>React Router DOM</li>\n<li>Axios</li>\n<li>Redux</li>\n<li>HTML / SCSS</li>\n</ul>\n<p>Pour le BackOffice :</p>\n<ul>\n<li>Symfony</li>\n</ul>";

				const frontmatter = {"title":"Maestra","publishDate":"2024-03-02T00:00:00.000Z","img":"/assets/maestra.png","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"Application web qui réportie les différents moyens de contraception\n","tags":["Symfony","React","Back-Office","Méthode Agile"]};
				const file = "/home/parallels/Portfolio/src/content/work/markdown-mystery-tour.md";
				const url = undefined;
				function rawContent() {
					return "\n## Présentation du projet\n\n> La contraception est l'affaire de tous.\n\n<a href=\"https://maestra.surge.sh/\">Maestra</a> est un projet qui a pour but d’avoir des retours réels et authentiques de la part d'utilisatrices/eurs sur les différents moyens de contraception, en particularité la pilule contraceptive. Afin de simplifier l'expèrience utilisateur et d'informer une communauté, ce site permet de chercher et trier les pilules en fonction de critères prédéfinis, lire des avis/retours, ou encore d'ajouter son propre avis.\n\n### Stack\n\nPour le FrontOffice :\n\n* React \n* React Router DOM \n* Axios \n* Redux \n* HTML / SCSS \n\nPour le BackOffice :\n* Symfony \n\n";
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
