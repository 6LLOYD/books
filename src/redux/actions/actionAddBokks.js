import { ADD_BOOKS, SUPPR_BOOKS, DELETE_ALL_BOOKS } from "../constants";

export const AddBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data, // object
  };
};

export const supprBook = (id) => {
  return {
    type: SUPPR_BOOKS,
    payload: id,
  };
};

export const deleteAllBooks = (id) => {
  return {
    type: DELETE_ALL_BOOKS,
  };
};
