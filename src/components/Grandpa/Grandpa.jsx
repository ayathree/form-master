import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import './Grandpa.css'


export const AssetContext = createContext('gold');
const Grandpa = () => {

    return (
        <div className="grandpa-div">
            <h2>Grandpa</h2>
           
        <AssetContext.Provider value="gold">
        <div className="grandpa-flex">
        <div className="grandpa-div">
        <Dad></Dad>
        </div>
            <div className="grandpa-div">
            <Aunty></Aunty>
            </div>
         </div>
        </AssetContext.Provider>
           
        </div>
    );
};

export default Grandpa;