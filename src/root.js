import m from 'mithril';
import {SideBar} from './components';

class Root {
  view() {
    return m('div', [SideBar]);
  }
}

export default new Root();
