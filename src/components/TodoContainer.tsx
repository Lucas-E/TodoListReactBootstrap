import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

interface TodoContainerType{
    children:React.ReactNode
}

const TodoContainer:React.FC<TodoContainerType> = (props) =>{
    return(
        <Container>
            <Row className="">
                <Col xs={5} className='m-auto bg-light border shadow-sm rounded text-dark fw-light p-4'>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default TodoContainer