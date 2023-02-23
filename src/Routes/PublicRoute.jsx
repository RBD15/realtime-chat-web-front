import React from 'react'
import { Route ,Navigate} from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    component:Component,...rest
}) => {
  return (
        <Route {...rest}
            component={(props)=>(
                (!isAuthenticated)
                ? <Component {...props} />
                : <Navigate to="/" />
            )}
        >
        </Route>
  )
}
