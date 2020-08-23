import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        // isAuthenticated ? (
        //     <Redirect to="/adashboard" />           
        // ): (
            // <Component {...props} />
            <Redirect to="/" />
        // )
    )} />
)

// const mapStatetoProps = (state) => ({
//     isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStatetoProps)(PublicRoute);
export default PublicRoute;