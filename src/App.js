import m from 'mithril';
import { Provider } from 'mithril-redux';
import configStore from './state/store';
import Layout from './components/Layout';

const store = configStore({
  sidebar: {
    isOpen: false
  }
});

m.mount(document.body, Provider.init(store, m, Layout));
