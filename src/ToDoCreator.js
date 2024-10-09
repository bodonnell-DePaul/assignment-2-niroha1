import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ToDoCreator.css';

function ToDoCreator() {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="todoItem">
                <div>
                    <Form.Label>Todo Item</Form.Label>
                </div>
                <Form.Control type="text" placeholder="Add todo item" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoDueDate">
                <div>
                    <Form.Label>Due Date</Form.Label>
                </div>
                <Form.Control type="date" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Add Todo
            </Button>
        </Form>
    </div>
  );
}


export default ToDoCreator;