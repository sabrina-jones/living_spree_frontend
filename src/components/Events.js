import React from 'react'

const Events = (props) => {
    return(
        <div>
          {props.events && props.events.map(event =>
          <li key={event.id}> {event.name} - {event.when} - {event.where}  <img src={event.image_url} height="200" width="250"></img> 
           <button onClick={() => this.handleDelete(event)}>Delete</button>
          </li>
            )}
        </div>
    )
}

export default Events