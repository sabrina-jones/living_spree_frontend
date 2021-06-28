import React from 'react'
import {connect} from 'react-redux';
import {fetchCategories} from '../actions/fetchCategories';
import Categories from '../components/Categories';
import Category from '../components/Category';
import CategoryInput from '../components/CategoryInput';
import {Route, Switch} from 'react-router-dom'

class CategoriesContainer extends React.Component{
    
    componentDidMount() {
        this.props.fetchCategories()
      }
    
    
    
    render (){
        return (
            <div>
              <Switch>
               <Route exact path='/categories/new' component={CategoryInput}/>
               <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/>}/>
               <Route exact path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories}/>}/>
               </Switch>
            </div>
        )
    }
}

//to see list of categories we map state to props
const mapStateToProps = state => {
    return {
      categories: state.categories
    }
  }

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)