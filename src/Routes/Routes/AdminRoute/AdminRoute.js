import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hook/useAdmin';
import Loading from '../../../pages/shared/Loading/Loading';


 const AdminRoute = ({children}) => {
    const {user,loading}  = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    console.log('isAdmin',isAdmin,isAdminLoading);
    const location = useLocation();
    if(loading || isAdminLoading){
        
        return <Loading></Loading>
    }
    
    if(user && isAdmin) {
        return children;
    }
    <Navigate to='/login' state={{from:location}} replace></Navigate>
}
export default AdminRoute;