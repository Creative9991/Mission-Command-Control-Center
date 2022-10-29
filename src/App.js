import React, { Component } from 'react';
import './App.css';
import Contact from './components/contact';
import Space_agencies from './components/space_agencies';
import About from './components/about';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Space_insight from './components/space_insight';
import Rockets from './components/rockets';
import Agency from './components/agency';
import Persons from './components/persons';
import satellite_Iss from './components/satellite_iss';
import space from './assets/space.jpeg';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStore } from 'redux';
import allReducers from './reducers';
import Login from './components/login';
import AgencyInfo from './components/AgencyInfo';
import AnalogClock from 'analog-clock-react';


const store = createStore(allReducers);


//Store 

//Action

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}



//Reducer


// const countryImage = () => {
//     agencyCountrydata.content.body.map(agency => {
//         return (
//             <div className="agency">
//                 {agency}
//             </div>
//         )
//     })
// }


//store.subscribe(() => console.log(store.getState()))

//Dispatch

store.dispatch(increment());

const { Header, Content, Footer } = Layout;






class App extends Component {





    render() {

        let options = {
            width: "100px",
            border: true,
            float : 'right',
            borderColor: "#2e2e2e",
            baseColor: "#17a2b8",
            centerColor: "#459cff",
            centerBorderColor: "#ffffff",
            handColors: {
              second: "#d81c7a",
              minute: "#ffffff",
              hour: "#ffffff"
            }
        };


        //let myName = "Mukesh"
        // Getting the Current yeat
        let date = new Date();
        console.log(date);
        // const newDate = date.map(item => {

        // })
        let currerntYear = date.getFullYear();
        //setting up the sessionStorage from the given username
        sessionStorage.getItem("username");
        function headerOver(e) {
            e.target.style.backgroundColor = '';
        }
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout className="layout">
                        <Header style={{ height: '100px' }} onMouseOver={headerOver}>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                                <Menu.Item ley="1"><Link to='/space_insight'> <FontAwesomeIcon icon={faUserAstronaut} style={{ width: '80px', height: '80px', color: 'yellow' }} /></Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/about">About</Link></Menu.Item>
                                {/* <Menu.Item >{date}</Menu.Item> */}
                                <Menu.Item style={{float: 'right', paddingTop: 0}}><AnalogClock {...options} /></Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px', minHeight: '800px', backgroundImage: `url(${space})` }} >
                            <main>
                                <Switch>
                                    <Route path="/space_agencies" component={Space_agencies} />
                                    <Route path="/about" component={About} />
                                    <Route path="/contact" component={Contact} />
                                    <Route path="/agency/:id" component={Agency} />
                                    <Route path="/agencyinfo/:info" component={AgencyInfo} />
                                    <Route path="/space_insight" component={Space_insight} />
                                    <Route path="/persons" component={Persons} />
                                    <Route path="/rockets" component={Rockets} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/satellite_iss" component={satellite_Iss} />
                                    <Route path="/" component={Space_insight} />

                                </Switch>
                            </main>
                        </Content>
                        <hr className="home-horizontal-line" style={{ color: 'black', width: '100%', height: '10px' }} />
                        <Footer className='footerMain'>Space Insight © <span style={{ color: 'red' }}>{currerntYear}</span> </Footer>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
