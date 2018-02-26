import axios from 'axios';
import config from '../../config.js';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';

export function receiveAllItems(items, message) {
  return {
    type: 'RECEIVE_ALL_ITEMS',
    items,
    message
  };
}

export function fetchItems(url, message) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then(function (items) {
        dispatch(receiveAllItems(items, message));
      })
      .catch((error) => console.log(error));
  };
}

export function newItem(url, name) {
  return function (dispatch) {
    axios.post(`${url}`, {'name': name})
      .then(response => {
        dispatch(fetchItems(config.url, 'item added'));
      })
  }
}

export function toggleStatus(url, id, status) {
  const _url = `${url}/${id}/${status}`;
  return function (dispatch) {
    axios.put(`${_url}`)
      .then(response => {
        dispatch(fetchItems(config.url, 'item checked/uncheced'));
      })
  }
}

export function deleteItem(url, id) {
  const _url = `${url}/${id}`;
  return function (dispatch) {
    axios.delete(`${_url}`, null)
      .then(response => {
        dispatch(fetchItems(config.url, 'item deleted'));
      })
  }
}

filterCheckedItems = (items) => {
  return items.filter(item => item.status == false);
}
