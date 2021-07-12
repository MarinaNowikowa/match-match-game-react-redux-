import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function DifficultySelect(props) {
    return (
        <Row className="justify-content-md-center">
            <Col md="3"></Col>
            <Col md="2" className="text-right">
                <label className="red control-label">Difficulty: </label>
            </Col>
            <Col md="3">
                <select className="form-control" onChange={(e) => props.handleDifficulty(e.target.value)}
                    disabled={props.didGameStart ? true : false}>
                    <option value="4" >easy: 4 colums x 2 rows</option>
                    <option value="6">medium: 6 colums x 2 rows</option>
                    <option value="8">hard: 8 colums x 2 rows</option>
                </select>
            </Col>
            <Col md="4"></Col>
        </Row>
    )
}