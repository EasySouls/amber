

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BhZnnAzA.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.J1rn3Mn3.js","_app/immutable/chunks/singletons.HwD2X3c9.js"];
export const stylesheets = [];
export const fonts = [];
