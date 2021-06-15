import React from "react";
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import axios from 'axios';
import { Container } from "semantic-ui-react";
import Menu from "./components/Menu";
import BookCard from "./components/BookCard";
import { Card } from 'semantic-ui-react'

import './App.css'

class App extends React.Component {

  componentWillMount() {
    /**
     *   setBooks - получаем данные и передаем в него setBooks(data) 
     *   mapDispatchToProps отправляет запрос в actions и меняет isReady на true 
     * */
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>

          {!isReady ? 'Загрузка...' : books.map((book, i) => (
            <Card key={i}>
              <BookCard {...book} />
            </Card>))
          }

        </Card.Group>
      </Container>
    );
  }
}

// просто передает состояние из store
const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
