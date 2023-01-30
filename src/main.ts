import type { App } from 'vue';
import './style.scss';
import { AdtMenu, AdtTextField, AdtButton, HelloWorld } from './components';

export default {
  install: (app: App) => {
    app.component('AdtMenu', AdtMenu);
    app.component('AdtTextField', AdtTextField);
    app.component('AdtButton', AdtButton);
    app.component('HelloWorld', HelloWorld);
  },
};

export { AdtMenu, AdtTextField, AdtButton, HelloWorld };
