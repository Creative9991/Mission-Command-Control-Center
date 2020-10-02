import React,{Component} from 'react';
import './App.css';
import Contact from './components/contact';
import Geolocation from './components/geolocation';
import About from './components/about';
import { AutoComplete, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Practise from "./components/practise";
import Nasa from "./components/nasa";
import Login from "./components/login";
import Scratch from './components/scratch';
import MenuMain from './components/menumain';
import space from './assets/space.jpeg';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Option } = AutoComplete;
const { Header, Content, Footer } = Layout;

class App extends Component {
   
    render() {

        let date = new Date();
        let currerntYear = date.getFullYear();

        sessionStorage.getItem("username");

        let loginInfo = sessionStorage.getItem("username");
          let currentURL = window.location.href;


          function headerOver(e){
            e.target.style.backgroundColor = '';
          }

         if((currentURL == 'http://localhost:3000/') || (currentURL == 'http://localhost:3000/login')){
            return (
                <div className="App">
                <Layout className="layout">
                    <Content style={{ padding: '0 50px', minHeight : '800px', backgroundImage : `url(${space})`,  backgroundSize : "cover" }}>
                        <main>
                            <Switch>
                                <Route path="/practise" component={Practise} />
                                <Route path="/geolocation" component={Geolocation} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/nasa" component={Nasa} />
                                <Route path="/scratch" component={Scratch} />
                                <Route path="/menumain" component={MenuMain} />
                                <Route path="/" component={Login} />
    
                            </Switch>
                        </main>
    
                    </Content>
                </Layout>
                </div>
            );
         }
         else{
            return (
                <div className="App">
                <Layout className="layout">
                    <Header style={{height : '100px'}} onMouseOver= {headerOver}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item ley="1"><Link to='/menumain'> <FontAwesomeIcon icon={faUserAstronaut} style={{ width :'80px', height : '80px', color: 'yellow'}} /></Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/practise">Practise</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/geolocation">Geo Location</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/contact">Contact</Link></Menu.Item>
                            <Menu.Item key="6" className = "logoutInfo" style={{ float : 'right' }} ><a href="http://localhost:3000">Hey <span style={{color : 'red', fontSize : 'bold'}} ><b>{loginInfo}</b> </span>
                            </a>  <Avatar style={{ backgroundColor: '#87d068',}} icon={<UserOutlined />}/></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', minHeight : '800px', backgroundImage : `url(${space})`}} >
                        <main>
                            <Switch>
                                <Route path="/practise" component={Practise} />
                                <Route path="/geolocation" component={Geolocation} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/nasa" component={Nasa} />
                                <Route path="/scratch" component={Scratch} />
                                <Route path="/menumain" component={MenuMain} />
                                <Route path="/" component={Login} />
    
                            </Switch>
                        </main>
    
                    </Content>
                    <hr style={{ color : 'black', width : '100%', height : '10px'}} />
                    <Footer style={{ textAlign: 'center', fontSize: "20px" }}>Space Insight © <span style={{color: 'red'}}>{currerntYear}</span> </Footer>
                </Layout>
                </div>
            );
         }

     
    }


}

export default App;
