import React, { useState } from "react";
import  "./Header.css"
import SearchBar from '../Componentes/SearchBar'

function Header(){
const [Active,setActive]=useState();
return(
    
  <form >
      <button className="item2">Categorias</button>
      <button className="item3">Ofertas</button>
      <button className="item4">Crear tu Cuenta</button>
      <button className="item5">Ingresar</button>
 </form>
)
}

export default Header;