import { c as create_ssr_component, d as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-mpq2ms_START -->${$$result.title = `<title>${escape(data.team.name)} - Amber</title>`, ""}<!-- HEAD_svelte-mpq2ms_END -->`, ""} <div><h3>${escape(data.team.name)}</h3> <p>Projects: ${escape(data.team.projects)}</p> <p>Issues: ${escape(data.team.issues)}</p></div>`;
});
export {
  Page as default
};
