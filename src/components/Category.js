import React from 'react'
import EventsContainer from '../containers/EventsContainer'

const Category = (props) => {
  console.log(props)

let category = props.categories[props.match.params.id - 1]

  return (
    <div>
    <h2>{category ? category.name : null} </h2>
     <EventsContainer category={category}/>
    </div>
  )

}


export default Category