import './index.less';
import {Outlet,useNavigate} from 'react-router-dom';
import { Breadcrumb, Layout, Menu , Col, Row, Avatar,Dropdown, Space} from 'antd';
import { useState } from 'react';
import { DownOutlined,SmileOutlined,UserOutlined} from '@ant-design/icons';

import { adminRoutes } from '../routers/routes';
// 生成菜单结构
function getItem({label, key, icon, children, disabled}) {
    if(!disabled){
        return {
            key,
            icon,
            children,
            label,
            disabled
        };
    }
};
const getRoutes=(arr)=>
    arr.map(({label, path, icon,  disabled,children})=>
        getItem({
            label,
            key:path,
            icon,
            disabled,
            children:children && getRoutes(children)
        })
    );
// 菜单数据
let items=getRoutes(adminRoutes);

// submenu keys of first level
const rootSubmenuKeys=items.filter((item)=>typeof item !=='undefined').map((item)=>item.key);

const { Header, Content, Sider,Footer } = Layout;

const itemHeaders = [
    {
        key: 'admin/notices',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              通知中心
            </a>
          ),
        icon: <SmileOutlined />,
    },
    {
        key: 'login',
        label: '退出登录',
        danger:true,
        icon: <SmileOutlined />,
    },
  ];

const DefaultLayout=()=>{
    const [collapsed,setCollapsed]=useState(false);
    const [marginLeft,setMarginLeft]=useState(200);
    const [openKeys, setOpenKeys] = useState([]);
    let navigate=useNavigate();
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
            if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
            } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const  onMenuSelect = ({keyPath})=>{
        navigate("/"+keyPath.reverse().join("/"));
    };
    return (
        <>
            <Layout style={{position:'relative'}}>
                <Header className="header" style={{position:'fixed',top:0,left:0,width:'100%',zIndex:1}} >
                    <Row>
                        <Col span={20} >
                            <img className="logo" src="http://learn.codingke.com/static/img/stuLogoHome.a324147.png" alt="" />
                        </Col>
                        <Col >
                            <Dropdown
                                menu={{
                                    itemHeaders,
                                }}
                            >
                                <>
                                    <a onClick={(e) => e.preventDefault()} href='#user'>
                                        <Space>
                                            <Avatar
                                                style={{
                                                backgroundColor: "#1da57a",
                                                }}
                                                icon={<UserOutlined />}
                                            />
                                            <span style={{ color: "#fff" }}>管理员</span>
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </>
                                
                            </Dropdown>
                           
                        </Col>
                    </Row>
                </Header>
                <Layout style={{ marginLeft }}>
                    <Sider 
                    style={{ background: 'colorBgContainer' ,height:'100vh',position:'fixed',top:74,left:0 }}
                    breakpoint='md'
                    collapsible='true'
                    collapsed={collapsed}
                    onCollapse={(collapsed)=>{
                        collapsed? setMarginLeft(80):setMarginLeft(200);
                        setCollapsed(collapsed);
                    }} 
                    width={200}
                    >
                       <Menu
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        items={items}
                        style={{height:'100%'}}
                        onSelect={onMenuSelect}
                        />
                    </Sider>
                    <Layout 
                    style={{ 
                        padding: '0 24px 24px', marginTop:74
                    }}
                    >
                        <Breadcrumb
                            style={{
                            margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout>
                            <Content
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                    background: '#fff',
                                }}
                            >
                                <Outlet>
                                </Outlet>
                            </Content>
                            <Footer
                            style={{
                                textAlign: 'center',
                            }}
                            >Ant Design ©2023 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        </>
        )
};
export default DefaultLayout;