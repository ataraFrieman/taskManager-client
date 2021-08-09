import React , { Component } from 'react';
import { connect } from 'react-redux'
import { APP_NAME } from '../../config';
import {  App_Button , APP_Container, App_Logo } from '../../components/ui/ui';
import {  cleanAll  } from '../../localStorage/localStorage';
import './nav.css';




const logOut = () => {
  cleanAll();
  window.location.href='/login';
}

class LeftNav extends Component {
  state = {
    open:false,
  }

  handleToggole = () => {
    this.setState({
      open:!this.state.open
    })
  }

  render(){

    const menuCssClass = this.state.open === true ? 'open' : '';
    return (

      <div className={APP_NAME +'-top-nav-component ' + menuCssClass}>
        <APP_Container cssClass={ APP_NAME +'-flexalign-center '+APP_NAME+'-justify-spacebetween'}>
          <App_Logo />
          <App_Button click={logOut}>
            log out
          </App_Button>
        </APP_Container>
      </div>

    );
  }
}


const mapStateToProps = state => ({
 ...state
})


const mapDispatchToProps = dispatch => ({
 
})


export default connect(mapStateToProps,mapDispatchToProps)(LeftNav)

