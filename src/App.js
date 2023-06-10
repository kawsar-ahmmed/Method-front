import { useEffect, useState } from 'react';
import logo from './logo.svg';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handleFormButton = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // POST data to the server
    fetch('http://localhost:5001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

  };


  console.log(users)
  return (
    <div className="App">
      <form action="" onSubmit={handleFormButton}>
        <input type="text" name="name" placeholder='name' />
        <input type="email" name="email" placeholder='Email' />
        <button>Add User</button>
      </form>
      {
        users.map(user =>

          <div key={user.id}>
            <ul>
              <li>Name: {user.title} Email: {user.email} ID: {user.id} </li>
            </ul>
          </div>
        )
      }
    </div>
  );
}

export default App;
