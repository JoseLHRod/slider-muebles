import React from "react";
import styled from "styled-components";
import {ReactComponent as Equis} from './../img/x-mark.svg';
import {ReactComponent as Menu} from './../img/menu.svg';

const Navbar = () => {
    return ( 
        <Contenedor>
            <ul>
                <li><Title>Mater</Title></li>
                <li>
                    <Boton>                        
                        <Menu />
                    </Boton>
                    <Boton cerrar>
                        <Equis />                        
                    </Boton>
                </li>
            </ul>
        </Contenedor>
     );
}

const Contenedor = styled.div`
  
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
  float: left;
`;

const Boton = styled.button`  
  float: right;
  cursor: pointer;
  border-radius: 0;
  border: 1px solid #CCCCCC;

  path{
      filter: ${props => props.cerrar ? 'drop-shadow(-2px 0px 0px #FFFFFF)' : 'drop-shadow(2px 0px 0px #FFFFFF)'}
  }

  ${props => props.cerrar ? 'display:none' : 'display: block'}
`;
 
export default Navbar;