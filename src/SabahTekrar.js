import { useState } from "react";

function SabahTekrar(){

    const [sabahMulti,sabahMultiGuncelle]=useState({});

    const sabahMultiFonk=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        sabahMultiGuncelle(values=>({...values,[name]:value}));
    }

    // const [yemek,yemekGuncelle]=useState("");
    // const [meze,mezeGuncelle]=useState("");

const sabahSabah=(event)=>{
    event.preventDefault();

    if(sabahMulti.yemek.length<2){
        alert("yemeğiniz 2 harften fazla olmalıdır.")
    }
}

    return(
        <>
        <h2>Ben SabahTekrar</h2>
       
       
        {/* <form onSubmit={sabahSabah}>
            <div>
            <p>En sevdiğiniz yemek</p>
            <input onChange={(e)=>{yemekGuncelle(e.target.value)}} type="text"/>
            </div>

            <div>
            <p>En sevdiğiniz meze</p>
            <input onChange={(e)=>{mezeGuncelle(e.target.value)}} type="text"/>
            </div>

            
            <button type="submit">Gönder</button>
        </form> */}

<form onSubmit={sabahSabah}>
            <div>
            <p>En sevdiğiniz yemek</p>
            <input name="yemek" onChange={sabahMultiFonk} type="text"/>
            </div>

            <div>
            <p>En sevdiğiniz meze</p>
            <input name="meze" onChange={sabahMultiFonk} type="text"/>
            </div>

            <div>
            <p>Mesaj at</p>
            <textarea />
            </div>

            <div>
            <p>hangi sebze?</p>
            <select>
                <option>patitis</option>
                <option>fasulya</option>
                <option>soyan</option>
            </select>
            </div>

            
            <button type="submit">Gönder</button>
        </form>
      

        </>
    )
}

export default SabahTekrar;