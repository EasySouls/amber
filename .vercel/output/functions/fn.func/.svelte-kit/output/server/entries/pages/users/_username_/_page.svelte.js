import { c as create_ssr_component, d as escape, e as each, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
const avatar = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3cpath%20opacity='1'%20fill='%231E3050'%20d='M224%20256A128%20128%200%201%200%20224%200a128%20128%200%201%200%200%20256zm-45.7%2048C79.8%20304%200%20383.8%200%20482.3C0%20498.7%2013.3%20512%2029.7%20512H418.3c16.4%200%2029.7-13.3%2029.7-29.7C448%20383.8%20368.2%20304%20269.7%20304H178.3z'/%3e%3c/svg%3e";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { content } = $$props;
  let { author } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  return `<div class="bg-slate-800 border border-white rounded-lg"><h4>${escape(title)}</h4> <p>By
		${author === "" ? `Anonymous` : `<i>${escape(author)}</i>`}</p> <p>${escape(content)}</p></div>`;
});
const css = {
  code: ".user-page.svelte-1r83iad{display:flex;height:100%;width:100%;flex-direction:column\n}.info.svelte-1r83iad{display:flex;height:100%;width:25%;flex-direction:column;align-items:center;gap:0.5rem\n}.main.svelte-1r83iad{height:100%;width:75%;--tw-bg-opacity:1;background-color:rgb(71 85 105 / var(--tw-bg-opacity))\n}.avatar.svelte-1r83iad{aspect-ratio:1 / 1;width:66.666667%\n}.avatar-container.svelte-1r83iad{display:flex;height:15rem;width:15rem;align-items:center;justify-content:center;overflow:hidden;border-radius:9999px;border-width:1px;--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ez2jnl_START -->${$$result.title = `<title>${escape(data.user.name)}&#39;s profile</title>`, ""}<!-- HEAD_svelte-1ez2jnl_END -->`, ""} <main class="user-page svelte-1r83iad"><div class="main svelte-1r83iad">${each(data.user.posts, ({ title, content }) => {
    return `${validate_component(Post, "Post").$$render(
      $$result,
      {
        title,
        content,
        author: data.user.name || ""
      },
      {},
      {}
    )}`;
  })}</div> <div class="info svelte-1r83iad"><div class="avatar-container svelte-1r83iad">${data.user.image ? `<img${add_attribute("src", data.user.image, 0)} alt="avatar" class="${["svelte-1r83iad", "avatar"].join(" ").trim()}">` : `<img${add_attribute("src", avatar, 0)} alt="avatar" class="${["svelte-1r83iad", "avatar"].join(" ").trim()}">`}</div> <h2 class="text-2xl">${escape(data.user.name)}</h2></div> </main>`;
});
export {
  Page as default
};
