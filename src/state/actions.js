export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export function openSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
    payload: true
  };
}

export function closeSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
    payload: false
  };
}
