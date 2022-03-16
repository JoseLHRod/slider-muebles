import React from "react";
import styled from "styled-components";
import {Slideshow, Slide, Texto} from "./components/Slideshow";
import Navbar from "./components/Navbar";
import Blackpage from "./components/Blackpage";
import './style.css';
import img1 from './img/mesa-negra.png';
import img2 from './img/silla-negra.png';

const App = () => {
  return (
    <main>
      
      <Navbar />
      
      <Slideshow>
      <Slide>
                    <Texto>
                        <h4>Jeaper</h4>
                        <h2>Dunes Anthrazite Black</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam eos quam atque dolorem nemo, error fugiat obcaecati, veniam sint similique alias eum nesciunt? Corporis porro tempore commodi quod odio.</p>
                        <Boton>Product Details</Boton>
                    </Texto>
                    <Imagen>
                        <Foto src={img1} />
                    </Imagen>
                </Slide>
                <Slide>
                    <Texto>
                        <h4>Michael</h4>
                        <h2>Shell Dining Chair</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam eos quam atque dolorem nemo, error fugiat obcaecati, veniam sint similique alias eum nesciunt? Corporis porro tempore commodi quod odio.</p>
                        <Boton>Product Details</Boton>
                    </Texto>
                    <Imagen>
                        <Foto src={img2} />
                    </Imagen>
                </Slide>
      </Slideshow>

      
      

    </main>
  );
}

const Imagen = styled.div`  
  float: right;
  width: 60%;
  text-align: center;
  padding: 40px;
`;

const Foto = styled.img`   
  width: 60%;
  height: auto;
  text-align: center;
`;

const Boton = styled.button`  
  border-radius: 0;
  color: #FFFFFF;
  border-color: #000000;
  background: #000000;
  padding: 10px 20px;
  margin-top: 30px;
`;

export default App;