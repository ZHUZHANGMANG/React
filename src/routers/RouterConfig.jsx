
import { lazy,Suspense } from 'react';
import {BrowserRouter,Navigate,useRoutes} from 'react-router-dom';
import {defaultRoutes,adminRoutes} from './routes';
import Auth from './Auth';
const PageNotFound = lazy(()=>import('../pages/PageNotFound/index'));
const DefaultLayout = lazy(()=>import('../layout/DefaultLayout'));

const RouterConfig=(props)=>{
    let routes=[
        {
            path:'/',
            element:<DefaultLayout/>,
            children:[
                ...adminRoutes,
                {path:'admin',element:<Navigate to='/admin/dashboard'></Navigate>},
                {index:true,element:<Navigate to='/admin/dashboard'></Navigate>},
                {path:'*',element:<PageNotFound></PageNotFound>}
            ]
        },
        ...defaultRoutes,
        {path:'*',element:<PageNotFound></PageNotFound>}
    ];
    let Routes=()=>useRoutes(routes);

    return (
        <BrowserRouter>
            <Auth>
                <Suspense fallback={<>loading</>}>
                    {routes.length>0&& <Routes></Routes>}
                </Suspense>
            </Auth>
        </BrowserRouter>    
    );
};
export default RouterConfig;