
import Cousine from "../Cousine/Cousine";



const Aunty = () => {
   
    return (
        <div>
            <h2>Aunty</h2>
            <div className="grandpa-flex">
                <div className="grandpa-div">
                    <Cousine name={'sohana'}></Cousine>
                </div>
                <div className="grandpa-div">
                    <Cousine name={'rohana'} ></Cousine>
                   
                </div>
            </div>
        </div>
    );
};

export default Aunty;