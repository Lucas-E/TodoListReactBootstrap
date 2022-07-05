import React from 'react'
import ReactDOM from 'react-dom/client';
import TodoContainer from './components/TodoContainer';
import { useState } from 'react';
import { Container, Row, Col, ListGroup, InputGroup, Button, Form } from 'react-bootstrap';

let count = 1

const element = document.getElementById('root')
let root
if(element){
    root = ReactDOM.createRoot(element)
}

interface TodoItem{
    id:number,
    value:string
}

const App:React.FC = () =>{

    const [item, setItem] = useState<TodoItem[]>([{id:0, value:''}])
    const [itemValue, setValue] = useState<string>('')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value)
    }

    const handleAdd = () =>{
        if(itemValue !== ""){
            const newItem:TodoItem = {id:count, value:itemValue}
            count = count + 1
            setItem([...item, newItem])
            setValue("")
        }
    }

    const handleDelete = (id:TodoItem['id']) => {
        setItem(prev => prev.filter(item => item.id !== id))
    }

    return(
        <Container className='mt-5'>
            <Row>
                <Col>
                    <TodoContainer>
                        <ListGroup>
                            {item.map((todoItem,index) => (
                                <div key={todoItem.id}>
                                    {index >= 1 && 
                                        <ListGroup.Item>
                                            <p>{todoItem.value}</p>
                                            <Button onClick={()=>handleDelete(todoItem.id)}>Del</Button>
                                        </ListGroup.Item>
                                    }
                                </div>
                            ))}
                        </ListGroup>
                        <InputGroup className="mt-4">
                            <Form.Control value={itemValue} type='text' onChange={handleChange}/>
                            <Button onClick={handleAdd}>Enviar</Button>
                        </InputGroup>
                    </TodoContainer>
                </Col>
            </Row>
        </Container>
    )
}

root?.render(<App/>)