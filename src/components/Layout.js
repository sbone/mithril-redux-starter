import m from 'mithril';
import { SidebarContainer } from './SidebarContainer';

class Layout {
  view() {
    return m('div', [SidebarContainer]);
  }
}

export default new Layout();
