import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div>
           <h2>Dad</h2> 
           <div className="grandpa-flex">
            <div className="grandpa-div">
                <Myself></Myself>
            </div>
            <div className="grandpa-div">
                <Sister></Sister>
            </div>
           </div>
        </div>
    );
};

export default Dad;