import type { App } from 'vue';
import './style.scss';
import { AdtTextField, AdtButton, HelloWorld } from './components';

export default {
  install: (app: App) => {
    app.component('AdtTextField', AdtTextField);
    app.component('AdtButton', AdtButton);
    app.component('HelloWorld', HelloWorld);
  },
};

export { AdtTextField, AdtButton, HelloWorld };
