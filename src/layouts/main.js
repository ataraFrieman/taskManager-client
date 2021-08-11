import React from 'react';
import keys from '../config/env/keys';
/**
 * Main co
*/

export default function MainLayout(props) {
  return (
    <main className={  keys.APP_NAME + '-main-component ' + keys.APP_NAME + '-page '  + keys.APP_NAME +'-' + props.cssClass} >
      {props.children} 
    </main>
  );
}