import React , { Component } from 'react';
import { connect } from 'react-redux'
import {  Redirect } from 'react-router-dom'

import {  handleInputChange,
          regxValidation,
          simpleValidation } from '../../../utility/utility'

import AdminLayout from '../../../layouts/admin'
import { getDataFromStorage } from '../../../localStorage/localStorage'
import './admin.css';


class Admin extends Component {

  state = {
  
  }
  
  componentDidMount  = () => {

  }

  handleChange = () => {
    // handleInputChange(event)
  }

  handleSubmit = () => {}

  render(){
    return(
      <AdminLayout cssClass={'home-admin-page'}>
        <h1>
          admin
        </h1>
      </AdminLayout>
    )
  }
}




const mapStateToProps = state => ({

})


const mapDispatchToProps = dispatch => ({
 
})





export default connect(mapStateToProps,mapDispatchToProps)(Admin)