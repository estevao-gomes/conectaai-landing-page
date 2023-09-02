import Image from "next/image";

import marcaConecta from "@/assets/marca-conecta.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import lataGuarana from "@/assets/lataGuarana.png";

import { Button } from "../Button";

export function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover">
      <nav className="flex items-center justify-between">
        <Image src={marcaConecta} alt="Marca conecta" width={134} height={51} />
        <div className="flex mr-2">
          <Image src={facebook} alt="Facebook logo" width={18} height={18} />
          <Image
            className="ml-2"
            src={instagram}
            alt="Instagram logo"
            width={18}
            height={18}
          />
        </div>
      </nav>
      <div className="flex flex-col md:flex-row-reverse md:justify-evenly items-center w-full">
        <Image
          className="w-[13.25rem] h-[23.25rem] md:w-[18.5rem] md:h-[32.625rem]"
          src={lataGuarana}
          alt="lataGuarana"
        />
        <div className="flex flex-col md:items-start">
          <h1 className="text-white text-center md:text-start font-bold font-serif text-4xl leading-10 mt-4">
            Aqui um título de <br />
            duas linhas
          </h1>
          <div className="w-[calc(100%-1.5rem)] md:w-[188px] h-[3.5rem] mx-2 mt-[4.5rem] md:mt-9 mb-24">
            <Button contentText="Aqui um CTA" link="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
