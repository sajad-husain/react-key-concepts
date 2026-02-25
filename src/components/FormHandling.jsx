import React, { useState } from 'react'

const FormHandling = () => {
    const [data, setData] = useState({ email: '', password: '' })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }))
    }

    const clickHandler = (event) => {
        event.preventDefault()
        console.log("email: ", data.email, "password: ", data.password);

    }
    return (
        <form>
            <input name='email' type="text" value={data.email} onChange={changeHandler} />
            <br />
            <input name='password' type="password" value={data.password} onChange={changeHandler} />
            <br />
            <button onClick={clickHandler}>Login</button>
        </form>
    )
}

export default FormHandling