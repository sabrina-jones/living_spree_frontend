import React from 'react'
import EventInput from '../components/EventInput'
import Events from '../components/Events'

class EventsContainer extends React.Component {


  render() {
    return (
      <div>
          <EventInput category={this.props.category}/><br/>
          <Events events={this.props.category && this.props.category.events}/>
      </div>

    )

  }

}

export default EventsContainer