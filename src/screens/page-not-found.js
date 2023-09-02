import React from 'react';
import { NavLink } from 'react-router-dom';
 

const PageNotFoundScreen = () => {
    return (
        <div>
           <h1>this page not found</h1> 
           <NavLink to="/">go to home page</NavLink>
        </div>
    );
};

export default PageNotFoundScreen;