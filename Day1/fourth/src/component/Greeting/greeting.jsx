import React from 'react';
import Greeting from './greeting';

const greeting=({isLoggedin})=>{
    if(isLoggedin){
        return <h2> Welcome back user</h2>;
    }else{
        return<h2>please Log in</h2>;
    }
};
export default greeting;