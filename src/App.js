
import './App.css';

import { useState } from 'react';
import { UserRow } from './UserRow';
import { UserForm } from './UserForm';
import { useToggle } from './useToggle';

const mockUsers= [
  {name:'Mladen', surname:'Blagovcanin' , age:28 , id:1},
  {name:'Vildan', surname:'Tursic', age: 13, id:2}
]
function App() {
  const columns=[{id:1, name:'name'},{id:2, name:'surname'}, {id:3, name:'age'}, {id:4, name:'actions'}]
  const [users, setUsers] =  useState(mockUsers);
  const [editUser, setEditUser] = useState(null)
  const [isEditFormOpen, toggleEditForm] = useToggle(false)

  return (
    <div className="App">

      <button onClick={()=> {
        toggleEditForm()
        console.log(isEditFormOpen)
      }
      
      }>{isEditFormOpen?'open':'close'}</button>
        {isEditFormOpen? null : <UserForm editUser={editUser} setUsers={setUsers}/>}

      <table className='users-table'>
        <thead>
          <tr>
            {columns.map(({id, name})=><th key={id}>{name}</th> )}
          </tr>
        </thead>
        <tbody>
          {users.map(user=>
          <UserRow  key={user.id}  setUsers={setUsers} user={user} setEditUser={setEditUser}/>)

          }
        </tbody>
      </table>

        
    </div>
  );
}

export default App;
