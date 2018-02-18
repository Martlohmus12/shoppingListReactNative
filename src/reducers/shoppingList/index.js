import * as actions from '../../actions/shoppingList';

export function shoppingItems(state = [], action) {
  switch (action.type) {
    case actions.RECEIVE_ALL_ITEMS:
      return Object.assign({}, state, {
        items: action.items
      })
    default:
      return state;
  }
}

