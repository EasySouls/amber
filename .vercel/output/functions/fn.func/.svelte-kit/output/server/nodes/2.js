

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.lWKC_CQp.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.J1rn3Mn3.js"];
export const stylesheets = ["_app/immutable/assets/2.Dhx8seYW.css"];
export const fonts = [];
