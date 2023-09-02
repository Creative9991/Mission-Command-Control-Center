import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact";
import Space_agencies from "./components/space_agencies";
import About from "./components/about";
import { Layout, Menu } from "antd";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Space_insight from "./components/space_insight";
import Planets from "./components/Planets";
import Agency from "./components/agency";
import InternationalSpaceStation from "./components/InternationlSpaceStation";
import space from "./assets/space-mining.jpeg";
import { faUserAstronaut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./components/login";
import AgencyInfo from "./components/AgencyInfo";
import AnalogClock from "analog-clock-react";
import Dashboard from "./components/Dashboard";
import NasaDetailedData from "./components/NasaDetailedData";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Mars from "./components/Mars";
import NotFound from "./components/NotFound";
import MoonExploration from "./components/Moon-exploration";
import DeepSpaceNetwork from "./components/Deep-Space-Network";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    let options = {
      width: "100px",
      border: true,
      float: "right",
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "#459cff",
      centerBorderColor: "#ffffff",
      handColors: {
        second: "#d81c7a",
        minute: "#ffffff",
        hour: "#ffffff",
      },
    };

    let date = new Date();
    let currerntYear = date.getFullYear();
    function headerOver(e) {
      e.target.style.backgroundColor = "";
    }

    let usernameDelete = () => {
      window.sessionStorage.removeItem("username");
      window.location.reload(false);
    };

    let userExists = window.sessionStorage.getItem("username");

    return (
      <div className="App">
        <BrowserRouter>
          <Layout className="layout">
            {userExists ? (
              <Header style={{ height: "100px" }} onMouseOver={headerOver}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                >
                  <Menu.Item ley="1">
                    <Link to="/space_insight">
                      {" "}
                      <FontAwesomeIcon
                        icon={faUserAstronaut}
                        style={{
                          width: "80px",
                          height: "80px",
                          color: "yellow",
                        }}
                      />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/about">About</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    style={{ float: "right" }}
                    onClick={usernameDelete}
                  >
                    <Link to="/login">Hej..{userExists}</Link>
                  </Menu.Item>
                  <Menu.Item key="6" style={{ float: "right" }}>
                    <Link to="/dashboard">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "yellow",
                        }}
                      />
                    </Link>
                  </Menu.Item>
                  <Menu.Item style={{ float: "right", paddingTop: 0 }}>
                    <AnalogClock {...options} />
                  </Menu.Item>
                </Menu>
              </Header>
            ) : null}

            <Content
              style={{
                padding: "0 50px",
                minHeight: "810px",
                backgroundImage: `url(${space})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
              }}
            >
              <main>
                <Switch>
                  {Counter ? (
                    <Route path="/counter" component={Counter} />
                  ) : (
                    <Route path="/not-found" component={NotFound} />
                  )}
                  ,
                  {Space_agencies ? (
                    <Route path="/space_agencies" component={Space_agencies} />
                  ) : (
                    <Route path="/not-found" component={NotFound} />
                  )}
                  ,
                  {About ? (
                    <Route path="/about" component={About} />
                  ) : (
                    <Route path="/not-found" component={NotFound} />
                  )}
                  <Route path="/contact" component={Contact} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/moon" component={MoonExploration} />
                  <Route path="/deepspace" component={DeepSpaceNetwork} />
                  <Route path="/agency/:id" component={Agency} />
                  <Route path="/agencyinfo/:info" component={AgencyInfo} />
                  {Mars ? (
                    <Route path="/mars" component={Mars} />
                  ) : (
                    <Route path="/not-found" component={NotFound} />
                  )}
                  <Route
                    path="/nasaDetailedData"
                    component={NasaDetailedData}
                  />
                  <Route path="/Todo" component={Todo} />
                  <Route path="/planets" component={Planets} />
                  <Route
                    path="/international-Space-station"
                    component={InternationalSpaceStation}
                  />
                  {userExists ? (
                    <Route path="/" component={Space_insight} />
                  ) : (
                    <Route path="/" component={Login} />
                  )}
                </Switch>
              </main>
            </Content>

            {userExists ? (
              <div className="footer">
                <hr
                  className="home-horizontal-line"
                  style={{ color: "black", width: "100%", height: "10px" }}
                />{" "}
                <Footer className="footerMain">
                  Space Insight ©{" "}
                  <span style={{ color: "red" }}>{currerntYear}</span>{" "}
                </Footer>
              </div>
            ) : null}
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
