import React, { useState } from "react";
import { connect } from "react-redux";
import {
  AddBook,
  supprBook,
  deleteAllBooks,
} from "../redux/actions/actionAddBokks";
import FlipMove from "react-flip-move";

const AddBooks = ({ libraryData, addBook, supprBook, deleteAll }) => {
  const initialState = {
    title: "",
    author: "",
  };
  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newData);
    setNewData(initialState); // Vider les champs de saisie après ajout
  };

  const displayData =
    libraryData.books.length > 0 ? (
      <FlipMove>
        {libraryData.books.map((data) => (
          <li
            key={data.id}
            className="list-group-item list-group-item-light d-flex justify-content-between mt-4"
          >
            <span>
              <strong>Titre: </strong>
              {data.title}
            </span>
            <span>
              <strong>Auteur: </strong>
              {data.author}
            </span>
            <span
              className="btn btn-danger"
              onClick={() => supprBook(data.id)} // Utiliser une fonction de rappel ici
            >
              X
            </span>
          </li>
        ))}
      </FlipMove>
    ) : (
      <p className="text-center mt-5">Aucune Data à afficher</p>
    );

  const deleteAllBooksBtn = libraryData.books.length > 0 && (
    <button className="btn btn-danger mt-4 mb-5" onClick={() => deleteAll()}>
      Effacer tous les livres
    </button>
  );

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">StorySphere</h1>
          <p>Ajouter un livre à votre bibliothèque</p>
          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Titre"
                value={newData.title}
                required
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Auteur"
                required
                value={newData.author}
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>
            <div className="form-group mt-3">
              <button className="btn btn-outline-secondary">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">{displayData}</ul>
            <div className="d-flex justify-content-center">
              {deleteAllBooksBtn}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(AddBook(param)),
    supprBook: (id) => dispatch(supprBook(id)),
    deleteAll: () => dispatch(deleteAllBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
