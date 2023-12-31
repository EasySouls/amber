import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
var Routes = /* @__PURE__ */ ((Routes2) => {
  Routes2["HOME"] = "/";
  Routes2["DASHBOARD"] = "/dashboard";
  return Routes2;
})(Routes || {});
const css$2 = {
  code: "header.svelte-1bkcrea.svelte-1bkcrea{display:flex;align-items:center;justify-content:space-between;min-height:4rem;--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem\n}.title.svelte-1bkcrea.svelte-1bkcrea{font-size:1.875rem;line-height:2.25rem;font-weight:600;--tw-text-opacity:1;color:rgb(245 158 11 / var(--tw-text-opacity))\n}nav.svelte-1bkcrea.svelte-1bkcrea{display:flex;gap:0.5rem\n}nav.svelte-1bkcrea>a.svelte-1bkcrea{border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(217 119 6 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms\n}nav.svelte-1bkcrea>a.svelte-1bkcrea:hover{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(180 83 9 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const routes = [
    {
      name: "Főoldal",
      destination: Routes.HOME
    },
    {
      name: "Irányítópult",
      destination: Routes.DASHBOARD
    }
  ];
  $$result.css.add(css$2);
  return `<header class="svelte-1bkcrea"><div data-svelte-h="svelte-10mhaeg"><h1 class="title svelte-1bkcrea">Amber</h1></div> <nav class="svelte-1bkcrea">${each(routes, ({ destination, name }) => {
    return `<a${add_attribute("href", destination, 0)} class="svelte-1bkcrea">${escape(name)}</a>`;
  })}</nav> </header>`;
});
const css$1 = {
  code: "footer.svelte-18mcokv{margin-top:auto;display:flex;--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));padding:1rem\n}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-18mcokv" data-svelte-h="svelte-svjgl7"><div class=""></div> </footer>`;
});
const css = {
  code: "main.svelte-1ntd5t9{flex:1 1 auto;overflow:scroll\n}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="bg-slate-300 p-4 svelte-1ntd5t9">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
