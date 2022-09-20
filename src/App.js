import React,{Component} from 'react';
import './App.css';
import Contact from './components/contact';
import Space_agencies from './components/space_agencies';
import About from './components/about';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Space_insight from './components/space_insight';
import Rockets from './components/rockets';
import Agency from './components/Agency/agency';
import satellites from './components/Satellites/satellites';
import Persons from './components/persons';
import satellite_Iss  from './components/satellite_iss';
import space from './assets/space.jpeg';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {createStore} from 'redux';
import allReducers from './reducers';
import Login from './components/login';


const store = createStore(allReducers);


//Store 

//Action

const increment  = () =>{
    return{
        type : 'INCREMENT'
    }
}



//Reducer





store.subscribe(() => console.log(store.getState()))

//Dispatch

store.dispatch(increment());

const { Header, Content, Footer } = Layout;






class App extends Component {
    
     
    
 
    render() {

        

        // Getting the Current yeat
        let date = new Date();
        let currerntYear = date.getFullYear();
        //setting up the sessionStorage from the given username
        sessionStorage.getItem("username");
         function headerOver(e){
            e.target.style.backgroundColor = '';
          }
            return (
                <div className="App">
                    <BrowserRouter>
                <Layout className="layout">
                    <Header style={{height : '100px'}} onMouseOver= {headerOver}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item ley="1"><Link to='/space_insight'> <FontAwesomeIcon icon={faUserAstronaut} style={{ width :'80px', height : '80px', color: 'yellow'}} /></Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', minHeight : '800px', backgroundImage : `url(${space})`}} >
                        <main>
                            <Switch>
                                <Route path="/space_agencies" component={Space_agencies} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/agency/:id" component={Agency} />
                                <Route path="/satellite_iss/:id" component={satellites} />
                                <Route path="/space_insight" component={Space_insight} />
                                <Route path="/persons" component={Persons} />
                                <Route path="/rockets" component={Rockets}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/satellite_iss" component={satellite_Iss} />
                                <Route path="/" component={Space_insight} />
    
                            </Switch>
                        </main>
                    </Content>
                    <hr className="home-horizontal-line" style={{ color : 'black', width : '100%', height : '10px'}} />
                    <Footer className='footerMain'>Space Insight © <span style={{color: 'red'}}>{currerntYear}</span> </Footer>
                </Layout>
                    </BrowserRouter>
                </div>
            );
    }
}

export default App;
