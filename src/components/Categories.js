import React from 'react'

//functional component 

const Categories = (props) => {
//no render, just return 
    return (
        <div>
            {props.categories.map(category => <li key={category.id}>{category.id} - {category.name}</li>)}
        </div>
    )
}

export default Categories