import React from 'react';
import { Row } from 'react-bootstrap';
import GameContent from '../../containers/gameContainer/GameContent';
import LinkToProfile from "../../containers/userInfo/linkToProfile"
import 'bootstrap/dist/css/bootstrap.min.css';
import './game.css';

export default function Game (){
    return (
      <div id="app" style={{ height: "1100px" }}>
      <Row className="justify-content-md-center">
      <LinkToProfile/>
      </Row>
      <GameContent />
    </div >
    )
}