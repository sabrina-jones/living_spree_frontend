export const deleteEvent = (eventId, categoryId) => {
    
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/categories/${categoryId}/events/${eventId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(category => dispatch({type: 'DELETE_EVENT', payload: category}))
    }
    
  }