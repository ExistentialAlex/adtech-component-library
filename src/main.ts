import type { App } from 'vue';
import styles from './style.scss';
import { HelloWorld } from './components';

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
  },
};

export { HelloWorld, styles };
