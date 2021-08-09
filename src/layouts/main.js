import React from 'react';
import { APP_NAME } from '../config'
/**
 * Main co
*/

export default function MainLayout(props) {
  return (
    <main className={  APP_NAME + '-main-component ' + APP_NAME + '-page '  + APP_NAME +'-' + props.cssClass} >
      {props.children} 
    </main>
  );
}