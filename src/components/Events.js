import React from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../actions/deleteEvent'

const Events = (props) => {
    
   const handleDelete = (event) => {
       props.deleteEvent(event.id, event.category_id)
      }


    return(
        <div>
          {props.events && props.events.map(event =>
          <li key={event.id}> {event.name} - {event.when} - {event.where}  <img src={event.image_url} height="200" width="250"></img> 
           <button onClick={() => handleDelete(event)}>Delete</button>
          </li>
            )}
        </div>
    )
}

export default connect(null, {deleteEvent})(Events)