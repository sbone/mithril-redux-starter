import m from 'mithril';
import {Provider} from 'mithril-redux';
import configStore from './store';
import Root from './root';

const store = configStore({
  sidebar: {
    isOpen: false
  }
});

m.mount(document.body, Provider.init(store, m, Root));