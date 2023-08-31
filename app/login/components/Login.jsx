"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-stretch justify-center h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-200 p-8">
        <Image
          src="/colombia2.png"
          alt="Logo Formulario"
          className="w-72 mx-auto mb-20 mt-8"
          width={250}
          height={25}
        />
        <h1 className="flex font-bold font-work-sans mb-6 text-center">
          <span className="text-black text-6xl">Machine </span>
          <span className="text-green-600 text-6xl">Learning</span>
        </h1>
        <form className="mb-4">
          <div className="mb-8">
            <input
              type="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-5 px-52 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:font-work-sans sm:text-lg sm:leading-6 pl-6"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-5 px-52 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:font-work-sans sm:text-lg sm:leading-6 pl-6"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500  text-xl text-white font-work-sans font-w font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Ingresar Ahora
            </button>
          </div>
        </form>
        <p className="text-center font-work-sans">
          ¿No tienes una cuenta?{" "}
          <Link href="/registro" className="link-button text-green-500">
            Regístrate aquí
          </Link>
        </p>
      </div>
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(/background.jpg)` }}
      />
    </div>
  );
}
