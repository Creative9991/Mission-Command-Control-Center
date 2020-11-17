import React, {Component} from 'react';
import Todos from './Todos';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { AutoComplete } from 'antd';


class Practise extends Component {

    listStyle = () => {
        return{
            position : 'relative',
            display : 'in-line !important'
        }
    };
    state = {
        todos : [
            {
                id : 1,
                title : 'Take out the trash',
                completed : false
            },
            {
                id : 2,
                title : 'Dinner with friends',
                completed : false
            },
            {
                id : 3,
                title : 'Meeting the boss',
                completed : false
            }
        ]
    }
    markComplete = (id) =>
    {
        console.log(id);
    }

    render(){
        return (
            <div className="site-layout-content">
                <div className="myApp">
                    <Row>
                        <Col span={6} style={this.listStyle()}>col-12</Col>
                        <Col span={6} style={this.listStyle()}>
                            <div className="list" >
                                <p>something</p>
                                <p>something</p>
                                <p>something</p>
                            </div>
                        </Col>
                        <Col span={12} style={this.listStyle()}>
                            <header className="App-header">
                                <AutoComplete
                                    style={{
                                        width: 200,
                                        display : "inline",
                                        position : "relative"
                                    }}
                                    placeholder="input here"
                                >
                                </AutoComplete>
                                <Button style={{display : "inline", position : "relative"}} type="primary">Button</Button>
                                <br />
                                <p>
                                    <Todos todos={this.state.todos} markComplete =  {this.markComplete} />
                                </p>
                            </header>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Practise;
