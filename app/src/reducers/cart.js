//корзина
// список всех продуктов и книг которые добавляем
const initialState = {
    items: []           // список книг - пока не получил данные он будет пустым
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload // добавляем новый объект в items
                ]
            }
        case "REMOVE_BOOK":
            return {
                ...state,
                items: state.items.filter(o => o.id != action.payload.id)
            }
        default:
            return state;
    }
}