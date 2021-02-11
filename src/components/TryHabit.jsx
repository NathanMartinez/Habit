import { Button, Card } from 'react-bootstrap';

export default function TryHabit() {
  return (
    <Card className='form-card'>
      <Card.Body className='d-flex flex-column align-items-center'>
        <h1>Habit Mobile</h1>
        <p style={{marginBottom: '2rem'}}>Download Today!</p>
        <div>
          <Button variant="outline-primary" className="mr-3">iOS</Button>
          <Button variant="outline-success">Android</Button>
        </div>
      </Card.Body>
    </Card>
  )
}