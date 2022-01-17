import axios from 'axios';
import React, { useState, useEffect} from 'react';
// import {useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';
function MainDashboard() {
    useEffect(()=>{
        console.log('dashboard tk phuch gya bhaiyas')
        //we will get the use after the the successful login from the useer other wise we will not be directed here
        // console.log(user);
        // console.log(location)G12

    },[]);
    return <>
    <Navbar/>
    <h3>welcome admin !! manage you blog website now</h3>
    </>;
}

export default MainDashboard;