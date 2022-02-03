import { useState, useEffect } from "react/cjs/react.development"

export const UserForm =({editUser,setUsers})=>{
    const [updatedUser, setUpdatedUser] = useState(editUser)
    useEffect(() => {
       setUpdatedUser(editUser)
    },[editUser]);
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUsers(users=> users.map(user=> user.id === updatedUser.id? updatedUser :user))
    }

    const createUpdateFor=(propNameOnUser)=>{
        return ({target:{value}})=>{
            setUpdatedUser(user=> ({...user, ...{[propNameOnUser]:value}}))
        }
    }
    return ( 
    <form className="user-form" onSubmit={handleSubmit}>
        <label>name</label>
        <input value={updatedUser?.name}  onChange={createUpdateFor('name')} />
        <label>surname</label>
        <input value={updatedUser?.surname} onChange={createUpdateFor('surname')} />
        <input value={updatedUser?.age} type='number' onChange={createUpdateFor('age')} />
        <button type="submit" >save changes</button>
    </form>)
}