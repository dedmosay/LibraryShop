import { connect } from 'react-redux';
import * as booksActions from '../actions/books';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import orderBy from 'lodash/orderBy';


// Показывает сортировку по типу
const sortBy = (books, filterBy) => {
    switch(filterBy){
        case 'all':         return books;
        case 'price_hight': return orderBy(books, 'price', 'desc')
        case 'price_low':   return orderBy(books, 'price', 'asc')
        case 'author':      return orderBy(books, 'author', 'asc')
        default:            return books;
    }
}

// просто передает состояние из store
const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
 