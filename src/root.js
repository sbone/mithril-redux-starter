import m from 'mithril';
import {NameBox, AgeBox, SideBar} from './components';

class Root {
  view() {
    return m('div', [NameBox, AgeBox, SideBar]);
  }
}

export default new Root();
