export const EditableColumn =({isEditMode=false,value, handleOnchange})=>{
    return <td>
        {isEditMode? 
        <input value={value} onChange={handleOnchange} />   :
        value
            }
    </td>
}   