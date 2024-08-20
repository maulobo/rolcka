"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);
  const [responseOK, setResponseOK] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = "LNd6yqwOvwekCnNDX";

  const onSubmitSend = handleSubmit((data) => {
    emailjs
      .sendForm(serviceId, templateID, formRef.current, publicKey)
      .then((result) => {
        setResponseOK(true);
        reset();
        setTimeout(() => {
          setResponseOK(false);
        }, 8000);
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
      });
  });
  return (
    <form onSubmit={onSubmitSend} ref={formRef}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Contactanos</h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            placeholder="Ingresa tu nombre"
            {...register("name", {
              required: {
                value: true,
                message: "Debes ingresar tu nombre",
              },
              maxLength: {
                value: 20,
                message: "El nombre no debe ser tan extenso",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener como mínimo tres caracteres",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800"
            placeholder="tuemail@example.com"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "correo no válido",
              },
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800"
            placeholder="Escribinos por cualquier consulta"
            {...register("message", {
              required: {
                value: true,
                message: "Debes ingresar tu consulta",
              },
            })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 "
        >
          Enviar
        </button>
        {responseOK && (
          <p className="text-green-600 text-m mensaje">
            Mensaje enviado correctamente!
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
