export const INCREMENT_AGE = 'INCREMENT_AGE';
export const DECREMENT_AGE = 'DECREMENT_AGE';
export const RESET_AGE = 'RESET_AGE';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

export function incrementAge() {
  return {
    type: INCREMENT_AGE
  };
}

export function decrementAge() {
  return {
    type: DECREMENT_AGE
  };
}

export function resetAge() {
  return {
    type: RESET_AGE,
    age: 30
  };
}

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR,
    sidebar_open: true
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
    sidebar_open: false
  };
}
