import React,{Component} from 'react';
import './App.css';
import Contact from './components/contact';
import Space_agencies from './components/space_agencies';
//import {createStore} from 'redux';
import About from './components/about';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MenuMain from './components/menumain';
import Cheat1 from './components/Cheat-sheet/cheat1';
import Cheat_Sheet from './components/Cheat-sheet/cheat_sheet';
import Agency from './components/Agency/agency';
import satellites from './components/Satellites/satellites';
import Persons from './components/persons';
import satellite_Iss  from './components/satellite_iss';
import space from './assets/space.jpeg';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// //Store 

// //Action

// const increment  = () =>{
//     return{
//         type : 'INCREMENT'
//     }
// }

// const decrement = () =>{
//     return {
//         type : 'DECREMENT'
//     }
// }

// //Reducer

// const counter = (state = 0 , action) => {
//     switch(action.type){
//         case 'INCREMENT' :
            
            
//            return state +1;
    
//     case 'DECREMENT' :
        
//         return state-1; 
//     }
// }

// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()))

// //Dispatch

// store.dispatch(increment());

const { Header, Content, Footer } = Layout;


class App extends Component {
 


  
   
    render() {

        // Getting the Current yeat
        let date = new Date();
        let currerntYear = date.getFullYear();
        //setting up the sessionStorage from the given username
        sessionStorage.getItem("username");
        //let loginInfo = sessionStorage.getItem("username"); 


          function headerOver(e){
            e.target.style.backgroundColor = '';
          }

        //   function logoutClick(){
        //     sessionStorage.removeItem('username');
        //     sessionStorage.clear();
        //     console.log("removed");
        //   }
            return (
                <div className="App">
                    <BrowserRouter>
                <Layout className="layout">
                    <Header style={{height : '100px'}} onMouseOver= {headerOver}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item ley="1"><Link to='/menumain'> <FontAwesomeIcon icon={faUserAstronaut} style={{ width :'80px', height : '80px', color: 'yellow'}} /></Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/contact">Contact</Link></Menu.Item>
                            {/* <Menu.Item key="6" className = "logoutInfo" style={{ float : 'right' }} onClick={logoutClick} ><Link to='/login'> Hey <span className="logout" style={{color : 'red', fontSize : 'bold'}} ><b>{loginInfo}</b> </span></Link> 
                             <Avatar style={{ backgroundColor: '#87d068',}} icon={<UserOutlined />}/></Menu.Item> */}
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
                                <Route path="/menumain" component={MenuMain} />
                                <Route path="/persons" component={Persons} />
                                <Route path="/cheat_sheet"component={Cheat_Sheet}/>
                                <Route path="/cheat1" component={Cheat1}/>
                                <Route path="/satellite_iss" component={satellite_Iss} />
                                <Route path="/" component={MenuMain} />
    
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

export default App;
