import React from 'react'
import {Route, Link} from 'react-router-dom'
import Category from './Category'

//functional component 

const Categories = (props) => {
//no render, just return 
    return (
        <div>
            {props.categories.map(category =>
            <li key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
             </li> )}
        </div>
    )
}

export default Categories