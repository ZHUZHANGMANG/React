import './index.less';
import { Card ,Button, Checkbox, Form, Input, message } from 'antd';
import {useNavigate} from 'react-router-dom';
import { loginApi } from '../../services/auth';
import { setToken } from '../../utils/localStorage';

const Login = (props)=>{
    let navigate=useNavigate();
    const onFinish = async({userName,password}) => {
        let res=await loginApi({userName,password});
        if(res.code==='success'){
            setToken(res.token);
            navigate('/');
        }else{
            message.info('登录失败，请重试');
        }
    };
    
    return (
        <>
            <Card
            className='login-from'
                title="xxx后台管理系统"
                bordered={false}
            >
                <Form
                    name="basic"
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                    label="Username"
                    name="userName"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        span: 24,
                    }}
                    >
                    <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item  
                    wrapperCol={{
                        span: 24,
                    }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>    
    )
};

export default Login;