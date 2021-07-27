import React, {useState, useEffect, useContext} from "react"
import "./welcome.css"
import { Form, Input, Button, Radio} from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';

import BackButton from '../backButton/backButton'
import { CurrentUserContext } from "../../services/context/currentUserContext";
// import {getCurrentUserFromLS} from "../../containers/userInfo/currentUserFromLS"

// import {getUser} from "../../redux/actions/userActions"

function Welcome(){

let history = useHistory();

 const [users, setUsers]=useState([])
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [email, setEmail] = useState('')
 const [difficulty, setDifficulty] = useState('')
 const [time, setTime] = useState(0);
 
useEffect(() => {
const users = JSON.parse(localStorage.getItem('users'));
  if (users) {
    setUsers(users);
  }
}, []);

useEffect(()=>{
  localStorage.setItem('users', JSON.stringify(users))

}, [users])

const onFinish = (values) => {
  console.log('Success:', values);
  let user={
    firstName,
    lastName,
    email,
    difficulty,
    currentUserId:Date.now(),
    time
  }
  setFirstName('');
  setLastName('');
  setEmail('');
  setDifficulty('');
  setTime();
  setUsers([...users,user]);
  history.push('/welcome-card')
 };

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function handleChange(value) {
  setDifficulty(value)
}
const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

return (
  <div className="form_container">
  <div className="form_button"><BackButton/></div>
  <div className="form">
     <h3 className="form_title">Welcome to match-match game, sign up please!</h3>
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      </Form.Item>

      <Form.Item
       label="Last Name"
       name="lastName"
       rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      </Form.Item>

      <Form.Item
       label="E-mail"
       name="email"
       rules={[
         { type: 'email',message: 'The input is not valid E-mail!', }, 
         { equired: true, message: 'Please input your E-mail!',} 
        ]}
      >
        <Input value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="difficulty"
        label="Difficulty (select)"
        rules={[{ required: true,message: 'Please select difficulty!',}]}
      >
        <Radio.Group
        onChange={(e)=>handleChange(e.target.value)}
        >
          <Radio.Button value='8'>easy: 4 colums x 2 rows</Radio.Button>
          <Radio.Button value='12'>medium: 4 colums x 3 rows</Radio.Button>
          <Radio.Button value='16'>hard: 4 colums x 4 rows</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item 
      label="Rules"
      >
      <div className="form_rules"> 
      Player starts and turns over two cards:
        If the cards don’t match (it’s not a pair), he turns them back over and it’s then  turn over two new cards.
        However, if the two cards match, it’s a pair! He plays again...
        When the players have found all the pairs, the game is over.  
      </div>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      
       <Button 
          htmlType="submit" 
          style={ {background: '#F4B02B'}} 
          type="link" 
          onClick={() => {
            setCurrentUser(currentUser);
          }}
          >
            Submit
        </Button>
       </Form.Item>
    
    </Form>
   
      </div>
      </div>
    )
}



export default  Welcome