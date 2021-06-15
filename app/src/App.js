import React from "react";
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
// import books from './books.json';
import axios from 'axios';

class App extends React.Component {

  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          !books.length ? 'Загрузка...':
              books.map(book => (
                <li>
                  <b>{book.title}</b> {book.author}
                </li>
              ))
        }
      </ul>
    );
  }
}

// просто передает состояние из store
const mapStateToProps = ({ books }) => ({
  books: books.items
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
