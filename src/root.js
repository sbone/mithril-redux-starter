import m from 'mithril';
import { SidebarContainer } from './SidebarContainer';

class Root {
  view() {
    return m('div', [SidebarContainer]);
  }
}

export default new Root();
