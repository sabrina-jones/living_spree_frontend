export const addEvent = (event, categoryId) => {
    
    //async and use dispatch to dispatch to reducer
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/categories/${categoryId}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
      .then(response => response.json())
      .then(category => {
            dispatch({type: 'ADD_EVENT', payload: category})
        }
      )
    }
  }