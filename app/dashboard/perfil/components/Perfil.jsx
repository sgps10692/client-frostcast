"use client";
import { HiCamera } from "react-icons/hi2";
import { IoMdCreate } from "react-icons/io";
import React, { useState } from "react";
import Image from "next/image";

export default function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingC, setIsEditingC] = useState(false);
  return (
    <>
      <div className="bg-gray-200 rounded-lg p-4 m-8">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-semibold">Scorpion</h2>
            <div>
              <p className="text-black text-xl font-semibold">Descripción:</p>
              <p className="text-lg text-gray-500">
                Hanzo Hasashi fue una vez miembro del clan ninja japonés Shirai
                Ryu. Dado el nombre de Scorpion por su habilidad de lucha
                cegadoramente rápida y mortal, su vida fue bendecida con un
                glorioso kombat en nombre de su Gran Maestro.
              </p>
            </div>
          </div>
          <div className="relative flex-grow-0 mr-8">
            <Image
              src="/scorpion-profile.jpg"
              alt="Foto de perfil"
              className="w-auto h-auto rounded-full border-8 border-green-500"
              width={300}
              height={300}
            />
            <div className="absolute bottom-0 right-4 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full border-2 border-green-500">
              <HiCamera size={30} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-8 p-2">
        <h1 className="text-4xl font-bold font-work-sans">Editar Perfil</h1>
        <h1 className="text-2xl font-work-sans">Ultimo Cambio 1 Agosto</h1>
      </div>
      <div className="flex mt-8 m-8">
        <div className="flex flex-col w-1/2">
          <div className="rounded-lg p-4">
            <div className="flex space-x-2">
              <h3 className="text-2xl font-bold">Personal </h3>
              <IoMdCreate
                onClick={() => setIsEditing(!isEditing)}
                size={25}
                className="cursor-pointer"
              />
            </div>
            <div className="flex mt-4">
              <div className="mr-4 w-1/2">
                <label className="block mb-2 text-lg font-bold">Nombre</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                    isEditing ? "" : "pointer-events-none"
                  }`}
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-lg font-bold">Apellido</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                    isEditing ? "" : "pointer-events-none"
                  }`}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-lg font-bold">
                Ubicacion Pronosticos
              </label>
              <select
                className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                  isEditing ? "" : "pointer-events-none"
                }`}
              >
                <option value="">Seleccionar</option>
                <option value="option1">Opción 1</option>
                <option value="option2">Opción 2</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-lg font-bold">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                  isEditing ? "" : "pointer-events-none"
                }`}
              />
            </div>
            <button className="bg-green-600 hover:bg-green-500  text-xl text-white font-work-sans font-w font-bold py-3 px-8 mt-4 rounded focus:outline-none focus:shadow-outline">
              Guardar
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 ml-8">
          <div className="rounded-lg p-4">
            <div className="flex space-x-2">
              <h3 className="text-2xl font-bold">Contacto </h3>
              <IoMdCreate
                onClick={() => setIsEditingC(!isEditingC)}
                size={25}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-4">
              <div className="">
                <label className="block mb-2 text-lg font-bold">
                  Correo Electronico
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                    isEditingC ? "" : "pointer-events-none"
                  }`}
                  placeholder="joseph.lopez2@misena.edu.co"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-lg font-bold">
                Numero De Celular
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                  isEditingC ? "" : "pointer-events-none"
                }`}
                placeholder="3112625555"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-lg font-bold">Ciudad</label>
              <select
                className={`w-full px-4 py-3 rounded-lg border-2 border-gray-400 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500 ${
                  isEditingC ? "" : "pointer-events-none"
                }`}
              >
                <option value="">Seleccionar</option>
                <option value="option1">Opción 1</option>
                <option value="option2">Opción 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
