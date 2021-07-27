import React, {useContext} from 'react';
import { Row, Col } from 'react-bootstrap';
import { CurrentUserContext } from "../../services/context/currentUserContext";

export default function DifficultySelect() {
    
    const { currentUser} = useContext(CurrentUserContext);
   
       return (
        <Row className="justify-content-md-center">
            <Col md="2"></Col>
            <Col md="3" className="text-right">
                <label className="red control-label">Your difficulty of the game: </label>
            </Col>
            <Col md="3">
                <div style={ {fontWeight: '500'}}>  {currentUser.difficulty} cards  </div>
            </Col>
            <Col md="2"></Col>
            
        </Row>
    )
}