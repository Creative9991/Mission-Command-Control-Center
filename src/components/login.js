import React, {Component} from 'react';
import { Row, Card, Form, Checkbox, Col,Input, Button } from 'antd';
import { BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';

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

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(values.username);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    // state = {
    //
    //     loginInfo : [
    //         {
    //             userName : 'mukesh',
    //             passWord : '1234'
    //         },
    //         {
    //             userName : 'mukesh12',
    //             passWord : '5678'
    //         },
    //         {
    //             userName : 'mukesh13',
    //             passWord : '9012'
    //         }
    //     ]
    // }

state ={
   loggedIn : false
};
loginHandle = () =>
{
    this.setState({loggedIn : true})
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
        //remove header and footer when we are in login page

        window.onload = function () {
            document.querySelector('header').remove();
            document.querySelector('footer').remove();
        }




        if(window.location.href == 'http://localhost:3000/'){


        }

        return (

            <Row>
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
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}>
                            <Form.Item label="Username" name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item  label="Password" name="password"
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
                                <Button type="primary" htmlType="submit" onClick={this.loginHandle.bind(this)}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>

                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                </Col>
            </Row>
        )
    }
}
export default Login;
