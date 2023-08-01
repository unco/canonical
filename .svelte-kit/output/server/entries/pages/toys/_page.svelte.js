import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { N as Nav } from "../../../chunks/nav.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<h1>Toys</h1>

<a href="/toys/suru">Suru</a><br>
<a href="/toys/love">With love</a><br>
<a href="/toys/glyph">Glyphs</a><br>`;
});
export {
  Page as default
};
