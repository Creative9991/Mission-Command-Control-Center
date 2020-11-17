import React,{Component} from 'react';
import './App.css';
import Contact from './components/contact';
import Space_agencies from './components/space_agencies';
import About from './components/about';
import { AutoComplete, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Practise from "./components/practise";
import Nasa from "./components/agency/nasa";
import Login from "./components/login";
import Scratch from './components/scratch';
import MenuMain from './components/menumain';
import Persons from './components/persons';
import Satelitte_Iss  from './components/satelitte_iss';
import space from './assets/space.jpeg';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const { Option } = AutoComplete;
const { Header, Content, Footer } = Layout;

const data = {
    content: {
      body: [
        {
            id: 1,
            imgName : "nasa",
            imgAsset : require("./assets/nasa.jpg"),
            agency : '/nasa'
        },
        {
             id: 2,
             imgName : "esa",
             imgAsset : require("./assets/esa.jpg"),
             agency : '/esa'
        },
        { 
             id: 3,
             imgName : "cnsa",
             imgAsset : require("./assets/cnsa.png"),
             agency : '/cnsa'
        },
        {
            id: 4,
            imgName : "isro",
            imgAsset : require("./assets/isro.jpg"),
            agency : '/isro'
          },
           {
            id: 5,
            imgName : "jaxa",
            imgAsset : require("./assets/jaxa.jpg"),
            agency : '/jaxa'
          },
           {
            id: 6,
            imgName : "roscosmos",
            imgAsset : require("./assets/roscosmos.png"),
            agency : '/roscosmos'
          },
           {
            id: 7,
            imgName : "spacex",
            imgAsset : require("./assets/spacex.png"),
            agency : '/spacex'
          },
          {
            id: 8,
            imgName : "blueorigin",
            imgAsset : require("./assets/blueorigin.png"),
            agency : '/nasa'
          }
      ]
    }
  };

class App extends Component {
  
   
    render() {
        data.content.body.map(ee => {
            console.log('check data: ', ee.agency);
            return ee;
        })

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
         if((currentURL == 'http://localhost:3000/') || (currentURL == 'http://localhost:3000/login')){
            return (
                <div className="App">
                <Layout className="layout">
                    <Content style={{ padding: '0 50px', minHeight : '800px', backgroundImage : `url(${space})`,  backgroundSize : "cover" }}>
                        <main>
                            <Switch>
                                <Route path="/practise" component={Practise} />

                                {
                                        data.content.body.map((org) => {
                                            return(<Route key={`agency${org.agency}`} exact path={`/agency${org.agency}`} component={() => <Nasa  urlName={`/agency${org.agency}`}/>} /> )
                                        })
                                }
                                <Route path="/space_agencies" component={() => <Space_agencies data= {data} />} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/scratch" component={Scratch} />
                                <Route path="/menumain" component={() => <MenuMain data= {data} />} />
                                <Route path="/satelitte_iss" component={Satelitte_Iss} />
                                <Route path="/persons" component={Persons} />
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
                                {
                                        data.content.body.map((org) => {
                                            return(<Route key={`agency${org.agency}`} exact path={`/agency${org.agency}`} component={() => <Nasa />} /> )
                                        })
                                }
                                <Route path="/scratch" component={Scratch} />
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
                </div>
            );
         }

     
    }


}

export default App;
