import React from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../actions/deleteEvent'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'

const Events = (props) => {
    
   const handleDelete = (event) => {
       props.deleteEvent(event.id, event.category_id)
      }


    return(
        <div>
          {props.events && props.events.map(event =>
          <Container>
             <br></br>
             <img src={event.image_url} height="200" width="250"></img> 
             <br></br>
             <Typography variant= "h6" align ="left" color = "primaryText" paragraph> {event.name}  </Typography>
              {event.when} <br></br>
              {event.where} <br></br>
              <br></br>
             <button onClick={() => handleDelete(event)}>Delete</button>
          </Container> 
            )}
        </div>
    )
}

export default connect(null, {deleteEvent})(Events)