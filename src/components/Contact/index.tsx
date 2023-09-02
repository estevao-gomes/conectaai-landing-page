"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Image from "next/image";

import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";
import conectaLogo from "@/assets/marca-conecta.png";

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
    console.log("form submitted");
    return;
  }

  return (
    <section className="bg-preto-500 text-white">
      <h2>Fale Conosco.</h2>
      <div>
        <Image src={instagram} alt="instagram link" />
        <Image src={facebook} alt="facebook link" />
        <span>| REDES SOCIAS</span>
      </div>
      <form className="mx-6 text-opacity-30" onSubmit={handleSubmit}>
        <label>
          <p className="formLabel">NOME</p>
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
        <label>
          <p className="formLabel">TELEFONE</p>
          <input
            className="formInput"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            type="text"
            placeholder="(99) 99999-9999"
          />
        </label>
        <label>
          <p className="formLabel">EMAIL</p>
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
        <label>
          <p className="formLabel">ASSUNTO</p>
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
        <label>
          <p className="formLabel">MENSAGEM</p>
          <textarea
            className="formInput"
            name="message"
            value={formData.message}
            onChange={handleFormChange}
            placeholder="Escreva aqui sua mensagem"
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <p>Todos os direitos reservados © 2020 Conecta</p>
      <p>
        Projetado por <Image src={conectaLogo} alt="Conecta logo" />
      </p>
    </section>
  );
}
