import React, {Component} from 'react';
import '../App.css';




// const satelitteData = {
//     content: {
//       body: [
//         {
//           imgName : "nasa",
//           imgUrl : require("../assets/voyager-1.png")
//         },
//         {
//              imgName : "esa",
//              imgUrl : require("../assets/voyager-2.jpg")
//         }
//       ]
//     }
//   };



class Satelitte_Iss extends Component {

    constructor(props){
    super(props);
    }
  
    
    render(){
        return (
            <div></div>
                    // <Space_Agencies  
                    // key={satelitteData.content.body.id}
                    // onClick={() => this.goToAgencyDetails(satelitteData.content.body.id)}
                    // style={{backgroundImage: `url(${satelitteData.content.body.imgUrl})`}}
                    // hoverable/>  
        )
    }
}
export default Satelitte_Iss
