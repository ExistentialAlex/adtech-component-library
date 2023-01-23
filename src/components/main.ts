import type { App } from 'vue';
import { HelloWorld } from '.';

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
  },
};

export { HelloWorld };
