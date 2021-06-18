import { connect } from 'react-redux';
import * as booksActions from '../actions/books';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import orderBy from 'lodash/orderBy';


// Показывает сортировку по типу
const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'price_hight': return orderBy(books, 'price', 'desc')
        case 'price_low': return orderBy(books, 'price', 'asc')
        case 'author': return orderBy(books, 'author', 'asc')
        default: return books;
    }
}


// Фильтрует данные на входе 
const filterBooks = (books, searchQuery) => (
    books.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )
)

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
}

// просто передает состояние из store
const mapStateToProps = ({ books, filter }) => ({
    books:
        books.items &&
        searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
