import { useState } from "react";

function Iletisim() {
  const [formalanlari, formalanlariGuncelle] = useState({});

  const topluGuncelleme = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    formalanlariGuncelle((values) => ({ ...values, [name]: value }));
  };

  const formGonder = (olay) => {
    olay.preventDefault(); //formun tarayıcı tarafından gönderim işlemi durduruluyor

    if(!formalanlari.isim||formalanlari.isim.length<2){//! tanımlı değilse anlamında gibi
        alert("isim uzunluğu 2'den küçük olamaz.");

        return;
    }
    if (formalanlari?.isim?.length > 10) {
      alert("İsim uzunluk 10'dan büyük olamaz.");
      return;
    }
    if (formalanlari?.soyisim?.length > 10) {
      alert("Soyisim Uzunluk 10'dan büyük olamaz.");
      return;
    }
    if (formalanlari?.telefon?.length > 10) {
      alert("telefon Uzunluk 10'dan büyük olamaz.");
      return;
    }
    alert("mesajınız gönderildi");
  };

  return (
    <>
      <form onSubmit={formGonder}>
        <div>
          <p>İsminiz: </p>
          <input required name="isim" onChange={topluGuncelleme} type="text" />
          {formalanlari?.isim?.length}
        </div>
        <div>
          <p>Soyisim: </p>
          <input name="soyisim" onChange={topluGuncelleme} type="text" />
          {formalanlari?.soyisim?.length}
        </div>
        <div>
          <p>Telefon: </p>
          <input name="telefon" onChange={topluGuncelleme} type="text" />
          {formalanlari?.telefon?.length}
        </div>
        <div>
          <p>Bizi nereden duydunuz?: </p>
          <select name="neredenduyuldu" onChange={topluGuncelleme}>
            <option value="Google">Google</option>
            <option value="Arkadaşlardan">Arkadaşlardan</option>
            <option value="instagram">instagram</option>
          </select>
        </div>
        <div>
          <p>Mesajınız: </p>
          <textarea name="mesaj" onChange={topluGuncelleme} type="text" />
          {formalanlari?.mesaj?.length}
        </div>

        <button type="submit">Gönder</button>
      </form>
    </>
  );
}

export default Iletisim;
