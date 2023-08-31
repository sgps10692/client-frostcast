"use client";
import React, { useState } from "react";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleDismiss = () => {
    setShowNotification(false);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {showNotification && (
        <div className="bg-white rounded-md flex">
          <div className="w-1/2 m-0">
            <img
              src="/notification.png"
              alt="Imagen de notificación"
              className="h-full"
            />
          </div>
          <div className="w-5/6 p-4 flex flex-col justify-between">
            <h1 className="text-green-600 text-4xl font-work-sans font-bold whitespace-nowrap">
              ¡Bienvenido Gustavo!
            </h1>
            <p className="text-black text-lg mb-2">
              Bienvenido al dashboard, aquí podrás <br />
              consultar las variables meteorológicas, <br />
              predicciones, y mucho más!
            </p>
            <button
              onClick={handleDismiss}
              className="bg-green-600 hover:bg-green-500  text-xl text-white font-work-sans ml-auto font-w font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline "
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
