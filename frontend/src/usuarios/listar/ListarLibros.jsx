import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { delBooks, getBooks } from "../requests";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "reactstrap";
import "./ListarLibros.css";

const ListarLibros = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const book = await getBooks();
      setBooks(book);
    }
    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    await delBooks(id);
    const book = await getBooks();
    setBooks(book);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectBook, setSelectBook] = useState({
    id: "",
    title: "",
    body: "",
  });
  const selectBooks = (values, caso) => {
    setSelectBook(values);
    console.log(values);
    setModalOpen(true);
  };
  return (
    <Container>
      <br />
      <NavLink to="../crearusuario">
        <Button className="btn btn-success">Create</Button>
      </NavLink>
      <br />
      <Table className="table table-bordered">
        <thead>
          <tr>
            <th>Tiltle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((values) => (
            <tr key={values.userId}>
              <td>{values.title}</td>
              <td>
                <Button
                  onClick={() => deleteBook(values.id)}
                  className="btn btn-danger"
                >
                  Delete
                </Button>
                <Button
                  onClick={() => selectBooks(values)}
                  className="btn btn-info"
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modalOpen}>
        <ModalHeader>
          <div>
            <h3>Details</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Id</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={selectBook && selectBook.id}
            />
            <br />
            <label>title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={selectBook && selectBook.title}
            />
            <br />
            <label>body</label>
            <input
              className="form-control"
              type="text"
              name="body"
              value={selectBook && selectBook.body}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-danger"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ListarLibros;
