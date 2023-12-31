import * as server from '../entries/pages/users/_username_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/users/_username_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/users/[username]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.wOZdXm-7.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.J1rn3Mn3.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = ["_app/immutable/assets/3.RKr3ZV7m.css"];
export const fonts = [];
