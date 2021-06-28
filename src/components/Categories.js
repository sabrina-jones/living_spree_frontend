import React from 'react'
import Category from './Category'

//functional component 

const Categories = (props) => {
//no render, just return 
    return (
        <div>
            {props.categories.map(category => <div key={category.id}><Category category={category}/></div>)}
        </div>
    )
}

export default Categories