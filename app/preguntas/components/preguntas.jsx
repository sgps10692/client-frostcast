"use client";
import { Accordion } from "flowbite";
import Link from "next/link";
import React, { useEffect } from "react";
export default function PreguntasFrecuentesComponente() {
  useEffect(() => {
    const accordionItems = [
      {
        id: "accordion-flush-heading-1",
        triggerEl: document.querySelector("#accordion-flush-heading-1"),
        targetEl: document.querySelector("#accordion-flush-body-1"),
        active: false,
      },
      {
        id: "accordion-flush-heading-2",
        triggerEl: document.querySelector("#accordion-flush-heading-2"),
        targetEl: document.querySelector("#accordion-flush-body-2"),
        active: false,
      },
      {
        id: "accordion-flush-heading-3",
        triggerEl: document.querySelector("#accordion-flush-heading-3"),
        targetEl: document.querySelector("#accordion-flush-body-3"),
        active: false,
      },
      {
        id: "accordion-flush-heading-4",
        triggerEl: document.querySelector("#accordion-flush-heading-4"),
        targetEl: document.querySelector("#accordion-flush-body-4"),
        active: false,
      },
      {
        id: "accordion-flush-heading-5",
        triggerEl: document.querySelector("#accordion-flush-heading-5"),
        targetEl: document.querySelector("#accordion-flush-body-5"),
        active: false,
      },
    ];

    // options with default values
    const options = {
      alwaysOpen: true,
      activeClasses: "bg-gray dark:bg-gray-800 text-gray-900 dark:text-white",
      inactiveClasses: "text-gray-500 dark:text-gray-400",
      onOpen: (item) => {
        console.log("accordion item has been shown");
        console.log(item);
      },
      onClose: (item) => {
        console.log("accordion item has been hidden");
        console.log(item);
      },
      onToggle: (item) => {
        console.log("accordion item has been toggled");
        console.log(item);
      },
    };
    const accordion = new Accordion(accordionItems, options);
  }, []);

  return (
    <>
      <div className="relative flex flex-col">
        <div
          className="absolute inset-0 bg-repeat"
          style={{ backgroundImage: `url(/particulas.png)` }}
        ></div>
        <div className="relative">
          <div className="mx-4 md:mx-40 text-center m-8">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-2 font-work-sans">
              Seccion De Preguntas
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-black font-work-sans">
              Preguntas Frecuentes De Nuestros Usuarios
            </h1>
            <p className="text-black text-base md:text-lg mt-4">
              En esta Seccion podrás encontrar las preguntas mas frecuentes de
              nuestros usuarios <br></br>y dando la mejor respuesta a tu duda
            </p>
            <div
              id="accordion-flush"
              data-accordion="open"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex font-work-sans font-semibold items-center justify-between w-full py-3 md:py-5 text-lg md:text-2xl text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>
                    1. ¿Cómo funciona el modelo de Machine Learning para
                    predecir heladas?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 md:w-4 md:h-4 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className="hidden"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="py-3 md:py-5 border-b font-work-sans text-base md:text-lg text-left border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Nuestro modelo utiliza algoritmos de Machine Learning
                    entrenados con TensorFlow y Keras para analizar datos
                    meteorológicos históricos y predecir la probabilidad de
                    ocurrencia de heladas en función de diferentes variables.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Puedes obtener más información sobre la metodología en
                    nuestra sección de{" "}
                    <Link
                      href="/"
                      className="text-blue-500 dark:text-blue-500 hover:underline"
                    >
                      Cómo funciona
                    </Link>{" "}
                    Y aprender un poco mas del modelo
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex font-work-sans font-semibold items-center justify-between w-full py-3 md:py-5 text-lg md:text-2xl text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>
                    2. ¿Qué variables meteorológicas se tienen en cuenta en las
                    predicciones?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 md:w-4 md:h-4 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-3 md:py-5 border-b font-work-sans text-base md:text-lg text-left border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Nuestro modelo tiene en cuenta variables como la
                    temperatura, la humedad relativa y la velocidad del viento,
                    entre otras.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Estas variables son clave para determinar las condiciones
                    propicias para la formación de heladas.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex font-work-sans font-semibold items-center justify-between w-full py-3 md:py-5 text-lg md:text-2xl text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>
                    3 ¿Cómo puedo acceder a las predicciones para mi ubicación
                    específica?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 md:w-4 md:h-4 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="py-3 md:py-5 border-b font-work-sans text-base md:text-lg text-left border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    En nuestra plataforma, podrás seleccionar tu ubicación y
                    obtener las predicciones personalizadas para esa zona.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Solo necesitas explorar las opciones disponibles en el
                    dashboard.{" "}
                  </p>
                  <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="/dashboard"
                        rel="nofollow"
                        className="text-blue-500 dark:text-blue-500 hover:underline"
                      >
                        ¡Para Ir A Ubicaciones!
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 id="accordion-flush-heading-4">
                <button
                  type="button"
                  className="flex font-work-sans font-semibold items-center justify-between w-full py-3 md:py-5 text-lg md:text-2xl text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-4"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-4"
                >
                  <span>
                    4. ¿Cuál es la precisión de las predicciones de heladas?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 md:w-4 md:h-4 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-4"
                className="hidden"
                aria-labelledby="accordion-flush-heading-4"
              >
                <div className="py-3 md:py-5 border-b font-work-sans text-base md:text-lg text-left border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    La precisión de las predicciones puede variar según las
                    condiciones meteorológicas y la calidad de los datos
                    disponibles.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sin embargo, nuestro modelo ha sido entrenado con un amplio
                    conjunto de datos y ha demostrado una alta precisión en la
                    predicción de heladas en estudios previos.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-5">
                <button
                  type="button"
                  className="flex font-work-sans font-semibold items-center justify-between w-full py-3 md:py-5 text-lg md:text-2xl text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-5"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-5"
                >
                  <span>
                    5. ¿Cómo puedo utilizar las predicciones en mi trabajo
                    agrícola?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 md:w-4 md:h-4 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-5"
                className="hidden"
                aria-labelledby="accordion-flush-heading-5"
              >
                <div className="py-3 md:py-5 border-b font-work-sans text-base md:text-lg text-left border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Nuestras predicciones pueden ayudarte a tomar decisiones en
                    cuanto a la protección de tus cultivos contra las heladas.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Puedes utilizarlas para planificar estrategias de
                    mitigación, ajustar el riego o tomar medidas preventivas en
                    función de las condiciones meteorológicas pronosticadas.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Chequea nuestra guia/pagina{" "}
                    <Link
                      href="/que-hacer-en-caso-de-heladas"
                      className="text-blue-500 dark:text-blue-500 hover:underline"
                    >
                      ¿Que Hacer en Caso De Heladas?
                    </Link>{" "}
                    y podras aprender un poco para tener un buen cuidado de tus
                    cultivos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
