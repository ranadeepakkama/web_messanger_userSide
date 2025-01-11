import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './index.css'

const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [registerStatus,setRegisterStatus] = useState('')

    const navigate = useNavigate()
    const onClickLogin = () => {
        navigate('/login')
    }

    const url = "http://localhost:4040"
    const onSubmitForm = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post(`${url}/register`,{
                username: name,
                email: email,
                password: password
            })
            setRegisterStatus('New User Registered');
            if (response.status === 201){
                navigate('/login')
            }
        }catch(e){
            console.log(e.message)
            setRegisterStatus('failed to register new user/ user already registered');
        }
        
    }

    return (
        <div>
            <div className='register-container d-flex flex-column justify-content-center align-items-center' style={{height:'100vh'}}>
                <h1 style={{textAlign:'center', fontFamily:'serif'}}>Register</h1>
                <form className='register-form d-flex flex-column justify-content-between align-items-center m-1' onSubmit={onSubmitForm}>
                    <div>
                        <input id = 'name' required className='register-input' value={name} type='text' onChange={e => setName(e.target.value)} placeholder='Enter name'/>
                    </div>
                    <div>
                        <input id='email' required className='register-input' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
                    </div>
                    <div>
                        <input type='password' required className='register-input' id='register-password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password'/>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    </div>
                    {registerStatus ? (<p>{registerStatus}</p>): (<p style={{cursor:'pointer', color:'blue'}} onClick={onClickLogin}>login</p>)}
                </form>
            </div>
        </div>
    )
}
    
export default Register