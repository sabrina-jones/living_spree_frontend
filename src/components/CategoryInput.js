import React from 'react'
import {connect} from 'react-redux'
import {addCategory} from '../actions/addCategory'


class CategoryInput extends React.Component {


  state = {name: '' }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addCategory(this.state)
    this.setState({
      name: ''
    })
  }
    
    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
                <label>Category Name: </label>
                <input type='text' placeholder='Add a new category' value={this.state.name} name="name" onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="submit"/>
                <br/>
                <br/>
             </form>
            </div>
        )
    }
}


export default connect(null, {addCategory})(CategoryInput)