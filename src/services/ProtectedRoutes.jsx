import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useAuth } from '../services/AuthProvider';
const ProtectedRoutes = ()=>{
   const {user}=useAuth();
    const token = user;
   
    
    return token ? <Outlet/> : <Navigate to="/home"/>;
}
export default ProtectedRoutes;