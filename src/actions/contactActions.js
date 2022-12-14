import axios from 'axios';
import {
  DELETE_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from './types';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({ type: GET_CONTACTS, payload: res.data });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

export const deleteContact = id => async disptach => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    disptach({ type: DELETE_CONTACT, payload: id });
  } catch (e) {
    disptach({ type: DELETE_CONTACT, payload: id });
  }
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users`,
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data,
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data,
  });
};
