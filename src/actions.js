export const INCREMENT_AGE = 'INCREMENT_AGE';
export const DECREMENT_AGE = 'DECREMENT_AGE';
export const RESET_AGE = 'RESET_AGE';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

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
    type: TOGGLE_SIDEBAR,
    value: true
  };
}

export function closeSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
    value: false
  };
}
