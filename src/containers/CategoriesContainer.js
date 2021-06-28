import React from 'react'
import {connect} from 'react-redux';
import {fetchCategories} from '../actions/fetchCategories';
import Categories from '../components/Categories';
import CategoryInput from '../components/CategoryInput';
import {Route} from 'react-router-dom'



class CategoriesContainer extends React.Component{
    
    componentDidMount() {
        this.props.fetchCategories()
      }
    
    
    
    render (){
        return (
            <div>
               <Route path='/categories/new' component={CategoryInput}/>
               <Route exact path='/categories' render={() => <Categories categories={this.props.categories}/>}/>
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