"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Registrado con exito");

    window.location.href = "/";
  };
  return (
    <div className="flex items-stretch justify-center h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(/background.jpg)` }}
      />

      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-200 p-8">
        <Link href="/">
          <Image
            src="/colombia2.png"
            alt="Logo Formulario"
            className="w-72 mx-auto mb-20 mt-8"
            width={250}
            height={25}
          />
        </Link>
        <h1 className="flex font-bold font-work-sans mb-6 text-center">
          <span className="text-black text-6xl">Frost </span>
          <span className="text-green-600 text-6xl">Cast</span>
        </h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-8">
            <input
              type="text"
              id="fullName"
              className="block w-full rounded-md border-0 py-5 px-52 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:font-work-sans sm:text-lg sm:leading-6 pl-6"
              placeholder="Nombre Completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-5 px-52 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:font-work-sans sm:text-lg sm:leading-6 pl-6"
              placeholder="Correo Electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500  text-xl text-white font-work-sans font-w font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              ¡Registrarse Ahora!
            </button>
          </div>
        </form>
        <div className="text-center mb-8 bg-green-200 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¡Regístrate para obtener las alertas de las últimas predicciones en
            tu correo!
          </h2>
        </div>
      </div>
    </div>
  );
}
