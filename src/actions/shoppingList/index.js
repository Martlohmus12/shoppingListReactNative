import axios from 'axios';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';

export function receiveAllItems(items) {
  return {
    type: 'RECEIVE_ALL_ITEMS',
    items
  };
}

export function fetchItems(url) {
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
        dispatch(receiveAllItems(items));
      })
      .catch((error) => dispatch(haveErrors(error)));
  };
}

export function newItem(url, action) {
  return function (dispatch) {
    axios.post(`${url}`, action)
      .then(response => {
        dispatch(fetchItems('http://localhost:3000/api/items'));
      })
  }
}

export function toggleStatus(url, id, status) {
  const _url = url + "/" + id + "/" + status;
  return function (dispatch) {
    axios.put(`${_url}`)
      .then(response => {
        dispatch(fetchItems('http://localhost:3000/api/items'));
      })
  }
}

export function deleteItem(url, id) {
  const _url = url + "/" + id;
  return function (dispatch) {
    axios.delete(`${_url}`, null)
      .then(response => {
        dispatch(fetchItems('http://localhost:3000/api/items'));
      })
  }
}

