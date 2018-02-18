import * as actions from '../../actions/shoppingList';

export function shoppingItems(state = [], action) {
  switch (action.type) {
    case actions.RECEIVE_ALL_ITEMS:
      return Object.assign({}, state, {
        items: action.items
      })
    // case actions.PANEL_IS_LOADING:
    //   return Object.assign({}, state, {
    //     isLoading: action.isLoading
    //   })
    // case actions.RECEIVE_SOLAR_PANELS:
    //   return Object.assign({}, state, {
    //     panels: action.panels
    //   })
    // case actions.RECEIVE_TOTAL_OUTPUT:
    //   return Object.assign({}, state, {
    //     totalOutput: action.output
    //   })
    default:
      return state;
  }
}

