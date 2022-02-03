import { useState } from "react"
import { EditableColumn } from "./EditableColumn"
import { useToggle } from "./useToggle"

export const UserRow=({user, setUsers, setEditUser})=>{
    const [isInlineEditable, toggleInlineEditable ] = useToggle(false)
    const deleteUser=()=>{
        setUsers(users=> users.filter(item=> item.id !== user.id))
    }
    const [updatedUser, setUpdatedUser] = useState(user);
  
    const createUpdateEditFor=(propName)=>{
        return ({target:{value}})=>{
            setUpdatedUser(user=> ({...user, ...{[propName]:value}}))
        }
    }

    return (
        <tr onClick={()=>{
        setEditUser(user)}}>
        <EditableColumn  isEditMode={isInlineEditable} value={updatedUser.name} handleOnchange={createUpdateEditFor('name')} />
        <EditableColumn  isEditMode={isInlineEditable} value={updatedUser.surname} handleOnchange={createUpdateEditFor('surname')} />
        <EditableColumn  isEditMode={isInlineEditable} value={updatedUser.age} handleOnchange={createUpdateEditFor('age')} />
        <td><button onClick={toggleInlineEditable}>edit</button></td>
        <td><button onClick={deleteUser}>delete</button></td>
      </tr>)
}