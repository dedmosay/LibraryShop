import React from "react";
import { connect } from 'react-redux';
import { setBooks } from './actions/books'

class App extends React.Component {
  render() {
    console.log(this.props)
    const { books } = this.props.books
    const { setBooks } = this.props

    // Изменени для примера
    const newBooks = [
      {
        id: 0,
        title: 'New Books ' + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
      }
    ]
    return (
      <div className="App">
        <header className="container">
          Learn React
          <h1>{books[0].title}</h1>
          <button onClick={setBooks.bind(this, newBooks)}>SET BOOKS</button>
        </header>
      </div>
    );
  }
}

// просто передает состояние из store
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
