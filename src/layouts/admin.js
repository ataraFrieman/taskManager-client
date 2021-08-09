import React from 'react';
import { APP_NAME } from '../config'
import MainLayout from './main'
import Nav from '../components/nav/nav';
import LeftNav from '../components/leftNav/leftNav';
import RightNav from '../components/rightNav/rightNav';

import {  APP_Container, 
          APP_Form,
          App_input,
          APP_Title,
          App_Button,
          APP_Row,
          App_Form_Error } from '../components/ui/ui';

import './admin.css';
/**
 * admin  layout
*/

export default function AdminLayout(props) {
  return (
    <MainLayout cssClass={ 'admin-page '  + APP_NAME +'-' + props.cssClass} >
      <Nav />
      <LeftNav />
      <RightNav /> 
      <APP_Container cssClass={ APP_NAME +'-' +'admin-page-main-container'}>
      	{props.children} 
      </APP_Container>
    </MainLayout>
  );
}