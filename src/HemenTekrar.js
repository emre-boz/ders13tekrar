import { useState } from "react";

function HemenTekrar(){
    const [change,takipOnChange]=useState("");
    return(
        <>
        <div>
            <h2>HemenTekrar</h2>
        <input onChange={(e)=>{takipOnChange(e.target.value); }} type="text" />
        <button onClick={()=>{console.log("HemenTekrar butonuna basıldı çok iyi oldu")}}>HemenTekrar</button>
        </div>
        
        </>
    )
}

export default HemenTekrar;