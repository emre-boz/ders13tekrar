import { useState } from "react";

function Iletisim(){

    const [formalanlari,formalanlariGuncelle]=useState({});

    const topluGuncelleme=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        formalanlariGuncelle(values=>({...values,[name]:value}));
        
    }
  
    const formGonder=(olay)=>{
        olay.preventDefault();//formun tarayıcı tarafından gönderim işlemi durduruluyor
         if(formalanlari.isim.length>10){
            alert("İsim uzunluk 10'dan büyük olamaz.");
            return;
         }
         if(formalanlari.soyisim.length>10){
            alert("Soyisim Uzunluk 10'dan büyük olamaz.");
            return;
         }
         if(formalanlari.telefon.length>10){
            alert("telefon Uzunluk 10'dan büyük olamaz.");
            return;
         }
         alert("mesajınız gönderildi")
    }

    return(
        <>
        <form onSubmit={formGonder}>
            <div>
                <p>İsminiz: </p>
                <input name="isim" onChange={topluGuncelleme} type="text"/>
                {formalanlari?.isim?.length}
            </div>
            <div>
                <p>Soyisim: </p>
                <input name="soyisim" onChange={topluGuncelleme} type="text"/>
                {formalanlari?.soyisim?.length}
            </div>
            <div>
                <p>Telefon: </p>
                <input name="telefon" onChange={topluGuncelleme} type="text"/>
                {formalanlari?.telefon?.length}
            </div>

            <button type="submit">Gönder</button>
        </form>
        </>
    )
}

export default Iletisim;