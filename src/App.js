import { useEffect, useRef } from "react";


function App() {
  const eleman1=useRef();

  useEffect(()=>{
    eleman1.current.addEventListener("click", ()=>{
      alert("merhaba");
    })
    console.log( eleman1.current.innerHTML);
  }); 
 
  
 

  return (
    <p ref={eleman1}>Merhaba</p>
  );
}

export default App;
