import React from 'react'


class CategoryInput extends React.Component {


  state = {name: '' }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
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
                <input type="submit"/>
             </form>
            </div>
        )
    }
}

export default CategoryInput