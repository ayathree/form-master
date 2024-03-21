

const Simpleform = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.email.value)
        console.log(e.target.phone.value) 

        console.log('submit');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <br />
            <input type="text" name="email" />
            <br />
            <input type="text" name="phone" />
            <br />
            <input type="submit" value={'submit'} />
        </form>
    );
};

export default Simpleform;