import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import { Row, Col } from 'antd';

class Geolocation extends Component {


    listGeoStyle = () => {

        return{
            background: '#FFFFFF' ,
            minHeight : '300px',
            width : '300px' ,
            padding : '50px',
            border : '10px solid black'
        }
    }

    render(){

        return (
            <Row>
                <Col span={8} className="nasa" style={ this.listGeoStyle() } onClick={() => this.nextPath('/nasa') }>col-12</Col>
                <Col span={8} style={this.listGeoStyle() }>col-12</Col>
                <Col span={8} style={this.listGeoStyle() }>col-12</Col>
                <Col span={8} style={this.listGeoStyle() }>col-12</Col>
                <Col span={8} style={this.listGeoStyle() }>col-12</Col>
                <Col span={8} style={this.listGeoStyle() }>col-12</Col>
            </Row>
        )
    }
}
export default Geolocation;
