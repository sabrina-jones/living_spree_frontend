//action creator
//dispatch here so connect doesn't automatically dispatch for us

export function fetchCategories() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/categories')
      .then(resp => resp.json())
      .then(categories => dispatch({  //dispatch updates redux store
        type: 'FETCH_CATEGORIES',
        payload: categories
      }))
    }
  }