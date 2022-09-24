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
        <div>
        <p>Birini seç</p>
        <select name="secim" onChange={multipleInputFonk}>
            <option value="tr">Türkiye</option>
            <option value="fr">Fransa</option>
            <option value="isr">İsrail</option>
        </select>
        </div>

        <div>
        <p>Bize mesajınız:</p>
        <textarea name="mesaj" onChange={multipleInputFonk}/>
        </div>

           
            <button type="submit">Gönder</button>
         
            
        </form>
        </>
    )

}


export default MultipleInputFields;