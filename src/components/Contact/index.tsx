"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Image from "next/image";

import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleFormChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("form data: ", formData);
    return;
  }

  return (
    <section className="bg-preto-500 text-white text-center xl:flex">
      <div className="flex flex-col items-center xl:flex-1 xl:mt-28">
        <h2 className="font-bold text-3xl/normal mt-20 mb-6">Fale Conosco.</h2>
        <div className="flex items-center mb-14 xl:-ml-10">
          <Image
            className="mr-4"
            width={18}
            height={18}
            src={instagram}
            alt="instagram link"
          />

          <Image
            className="mr-4"
            width={18}
            height={18}
            src={facebook}
            alt="facebook link"
          />

          <span className="text-xs">| REDES SOCIAS</span>
        </div>
      </div>
      <form
        className="mx-6 md:mx-28 text-opacity-30 text-start xl:flex-1 xl:mt-28 xl:mr-32"
        onSubmit={handleSubmit}
      >
        <label className="formLabel">
          <p>NOME</p>
          <input
            className="formInput"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            type="text"
            required
            placeholder="Daniel Maciel"
          />
        </label>
        <div className="xl:flex xl:gap-8">
          <label className="formLabel">
            <p>TELEFONE</p>
            <input
              className="formInput xl:max-w-40"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              type="tel"
              pattern="\(\d{2}\)\s*\d{5}-\d{4}"
              maxLength={15}
              placeholder="(99) 99999-9999"
            />
          </label>
          <label className="formLabel xl:w-full">
            <p>EMAIL</p>
            <input
              className="formInput"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              type="email"
              required
              placeholder="email@email.com"
            />
          </label>
        </div>
        <label className="formLabel">
          <p>ASSUNTO</p>
          <select
            className="formInput"
            name="subject"
            value={formData.subject}
            onChange={handleFormChange}
            id="subject"
          >
            <option defaultChecked value="assunto1">
              Assunto 1
            </option>
            <option value="assunto2">Assunto 2</option>
            <option value="assunto3">Assunto 3</option>
            <option value="outros">Outros</option>
          </select>
        </label>
        <label className="formLabel">
          <p>MENSAGEM</p>
          <textarea
            className="formInput"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            placeholder="Escreva aqui sua mensagem"
          />
        </label>
        <br />
        <div className="xl:w-full xl:flex xl:justify-end">
          <button
            className="rounded-2xl bg-verde-600 text-preto-500 h-10 w-full mb-20 mt-4 xl:w-[200px]"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
