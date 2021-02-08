import {useState} from 'react'
import { Card, Table, Button } from 'react-bootstrap';
import axios from 'axios'

export default function GetUsersContainer(params) {
  let [data, setData] = useState([])

  const options = {
    url: 'http://10.0.0.162:3321/users',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };
  
  function getUsers() {
    axios(options)
    .then(response => {
      setData(response.data);
    }); 
  }
  

  return (
    <Card>
      <Card.Body>
      <Table striped bordered hover variant="dark" responsive='sm'>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          { data.length > 0 ? data.map(user => 
          (<tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.datetime}</td>
          </tr>)) : null}
        </tbody>
      </Table>

      <Button onClick={getUsers}>Get all users</Button>
      </Card.Body>
      </Card>
  )
}