export default function categoryReducer(state = {categories: []}, action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return {categories: action.payload}
        case 'ADD_CATEGORIES':
            return {...state, categories: [...state.categories, action.payload]}
        case 'ADD_EVENT':
            let categories = state.categories.map(category => {
                if (category.id === action.payload.id) {
                  return action.payload
                } else {
                  return category
                }
              })
              return {...state, categories: categories}
        case 'DELETE_EVENT':
            let categoriesTwo = state.categories.map(category => {
                if (category.id === action.payload.id) {
                    return action.payload
                  } else {
                    return category
                  }
                })
            return {...state, categories: categoriesTwo}
        default:
            return state
        }     
}