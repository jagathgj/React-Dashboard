import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {Header} from '../components';

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        // isAuthenticated ? (
        //     <div>
        //         <Header />
        //         <Component {...props} />
        //     </div>            
        // ): (
            // <Redirect to="/adashboard" />
            <Component {...props} />
        // )
    )} />
)

// const mapStatetoProps = (state) => ({
//     isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStatetoProps)(PrivateRoute);
export default PrivateRoute;