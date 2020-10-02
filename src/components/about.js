import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import { Card , Row, Col } from 'antd';

class About extends Component {

    render(){
        return (
         <div className= "about">
           <br/><br/>
        <Card title="Space Insight"  style={{ width: 1320 }}>
             <br/>
          <p>This portal gives you a deep insight of Space exploration.</p>

          <p>Space exploration is the use of astronomy and space technology to explore outer space.
             While the exploration of space is carried out mainly by astronomers with telescopes, 
             its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight.
              Space exploration, like its classical form astronomy, is one of the main sources for space science.</p>

              <p>
              While the observation of objects in space, known as astronomy, predates reliable recorded history, 
              it was the development of large and relatively efficient rockets during the mid-twentieth century that 
              allowed physical space exploration to become a reality. Common rationales for exploring space include 
              advancing scientific research, national prestige, uniting different nations, ensuring the future survival 
              of humanity, and developing military and strategic advantages against other countries.
              </p>



              <Row className = "itemsAbout">
            <Col className="firstColumnClass"  xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
           
            </Col>
            <Col className="secondColumnClass"  xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            
            </Col>
          </Row> 

        </Card>


         </div>
        
        )
    }
}
export default About;
