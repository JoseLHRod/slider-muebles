import React, {useRef, useEffect, useCallback} from "react";
import styled from "styled-components";

const Slideshow = ({
    children, 
    controles = true, 
    autoplay = false, 
    velocidad = '1000', 
    intervalo = '3000'
}) => {

    const slider = useRef(null);
    const intervaloSlider = useRef(null);

    const siguiente = useCallback(() => {
        // Comprobamos que el slider tenga elementos
        if(slider.current.children.length > 0){
            // Obtenemos el primer elemento del slider
            const primerElemento = slider.current.children[0];

            //Establecemos la transición para el slider
            slider.current.style.transition = `${velocidad}ms ease-out all`;

            // Calculamos la longitud del slider
            const longitudSlider = slider.current.children[0].offsetHeight;

            //Movemos el slider
            slider.current.style.transform = `translateY(-${longitudSlider}px)`;

            const transicion = () => {
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateY(0)`;

                // Tomamos el primer elemento y lo mandamos al final
                slider.current.appendChild(primerElemento);

                slider.current.removeEventListener('transitionend', transicion);
            }

            // Esperamos a que la primera transicion termine
            slider.current.addEventListener('transitionend', transicion);
            
        }
    }, [velocidad]);
    
    const anterior = () => {
        if(slider.current.children.length > 0){
            const index = slider.current.children.length - 1;
            const ultimoElemento = slider.current.children[index];
            slider.current.insertBefore(ultimoElemento, slider.current.firstChild);

            slider.current.style.transition = 'none';

            const longitudSlider = slider.current.children[0].offsetHeight;
            slider.current.style.transform = `translateY(-${longitudSlider}px)`;

            setTimeout(() =>{
                slider.current.style.transition = `${velocidad}ms ease-out all`;
                slider.current.style.transform = `translateY(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        if(autoplay){
            intervaloSlider.current = setInterval(() => {
                siguiente();
            }, intervalo);
    
            // Eliminamos los intervalos
            slider.current.addEventListener('mouseenter', () => {
                clearInterval(intervaloSlider.current);
            });
    
            //Volvemos a colocar el intervalo de tiempo
            slider.current.addEventListener('mouseleave', () => {
                intervaloSlider.current = setInterval(() => {
                    siguiente();
                }, intervalo);
            }); 
        }        
    }, [autoplay, intervalo, siguiente]);

    return ( 
        <Contenedor>
            <ContenedorSlides ref={slider}>
                {children}                
            </ContenedorSlides>
            {controles && <Controles>
                <Item onClick={anterior}>
                    <p>01</p>
                    <p>Dunes Anthrazite Black</p>
                </Item>            
                <Item onClick={siguiente}>
                    <p>02</p>
                    <p>Shell Dining Chair</p>
                </Item>
            </Controles>}
        </Contenedor>
     );
}

const Contenedor = styled.div`
  position: relative;
`;

const ContenedorSlides = styled.div`
  display: block;
  flex-wrap: nowrap;
  max-height: 474px;
  overflow: hidden;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 9;
  position: relative;
  height: 474px;

  @media screen and (max-width: 700px){

  }
`;

const Texto = styled.div`  
  float: left;
  width: 40%;
  padding: 20px;
`;

const Controles = styled.div`  
  width: 100%;
  height: auto;
  display: inline-block;
  pointer-events: none;
`;

const Item = styled.button` 
  width: auto;
  padding: 15px 0;
  border: none;
  border-top: 2px solid #000000;
  text-align: left;
  pointer-events: all;
  margin-right: 10px;
  cursor: pointer;
`;

export {Slideshow, Slide, Texto};