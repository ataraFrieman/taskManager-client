import React , { Component } from 'react';
import { connect } from 'react-redux'
import { getRole } from '../Utility/Utility'
import './Nav.css';


const logOut = () => {

  localStorage.clear();
  window.location.replace('/login');
}


class Nav extends Component {
  state ={
    open:false,
  }

  
  handleToggole = () => {
    this.setState({
      open:!this.state.open
    })
  }

  render(){


    return (

      <div className={'app-nav-root'}>
        main-nav
      </div>

    );
  }
}


const mapStateToProps = state => ({
 ...state
})


const mapDispatchToProps = dispatch => ({
 
})


export default connect(mapStateToProps,mapDispatchToProps)(Nav)

