import { useState } from "react";

function HemenTekrarForms(){

    const [renk,renkGuncelle]=useState("");
    const [sayi,sayiGuncelle]=useState("");

    const kontrol=(olay)=>{
        olay.preventDefault();

        if(renk.length>5){
            alert("Girdiğiniz renk 5 karakterden az olmalıdır.");
            return;

        }

        if(sayi.length>1){
            alert("Girdiğiniz renk 1 karakteri geçmemelidir.");
            return;
        }

        alert("mesajınız gönderildi");
    }

    return(
        <>
        <h3>Ben HemenTekrarForms</h3>

        <form onSubmit={kontrol}>
            <div>
            <p>En Sevdiğin renk</p>
            <input onChange={(e)=>{renkGuncelle(e.target.value)}} type="text" />
            
            </div>
            <div>
            <p>En Sevdiğin sayı</p>
            <input onChange={(e)=>{sayiGuncelle(e.target.value)}} type="text" />
          
            </div>
            <button type="submit">Gönder</button>

        </form>

        </>
    )
}

export default HemenTekrarForms;