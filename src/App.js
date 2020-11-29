import React,{Component} from 'react';
import './App.css';
import Contact from './components/contact';
import Space_agencies from './components/space_agencies';
import About from './components/about';
import { AutoComplete, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Practise from "./components/practise";
import Login from "./components/login";
import Scratch from './components/scratch';
import MenuMain from './components/menumain';
import Agency from './components/Agency/agency';
import Persons from './components/persons';
import Satelitte_Iss  from './components/satelitte_iss';
import space from './assets/space.jpeg';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const { Header, Content, Footer } = Layout;


class App extends Component {
  
   
    render() {

        // Getting the Current yeat
        let date = new Date();
        let currerntYear = date.getFullYear();
        //setting up the sessionStorage from the given username
        sessionStorage.getItem("username");
        let loginInfo = sessionStorage.getItem("username");
          let currentURL = window.location.href;


          function headerOver(e){
            e.target.style.backgroundColor = '';
          }
         if((currentURL === 'http://localhost:3000/') || (currentURL === 'http://localhost:3000/login')){
            return (
                <div className="App">

                <Layout className="layout">
                    <Content style={{ padding: '0 50px', minHeight : '800px', backgroundImage : `url(${space})`,  backgroundSize : "cover" }}>
                        <main>
                            <BrowserRouter>
                            <Switch>
                                <Route path="/practise" component={Practise} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/space_agencies" component={Space_agencies} />
                                <Route path="/scratch" component={Scratch} />
                                <Route path="/menumain" component={MenuMain}/>} />
                                <Route path="/satelitte_iss" component={Satelitte_Iss} />
                                <Route path="/persons" component={Persons} />
                                <Route path="/" component={Login} />
    
                            </Switch>
                            </BrowserRouter>
                        </main>
    
                    </Content>
                </Layout>
                </div>
            );
         }
         else{
            return (
                <div className="App">
                    <BrowserRouter>
                <Layout className="layout">
                    <Header style={{height : '100px'}} onMouseOver= {headerOver}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item ley="1"><Link to='/menumain'> <FontAwesomeIcon icon={faUserAstronaut} style={{ width :'80px', height : '80px', color: 'yellow'}} /></Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/practise">Practise</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/contact">Contact</Link></Menu.Item>
                            <Menu.Item key="6" className = "logoutInfo" style={{ float : 'right' }} ><a href="http://localhost:3000">Hey <span className="logout" style={{color : 'red', fontSize : 'bold'}} ><b>{loginInfo}</b> </span>
                            </a>  <Avatar style={{ backgroundColor: '#87d068',}} icon={<UserOutlined />}/></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', minHeight : '800px', backgroundImage : `url(${space})`}} >
                        <main>
                            <Switch>
                                <Route path="/practise" component={Practise} />
                                <Route path="/space_agencies" component={Space_agencies} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/scratch" component={Scratch} />
                                <Route path="/agency/:id" component={Agency} />
                                <Route path="/menumain" component={MenuMain} />
                                <Route path="/persons" component={Persons} />
                                <Route path="/satelitte_iss" component={Satelitte_Iss} />
                                <Route path="/" component={Login} />
    
                            </Switch>
                        </main>
                    </Content>
                    <hr style={{ color : 'black', width : '100%', height : '10px'}} />
                    <Footer className='footerMain'>Space Insight © <span style={{color: 'red'}}>{currerntYear}</span> </Footer>
                </Layout>
                    </BrowserRouter>
                </div>
            );
         }

     
    }


}

export default App;
