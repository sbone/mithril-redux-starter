import m from 'mithril';

class SidebarView {
  view(dispatcher, { sidebar }) {
    return m('div', [
      m('div.sidebar.padding-medium' + (sidebar.isOpen ? '.is-active' : ''), [
        m('button.btn-red', { onclick: dispatcher.closeSidebar() }, 'Close')
      ]),
      m('button' + (sidebar.isOpen ? '.btn-red' : '.btn-teal'), {
        onclick: sidebar.isOpen ? dispatcher.closeSidebar() : dispatcher.openSidebar()
      }, sidebar.isOpen ? 'Close sidebar' : 'Open sidebar'),
      m('p', `The sidebar is ${sidebar.isOpen ? 'open' : 'closed'}`)
    ]);
  }
}

export default SidebarView;
