import React from 'react';
import '../../App.css';
import { Card } from 'antd';



const Reusable_Grid = props => (
    
<>
    <Card 
    hoverable
    onClick={() => props.goToSatelitteDetails(props.satelitteId)}>
    </Card>
</>
)


  export default Reusable_Grid;