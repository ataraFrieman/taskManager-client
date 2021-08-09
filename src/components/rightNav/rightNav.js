import React , { Component } from 'react';
import { connect } from 'react-redux'
import { APP_NAME } from '../../config';
import {  App_Button, App_OpenMenuIcon, App_CloseMenuIcon } from '../../components/ui/ui';
import './rightNav.css';




class RightNav extends Component {
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

       <div className={APP_NAME +'-side-nav-component ' + APP_NAME +'-right-nav-component ' + menuCssClass}>
        <App_Button click={this.handleToggole} cssClass={APP_NAME +'-nav-button-component' }>
        {
          this.state.open === true
          ? <App_CloseMenuIcon/>
          : <App_OpenMenuIcon />
        }
        </App_Button>
      </div>

    );
  }
}


const mapStateToProps = state => ({
 ...state
})


const mapDispatchToProps = dispatch => ({
 
})


export default connect(mapStateToProps,mapDispatchToProps)(RightNav)

