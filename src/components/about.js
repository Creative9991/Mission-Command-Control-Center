import React, {Component} from 'react';
import '../styles/about.css';
import { Card , Row, Col } from 'antd';
import spaceFather from '../assets/fatherofspace.jpg';



class About extends Component {

   
  constructor(props){
    super(props);
    this.state =  {
     firstParagraphMessage : 'This portal gives you a deep insight of Space exploration.',
     secondParagraphMessage : 'Space exploration is the use of astronomy and space technology to explore outer space.\
     While the exploration of space is carried out mainly by astronomers with telescopes, \
     its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight.\
      Space exploration, like its classical form astronomy, is one of the main sources for space science.',
      thirdParagraphMessage : 'While the observation of objects in space, known as astronomy, predates reliable recorded history, \
      it was the development of large and relatively efficient rockets during the mid-twentieth century that \
      allowed physical space exploration to become a reality. Common rationales for exploring space include \
      advancing scientific research, national prestige, uniting different nations, ensuring the future survival \
      of humanity, and developing military and strategic advantages against other countries.',
      fatherOfSpace : 'Hermann Julius Oberth, born June 25, 1894 in the Transylvanian town of Hermannstadt, is, \
      along with the Russian Konstantin Tsiolkovsky and the American Robert Goddard, one of the \
      three founding fathers of rocketry and modern astronautics. Interestingly, although these \
      three pioneers arrived at many of the same conclusions about the possibility of a rocket \
      escaping the earth’s gravitational pull, they seem to have done so without any knowledge\
       of each other’s work. '
    }
}


    render(){
        return (
         <div className= "about">
           <br/><br/>
        <Card title="Space Insight"  style={{ width: 1320 }}>
             <br/>
              <p>{this.state.firstParagraphMessage}</p>
              <p>{this.state.secondParagraphMessage}</p>
              <p>{this.state.thirdParagraphMessage}</p>
             <br/><br/>
              <Row className = "itemsAbout" style= {{backgroundColor: 'black', color : 'white'}}>
            <Col className="firstColumnClass"  xs={{ span: 5, offset: 1 }} lg={{ span: 12, offset: 2 }}>
              <h3>Father of space</h3>
              {this.state.fatherOfSpace}
            </Col>
            <Col className="secondColumnClass"  xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <img src={spaceFather} height = '300px' width = '300px'/> 
            </Col>
          </Row> 
        </Card>
         </div>
        
        )
    }
}
export default About;
