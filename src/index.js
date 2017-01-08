import m from 'mithril';
import {Provider} from 'mithril-redux';
import configStore from './store';
import Root from './root';

const store = configStore({
  name: 'Dingleberry',
  age: 31,
  sidebar_open: false
});

m.mount(document.body, Provider.init(store, m, Root));