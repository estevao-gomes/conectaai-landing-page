import Image from "next/image";
import marcaConecta from "@/assets/marca-conecta.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import lataGuarana from "@/assets/lataGuarana.png"

import { Button } from "../Button";

export function Hero() {
  return (
    <section className="bg-hero-pattern">
      <nav className="flex items-center justify-between">
        <Image src={marcaConecta} alt="Marca conecta" width={134} height={51} />
        <div className="flex mr-2">
            <Image src={facebook} alt="Facebook logo" width={18} height={18} />
            <Image className="ml-2" src={instagram} alt="Instagram logo" width={18} height={18} />
        </div>
      </nav>
      <div className="flex flex-col items-center w-full">
        <Image className="w-[13.25rem] h-[23.25rem]" src={lataGuarana} alt="lataGuarana"/>
        <h1 className="text-white text-center font-bold font-serif text-4xl leading-10 mt-4">Aqui um título de <br/>duas linhas</h1>
        <div className="w-[calc(100%-1.5rem)] h-[3.5rem] mx-2 mt-[4.5rem] mb-24"><Button /></div>
      </div>
    </section>
  );
}
