import React, {Component} from 'react';
import { Row, Card, Form, Checkbox, Col,Input, Button } from 'antd';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};




class Login extends Component {


    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };

    onFinish = (values) => {

            let userName   = values.username;
            let passWord = values.password;
              this.props.history.push(`/menumain`);
            sessionStorage.setItem("username", userName);
        if((userName == "mukesh") && (passWord == '1234')){
            sessionStorage.removeItem('username');
            let adminUser = sessionStorage.setItem("username", "Admin");
        }
    };

    loginBox = () => {
        return{
            top : '80px',
            position : 'relative' ,
            left : '50px',
            border  : '2px solid black',
            borderRadius : '10px',
            padding : '40px',
            backgroundColor : '#B1C4C4'
        }
    };



    render(){
        return (

            <Row className = "loginRow" >
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                </Col>
                <Col style= {this.loginBox() }>
                    <Card title="Login" bordered={false} style={{ width: 400 }}>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item label="Username" name="username" id="userName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item  label="Password" name="password" id="passWord"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="unchecked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>

                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
            </Row>
        )
    }
}
export default Login;
