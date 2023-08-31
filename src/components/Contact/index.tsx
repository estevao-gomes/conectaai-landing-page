'use client'

import Image from 'next/image'

import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import { FormEvent } from 'react'

export function Contact(){
    function handleSubmit(event: FormEvent){
        event.preventDefault()
        console.log('form submitted')
        return
    }

    return(
        <section>
            Fale Conosco.
            <div>
                <Image src={instagram} alt="instagram link"/>
                <Image src={facebook} alt="facebook link"/>
                <span>| REDES SOCIAS</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    NOME
                    <input type='text' required placeholder='Daniel Maciel'/>
                </label>
                <label>
                    TELEFONE
                    <input type='text' placeholder='(99) 99999-9999'/>
                </label>
                <label>
                    EMAIL
                    <input type='email' required placeholder='email@email.com'/>
                </label>
                <label>
                    ASSUNTO
                    <select id='subject'>
                        <option defaultChecked value="assunto1" >Assunto 1</option>
                        <option value="assunto2">Assunto 2</option>
                        <option value="assunto3">Assunto 3</option>
                        <option value="outros">Outros</option>
                    </select>
                </label>
                <label>
                    MENSAGEM
                    <textarea placeholder='Escreva aqui sua mensagem'/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}