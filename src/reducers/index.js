import { combineReducers } from 'redux';
import nav from './nav';
import { shoppingItems } from './shoppingList';

export default combineReducers({
  nav,
  shoppingItems
});
