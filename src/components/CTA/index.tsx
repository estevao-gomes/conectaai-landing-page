import Image from "next/image";

import lataGuarana from "@/assets/lataGuarana.png";

export function CTA() {
  return (
    <section className="overflow-hidden">
      <div className="bg-white w-full h-[50px]"></div>
      <div className="bg-verde-600 flex md:flex-row flex-col items-center md:justify-evenly md:max-h-[290px]">
        <div>
          <Image
            className="mt-12 max-w-[92px] max-h-[162px] hidden md:block blur-[2px] rotate-[15deg]"
            src={lataGuarana}
            alt="Imagem de uma lata de guaraná."
          />
          <Image
            className="-mt-6 max-w-[200px] max-h-[300px] hidden md:block -rotate-[15deg]"
            src={lataGuarana}
            alt="Imagem de uma lata de guaraná."
          />
        </div>
        <div className="flex flex-col mb-16 items-center md:mt-20">
          <Image
            className="-mt-24 max-w-[200px] max-h-[300px] md:hidden"
            src={lataGuarana}
            alt="Imagem de uma lata de guaraná."
          />
          <h2 className="font-serif text-2xl font-extrabold mb-6">
            Quer experimentar?
          </h2>
          <a className="w-48 h-14" href="#">
            <button className="bg-[#1B1F1C] w-48 h-14 rounded-3xl">
              <span className="text-white font-inter text-sm font-bold">
                Aqui um CTA
              </span>
            </button>
          </a>
        </div>
        <Image
          className="max-w-[273px] max-h-[480px] md:block hidden rotate-[15deg]"
          src={lataGuarana}
          alt="Imagem de uma lata de guaraná."
        />
      </div>
    </section>
  );
}
