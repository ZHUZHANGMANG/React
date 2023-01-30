// 判断是否登录，判断身份

import { useLocation,Navigate } from "react-router-dom";
import { isLogin } from "../utils/localStorage";

export default function Auth({children}){
    let location=useLocation();

    if(location.pathname.includes('/login')){
        return children;
    }else{
        if(isLogin()){
            return children;
        }else{
            return <Navigate to='/login' state={{from:location}} replace />;
        }
    }
};