import React, {useState, useEffect} from "react"
import "./welcome.css"
import { Form, Input, Button, Select, Radio} from 'antd';
import 'antd/dist/antd.css';

import BackButton from '../backButton/backButton'

const { Option } = Select;

const getFormValues =()=>{
const storedValues = window.localStorage.getItem('users')
  if (storedValues){
    return JSON.parse(storedValues)
  } 
  else {
    return []
  }
}

export default function Welcome(props){
 const [users, setUsers]=useState(getFormValues())

 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [email, setEmail] = useState('')
 const [difficulty, setDifficulty] = useState('')

const handelAddUserSubmit= (e)=>{
   e.preventDefault()
   let user={
    firstName:firstName,
    lastName:lastName,
    email:email,
    difficulty:difficulty,
    id:Date.now()
  }
  setUsers([...users,user]);
  setFirstName('');
  setLastName('');
  setEmail('');
  setDifficulty('');
 }

useEffect(()=>{
  localStorage.setItem('users', JSON.stringify(users))
  React-ReduxReact-Redux
}, [users])

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

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
        onSubmit={handelAddUserSubmit}
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
        rules={[{ required: true,message: 'Please select difficulty',}]}
        value={difficulty}
        onChange={(e)=>setDifficulty(e.target.value)}
      >
        <Select 
        showSearch 
        placeholder="select your difficulty" 
        
        >
          <Option value="8">easy: 4 colums x 2 rows</Option>
          <Option value="12">medium: 6 colums x 2 rows </Option>
          <Option value="16">hard: 8 colums x 2 rows </Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Select card shirt"
        rules={[{ required: true, message: 'Please select card shirt!' }]}
      >
        <Radio.Group>
          <Radio.Button value="a">option 1</Radio.Button>
          <Radio.Button value="b">option 2</Radio.Button>
          <Radio.Button value="c">option 3</Radio.Button>
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
        <Button type="primary" htmlType="submit" style={ {background: '#F4B02B'}}>
          Start game
        </Button>
      </Form.Item>
    </Form>
      </div>
      </div>
    )
}