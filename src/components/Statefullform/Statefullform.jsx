import { useState } from "react";


const Statefullform = () => {
    const [email,setEmail]= useState(null)
    const[pass, setPass]= useState(null)
    const[error, setError]= useState('')

    const handleSubmit =e =>{
        e.preventDefault();
        if (pass.length < 6) {
            setError('Password must be in 6 character')
            
        }
        else{
            setError('')
        }
        console.log(email, pass)

    }

    const handleChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)

    }
const handleChangePassword = e =>{
    setPass(e.target.value)
}



    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <br />
        <input onChange={handleChange} type="email" name="email" />
        <br />
        <input onChange={handleChangePassword} type="password" name="password" required />
        <br />
        <input type="submit" value={'submit'} />
        {
            error && <p>{error}</p>
        }
    </form>
    );
};

export default Statefullform;