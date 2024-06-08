import {findAllByDisplayValue} from "@testing-library/react";

export const User = () => {

    const deleteUser = () => {
        alert('User was deleted')
    }

    const saveUser = () => {
        alert('User have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Ansar</textarea>
        <input onBlur={focusLostHandler} type="text"/>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}