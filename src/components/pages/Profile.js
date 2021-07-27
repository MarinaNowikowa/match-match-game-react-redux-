import React, {useContext,} from "react"
import "./profile.css"
import { Descriptions, Badge  } from 'antd';
import { CurrentUserContext } from "../../services/context/currentUserContext";

export default function Profile(){

  const { currentUser} = useContext(CurrentUserContext);

  if(!currentUser && localStorage.getItem('users')===[]){
    return (<div className="profile_loading"> Your profile doesn't exist, please enter data...</div>)
  }
 
 return (
    <>
     <div className="profile_container" style={ {width: '500px'}}>
       <Descriptions title="Profile" bordered layout="vertical">
         <Descriptions.Item label="First Name" >{currentUser.firstName}</Descriptions.Item>
         <Descriptions.Item label="Last Name" span={2}>{currentUser.lastName}</Descriptions.Item>
         <Descriptions.Item label="Email" > {currentUser.email}</Descriptions.Item>
         <Descriptions.Item label="Selected difficulty of the game" >{currentUser.difficulty}</Descriptions.Item>
         <Descriptions.Item label="Time">{currentUser.time}</Descriptions.Item>
         <Descriptions.Item label="Status"><Badge status="processing" text="Active"/></Descriptions.Item>
       </Descriptions>
      </div>
    </>
     
    ) 
}

