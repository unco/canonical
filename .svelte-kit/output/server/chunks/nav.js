import { c as create_ssr_component } from "./index2.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="/">Index</a>
	<a href="/leveling">Leveling</a>
	<a href="/suru">Suru</a></nav>`;
});
export {
  Nav as N
};
