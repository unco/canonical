import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { N as Nav } from "../../chunks/nav.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<h1>Index</h1>
<p>This is the home page.</p>`;
});
export {
  Page as default
};
