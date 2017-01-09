import m from 'mithril';
import {connect} from 'mithril-redux';
import {openSidebar, closeSidebar} from './actions';

class _SideBar {
  view(ctrl, {sidebar_open}) {
    return m('div', [
      m('div.sidebar.padding-medium' + (sidebar_open ? '.is-active' : ''), [
        m('button.btn-red', { onclick: ctrl.closeSidebar() }, 'Close')
      ]),
      m('button' + (sidebar_open ? '.btn-red' : '.btn-teal'), {
        onclick: sidebar_open ? ctrl.closeSidebar() : ctrl.openSidebar()
      }, sidebar_open ? 'Close sidebar' : 'Open sidebar'),
      m('p', `The sidebar is ${sidebar_open ? 'open' : 'closed'}`)
    ]);
  }
}


export const SideBar = connect((state) => ({sidebar_open: state.sidebar_open}), {
  closeSidebar: closeSidebar,
  openSidebar: openSidebar
})(_SideBar);

