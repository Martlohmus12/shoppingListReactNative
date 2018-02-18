import axios from 'axios';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
// export const PANEL_IS_LOADING = 'PANEL_IS_LOADING';

export function haveErrors(bool) {
  return {
    type: 'PANEL_HAVE_ERRORS',
    haveErrors: bool
  };
}

export function isLoading(bool) {
  return {
    type: 'PANEL_IS_LOADING',
    isLoading: bool
  };
}

export function receiveAllItems(items) {
  return {
    type: 'RECEIVE_ALL_ITEMS',
    items
  };
}

export function itemsFetchData(url) {
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
            dispatch({
                type: "RECEIVE_NEW_ITEM",
                payload: response.data
            })
        })
    }
}

export function toggleStatus(url, id) {
    const _url = url + "/" + id;
    console.log(_url);
    return function (dispatch) {
        axios.put(`${_url}`)
        .then(response => {
            dispatch({
                type: "TOGGLE_STATUS",
                payload: response.data
            })
        })
    }
}

export function deleteItem(url, id) {
    const _url = url + "/" + id;
    console.log(_url);
    return function (dispatch) {
        axios.delete(`${_url}`, null)
        .then(response => {
            dispatch({
                type: "ITEM_DELETED",
                payload: response.data
            })
        })
    }
}