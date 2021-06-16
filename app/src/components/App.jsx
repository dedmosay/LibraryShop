import React from "react";
import axios from 'axios';
import { Container } from "semantic-ui-react";
import Menu from "./Menu";
import BookCard from "./BookCard";
import { Card } from 'semantic-ui-react'
import Filter from "../containers/Filter";

import '../App.css'

class App extends React.Component {

  componentWillMount() {
    /**
     *   setBooks - получаем данные и передаем в него setBooks(data) 
     *   mapDispatchToProps отправляет запрос в actions и меняет isReady на true 
     * */
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => { setBooks(data) })
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
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


export default App;