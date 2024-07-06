import React, { useEffect } from 'react';
import { removeToken } from '../constant/removeAuthen';
import { Link } from 'react-router-dom';

const Logout = () => {
    removeToken()
    return(
        <>
        <Link to="/">Go to home</Link>
        <p>Sorry for bad user expirence we have like 2 hours to do this TT</p></>
    )
};

export default Logout;