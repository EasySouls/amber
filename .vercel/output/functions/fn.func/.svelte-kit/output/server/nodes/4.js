import * as server from '../entries/pages/_team_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_team_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[team]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.2SG0kgd9.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.J1rn3Mn3.js"];
export const stylesheets = [];
export const fonts = [];
