import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
         <h2>friends</h2>
         <p>{gift}</p>   
        </div>
    );
};

export default Friend;