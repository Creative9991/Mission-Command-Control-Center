import React,{Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import Contact from './components/contact';
import Geolocation from './components/geolocation';
import About from './components/about';
import { AutoComplete } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Practise from "./components/practise";
import Nasa from "./components/nasa";
import Login from "./components/login";

const { Option } = AutoComplete;
const { Header, Content, Footer } = Layout;

class App extends Component {




    render() {

        return (
            <div className="App">
            <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/practise">Practise</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/geolocation">Geo Location</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/contact">Contact</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', minHeight : '800px' }}>
                    <main>
                        <Switch>
                            <Route path="/practise" component={Practise} />
                            <Route path="/geolocation" component={Geolocation} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/nasa" component={Nasa} />
                            <Route path="/" component={Login} />
                        </Switch>
                    </main>

                </Content>
                <hr style={{ color : 'black', width : '100%', height : '10px'}} />
                <Footer style={{ textAlign: 'center' }}>Space Insight ©2020 </Footer>
            </Layout>
            </div>
        );
    }


}

export default App;
