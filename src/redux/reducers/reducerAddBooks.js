import { ADD_BOOKS, SUPPR_BOOKS, DELETE_ALL_BOOKS } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: [],
};

const helperAddData = (action) => {
  return {
    id: uuidv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

const removeDataById = (state, id) => {
  const books = state.books.filter((book) => book.id !== id);
  return { ...state, books };
};

// Reducer
const reducerAddBooks = (state = initialState, action) => {
  if (localStorage.getItem("booksData")) {
    state = { books: JSON.parse(localStorage.getItem("booksData")) };
  }

  switch (action.type) {
    case ADD_BOOKS:
      const newState = {
        ...state,
        books: [...state.books, helperAddData(action)],
      };
      localStorage.setItem("booksData", JSON.stringify(newState.books));
      return newState;

    case SUPPR_BOOKS:
      const updatedState = removeDataById(state, action.payload);
      localStorage.setItem("booksData", JSON.stringify(updatedState.books));
      return updatedState;

    case DELETE_ALL_BOOKS:
      localStorage.removeItem("booksData");
      return { books: [] };
    default:
      return state;
  }
};

export default reducerAddBooks;
