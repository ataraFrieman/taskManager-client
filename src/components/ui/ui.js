/**
  * Main app UI COM
*/
import React  from 'react';
import { Link } from 'react-router-dom'
import { APP_NAME }  from '../../config';

import './ui.css';
export const Select =  ( props ) => {
  let name = props.name;
  let cssWrapperClass = 'form-input-wrapper input-' +  name + '-wrapper select-' +  name + '-wrapper' + props.cssClass;
  let cssInputClass = 'select-'+name +' '  ;
  let labelProp = props.label;
  let labelField  = '';
  let id = "ac-input-" + new Date().getTime();
  
  if ( labelProp !== undefined ) {
    cssWrapperClass += ' inputHasLabel '
    labelField = <label htmlFor={id}> {props.label} </label>
  }

  return (
    <div className={cssWrapperClass}>
      {labelField}
      <select onChange={props.change} name={props.name} className={cssInputClass}>
       {props.children};
      </select>
    </div>
  )
}

export const App_input = ( props ) => {
  const name = props.name != undefined ?   props.name : '';
  const label = props.label != undefined ?  props.label : '';
  const cssInputClass = props.cssInputClass != undefined ?   props.cssInputClass : '';

  const  id =  APP_NAME + "-input-" + new Date().getTime();
  let  cssWrapperClass =  APP_NAME + '-input-component  '+ APP_NAME + ' input-' +  name + '-component ' + cssInputClass;
  
  let  labelField  = '';
  if ( label !== '' ) {
    cssWrapperClass +=  APP_NAME + '-input-has-label ';
    labelField = 
      <label htmlFor={id}> 
        {label} 
      </label>
  }
  let  html =  
      <div className={cssWrapperClass} >
        {labelField}
        <input  id={id} 
          data-validation-type={props.validationType} 
          onClick={props.click} 
          onChange={props.handleChange} 
          onBlur = {props.handleBlur}
          type={props.type} 
          name={name} 
          className={cssInputClass} 
          placeholder={props.placeholder} 
          value={props.val} />
      </div>
  if ( props.type === "hidden" ) {
    html =  <input  type={props.type} name={name} className={cssInputClass} placeholder={props.placeholder} value={props.val}/>
  }
  return (  html   );
};

export const APP_DIV = (props ) => {
  const cssClass = props.cssClass != undefined ? props.cssClass : '';
  return(
    <div className={ APP_NAME + '-div-component ' + cssClass }>
      {props.children}
    </div>
  )
}
/**
  * APP Container component
*/
export const APP_Container = ( props ) => {
  const cssClass = props.cssClass != undefined ?   props.cssClass : '';
  return(
    <APP_DIV cssClass={ APP_NAME + '-flex-wrap ' + APP_NAME + '-container-component ' + cssClass}>
      {props.children}
    </APP_DIV>
  )
}
/**
  * APP Form component
*/
export const APP_Form = ( props ) => { 
  const cssClass  = props.cssClass != undefined ? props.cssClass : '';
  const id        = props.id != undefined ? props.id : '';
  const name      = props.name != undefined ? props.name : '';
  const action    = props.action != undefined ? props.action : '';
  const handleSubmit    = props.handleSubmit != undefined ? props.handleSubmit : () => {};
  return (
     <APP_DIV cssClass={ APP_NAME + '-form-component ' + cssClass}>
        <form id={id} name={name} action={action} onSubmit={handleSubmit}>
          {props.children}
        </form>
      </APP_DIV>
  )
}
/**
  * APP Row component
*/
export const APP_Row = ( props ) => {
  const cssClass  = props.cssClass != undefined ? props.cssClass : '';
  return (
    <APP_DIV cssClass={  APP_NAME + '-flex  ' + APP_NAME + '-flex-wrap ' + APP_NAME + '-row-component ' + cssClass}>
       {props.children}
    </APP_DIV>
  )
}

/**
  * APP Col component
*/
export const APP_Col = ( props ) => {
  const cssClass  = props.cssClass != undefined ? props.cssClass : '';
  return (
    <APP_DIV cssClass={  APP_NAME + '-col-component ' + cssClass}>
       {props.children}
    </APP_DIV>
  )
}
/**
  * APP form error display component
*/
export const App_Form_Error = (props) => {
   const cssClass  = props.cssClass != undefined ? props.cssClass : '';
   return (
    <APP_DIV cssClass={    APP_NAME + '-form-error-component ' + cssClass}>
       {props.children}
    </APP_DIV>
    )
}
/**
  * APP Title component
*/
export const APP_Title = (props) => { 
  const cssClass  = props.cssClass != undefined ? props.cssClass : '';
  const component  = props.component != undefined ? props.component : '';
  let html = 
  <h1>
    {props.children}
  </h1>
  
  if ( component === 'h2' ) {
    html =  <h2> {props.children} </h2>
  } else if ( component === 'h3' ) {
     html =  <h3> {props.children} </h3>
  } else if ( component === 'h4' ) {
     html =  <h4> {props.children} </h4>
  } else if ( component === 'h5' ) {
     html =  <h5> {props.children} </h5>
  } else if ( component === 'h6' ) {
     html =  <h6> {props.children} </h6>
  } 
  return (
    <APP_DIV cssClass={ APP_NAME + '-title-component ' + cssClass}>
       {html}
    </APP_DIV>
  )
}

export const App_Button = (props) => {
  const type  =  ( props.type  !== undefined  )   ?  props.type : "button" ;
  const to  =  ( props.to  !== undefined  )   ?  props.to : "" ;
  const primeryBg  =  ( props.primeryBg  !== undefined  )   ?  props.primeryBg : "" ;
  let cssClass  =  ( props.cssClass  !== undefined  )   ?  props.cssClass : "" ;
  if ( primeryBg === true ) {
      cssClass +=  APP_NAME +  '-primery-bg'
  }
  let typeHTML = null;
  let html = null;
  if  ( type === 'button' ) {
    html = 
      <button  type="button"  className={ APP_NAME + '-button-component ' + cssClass} onClick={props.click}>
        {props.children}
      </button>
      
  } 
  else if ( type == "link" ) {
    html = 
    <Link to={to} className={ APP_NAME + '-button-component ' + cssClass} >
      {props.children}
    </Link>
  }
  else if ( type == "submit" ){  
   html = 
      <button   className={ APP_NAME +  '-button-component ' + cssClass} onClick={props.click}>
        {props.children}
      </button>

  }



  return(html)
}


export const App_OpenMenuIcon = () => {
  return(
    <span className={APP_NAME +  '-open-menu-component '}>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-bars fa-w-14 fa-3x"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" class=""></path></svg>
    </span>
  )
}

export const App_CloseMenuIcon = () => {
  return(
    <span className={APP_NAME +  '-close-menu-component '}>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-3x"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
    </span>
  )
}



export const App_Logo = () => {
  return(
    <APP_DIV cssClass={ APP_NAME + '-logo-component ' }>
      <Link to="/">
        LOGO 
      </Link>   
    </APP_DIV>
  )
}