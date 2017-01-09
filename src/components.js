import m from 'mithril';
import {connect} from 'mithril-redux';
import {incrementAge, decrementAge, resetAge, openSidebar, closeSidebar} from './actions';

class _NameBox {
  view(ctrl, {name}) {
    return m('div', 'Hello ' + name);
  }
}

class _AgeBox {
  view(ctrl, {age}) {
    return m('div', [
        m('span', 'Age: ' + age),
        m('button', {onclick: ctrl.dec()}, 'Younger'),
        m('button', {onclick: ctrl.inc()}, 'Older'),
        m('button', {onclick: ctrl.reset()}, 'Reset')
    ]);
  }
}

class _SideBar {
  view(ctrl, {sidebar_open}) {
    return m('div', [
      m('div.sidebar.padding-medium' + (sidebar_open ? '.is-active' : ''), [
        m('button.btn-red', { onclick: ctrl.closeSidebar() }, 'Close'),
        m('p', 'The sidebar is ' + (sidebar_open ? 'open' : 'closed'))
      ]),
      m('button' + (sidebar_open ? '.btn-red' : '.btn-teal'), {
        onclick: sidebar_open ? ctrl.closeSidebar() : ctrl.openSidebar()
      }, sidebar_open ? 'Close sidebar' : 'Open sidebar')
    ]);
  }
}


export const SideBar = connect((state) => ({sidebar_open: state.sidebar_open}), {
  closeSidebar: closeSidebar,
  openSidebar: openSidebar
})(_SideBar);

export const NameBox = connect((state) => ({name: state.name}))(_NameBox);

export const AgeBox = connect((state) => ({age: state.age}), {
  inc: incrementAge,
  dec: decrementAge,
  reset: resetAge
})(_AgeBox);

