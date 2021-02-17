import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
const protectedRoute  = ({component: Component, id, isLoggedIn, userData, ...rest}) => {
  console.log({component: Component, id, isLoggedIn, userData, ...rest})
    return (
      <Route
        {...rest}
        render={ props  => {
            if(id){
              return <Component {...props} id={id} user={userData} {...rest}/>
            } else {
              return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}
export default protectedRoute;