import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".title.svelte-1mjb7pv{--tw-text-opacity:1;color:rgb(245 158 11 / var(--tw-text-opacity))\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1d4y3bd_START -->${$$result.title = `<title>Amber</title>`, ""}<!-- HEAD_svelte-1d4y3bd_END -->`, ""} <h1 class="title svelte-1mjb7pv" data-svelte-h="svelte-qir0t2">Amber</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
