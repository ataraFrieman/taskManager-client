import React , { Component } from 'react';
import { connect } from 'react-redux'
import {  Redirect , Link } from 'react-router-dom'
import MainLayout from '../../layouts/main'
import { logInUser } from '../../actions/login.actions';
import {  handleInputChange,
          regxValidation,
          simpleValidation,
          isUserLoggedIn,
          authRedirect } from '../../utility/utility'


import {  APP_Container, 
          APP_Form,
          App_input,
          APP_Title,
          App_Button,
          APP_Row,
          App_Form_Error } from '../../components/ui/ui';

import './login.css';



class Login extends Component {
  // class state
  state = {

    username: '',
    password:'',
    err:[]
  
  }


  cleanErrors = () => {
    this.setState({
      err:[]
    })
  }

  handleSubmit = (event) => {
    let err = [];
    event.preventDefault();
    this.cleanErrors()
    const userNameError = 'Please Your user name';
    const passwordError = 'Please Enter your password';
    const validUserName = simpleValidation({
      val : this.state.username ,
    });

    if ( validUserName != true ) {
      err.push('Please Enter Your user name');
    }

    const validPass = simpleValidation({
      val : this.state.password ,
    });

    if ( validPass != true ) {
      err.push('Please Enter Your password');
    }

    if ( err.length === 0) {
      /*
        do ajax this 
        this pass to the class via prop thanks to redux
        you can modify this action in /actions/login.actions.js
      */
      this.props.logInUser({
        username: this.state.username,
        password: this.state.password,
      });
    } else {
      this.setState({
        err:err
      })
    } 
    
  }

  /**
   * handle input state change
  */
  handleChange = (event) => {
    // console.log('asd');
    const o = handleInputChange(event);
    this.setState({
      [o.name]: o.value
    });    
  }
  render(){
    let html = null;
    if ( this.props.login.response === true && this.props.login.token != '' || isUserLoggedIn() ) {
        authRedirect();
    }else {
       html = 
        <MainLayout  cssClass={'page-login'}>
          <APP_Container>
            <APP_Row>
              <APP_Title component="h2">
                  login page
              </APP_Title>
            </APP_Row>
            <APP_Row>
              <APP_Form handleSubmit={this.handleSubmit} >
                <App_input  name={'username'} 
                            placeholder = {'Enter your username'}
                            handleChange={this.handleChange} 
                            val={this.state.username} />
                <App_input  name={'password'} 
                            placeholder = {'Enter your password'}
                            handleChange={this.handleChange} 
                            val={this.state.password} />
                <App_Button type="submit">
                  log in
                </App_Button>
              </APP_Form>
              <App_Form_Error>
                { 
                  this.state.err.map((err) => {
                    return <p>{err}</p>
                  })
                }
              </App_Form_Error>
            </APP_Row>
          </APP_Container>
        </MainLayout>
      
    }


   

    return(html)
  }
}




const mapStateToProps = state => ({
 login: state.login
})


const mapDispatchToProps = dispatch => ({
 logInUser: (data) => dispatch(logInUser(data))
})





export default connect(mapStateToProps,mapDispatchToProps)(Login)