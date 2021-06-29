import React from 'react'
import {connect} from 'react-redux'
import {addEvent} from '../actions/addEvent'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'



class EventInput extends React.Component {

    //holding values in local state
    state = {
        image_url:'',
        name:'',
        summary: '',
        when: '',
        time: '',
        where: ''
      }
    
  //to update state, when user input 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault() //prevents form from submitting before chance to do something w/ data
    this.props.addEvent(this.state, this.props.category.id)
    //to clear form put after submitting
    this.setState({
        image_url:'',
        name:'',
        summary: '',
        when: '',
        time: '',
        where: ''
    })
  }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Image   </label>
                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Name   </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Summary </label>
                    <input type="text" name="summary" value={this.state.summary} onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>When </label>
                    <input type="text" name="when" value={this.state.when} onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Time </label>
                    <input type="text" name="time" value={this.state.time} onChange={this.handleChange}/>
                    <br></br><br></br>
                    <label>Where </label>
                    <input type="text" name="where" value={this.state.where} onChange={this.handleChange}/>
                    <br></br><br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addEvent}) (EventInput)