'use client'
import React, { useEffect } from 'react';
import { Carousel } from 'flowbite';
import AcademicoComponente from './academico';
export default function CarruselComponente() {
  useEffect(() => { 
    const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')
    },
    {
        position: 4,
        el: document.getElementById('carousel-item-5')
    },
];

const options = {
    defaultPosition: 0,
    interval: 3000,
    
    indicators: {
        activeclassNamees: 'bg-white dark:bg-gray-800',
        inactiveclassNamees: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')
            },
            {
                position: 4,
                el: document.getElementById('carousel-indicator-5')
            },
        ]
    },
    
    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: ( ) => {
        console.log('previous slider item is shown');
    },
    onChange: ( ) => {
        console.log('new slider item has been shown');
    }
};
const carousel = new Carousel(items, options);
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});
}, []);
    return (
        <>
            <div className="bg-blue-300 py-10 px-8 text-white justify-between">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2 font-work-sans">Seccion Academica</h2>
                    <h1 className="text-4xl md:text-6xl font-bold font-work-sans">!Aprende Con Los Mejores Recursos Educativos¡</h1>
                </div>
                <div id="animation-carousel" className="relative mt-12 mx-auto max-w-7xl" data-carousel="static">
                <div className="overflow-hidden relative h-[30em] rounded-lg sm:h-64 xl:h-80 2xl:h-96 mx-auto max-w-5xl">
                  <div id="carousel-item-1" className="duration-200 ease-linear" data-carousel-item>
                    <AcademicoComponente titulo={'Introducción a la agricultura de precisión:'} descripcion={"Explora cómo la tecnología y el análisis de datos pueden mejorar la eficiencia y la productividad en la agricultura."}
                    imagen={'introduccion.png'}/>
                  </div>
           
                  <div id="carousel-item-2" className="nduration-200 ease-linear" data-carousel-item>
                    <AcademicoComponente titulo={"Importancia de las variables meteorológicas en la agricultura:"} descripcion={"Descubre cómo las variables como la temperatura, la humedad y la velocidad del viento afectan el crecimiento y desarrollo de los cultivos."}
                    imagen={'Agriculture.png'}/>
                  </div>
           
                  <div id="carousel-item-3" className="duration-200 ease-linear" data-carousel-item>
                    <AcademicoComponente titulo={"Interpretación de los pronósticos y predicciones:"} descripcion={"Aprende a leer e interpretar los datos y las predicciones proporcionados por nuestro modelo de Machine Learning para tomar decisiones informadas."}
                    imagen={'pronosticosC.png'}/>
                  </div>

                  <div id="carousel-item-4" className="duration-200 ease-linear" data-carousel-item>
                    <AcademicoComponente titulo={"Estrategias de mitigación de heladas:"} descripcion={"Explora diferentes técnicas y prácticas agrícolas que pueden ayudar a prevenir o minimizar los efectos adversos de las heladas en los cultivos."}
                    imagen={'estrategias.png'}/>
                  </div>

                  <div id="carousel-item-5" className="duration-200 ease-linear" data-carousel-item>
                    <AcademicoComponente titulo={"Uso de la plataforma:"} descripcion={"Aprende cómo utilizar nuestra plataforma de manera eficiente para acceder a las predicciones, personalizar tu perfil y aprovechar al máximo las funcionalidades disponibles."}
                    imagen={'usoplataforma.png'}/>
                  </div>
                </div>
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                  <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                  <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                  <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                  <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                  <button id="carousel-indicator-5" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button id="data-carousel-prev" type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                  <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  <span className="hidden">Anterior</span>
                  </span>
                </button>
                <button id="data-carousel-next" type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                  <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  <span className="hidden">Siguiente</span>
                  </span>
                </button>
                </div>
                <div></div>
            </div>
        </>
    );
}