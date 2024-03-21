import useInputState from "../../hooks/useInputState";


const HooksForm = () => {

    // const [name, handleNameChange]= useInputState('rojoni')
    const emailState = useInputState('rojoni@gmail.com')

    const handleSubmit = e =>{
        // console.log(name)
        console.log(emailState.value)
        e.preventDefault();
        
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
            {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
            <br />
            <input {...emailState} type="email" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" value={'submit'} />
        </form>
        </div>
    );
};

export default HooksForm;