import type { App } from 'vue';
import './style.scss';
import { AdtButton, HelloWorld } from './components';

export default {
  install: (app: App) => {
    app.component('AdtButton', AdtButton);
    app.component('HelloWorld', HelloWorld);
  },
};

export { AdtButton, HelloWorld };
