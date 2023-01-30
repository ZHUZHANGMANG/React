import instance from "../utils/request";

export function loginApi(user){
    console.log('user',user);
    return instance.post('/api/v1/auth/manager_login',{data:user});
};

