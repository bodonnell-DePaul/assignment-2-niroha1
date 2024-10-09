import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab, Form, Button } from 'react-bootstrap';
import todos from './todoItems';
import ToDoCreator from './ToDoCreator';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ToDoCreator from './ToDoCreator';

function ViewPort() {
    const [todoItems, setTodos] = useState(todos);

    const getVariant = (dueDate) => {
        const currentDate = new Date();
        const dueDateObj = new Date(dueDate);
        const diffTime = dueDateObj - currentDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
      
        if (diffDays > 7) return 'primary';
        if (diffDays <= 7 && diffDays > 4) return 'success';
        if (diffDays <= 4 && diffDays > 2) return 'warning';
        return 'danger';
    };

    const [activeKey, setActiveKey] = useState('0');

    const handleDateChange = (index, newDate) => {
        const updatedTodos = todoItems.map((todo, i) => 
          i === index ? { ...todo, dueDate: newDate } : todo
        );
        setTodos(updatedTodos);
    };
      
      

    return (
        <div style={{padding: '10px'}}>
            <Tab.Container id="list-group-tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                <Row>
                    <h1>Assignment 2: Nnamdi Iroha's ToDo List</h1>
                </Row>

                <Row>
                    <Col sm={4}><ToDoCreator/></Col>

                    <Col sm={3}>
                        <ListGroup>
                            {todoItems.map((todo, index) => (
                                <ListGroup.Item 
                                    key={index}
                                    action 
                                    eventKey={`${index}`}
                                    variant={getVariant(todo.dueDate)}
                                >
                                    {todo.title}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col sm={5}>
                        <Tab.Content>
                            {todoItems.map((todo, index) => (
                                <Tab.Pane key={index} eventKey={`${index}`}>
                                    <h3>{todo.title}</h3>
                                    <p contentEditable="true">{todo.description}</p>
                                    <Form.Control
                                        type="date"
                                        defaultValue={todo.dueDate}
                                        contentEditable="true"
                                        onChange={(e) => handleDateChange(index, e.target.value)}
                                    />
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
  }
  
  export default ViewPort;