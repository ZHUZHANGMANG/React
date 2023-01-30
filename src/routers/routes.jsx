import {lazy} from 'react';
import { AppstoreAddOutlined } from "@ant-design/icons";

const Login = lazy(() => import("../pages/Login"));
const DashBoard = lazy(() => import("../pages/admin/DashBoard"));
const Notices = lazy(() => import("../pages/admin/Notices"));
const ProductList = lazy(() => import("../pages/admin/products/ProductList"));
const ProductEdit = lazy(() => import("../pages/admin/products/ProductEdit"));

// 默认路由
let defaultRoutes=[{path:'/login',element:<Login></Login>}];

// 管理员路由
let adminRoutes=[
    {path:'admin/dashboard',element:<DashBoard/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'仪表盘'},
    {path:'admin/notices',element:<Notices/>,disabled:true,icon:<AppstoreAddOutlined/>,label:'通知中心'},
    {path:'admin/product-list',element:<ProductList/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'商品列表'},
    {path:'admin/product-edit',element:<ProductEdit/>,disabled:true,icon:<AppstoreAddOutlined/>,label:'商品新增',children:[{path:':id',element:<ProductEdit/>,disabled:true,icon:<AppstoreAddOutlined/>,label:'商品编辑',},
    {index:true,element:<ProductEdit/>,disabled:true,icon:<AppstoreAddOutlined/>,label:'商品新增',},
    ]},
    {path:'admin/a',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'a',children:[
       { path:'a-1',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'a-1'},
       { path:'a-2',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'a-2'},
    ]},
    {path:'admin/b',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b',children:[
        { path:'b-1',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b-1'},
        { path:'b-2',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b-2',children:[
            { path:'b-2-1',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b-2-1'},
            { path:'b-2-2',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b-2-2'},
            { path:'b-2-3',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b-2-3'},
         ]},
        { path:'b-3',element:<ProductEdit/>,disabled:false,icon:<AppstoreAddOutlined/>,label:'b-3'},
    ]},

];
// 一般用户路由
let userRoutes=[];

export {defaultRoutes,adminRoutes,userRoutes};

