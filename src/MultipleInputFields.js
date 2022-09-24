import { useState } from "react";

function MultipleInputFields(){
const [sey,seyGuncelle]=useState({ });

    const multipleInputFonk=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        seyGuncelle(values=>({...values,[name]:value}));
    }

    const onleyiciDenetleyici=(event)=>{
        event.preventDefault();
    }

    return(
        <>
        <h2>ben MultipleInputFields</h2>
        <form onSubmit={onleyiciDenetleyici}>
        <div>
        <p>Favori Takımı</p>
        <input name="takım" onChange={multipleInputFonk} type="text" />
        </div>
        <div>
        <p>Favori Şarkıcısı</p>
        <input name="şarkıcı" onChange={multipleInputFonk} type="text" />
        </div>

           
            <button type="submit">Gönder</button>
         
            
        </form>
        </>
    )

}


export default MultipleInputFields;