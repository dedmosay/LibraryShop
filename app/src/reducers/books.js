const initialState = {
    isReady: false,     // загрузка данных
    items: []         // список книг
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                    ...state,
                    items: action.payload,
                    isReady: true
            }
        case "SET_IS_READY": 
            return {
                isReady: action.payload,
                isReady: true,
            }
        default:
            return state;
    }
}
