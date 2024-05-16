import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const handleClick=(e)=>{
        e.preventDefault()
        const newUser={email:email,password:password}
        const existingUsers=JSON.parse(localStorage.getItem('users')) || [];
        const updateUsers=[...existingUsers,newUser]
        localStorage.setItem('users',JSON.stringify(updateUsers))
        navigate('/')
    }
  return (
    <div>
        <form action="">
            <input type="text"  /><br /><br />
            <input type="email" value={email}  onChange={e=>setEmail(e.target.value)}/><br /><br />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/><br /><br />
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default Register