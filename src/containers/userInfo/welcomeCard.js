import React, { useContext }  from "react"
import "../../components/pages/welcome.css"
import { Form,  Button} from 'antd';
import {Link } from 'react-router-dom';
import LinkToProfile from "../userInfo/linkToProfile"
import { CurrentUserContext } from "../../services/context/currentUserContext";

// import {initGame, startTimer} from "../../redux/actions/gameActions";
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

export default function  WelcomeCard ()  {
  const { currentUser} = useContext(CurrentUserContext);

 return (
     <div className="form_container">
       <LinkToProfile/>
      <div className="form">
        <h3 className="form_title">Welcome {`${currentUser.firstName} ${currentUser.lastName}`} to match-match game</h3>
       <Form
           name="basic"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           initialValues={{ remember: true }}
                
       >
     
         <Form.Item
           label="Selected your difficulty"
          >
          <div className="form_rules" style={ {fontWeight: '500'}}>{currentUser.difficulty} cards </div>
         </Form.Item>
   
         <Form.Item 
         label="Rules"
         >
         <div className="form_rules" style={ {fontWeight: '500'}}> 
            Player starts and turns over two cards:
           If the cards don’t match (it’s not a pair), he turns them back over and it’s then  turn over two new cards.
           However, if the two cards match, it’s a pair! He plays again...
           When the players have found all the pairs, the game is over.  
         </div>
         </Form.Item>
   
         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
           <Button 
             type="primary" 
             htmlType="submit" 
             style={ {background: '#F4B02B'}}
             >
            <Link to="/game">Start game</Link>
          </Button>
         </Form.Item>
       </Form>
         </div>
         </div>
       )
   }

//    function mapDispatchToProps(dispatch) {
//     return {
//         initGameToState: bindActionCreators(initGame, dispatch),
//         startTimerToState: bindActionCreators(startTimer, dispatch)
//     }
// }

//    export default connect(null, mapDispatchToProps)(WelcomeCard);