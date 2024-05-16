import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const handleClick=(e)=>{
        e.preventDefault()
        const value=JSON.parse(localStorage.getItem('users'));
        const findUser=value.find(x=> x.email===email && x.password===password)
        if(findUser){
            navigate('/home')
        }else{
            alert("wrong credentials please register")
        }
    }
    // localStorage.clear()
  return (
    <div>
        <form action="">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/><br /><br />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br /><br />
            <button onClick={handleClick}>Login</button>
            <button onClick={()=>navigate('/register')}>Register</button>
        </form>
    </div>
  )
}

export default Login