import type {TpPlugin} from 'tweakpane';

import {TweakpaneTextareaPlugin} from './plugin.js';

export const id = 'textarea';

export const css = '__css__';

// Export your plugin(s) as constant `plugins`
export const plugins: TpPlugin[] = [TweakpaneTextareaPlugin];
