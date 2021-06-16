const initialState = {
    isReady: false,     // загрузка данных
    items: [],           // список книг - пока не получил данные он будет пустым
    filterBy: 'all'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                ...state,
                items: action.payload,
                isReady: true
            }
        case "SET_FILTER":
            return {
                ...state,
                filterBy: action.payload,
            }
        case "SET_IS_READY":
            return {
                isReady: action.payload,
            }
        default:
            return state;
    }
}