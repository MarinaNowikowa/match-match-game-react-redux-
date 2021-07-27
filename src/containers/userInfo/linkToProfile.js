import React  from "react"
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link } from 'react-router-dom';
import './linkToProfile.css'


export default function LinkToProfile (){
   
    return (
       <div className="link-container">
         <div className="link-container_text">
             MMG
        </div> 
         <div className="link-container_icon">
            <Link to="/profile">
              <Avatar 
                style={{backgroundColor: '#F4B02B'}}
                icon={<UserOutlined />}
                size="large"
            />
            </Link>    
        </div> 
       </div>
         
      )
  }