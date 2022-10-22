import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


/*
1.only allow authenticated user to visit the route
2.After reload it changes its path from private route
3.redirect user to the route they wanted to go before login
*/
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation='border' variant='primary'></Spinner>
    }
    console.log(user);
    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default PrivateRoute;